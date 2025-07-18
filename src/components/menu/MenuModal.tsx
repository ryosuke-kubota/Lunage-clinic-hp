"use client";

import { motion, AnimatePresence } from "framer-motion";

// 治療データの型定義
interface Treatment {
  name: string;
  equipment: string;
  branch?: string;
  description: string;
  memberPrice?: string;
  regularPrice: string;
  contents?: string;
  treatmentTime?: string;
  specialPriceName?: string;
}

interface MenuModalProps {
  treatment: Treatment | null;
  isOpen: boolean;
  onClose: () => void;
}

// 価格フォーマット関数
const formatPrice = (price: string) => {
  if (!price || price === "" || price === "#VALUE!" || price === "準備中" || price.includes("準備中") || price.includes("計算中")) {
    return "お問い合わせください";
  }
  const numPrice = parseInt(price.replace(/[^\d]/g, ''));
  if (isNaN(numPrice)) return "お問い合わせください";
  return `¥${numPrice.toLocaleString()}`;
};

// 閉じるアイコンコンポーネント
const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function MenuModal({ treatment, isOpen, onClose }: MenuModalProps) {
  if (!treatment) return null;

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
              <div className="sticky top-0 bg-white rounded-t-2xl border-b border-[#dacacf]/20 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#8b4513] mb-1">
                    {treatment.name}
                  </h2>
                  {treatment.branch && (
                    <p className="text-sm text-[#8b4513]/70">
                      {treatment.branch}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-[#faf3ef] rounded-full transition-colors"
                >
                  <CloseIcon className="w-6 h-6 text-[#8b4513]" />
                </button>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                {/* 画像エリア */}
                <div className="mb-6">
                  <div className="aspect-video bg-gradient-to-br from-[#faf3ef] to-[#f0e6d6] rounded-xl flex items-center justify-center border border-[#dacacf]/20">
                    <div className="text-center text-[#8b4513]/50">
                      <div className="w-16 h-16 mx-auto mb-3 opacity-30">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 7v10h16V7H4zm8 2l5 4H7l5-4z"/>
                        </svg>
                      </div>
                      <p className="text-sm">施術イメージ</p>
                    </div>
                  </div>
                </div>

                {/* 機器情報 */}
                <div className="mb-6">
                  <div className="bg-[#faf3ef] rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-[#8b4513] mb-2">使用機器</h3>
                    <p className="text-[#8b4513]">{treatment.equipment}</p>
                  </div>
                </div>

                {/* 説明 */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#8b4513] mb-3">施術について</h3>
                  <p className="text-[#8b4513]/80 leading-relaxed whitespace-pre-line">
                    {treatment.description}
                  </p>
                </div>

                {/* 価格情報 */}
                <div className="bg-gradient-to-r from-[#8b4513]/5 to-[#8b4513]/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#8b4513] mb-4">料金</h3>
                  
                  {treatment.specialPriceName ? (
                    <div className="text-center">
                      <p className="text-[#8b4513] font-medium">
                        {treatment.specialPriceName}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {treatment.memberPrice && (
                        <div className="flex justify-between items-center">
                          <span className="text-[#8b4513]/70">会員価格</span>
                          <span className="text-xl font-bold text-[#8b4513]">
                            {formatPrice(treatment.memberPrice)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-[#8b4513]/70">通常価格</span>
                        <span className="text-xl font-bold text-[#8b4513]">
                          {formatPrice(treatment.regularPrice)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 追加情報 */}
                {(treatment.contents || treatment.treatmentTime) && (
                  <div className="mt-6 space-y-4">
                    {treatment.contents && (
                      <div>
                        <h4 className="text-sm font-semibold text-[#8b4513] mb-2">内容</h4>
                        <p className="text-[#8b4513]/80 text-sm">{treatment.contents}</p>
                      </div>
                    )}
                    {treatment.treatmentTime && (
                      <div>
                        <h4 className="text-sm font-semibold text-[#8b4513] mb-2">施術時間</h4>
                        <p className="text-[#8b4513]/80 text-sm">{treatment.treatmentTime}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* アクションボタン */}
                <div className="mt-8 flex gap-3">
                  <button className="flex-1 bg-[#8b4513] text-white py-3 px-6 rounded-xl font-medium hover:bg-[#8b4513]/90 transition-colors">
                    予約・相談する
                  </button>
                  <button 
                    onClick={onClose}
                    className="px-6 py-3 border border-[#dacacf] text-[#8b4513] rounded-xl font-medium hover:bg-[#faf3ef] transition-colors"
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