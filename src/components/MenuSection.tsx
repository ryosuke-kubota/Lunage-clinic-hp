"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { easeOut } from "framer-motion";
import { concernsData, getOrderedCategories, concernsCategoryOrder } from "../data/menuData";

// メニューアイテムを共通データから生成（順序を制御）
const orderedCategories = getOrderedCategories(concernsData, concernsCategoryOrder);
const menuItems = orderedCategories.map(([key, category]) => ({
  name: category.title,
  description: category.description,
  count: category.treatments.length,
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
    <section className="py-14 md:py-20 bg-white relative" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center mb-1">
            <span className="text-[#DDCDB9] font-shippori text-sm tracking-wide">施術・料金案内</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-normal text-[#54585f] mb-3">
            Menu
          </h2>
          <p className="text-sm text-[#8a6d62] font-shippori">気になるお悩みを選ぶと、施術と料金をご覧いただけます</p>
        </motion.div>

        {/* Simple Menu List */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
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
                  <div className="h-full bg-[#faf3ef] hover:bg-white border border-transparent hover:border-[#DDCDB9]/40 rounded-xl p-3 sm:p-5 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-shippori font-medium text-[#54585f] text-sm sm:text-base leading-snug group-hover:text-[#8a6d62] transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[#c2ac94] text-sm shrink-0">→</span>
                    </div>
                    <p className="mt-2 font-shippori text-[11px] sm:text-xs leading-relaxed text-[#8a6d62] line-clamp-2">
                      {item.description}
                    </p>
                    {item.count > 1 && (
                      <p className="mt-2 font-shippori text-[11px] text-[#c2ac94]">{item.count}メニュー</p>
                    )}
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
              className="inline-block bg-[#c2ac94] hover:bg-[#8a6d62] text-white font-shippori px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              すべてのメニュー・料金を見る
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
