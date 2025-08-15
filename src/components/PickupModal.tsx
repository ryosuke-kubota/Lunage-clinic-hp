"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PickupItem {
  id: string;
  title: string;
  thumbnail: string;
  images: string[];
  description: string;
}

interface PickupModalProps {
  item: PickupItem;
  isOpen: boolean;
  onClose: () => void;
}

// 閉じるアイコンコンポーネント
const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function PickupModal({ item, isOpen, onClose }: PickupModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* オーバーレイ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            {/* モーダルコンテンツ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* ヘッダー */}
              <div className="sticky top-0 bg-white rounded-t-2xl border-b border-[#dacacf]/20 p-4 md:p-6 flex items-center justify-between z-10">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#8b4513]">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base text-[#8b4513]/70 mt-1">
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[#faf3ef] rounded-full transition-colors"
                >
                  <CloseIcon className="w-6 h-6 text-[#8b4513]" />
                </button>
              </div>

              {/* 画像コンテンツ */}
              <div className="p-0">
                {item.images.map((image, index) => (
                  <div key={index} className="relative w-full aspect-[4/3]">
                    <Image
                      src={image}
                      alt={`${item.title} - ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 640px"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* 予約ボタン */}
              <div className="p-4 md:p-6 bg-[#faf3ef]">
                <div className="flex gap-3">
                  <a 
                    href="https://lin.ee/teAI9dY" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 bg-[#8b4513] text-white text-center py-3 px-6 rounded-xl font-medium hover:bg-[#8b4513]/90 transition-colors text-sm md:text-base"
                  >
                    予約・相談する
                  </a>
                  <button 
                    onClick={onClose}
                    className="px-6 py-3 border border-[#dacacf] text-[#8b4513] rounded-xl font-medium hover:bg-white transition-colors text-sm md:text-base"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}