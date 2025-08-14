"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import MenuModal from "./MenuModal";
import { menuData, formatPrice, type Treatment, type Category } from "../../data/menuData";

// シェブロンダウンアイコンコンポーネント
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// 治療カードコンポーネント（簡素化版）
const TreatmentCard = ({
  treatment,
  index,
  onClick,
  isTenteki = false
}: {
  treatment: Treatment;
  index: number;
  onClick: () => void;
  isTenteki?: boolean;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl py-4 p-2 md:p-4 shadow-lg border border-[#dacacf]/20 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="space-y-2 md:space-y-3">
        {/* 治療名 */}
        <div>
          {!isTenteki && (
            <div className="text-[8px] md:text-xs text-[#8a6d62] font-shippori text-center">{treatment.equipment}</div>
          )}
          <h4 className="text-xs md:text-lg font-shippori font-medium text-[#54585f] mb-1 text-center">
            {treatment.name}
          </h4>
        </div>

        {/* 価格表示（点滴の場合は通常価格のみ表示） */}
        <div className="pt-2 border-t border-[#dacacf]/20">
          {isTenteki ? (
            <div className="text-center">
              <span className="text-lg font-bold text-[#8b4513] font-shippori">
                {formatPrice(treatment.regularPrice)}
              </span>
            </div>
          ) : (
            treatment.specialPriceName ? (
              <div className="text-center">
                <span className="text-sm font-medium text-[#8b4513]">
                  {treatment.specialPriceName}
                </span>
              </div>
            ) : (
              <div className="space-y-1">
                {treatment.memberPrice && (
                  <div className="flex justify-between items-center flex-col md:flex-row">
                    <span className="text-xs text-[#8a6d62] font-shippori">
                      会員価格
                    </span>
                    <span className="text-sm font-bold text-[#8b4513] font-shippori">
                      {formatPrice(treatment.memberPrice)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center flex-col md:flex-row">
                  <span className="text-xs text-[#8a6d62] font-shippori">
                    通常価格
                  </span>
                  <span className={`font-bold font-shippori ${treatment.memberPrice ? 'text-sm text-[#8a6d62]' : 'text-lg text-[#8b4513]'}`}>
                    {treatment.regularPrice.includes('+') && '+'} 
                    {formatPrice(treatment.regularPrice)}
                  </span>
                </div>
              </div>
            )
          )}
        </div>

        {/* 詳細を見るボタン */}
        <div className="text-center pt-2">
          <span className="text-xs text-[#8b4513]/70 font-shippori">
            タップで詳細
          </span>
        </div>
      </div>
    </div>
  );
};

// カテゴリアコーディオンコンポーネント
const CategoryAccordion = ({
  categoryKey,
  category,
  index,
  initialOpen = false,
  onTreatmentClick
}: {
  categoryKey: string;
  category: Category;
  index: number;
  initialOpen?: boolean;
  onTreatmentClick: (treatment: Treatment) => void;
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  useEffect(() => {
    const openAccordion = sessionStorage.getItem('openAccordion');
    if (openAccordion === categoryKey) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.removeItem('openAccordion');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [categoryKey]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      id={categoryKey}
    >
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-[#dacacf]/20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-2 md:px-6 py-6 text-left bg-gradient-to-r from-[#faf3ef] to-white hover:from-[#f5ede7] hover:to-[#faf3ef] transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="ml-3 sm:ml-4 flex-shrink-0">
                <h3 className="text-xl sm:text-2xl font-shippori font-medium text-[#54585f]">
                  {category.title}
                </h3>
                <p className="hidden md:block text-sm text-[#8a6d62] font-shippori">
                  {category.description}
                </p>
              </div>
            </div>
            <ChevronDownIcon
              className={`w-6 h-6 text-[#DDCDB9] transition-transform duration-300 flex-shrink-0 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 px-2">
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-6">
                  {category.treatments.map((treatment, treatmentIndex) => (
                    <TreatmentCard
                      key={`${treatment.name}-${treatmentIndex}`}
                      treatment={treatment}
                      index={treatmentIndex}
                      onClick={() => onTreatmentClick(treatment)}
                      isTenteki={categoryKey === 'tenteki'}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function MenuSection() {
  const [viewMode, setViewMode] = useState<'concerns' | 'equipment'>('concerns');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          // セクションがビューポートに入った時の処理
        }
      });
    };

    const handleViewModeChange = (event: CustomEvent) => {
      setViewMode(event.detail);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('viewModeChange', handleViewModeChange as EventListener);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('viewModeChange', handleViewModeChange as EventListener);
    };
  }, []);

  const currentData = viewMode === 'concerns' ? menuData.concerns : menuData.equipment;

  const handleTreatmentClick = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTreatment(null);
  };

  return (
    <section className="py-8 sm:py-16 bg-[#faf3ef]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-1">
            <span className="text-[#DDCDB9] font-shippori text-sm tracking-wide">施術・料金案内</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-light text-[#54585f] mb-8">
            Menu
          </h2>
        </motion.div>

        {/* メニューカテゴリ */}
        <div className="space-y-3">
          {Object.entries(currentData).map(([key, category], index) => (
            <CategoryAccordion
              key={`${viewMode}-${key}`}
              categoryKey={key}
              category={category}
              index={index}
              initialOpen={false}
              onTreatmentClick={handleTreatmentClick}
            />
          ))}
        </div>

        {/* モーダル */}
        <MenuModal
          treatment={selectedTreatment}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
