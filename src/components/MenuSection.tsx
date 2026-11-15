"use client";

import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { concernsData, getOrderedCategories, concernsCategoryOrder } from "../data/menuData";
import SectionHeading from "./SectionHeading";

// お悩みではなく「メニュー名」で探すカテゴリは、下のグループにまとめる
const OTHER_KEYS = ["dental", "skin-diagnosis", "tenteki", "others"];

// メニューアイテムを共通データから生成（順序を制御）
const orderedCategories = getOrderedCategories(concernsData, concernsCategoryOrder);
const allItems = orderedCategories.map(([key, category]) => ({
  key,
  name: category.title,
  description: category.description,
  href: `/menu#${key}`,
}));
const concernItems = allItems.filter((i) => !OTHER_KEYS.includes(i.key));
const otherItems = allItems.filter((i) => OTHER_KEYS.includes(i.key));

type Item = (typeof allItems)[number];

function MenuLinks({ items, animate }: { items: Item[]; animate: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.04 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      className="grid grid-cols-2 gap-x-5 md:gap-x-12 lg:grid-cols-3"
    >
      {items.map((item) => (
        <motion.li key={item.key} variants={itemVariants}>
          <Link
            href={item.href}
            className="group block border-b border-lunage-line py-5 transition-colors hover:border-lunage-gold"
            onClick={() => {
              // セッションストレージに情報を保存
              sessionStorage.setItem("openAccordion", item.key);
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-shippori text-base md:text-[17px] font-medium leading-snug text-lunage-ink transition-colors group-hover:text-lunage-goldDark">
                {item.name}
              </span>
              <span className="shrink-0 text-lunage-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
            <p className="mt-1.5 line-clamp-2 font-shippori text-[13px] md:text-sm leading-relaxed text-lunage-ink/80">
              {item.description}
            </p>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function MenuSection() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="py-16 md:py-24 bg-white" id="menu">
      <div className="max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>
        <SectionHeading
          label="施術・料金案内"
          title="Menu"
          lead="気になるお悩みを選ぶと、施術と料金をご覧いただけます"
        />

        <h3 className="mb-1 font-shippori text-lg font-medium text-lunage-ink">お悩みから探す</h3>
        <MenuLinks items={concernItems} animate={inView} />

        <h3 className="mb-1 mt-12 font-shippori text-lg font-medium text-lunage-ink">ほかのメニュー</h3>
        <MenuLinks items={otherItems} animate={inView} />

        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full bg-lunage-ink px-10 py-4 font-shippori text-[15px] tracking-[0.1em] text-white transition-colors hover:bg-lunage-goldDark"
          >
            すべてのメニュー・料金を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
