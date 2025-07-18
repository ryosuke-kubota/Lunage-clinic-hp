"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// 悩み別カテゴリ
const concernCategories = [
  { id: "skin-diagnosis", name: "肌診断", icon: "🔍", anchor: "#skin-diagnosis" },
  { id: "sagging", name: "たるみ", icon: "✨", anchor: "#sagging" },
  { id: "slimming", name: "痩身", icon: "💪", anchor: "#slimming" },
  { id: "spots-melasma", name: "しみ・肝斑", icon: "🌟", anchor: "#spots-melasma" },
  { id: "pores-acne-scars", name: "毛穴・ニキビ跡", icon: "🌸", anchor: "#pores-acne-scars" },
  { id: "acne-inflammation", name: "肌荒れ", icon: "🩹", anchor: "#acne-inflammation" },
  { id: "hair-loss", name: "薄毛", icon: "💆", anchor: "#hair-loss" },
  { id: "hair-removal", name: "脱毛", icon: "⚡", anchor: "#hair-removal" },
  { id: "soothing", name: "鎮静", icon: "🌿", anchor: "#soothing" },
  { id: "glow-firmness", name: "ハリ・艶", icon: "✨", anchor: "#glow-firmness" },
  { id: "body", name: "ボディ", icon: "💆‍♀️", anchor: "#body" }
];

// 機械別カテゴリ
const equipmentCategories = [
  { id: "hifu", name: "HIFU（ハイフ）", icon: "🔥", anchor: "#hifu" },
  { id: "ldm", name: "LDM", icon: "🌊", anchor: "#ldm" },
  { id: "potenza", name: "POTENZA", icon: "⚡", anchor: "#potenza" },
  { id: "soprano", name: "ソプラノ", icon: "💎", anchor: "#soprano" },
  { id: "coolgun", name: "クールガン", icon: "❄️", anchor: "#coolgun" },
  { id: "dermapen", name: "ダーマペン４", icon: "💉", anchor: "#dermapen" },
  { id: "hydrafacial", name: "ハイドラフェイシャル", icon: "💧", anchor: "#hydrafacial" },
  { id: "picoway", name: "Picoway", icon: "⚡", anchor: "#picoway" },
  { id: "mesogun", name: "メソガンU225", icon: "🎯", anchor: "#mesogun" },
  { id: "sofwave", name: "ソフウェーブ", icon: "🌊", anchor: "#sofwave" },
  { id: "emface", name: "EMFACE", icon: "⚡", anchor: "#emface" }
];

export default function MenuNavigation() {
  const [activeCategory, setActiveCategory] = useState("skin-diagnosis");
  const [viewMode, setViewMode] = useState<'concerns' | 'equipment'>('concerns');

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

  const handleViewModeChange = (mode: 'concerns' | 'equipment') => {
    setViewMode(mode);
    // MenuSectionの表示モードも変更するためのイベントを発火
    const event = new CustomEvent('viewModeChange', { detail: mode });
    window.dispatchEvent(event);
    
    // 最初のカテゴリをアクティブに設定
    const firstCategory = mode === 'concerns' ? concernCategories[0] : equipmentCategories[0];
    setActiveCategory(firstCategory.id);
  };

  const currentCategories = viewMode === 'concerns' ? concernCategories : equipmentCategories;

  return (
    <section className="py-8 bg-white lg:sticky lg:top-16 z-40 border-b border-[#dacacf]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 表示切り替えボタン */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#faf3ef] rounded-full p-1 shadow-lg border border-[#dacacf]/20">
            <button
              onClick={() => handleViewModeChange('concerns')}
              className={`px-4 py-2 rounded-full font-shippori text-sm transition-all duration-300 ${
                viewMode === 'concerns'
                  ? 'bg-[#DDCDB9] text-white shadow-md'
                  : 'text-[#8a6d62] hover:text-[#54585f]'
              }`}
            >
              悩み別
            </button>
            <button
              onClick={() => handleViewModeChange('equipment')}
              className={`px-4 py-2 rounded-full font-shippori text-sm transition-all duration-300 ${
                viewMode === 'equipment'
                  ? 'bg-[#DDCDB9] text-white shadow-md'
                  : 'text-[#8a6d62] hover:text-[#54585f]'
              }`}
            >
              機械別
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center space-x-1 flex-wrap">
            {currentCategories.map((category, index) => (
              <motion.button
                key={`${viewMode}-${category.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(category.id, category.anchor)}
                className={`px-4 py-3 rounded-full font-shippori text-sm mb-2 ${
                  activeCategory === category.id
                    ? 'bg-[#DDCDB9] text-white shadow-lg'
                    : 'bg-[#faf3ef] text-[#8a6d62] hover:bg-[#DDCDB9]/20 hover:text-[#54585f]'
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {currentCategories.map((category, index) => (
              <motion.button
                key={`${viewMode}-mobile-${category.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryClick(category.id, category.anchor)}
                className={`p-3 rounded-xl font-shippori text-xs ${
                  activeCategory === category.id
                    ? 'bg-[#DDCDB9] text-white shadow-lg'
                    : 'bg-[#faf3ef] text-[#8a6d62] hover:bg-[#DDCDB9]/20'
                }`}
              >
                <div className="text-lg mb-1">{category.icon}</div>
                <div className="leading-tight">{category.name}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
