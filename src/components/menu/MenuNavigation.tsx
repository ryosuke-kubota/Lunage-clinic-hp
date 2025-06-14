"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const menuCategories = [
  { id: "double-eyelid", name: "二重・目元", icon: "👁️", anchor: "#double-eyelid" },
  { id: "face-shaping", name: "輪郭形成", icon: "✨", anchor: "#face-shaping" },
  { id: "body-shaping", name: "ボディケア", icon: "💪", anchor: "#body-shaping" },
  { id: "skin-care", name: "スキンケア", icon: "🌸", anchor: "#skin-care" },
  { id: "injections", name: "注射・点滴", icon: "💉", anchor: "#injections" },
  { id: "threads", name: "糸リフト", icon: "🧵", anchor: "#threads" },
  { id: "supplements", name: "内服・サプリ", icon: "💊", anchor: "#supplements" },
  { id: "options", name: "オプション", icon: "⚙️", anchor: "#options" }
];

export default function MenuNavigation() {
  const [activeCategory, setActiveCategory] = useState("double-eyelid");

  const handleCategoryClick = (categoryId: string, anchor: string) => {
    setActiveCategory(categoryId);
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-8 bg-white sticky top-16 z-40 border-b border-[#dacacf]/20">
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
                className={`px-4 py-3 rounded-full font-shippori text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#caa9af] text-white shadow-lg'
                    : 'bg-[#faf3ef] text-[#8a6d62] hover:bg-[#caa9af]/20 hover:text-[#54585f]'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
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
                className={`p-3 rounded-xl font-shippori text-xs transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#caa9af] text-white shadow-lg'
                    : 'bg-[#faf3ef] text-[#8a6d62] hover:bg-[#caa9af]/20'
                }`}
              >
                <div className="text-lg mb-1">{category.icon}</div>
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
