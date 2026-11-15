"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "美容経験豊富な\n美容看護師が在籍",
    text: "美容医療の経験を積んだ看護師が、医師の指示のもと、ひとりひとりに丁寧に施術します。",
  },
  {
    title: "切らずに叶える\n美容医療",
    text: "医学的根拠に基づく施術で、大人のコンプレックスを、切らずに解消するお手伝いをします。",
  },
  {
    title: "完全予約制の\n落ち着いた空間",
    text: "表参道駅・外苑前駅から徒歩5分。年中無休、11:00〜22:00で通いやすいクリニックです。",
  },
];

export default function ClinicIntroSection() {
  return (
    <section className="py-14 md:py-20 bg-[#faf3ef]" id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[#DDCDB9] font-shippori text-sm tracking-wide">クリニックについて</span>
          <h2 className="text-2xl md:text-4xl font-shippori font-medium text-[#54585f] leading-relaxed mt-2 mb-6">
            月のように、<br className="md:hidden" />あなたを照らす癒しを。
          </h2>
          <div className="space-y-3 text-[#54585f] font-shippori text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            <p>
              ルナージュクリニックは、表参道・外苑前から徒歩5分の、美容医療と歯科のクリニックです。
            </p>
            <p>
              忙しさの中で忘れてしまいがちな「本来の自分らしさ」を、美容医療を通じて静かに呼び起こします。
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm text-center"
            >
              <h3 className="font-shippori font-medium text-[#54585f] text-base md:text-lg whitespace-pre-line leading-snug mb-3">
                {f.title}
              </h3>
              <p className="font-shippori text-[#8a6d62] text-xs md:text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://lin.ee/teAI9dY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c2ac94] hover:bg-[#8a6d62] text-white font-shippori px-10 py-3 rounded-full transition-colors shadow"
          >
            LINEで予約
          </a>
        </div>
      </div>
    </section>
  );
}
