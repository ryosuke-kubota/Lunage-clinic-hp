"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import nextConfig from "../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function HeroSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // モバイル判定
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // モバイルではパララックス効果を軽減
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -100 : -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // 各シャボン玉のデータ（モバイルでは数を減らす）
  const allBubbleImages = [
    { src: `${BASE_PATH}/images/hero/hero1.jpg`, size: "large", delay: 0, x: "0", y: "5%" },
    { src: `${BASE_PATH}/images/hero/hero2.jpg`, size: "medium", delay: 0.3, x: "70%", y: "15%" },
    { src: `${BASE_PATH}/images/hero/hero3.jpg`, size: "small", delay: 0.6, x: "15%", y: "60%" },
    { src: `${BASE_PATH}/images/hero/hero4.jpg`, size: "medium", delay: 0.9, x: "80%", y: "75%" },
    { src: `${BASE_PATH}/images/hero/hero5.jpg`, size: "small", delay: 1.2, x: "35%", y: "10%" },
    { src: `${BASE_PATH}/images/hero/hero6.jpg`, size: "large", delay: 1.5, x: "30%", y: "75%" },
    { src: `${BASE_PATH}/images/hero/hero7.jpg`, size: "medium", delay: 1.8, x: "85%", y: "45%" },
    { src: `${BASE_PATH}/images/hero/hero8.jpg`, size: "small", delay: 2.1, x: "0", y: "70%" }
  ];

  // モバイルでは表示する画像数を制限
  const bubbleImages = allBubbleImages;

  // サイズのマッピング（一回り大きく）
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80";
      case "medium":
        return "w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52";
      case "small":
        return "w-16 h-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32";
      default:
        return "w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52";
    }
  };

  return (
    <section
      ref={containerRef}
      className="pt-20 pb-16 bg-gradient-to-b from-[#faf3ef] to-[#dacacf] overflow-hidden"
      id="home"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ opacity }}
          className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-center gpu-accelerated"
        >
          {/* 背景の装飾要素（モバイルでは簡素化） */}
          <motion.div
            style={{ y: y1 }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.div
              animate={isMobile ? {} : {
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#caa9af]/20 to-[#d6c6b5]/20 ${isMobile ? 'blur-xl' : 'blur-2xl sm:blur-3xl'}`}
              style={{ willChange: 'transform' }}
            />
            <motion.div
              animate={isMobile ? {} : {
                scale: [1, 1.2, 1],
                rotate: [0, -3, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className={`absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#c2ac94]/20 to-[#dacacf]/20 ${isMobile ? 'blur-xl' : 'blur-2xl sm:blur-3xl'}`}
              style={{ willChange: 'transform' }}
            />
          </motion.div>

          {/* シャボン玉画像コンテナ */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, staggerChildren: 0.15 }}
            style={{ y: y2 }}
            className="relative z-10 w-full max-w-6xl h-[420px] sm:h-[500px] lg:h-[600px] contain-layout"
          >
            {/* シャボン玉画像群 */}
            {bubbleImages.map((bubble, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0,
                  y: 100
                }}
                animate={inView ? {
                  opacity: 0.7,
                  scale: 1,
                  y: 0
                } : {
                  opacity: 0,
                  scale: 0,
                  y: 100
                }}
                transition={{
                  duration: 1.2,
                  delay: bubble.delay,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="absolute"
                style={{
                  left: bubble.x,
                  top: bubble.y,
                  transform: "translate(-50%, -50%)"
                }}
              >
                {/* 浮遊するシャボン玉コンテナ */}
                <motion.div
                  animate={isMobile ? {
                    y: [0, -15, 0],
                  } : {
                    y: [0, -30, 0],
                    x: [0, 15, -10, 0],
                    rotate: [0, 5, -3, 0]
                  }}
                  transition={{
                    duration: isMobile ? 6 : 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: bubble.delay + 1.2
                  }}
                  className={`${getSizeClasses(bubble.size)} rounded-full overflow-hidden shadow-2xl cursor-pointer group gpu-accelerated smooth-animation ${isMobile ? 'mobile-optimized' : ''}`}
                  whileHover={isMobile ? {} : {
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    willChange: 'transform',
                    transform: 'translate3d(0, 0, 0)' // GPUアクセラレーション強制
                  }}
                >
                  {/* シャボン玉のグラデーション背景 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                  
                  {/* 画像 */}
                  <img
                    src={bubble.src}
                    alt={`Beauty Portrait ${index + 1}`}
                    className={`w-full h-full object-cover rounded-full ${isMobile ? '' : 'group-hover:scale-110'} transition-transform duration-500 filter brightness-110 contrast-90 saturate-80`}
                    loading="lazy"
                    style={{ willChange: 'transform' }}
                  />
                  
                  
                  {/* ホバー時のオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#caa9af]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </motion.div>
              </motion.div>
            ))}

            {/* 追加の装飾シャボン玉（モバイルでは数を減らす） */}
            {[...Array(isMobile ? 3 : 6)].map((_, index) => (
              <motion.div
                key={`decoration-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isMobile ? {
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.9, 1.1, 0.9],
                } : {
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.8, 1.2, 0.8],
                  y: [0, -20, 0],
                  x: [0, 10, -5, 0]
                }}
                transition={{
                  duration: isMobile ? 4 : 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className={`absolute w-4 h-4 sm:w-6 sm:h-6 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#caa9af]/30 to-[#dacacf]/30 ${isMobile ? '' : 'backdrop-blur-sm'}`}
                style={{
                  left: `${5 + index * 15}%`,
                  top: `${15 + index * 12}%`,
                  willChange: 'transform',
                  transform: 'translate3d(0, 0, 0)'
                }}
              />
            ))}
          </motion.div>

          {/* 中央のテキスト */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="text-center bg-white/10 backdrop-blur-md rounded-3xl px-8 py-6 border border-white/20">
              <p className="text-[#8a6d62] font-shippori text-sm sm:text-base mb-2">
                銀座の美容クリニック
              </p>
              <h1 className="text-[#54585f] font-shippori font-medium text-2xl sm:text-3xl lg:text-4xl">
                LUNAGE CLINIC
              </h1>
              <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-[#caa9af] to-[#dacacf] mx-auto" />
            </div>
          </motion.div>

          {/* 浮遊テキスト要素（モバイルでは簡素化） */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 text-[#54585f]/30 font-shippori text-3xl sm:text-6xl font-light transform -rotate-12 select-none"
          >
            <motion.div
              animate={isMobile ? {} : {
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform' }}
            >
              Beauty
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-10 sm:top-20 right-10 sm:right-20 text-[#54585f]/20 font-shippori text-2xl sm:text-4xl font-light transform rotate-12 select-none"
          >
            <motion.div
              animate={isMobile ? {} : {
                y: [0, 15, 0],
                rotate: [0, -2, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              style={{ willChange: 'transform' }}
            >
              LUNAGE
            </motion.div>
          </motion.div>

          {/* 追加の浮遊要素（モバイルでは非表示） */}
          {!isMobile && (
            <>
              <motion.div
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/4 w-2 h-2 sm:w-4 sm:h-4 bg-[#caa9af]/40 rounded-full"
                style={{ willChange: 'transform' }}
              />
              <motion.div
                animate={{
                  x: [0, -40, 0],
                  y: [0, 25, 0],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-1/3 right-1/4 w-3 h-3 sm:w-6 sm:h-6 bg-[#d6c6b5]/40 rounded-full"
                style={{ willChange: 'transform' }}
              />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
