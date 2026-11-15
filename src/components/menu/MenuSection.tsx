"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MenuModal from "./MenuModal";
import {
  menuData,
  formatPrice,
  type Treatment,
  type Category,
  getOrderedCategories,
  concernsCategoryOrder,
  equipmentCategoryOrder,
} from "../../data/menuData";

// シェブロンダウンアイコン
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// 施術1件を1行で表示（左：施術名、右：料金）
const TreatmentRow = ({ treatment, onClick }: { treatment: Treatment; onClick: () => void }) => {
  const price = treatment.specialPriceName
    ? treatment.specialPriceName
    : `${treatment.regularPrice.includes("+") ? "+" : ""}${formatPrice(treatment.regularPrice)}`;
  const isText = !!treatment.specialPriceName || /^[^¥+]/.test(price);

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-start justify-between gap-4 border-b border-lunage-line px-1 py-4 text-left transition-colors hover:bg-lunage-sand/70"
    >
      <div className="min-w-0">
        <p className="font-shippori text-base md:text-[17px] leading-snug text-lunage-ink">{treatment.name}</p>
        {treatment.branch && (
          <p className="mt-1 font-shippori text-[13px] leading-snug text-lunage-ink/70">{treatment.branch}</p>
        )}
        {treatment.contents && (
          <p className="mt-1 font-shippori text-[13px] leading-snug text-lunage-ink/70">{treatment.contents}</p>
        )}
      </div>
      <div className="flex shrink-0 items-start gap-2">
        <span
          className={`font-shippori ${
            isText ? "text-[15px] leading-snug text-lunage-goldDark" : "text-[17px] md:text-lg leading-snug font-medium text-lunage-ink"
          }`}
        >
          {price}
        </span>
        <span className="text-lunage-gold">›</span>
      </div>
    </button>
  );
};

// 機械ごとにまとめる（点滴など機械名が不要なカテゴリはまとめない）
const groupTreatments = (category: Category, categoryKey: string) => {
  if (categoryKey === "tenteki") return [{ label: "", items: category.treatments }];
  const groups: { label: string; items: Treatment[] }[] = [];
  for (const t of category.treatments) {
    const label = t.equipment || "";
    const g = groups.find((x) => x.label === label);
    if (g) g.items.push(t);
    else groups.push({ label, items: [t] });
  }
  return groups;
};

// カテゴリのアコーディオン
const CategoryAccordion = ({
  categoryKey,
  category,
  onTreatmentClick,
}: {
  categoryKey: string;
  category: Category;
  onTreatmentClick: (treatment: Treatment) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // トップのメニュー一覧、またはURLの #カテゴリ から来た場合は開く
    const openAccordion = sessionStorage.getItem("openAccordion");
    const hash = window.location.hash.replace("#", "");
    if (openAccordion === categoryKey || hash === categoryKey) {
      let scrollTimer: ReturnType<typeof setTimeout> | undefined;
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.removeItem("openAccordion");
        // 開くアニメーションが終わってから、その位置までスクロールする
        scrollTimer = setTimeout(() => {
          const target = document.getElementById(categoryKey);
          if (target) {
            // ヘッダーの高さぶん手前で止める（即座に移動）
            const offset = window.innerWidth >= 1024 ? 170 : 100; // パソコンでは固定の切替ボタンぶんも空ける
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: Math.max(0, top), behavior: "instant" as ScrollBehavior });
          }
        }, 450);
      }, 500);
      return () => {
        clearTimeout(timer);
        if (scrollTimer) clearTimeout(scrollTimer);
      };
    }
  }, [categoryKey]);

  const groups = groupTreatments(category, categoryKey);

  return (
    <div id={categoryKey} className="scroll-mt-44 border-b border-lunage-line">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-1 py-5 text-left"
      >
        <div>
          <h3 className="font-shippori text-xl font-medium text-lunage-ink">{category.title}</h3>
          <p className="mt-1 font-shippori text-[13px] md:text-sm text-lunage-ink/70">{category.description}</p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="font-shippori text-sm text-lunage-gold">{category.treatments.length}件</span>
          <ChevronDownIcon
            className={`h-5 w-5 text-lunage-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              {groups.map((g) => (
                <div key={g.label || "all"} className="mt-2 first:mt-0">
                  {g.label && (
                    <p className="px-1 pb-1 pt-4 font-shippori text-[13px] tracking-[0.12em] text-lunage-gold">{g.label}</p>
                  )}
                  <div className="border-t border-lunage-line">
                    {g.items.map((treatment, i) => (
                      <TreatmentRow
                        key={`${treatment.name}-${treatment.branch ?? ""}-${i}`}
                        treatment={treatment}
                        onClick={() => onTreatmentClick(treatment)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function MenuSection() {
  const [viewMode, setViewMode] = useState<"concerns" | "equipment">("concerns");
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleViewModeChange = (event: CustomEvent) => {
      setViewMode(event.detail);
    };
    window.addEventListener("viewModeChange", handleViewModeChange as EventListener);
    return () => window.removeEventListener("viewModeChange", handleViewModeChange as EventListener);
  }, []);

  const currentData = viewMode === "concerns" ? menuData.concerns : menuData.equipment;
  const currentOrder = viewMode === "concerns" ? concernsCategoryOrder : equipmentCategoryOrder;
  const orderedCategories = getOrderedCategories(currentData, currentOrder);

  const handleTreatmentClick = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTreatment(null);
  };

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <p className="mb-6 text-center font-shippori text-[13px] md:text-sm leading-relaxed text-lunage-ink/80">
          表示価格は税込です。気になる施術をタップすると、詳しい内容をご覧いただけます。
        </p>

        <div className="border-t border-lunage-line">
          {orderedCategories.map(([key, category]) => (
            <CategoryAccordion
              key={`${viewMode}-${key}`}
              categoryKey={key}
              category={category}
              onTreatmentClick={handleTreatmentClick}
            />
          ))}
        </div>

        <MenuModal treatment={selectedTreatment} isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
}
