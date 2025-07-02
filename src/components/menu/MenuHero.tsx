"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MenuHero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-[#faf3ef] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#caa9af]/10 to-[#d6c6b5]/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#c2ac94]/10 to-[#dacacf]/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <nav className="flex items-center space-x-2 text-sm">
            <Link
              href="/"
              className="text-[#8a6d62] hover:text-[#caa9af] transition-colors font-shippori"
            >
              Home
            </Link>
            <span className="text-[#8a6d62]">→</span>
            <span className="text-[#54585f] font-shippori">Menu</span>
          </nav>
        </motion.div>

        {/* Hero Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-[#caa9af] rounded-full mr-3" />
              <span className="text-[#caa9af] font-shippori text-sm tracking-wide">施術・料金案内</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-shippori font-light text-[#54585f] mb-8">
              Menu
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-[#8a6d62] font-shippori text-lg sm:text-xl leading-relaxed mb-8">
              美容医療をもっと身近に。一人ひとりのお悩みに合わせた
              <br className="hidden sm:block" />
              最適な施術をご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-[#8a6d62] font-shippori">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#caa9af] rounded-full mr-2" />
                <span>初回カウンセリング無料</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#caa9af] rounded-full mr-2" />
                <span>医療ローン対応</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#caa9af] rounded-full mr-2" />
                <span>アフターケア充実</span>
              </div>
            </div>
          </motion.div>

          {/* Note about pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#caa9af]/20 max-w-2xl mx-auto"
          >
            <h3 className="text-[#54585f] font-shippori font-medium mb-3">料金について</h3>
            <div className="text-[#8a6d62] font-shippori text-sm space-y-2">
              <p>• 表示価格は税込価格です</p>
              <p>• 初回カウンセリング料は無料です</p>
              {/* <p>• YouTubeフォロワー様特別価格もご用意しております</p>
              <p>• 医療ローンは最大60回まで分割可能です</p> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
