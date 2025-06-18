"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface Treatment {
  name: string;
  image: string;
  category: string;
  price: string;
  duration: string;
  downtime: string;
  description: string;
  benefits: string[];
  process: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
}

interface TreatmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: Treatment | null;
}

export default function TreatmentModal({ isOpen, onClose, treatment }: TreatmentModalProps) {
  const [activeTab, setActiveTab] = useState("overview");

  if (!treatment) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const tabs = [
    { id: "overview", label: "概要" },
    { id: "process", label: "施術の流れ" },
    { id: "price", label: "料金" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-sm sm:max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="relative">
              <div className="h-48 sm:h-64 bg-gradient-to-br from-[#caa9af] to-[#d6c6b5] relative overflow-hidden">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={treatment.image}
                  alt={treatment.name}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>

                {/* Title */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <div className="bg-[#caa9af] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-shippori mb-2">
                    {treatment.category}
                  </div>
                  <h2 className="text-xl sm:text-3xl font-shippori font-bold text-white">
                    {treatment.name}
                  </h2>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-h-[55vh] sm:max-h-[60vh] overflow-y-auto">
              {/* Tabs */}
              <div className="sticky top-0 bg-white border-b border-[#dacacf]/20 z-10">
                <div className="flex">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      whileHover={{ backgroundColor: "rgba(250, 243, 239, 0.5)" }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 font-shippori text-sm sm:text-base transition-colors ${
                        activeTab === tab.id
                          ? 'text-[#caa9af] border-b-2 border-[#caa9af]'
                          : 'text-[#8a6d62] hover:text-[#caa9af]'
                      }`}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-6">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <div>
                        <h3 className="text-lg sm:text-xl font-shippori font-medium text-[#54585f] mb-2 sm:mb-3">
                          施術について
                        </h3>
                        <p className="text-[#8a6d62] font-shippori leading-relaxed text-sm sm:text-base">
                          {treatment.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="bg-[#faf3ef] p-3 sm:p-4 rounded-lg">
                          <div className="text-[#caa9af] font-shippori text-xs sm:text-sm mb-1">施術時間</div>
                          <div className="text-[#54585f] font-shippori font-medium text-sm sm:text-base">
                            {treatment.duration}
                          </div>
                        </div>
                        <div className="bg-[#faf3ef] p-3 sm:p-4 rounded-lg">
                          <div className="text-[#caa9af] font-shippori text-xs sm:text-sm mb-1">ダウンタイム</div>
                          <div className="text-[#54585f] font-shippori font-medium text-sm sm:text-base">
                            {treatment.downtime}
                          </div>
                        </div>
                        <div className="bg-[#faf3ef] p-3 sm:p-4 rounded-lg">
                          <div className="text-[#caa9af] font-shippori text-xs sm:text-sm mb-1">料金目安</div>
                          <div className="text-[#54585f] font-shippori font-medium text-sm sm:text-base">
                            {treatment.price}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-shippori font-medium text-[#54585f] mb-2 sm:mb-3">
                          期待できる効果
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {treatment.benefits.map((benefit, index) => (
                            <motion.div
                              key={`benefit-${benefit.slice(0, 10)}-${index}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center"
                            >
                              <div className="w-2 h-2 bg-[#caa9af] rounded-full mr-3" />
                              <span className="text-[#8a6d62] font-shippori text-sm sm:text-base">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {treatment.beforeAfter && (
                        <div>
                          <h3 className="text-lg sm:text-xl font-shippori font-medium text-[#54585f] mb-2 sm:mb-3">
                            施術例
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                              <div className="text-[#8a6d62] font-shippori text-xs sm:text-sm mb-2">Before</div>
                              <img
                                src={treatment.beforeAfter.before}
                                alt="Before"
                                className="w-full h-24 sm:h-32 object-cover rounded-lg"
                              />
                            </div>
                            <div>
                              <div className="text-[#8a6d62] font-shippori text-xs sm:text-sm mb-2">After</div>
                              <img
                                src={treatment.beforeAfter.after}
                                alt="After"
                                className="w-full h-24 sm:h-32 object-cover rounded-lg"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === "process" && (
                    <motion.div
                      key="process"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <h3 className="text-lg sm:text-xl font-shippori font-medium text-[#54585f] mb-3 sm:mb-4">
                        施術の流れ
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        {treatment.process.map((step, index) => (
                          <motion.div
                            key={`step-${step.slice(0, 10)}-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#caa9af] text-white rounded-full flex items-center justify-center font-shippori font-bold text-xs sm:text-sm mr-3 sm:mr-4">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-[#8a6d62] font-shippori leading-relaxed text-sm sm:text-base">
                                {step}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "price" && (
                    <motion.div
                      key="price"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <h3 className="text-lg sm:text-xl font-shippori font-medium text-[#54585f] mb-3 sm:mb-4">
                        料金表
                      </h3>
                      <div className="bg-[#faf3ef] p-4 sm:p-6 rounded-lg">
                        <div className="text-xl sm:text-2xl font-shippori font-bold text-[#caa9af] mb-2">
                          {treatment.price}
                        </div>
                        <p className="text-[#8a6d62] font-shippori text-xs sm:text-sm">
                          ※ 初回カウンセリング料込み
                        </p>
                      </div>

                      {/* <div className="space-y-2 sm:space-y-3">
                        <h4 className="font-shippori font-medium text-[#54585f] text-sm sm:text-base">お支払い方法</h4>
                        <div className="text-[#8a6d62] font-shippori text-xs sm:text-sm space-y-1">
                          <p>・現金</p>
                          <p>・各種クレジットカード</p>
                          <p>・医療ローン（最大60回分割可能）</p>
                        </div>
                      </div> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-[#dacacf]/20 bg-[#faf3ef]">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-[#caa9af] hover:bg-[#c2ac94] text-white font-shippori py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors text-sm sm:text-base"
                >
                  この施術を予約する
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-white hover:bg-[#faf3ef] text-[#caa9af] border border-[#caa9af] font-shippori py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors text-sm sm:text-base"
                >
                  カウンセリングを受ける
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
