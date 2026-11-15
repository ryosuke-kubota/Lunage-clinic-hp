"use client";

import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { concernsData, getOrderedCategories, concernsCategoryOrder } from "../data/menuData";
import SectionHeading from "./SectionHeading";

// メニューアイテムを共通データから生成（順序を制御）
const orderedCategories = getOrderedCategories(concernsData, concernsCategoryOrder);
const menuItems = orderedCategories.map(([key, category]) => ({
  name: category.title,
  description: category.description,
  count: category.treatments.length,
  href: `/menu#${key}`,
}));

export default function MenuSection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.04 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="menu">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="施術・料金案内"
          title="Menu"
          lead="気になるお悩みを選ぶと、施術と料金をご覧いただけます"
        />

        <motion.ul
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-x-5 gap-y-1 md:gap-x-12 lg:grid-cols-3"
        >
          {menuItems.map((item) => (
            <motion.li key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                className="group block border-b border-lunage-line py-4 md:py-5 transition-colors hover:border-lunage-gold"
                onClick={() => {
                  // セッションストレージに情報を保存
                  const hash = item.href.split("#")[1];
                  if (hash) {
                    sessionStorage.setItem("openAccordion", hash);
                  }
                }}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-shippori text-[15px] md:text-base font-medium leading-snug text-lunage-ink transition-colors group-hover:text-lunage-goldDark">
                    {item.name}
                  </span>
                  <span className="shrink-0 text-lunage-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
                <p className="mt-1.5 line-clamp-2 font-shippori text-[11px] md:text-xs leading-relaxed text-lunage-goldDark/80">
                  {item.description}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full bg-lunage-ink px-10 py-3.5 font-shippori text-sm tracking-[0.1em] text-white transition-colors hover:bg-lunage-goldDark"
          >
            すべてのメニュー・料金を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
