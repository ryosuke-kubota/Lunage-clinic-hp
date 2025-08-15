"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

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
  // モーダル開閉時のスクロール制御
  useEffect(() => {
    if (isOpen) {
      // モーダル開いた時：背景スクロールを無効化
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // クリーンアップ：スクロール位置を復元
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // ポータルでbody直下にレンダリング
  if (typeof document === 'undefined') return null;
  
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* ヘッダー */}
          <div className="flex-shrink-0 bg-white border-b border-[#dacacf]/20 p-4 md:p-6 flex items-center justify-between">
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

          {/* 画像コンテンツ - スクロール可能 */}
          <div className="flex-1 overflow-y-auto">
            {item.images.map((image, index) => (
              <div key={index} className="relative w-full aspect-[3/4]">
                <Image
                  src={image}
                  alt={`${item.title} - ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* 予約ボタン */}
          <div className="flex-shrink-0 p-4 md:p-6 bg-[#faf3ef] border-t border-[#dacacf]/20">
            <div className="flex gap-3 max-w-md mx-auto">
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
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}