"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { easeOut } from "framer-motion";
import { concernsData } from "../data/menuData";

// メニューアイテムを共通データから生成
const menuItems = Object.entries(concernsData).map(([key, category]) => ({
  name: category.title,
  href: `/menu#${key}`
}));

export default function MenuSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <section className="py-20 bg-white relative" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-1">
            <span className="text-[#DDCDB9] font-shippori text-sm tracking-wide">施術・料金案内</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-normal text-[#54585f] mb-8">
            Menu
          </h2>
        </motion.div>

        {/* Simple Menu List */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-16">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
              >
                <Link
                  href={item.href}
                  className="block group"
                  onClick={() => {
                    // セッションストレージに情報を保存
                    const hash = item.href.split('#')[1];
                    if (hash) {
                      sessionStorage.setItem('openAccordion', hash);
                    }
                  }}
                >
                  <div className="bg-[#faf3ef] hover:bg-white border border-transparent hover:border-[#DDCDB9]/20 rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-shippori text-[#54585f] group-hover:text-[#DDCDB9] transition-colors">
                        {item.name}
                      </span>
                      <div className="text-[#DDCDB9] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <Link
              href="/menu"
              className="inline-block bg-[#c2ac94] hover:bg-[#8a6d62] text-white font-shippori px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              View more
            </Link>
          </motion.div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#DDCDB9]/5 to-[#d6c6b5]/5 blur-xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#c2ac94]/5 to-[#dacacf]/5 blur-xl"
          />
        </div>
      </div>
    </section>
  );
}
