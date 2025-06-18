"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { easeOut } from "framer-motion";

const beforeAfterData = [
  {
    id: 1,
    treatment: "ヒアルロン酸注射",
    area: "ほうれい線",
    before: "/images/gallery/382791_B.jpg",
    after: "/images/gallery/382791_A.jpg",
    description: "自然なボリュームアップで、ほうれい線が目立たなくなりました。"
  },
  {
    id: 2,
    treatment: "ボトックス注射",
    area: "目尻のシワ",
    before: "/images/gallery/390946_B.png",
    after: "/images/gallery/390946_A.png",
    description: "表情ジワが改善され、若々しい印象になりました。"
  },
  {
    id: 3,
    treatment: "肌管理メニュー",
    area: "肌質改善",
    before: "/images/gallery/390875_B.png",
    after: "/images/gallery/390875_A.png",
    description: "毛穴が目立たなくなり、肌のキメが整いました。"
  }
];

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  treatment: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, treatment }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateSliderPosition = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    updateSliderPosition(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent scrolling
    const rect = e.currentTarget.getBoundingClientRect();
    updateSliderPosition(e.touches[0].clientX, rect);
  };

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  // Handle click/tap to move slider
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('.slider-container')) {
      const rect = e.currentTarget.getBoundingClientRect();
      updateSliderPosition(e.clientX, rect);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg cursor-grab active:cursor-grabbing select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onClick={handleClick}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt={`${treatment} - Before`}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-shippori">
          Before
        </div>
      </div>

      {/* After Image */}
      <div
        className="absolute inset-0 overflow-hidden slider-container"
        style={{ clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <img
          src={afterImage}
          alt={`${treatment} - After`}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-3 right-3 bg-[#caa9af] text-white px-2 py-1 rounded-full text-xs sm:text-sm font-shippori">
          After
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg border-2 border-[#caa9af] flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#caa9af] rounded-full" />
        </motion.div>
      </div>

      {/* Instructions - Responsive */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-shippori">
        <span className="hidden sm:inline">← ドラッグして比較 →</span>
        <span className="sm:hidden">← タップして比較 →</span>
      </div>
    </motion.div>
  );
};

export default function BeforeAfterSection() {
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
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-3 h-3 bg-[#caa9af] rounded-full mr-3" />
            <span className="text-[#caa9af] font-shippori text-sm tracking-wide">施術実績</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-shippori font-light text-[#54585f] mb-6 sm:mb-8">
            Before & After
          </h2>
          <p className="text-[#8a6d62] font-shippori text-base sm:text-lg max-w-2xl mx-auto">
            実際の施術結果をご覧ください。
            <br />
            一人ひとりに最適な治療をご提案いたします。
          </p>
        </motion.div>

        {/* Before/After Gallery - Mobile First Layout */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 lg:space-y-12"
        >
          {beforeAfterData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center gap-6 lg:gap-12`}
            >
              {/* Slider */}
              <div className="w-full lg:w-1/2">
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  treatment={item.treatment}
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="bg-[#faf3ef] p-4 sm:p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-[#caa9af] rounded-full mr-2" />
                    <span className="text-[#caa9af] font-shippori text-sm font-medium">
                      {item.treatment}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-shippori font-medium text-[#54585f] mb-3">
                    {item.area}
                  </h3>
                  <p className="text-[#8a6d62] font-shippori leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Treatment Results Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20 bg-gradient-to-r from-[#caa9af]/10 to-[#d6c6b5]/10 rounded-2xl p-6 sm:p-8 md:p-12"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-shippori font-medium text-[#54585f] mb-4">
              施術結果への満足度
            </h3>
            <p className="text-[#8a6d62] font-shippori text-sm sm:text-base">
              お客様アンケートに基づく実績データ
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { percentage: "96%", label: "効果を実感" },
              { percentage: "98%", label: "仕上がりに満足" },
              { percentage: "94%", label: "友人に推薦したい" },
              { percentage: "99%", label: "また利用したい" }
            ].map((stat, index) => (
              <motion.div
                key={`stat-${stat.label}-${index}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-shippori font-bold text-[#caa9af] mb-2">
                  {stat.percentage}
                </div>
                <p className="text-[#8a6d62] font-shippori text-xs sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#caa9af] hover:bg-[#c2ac94] text-white font-shippori px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all shadow-lg"
          >
            あなたの理想を相談する
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
