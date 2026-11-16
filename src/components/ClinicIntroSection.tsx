"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    no: "01",
    title: "美容経験豊富な\n美容看護師が在籍",
    text: "美容医療の経験を積んだ看護師が、医師の指示のもと、ひとりひとりに丁寧に施術します。",
  },
  {
    no: "02",
    title: "切らずに叶える\n美容医療",
    text: "医学的根拠に基づく施術で、大人のコンプレックスを、切らずに解消するお手伝いをします。",
  },
  {
    no: "03",
    title: "完全予約制の\n落ち着いた空間",
    text: "表参道駅から徒歩5分。年中無休、11:00〜22:00で通いやすいクリニックです。",
  },
];

export default function ClinicIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-lunage-sand" id="about">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-shippori text-sm tracking-[0.2em] text-lunage-gold">ABOUT</p>
          <h2 className="mt-4 font-shippori font-normal text-2xl md:text-4xl leading-[1.7] text-lunage-ink">
            月のように、<br className="md:hidden" />あなたを照らす癒しを。
          </h2>
          <div className="mx-auto mt-6 h-px w-10 bg-lunage-gold" />
          <div className="mx-auto mt-6 max-w-xl space-y-3 font-shippori text-[15px] md:text-base leading-[2] text-lunage-ink">
            <p>ルナージュクリニックは、表参道駅から徒歩5分の、美容医療のクリニックです。</p>
            <p>忙しさの中で忘れてしまいがちな「本来の自分らしさ」を、美容医療を通じて静かに呼び起こします。</p>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <img
            src="/images/clinic/reception.webp"
            alt="ルナージュクリニックの受付。月のライトとロゴが並ぶ、やわらかな明かりの空間"
            width={1600}
            height={900}
            loading="lazy"
            className="h-auto w-full rounded-xl object-cover"
          />
        </motion.figure>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-lunage-line pt-6 text-center"
            >
              <p className="font-shippori text-sm tracking-[0.2em] text-lunage-gold">{f.no}</p>
              <h3 className="mt-3 font-shippori font-medium text-[17px] md:text-lg whitespace-pre-line leading-relaxed text-lunage-ink">
                {f.title}
              </h3>
              <p className="mt-3 font-shippori text-sm md:text-[15px] leading-[1.9] text-lunage-ink/80">{f.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://lin.ee/teAI9dY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-lunage-ink px-12 py-3.5 font-shippori text-sm tracking-[0.15em] text-white transition-colors hover:bg-lunage-goldDark"
          >
            LINEで予約
          </a>
        </div>
      </div>
    </section>
  );
}
