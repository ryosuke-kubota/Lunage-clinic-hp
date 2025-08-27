"use client";
import { motion } from "framer-motion";

export default function KodawariSection() {
  const kodawariItems = [
    {
      number: "1",
      title: "国が認めた施設でつくられる安心の品質",
      description: "厚生労働省の認可を受けた国内施設で、生物由来原料の厳しい基準をクリアしたエクソソームだけを使用。臍帯・歯髄・脂肪由来をバランス良く配合しています。"
    },
    {
      number: "2",
      title: "全身からお肌まで幅広くアプローチ",
      description: "点滴・注射による全身再生医療に加え、ドラッグデリバリー機器による肌や頭皮・ボディへの直接導入も可能。"
    },
    {
      number: "3",
      title: "高品質を、もっと通いやすく",
      description: "提携ラボから直接仕入れることで、中間コストを削減。高品質なエクソソームを、しっかり続けやすい価格でご提供しています。"
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
            <h2 className="text-sm md:text-2xl font-bold text-center">
              エクソソーム製剤のこだわり
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
                  <h3 className="text-xs md:text-xl font-bold text-[#5d4e37] mb-2">
                    <span className="text-sm md:text-3xl font-bold mr-2">{item.number}.</span>
                    {item.title}
                  </h3>
                  <p className="text-[#8b7355] ml-4 md:ml-10 text-xs md:text-base">
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