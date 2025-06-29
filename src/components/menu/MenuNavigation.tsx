"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const menuCategories = [
  { id: "skin-diagnosis", name: "肌診断", icon: "🔍", anchor: "#skin-diagnosis" },
  { id: "body-slimming", name: "痩身", icon: "💪", anchor: "#body-slimming" },
  { id: "lift-up", name: "リフトアップ", icon: "✨", anchor: "#lift-up" },
  { id: "facial-beauty", name: "フェイシャル・美肌", icon: "🌸", anchor: "#facial-beauty" },
  { id: "hyperhidrosis", name: "多汗症", icon: "💧", anchor: "#hyperhidrosis" },
  // { id: "artmake", name: "アートメイク", icon: "🎨", anchor: "#artmake" },
  { id: "aga", name: "AGA", icon: "⚡", anchor: "#aga" },
  { id: "hair-removal", name: "脱毛", icon: "⚡", anchor: "#hair-removal" },
  { id: "iv-therapy", name: "点滴", icon: "💉", anchor: "#iv-therapy" },
  { id: "medication", name: "薬剤", icon: "💊", anchor: "#medication" },
  { id: "options", name: "オプション", icon: "⚙️", anchor: "#options" },
  { id: "products", name: "物販", icon: "🛍️", anchor: "#products" }
];

export default function MenuNavigation() {
  const [activeCategory, setActiveCategory] = useState("skin-diagnosis");

  const handleCategoryClick = (categoryId: string, anchor: string) => {
    setActiveCategory(categoryId);
    const element = document.querySelector(anchor) as HTMLElement;
    if (element) {
      // getBoundingClientRectを使用してより正確な位置を計算
      const elementRect = element.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      
      // 固定要素の高さを考慮したオフセット（より大きく設定）
      const fixedOffset = 250; // ヘッダー + ナビゲーション + 余白
      
      const targetPosition = elementRect.top + currentScrollY - fixedOffset;
      
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 bg-white lg:sticky lg:top-16 z-40 border-b border-[#dacacf]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center space-x-1">
            {menuCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(category.id, category.anchor)}
                className={`px-4 py-3 rounded-full font-shippori text-sm ${
                  activeCategory === category.id
                    ? 'bg-[#caa9af] text-white shadow-lg'
                    : 'bg-[#faf3ef] text-[#8a6d62] hover:bg-[#caa9af]/20 hover:text-[#54585f]'
                }`}
              >
                {/* <span className="mr-2">{category.icon}</span> */}
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {menuCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryClick(category.id, category.anchor)}
                className={`p-3 rounded-xl font-shippori text-xs ${
                  activeCategory === category.id
                    ? 'bg-[#caa9af] text-white shadow-lg'
                    : 'bg-[#faf3ef] text-[#8a6d62] hover:bg-[#caa9af]/20'
                }`}
              >
                {/* <div className="text-lg mb-1">{category.icon}</div> */}
                <div className="leading-tight">{category.name}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-[#8a6d62] font-shippori text-sm">
            気になるカテゴリーをクリックして詳細をご覧ください
          </p>
        </motion.div>
      </div>
    </section>
  );
}
