"use client";

import { motion } from "framer-motion";

export default function MenuHero() {
  return (
    <section className="bg-lunage-sand pt-28 pb-10 md:pt-32 md:pb-14">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-shippori text-sm tracking-[0.2em] text-lunage-gold">施術・料金案内</p>
          <h1 className="mt-2 font-shippori font-normal text-4xl md:text-5xl tracking-wide text-lunage-ink">Menu</h1>
          <div className="mx-auto mt-5 h-px w-10 bg-lunage-gold" />
          <p className="mt-5 font-shippori text-[15px] md:text-base leading-relaxed text-lunage-ink/80">
            美容医療をもっと身近に。一人ひとりのお悩みに合わせた
            <br className="hidden sm:block" />
            最適な施術をご提案いたします。
          </p>
          <ul className="mt-6 flex flex-col items-center justify-center gap-2 font-shippori text-sm text-lunage-ink/80 sm:flex-row sm:gap-6">
            <li className="flex items-center">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-lunage-gold" />
              初回カウンセリング無料
            </li>
            <li className="flex items-center">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-lunage-gold" />
              医療ローン対応
            </li>
            <li className="flex items-center">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-lunage-gold" />
              アフターケア充実
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
