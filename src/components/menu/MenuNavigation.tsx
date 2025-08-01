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
  { id: "hair-growth", name: "育毛", icon: "🌱", anchor: "#hair-growth" },
  { id: "hair-removal", name: "脱毛", icon: "⚡", anchor: "#hair-removal" },
  { id: "soothing", name: "鎮静", icon: "🌿", anchor: "#soothing" },
  { id: "pores-firmness-glow", name: "毛穴・ハリ・艶", icon: "✨", anchor: "#pores-firmness-glow" },
  { id: "body", name: "ボディ", icon: "💆‍♀️", anchor: "#body" },
  { id: "others", name: "その他", icon: "🔧", anchor: "#others" }
];

// 機械別カテゴリ
const equipmentCategories = [
  { id: "skin-diagnosis", name: "肌診断機x", icon: "🔍", anchor: "#skin-diagnosis" },
  { id: "customize-hifu", name: "カスタマイズHIFU", icon: "🔥", anchor: "#customize-hifu" },
  { id: "ultraformer", name: "ウルトラフォーマー", icon: "🔥", anchor: "#ultraformer" },
  { id: "ondalift", name: "オンダリフト", icon: "⚡", anchor: "#ondalift" },
  { id: "ldm", name: "LDM", icon: "🌊", anchor: "#ldm" },
  { id: "potenza", name: "POTENZA", icon: "⚡", anchor: "#potenza" },
  { id: "soprano", name: "ソプラノ", icon: "💎", anchor: "#soprano" },
  { id: "peeling", name: "ピーリング", icon: "🧴", anchor: "#peeling" },
  { id: "coolgun", name: "クールガン", icon: "❄️", anchor: "#coolgun" },
  { id: "dermapen4", name: "ダーマペン４", icon: "💉", anchor: "#dermapen4" },
  { id: "hydrafacial", name: "ハイドラフェイシャル", icon: "💧", anchor: "#hydrafacial" },
  { id: "picoway", name: "Picoway", icon: "⚡", anchor: "#picoway" },
  { id: "mesogun", name: "メソガン", icon: "🎯", anchor: "#mesogun" },
  { id: "sofwave", name: "ソフウェーブ", icon: "🌊", anchor: "#sofwave" },
  { id: "emface", name: "EMFACE", icon: "⚡", anchor: "#emface" },
  { id: "thermacool", name: "サーマクール", icon: "🔥", anchor: "#thermacool" },
  { id: "others", name: "その他の機器", icon: "🔧", anchor: "#others" }
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
        <div className="flex justify-center">
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
      </div>
    </section>
  );
}
