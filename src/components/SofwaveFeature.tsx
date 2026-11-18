"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { equipmentData, formatPrice } from "../data/menuData";

// 人気のソフウェーブをトップで大きく見せる特集。価格はメニューデータから取得する
const POINTS = [
  "超音波を真皮中層に照射し、コラーゲンの生成を促します",
  "皮膚表面を傷つけない、非侵襲的な施術です",
  "目元・フェイスライン・首まで、気になる部位に合わせて選べます",
];

export default function SofwaveFeature() {
  const treatments = equipmentData["sofwave"].treatments;

  return (
    <section id="sofwave" className="scroll-mt-16 bg-white py-14 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-lunage-line bg-lunage-sand px-5 py-10 md:px-14 md:py-16"
        >
          <div className="text-center">
            <p className="inline-block rounded-full border border-lunage-gold px-4 py-1 font-shippori text-sm tracking-[0.15em] text-lunage-goldDark">
              人気の施術
            </p>
            <h2 className="mt-5 font-shippori text-4xl font-normal tracking-wide text-lunage-ink md:text-5xl">
              ソフウェーブ
            </h2>
            <p className="mt-2 font-shippori text-sm tracking-[0.2em] text-lunage-gold">SOFWAVE</p>
            <div className="mx-auto mt-5 h-px w-10 bg-lunage-gold" />
            <p className="mx-auto mt-6 max-w-xl font-shippori text-base leading-[2] text-lunage-ink md:text-lg">
              切らずに、ハリのある印象へ。
              <br />
              エイジングケアを意識する方に選ばれている、超音波の施術です。
            </p>
          </div>

          <ul className="mx-auto mt-8 max-w-xl space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex gap-3 font-shippori text-[15px] leading-relaxed text-lunage-ink">
                <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-lunage-gold" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-xl rounded-xl bg-white px-5 py-2 md:px-8">
            <p className="pt-4 font-shippori text-sm tracking-widest text-lunage-gold">料金（税込）</p>
            <ul className="divide-y divide-lunage-line">
              {treatments.map((t) => (
                <li key={t.name} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-shippori text-base text-lunage-ink md:text-lg">{t.name}</span>
                  <span className="whitespace-nowrap font-shippori text-lg font-medium text-lunage-ink md:text-xl">
                    {formatPrice(t.regularPrice)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://lin.ee/teAI9dY"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-lunage-gold px-8 py-3.5 text-center font-shippori text-base text-white transition-colors hover:bg-lunage-goldDark sm:w-auto"
            >
              LINEで予約
            </a>
            <Link
              href="/menu#sagging"
              className="w-full rounded-full border border-lunage-gold px-8 py-3.5 text-center font-shippori text-base text-lunage-goldDark transition-colors hover:bg-white sm:w-auto"
            >
              たるみの施術をすべて見る
            </Link>
          </div>
          <p className="mt-6 text-center font-shippori text-xs leading-relaxed text-lunage-ink/70">
            効果や感じ方には個人差があります。施術の内容・リスク・副作用は、カウンセリングで医師が説明します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
