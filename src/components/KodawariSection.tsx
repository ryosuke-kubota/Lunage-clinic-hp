"use client";
import { motion } from "framer-motion";

export default function KodawariSection() {
  const kodawariItems = [
    {
      number: "1",
      title: "国内ドナー由来・国内製造のエクソソーム",
      description: "臍帯・歯髄・脂肪由来を黄金比で配合"
    },
    {
      number: "2",
      title: "最新ドラッグデリバリー機器で浸透率を最大化",
      description: "メソガンU225 or ダーマペンから選択可能"
    },
    {
      number: "3",
      title: "安全性と有効性を重視した厳格な製剤管理",
      description: "国内ドナー × 国内製造"
    }
  ];

  return (
    <section className="py-20 bg-[#d4c4b0] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* タイトルバー */}
          <div className="bg-[#5d4e37] text-white rounded-full mx-auto py-3 px-8 block mb-8">
            <h2 className="text-base md:text-2xl font-bold text-center">
              ルナージュクリニックのこだわり
            </h2>
          </div>

          {/* 白い背景のカード */}
          <div className="bg-[#f5f0e8] rounded-3xl py-8 px-6 md:py-12 md:px-12 shadow-lg">
            <div className="space-y-8">
              {kodawariItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="border-b border-[#d4c4b0] last:border-0 pb-6 last:pb-0"
                >
                  <h3 className="text-base md:text-xl font-bold text-[#5d4e37] mb-2">
                    <span className="text-base md:text-3xl font-bold mr-2">{item.number}.</span>
                    {item.title}
                  </h3>
                  <p className="text-[#8b7355] ml-4 md:ml-10 text-sm md:text-base">
                    → {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}