"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import nextConfig from "../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function HeroSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // デバイス判定
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // デバイスに応じてパララックス効果を調整
  const getParallaxValue = (mobile: number, tablet: number, desktop: number) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    return desktop;
  };
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, getParallaxValue(-50, -75, -100)]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, getParallaxValue(-100, -150, -200)]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // 参考デザインに基づく画像配置（デスクトップ用）
  const desktopBubbleImages = [
    // 左側の大きな縦長ポートレート
    { src: `${BASE_PATH}/images/hero/hero1.jpg`, size: "tall-large", delay: 0, x: "-12%", y: "0%" },
    // 中央下部の小さなクローズアップ
    { src: `${BASE_PATH}/images/hero/hero2.jpg`, size: "small-square", delay: 0.3, x: "25%", y: "70%" },
    // 中央のメイン画像
    { src: `${BASE_PATH}/images/hero/hero3.jpg`, size: "main-square", delay: 0.6, x: "70%", y: "30%" },
    // 右上の横長画像
    { src: `${BASE_PATH}/images/hero/hero4.jpg`, size: "wide-medium", delay: 0.9, x: "58%", y: "8%" },
  ];

  // タブレット用の位置調整（デスクトップ版を参考に調整）
  const tabletBubbleImages = [
    // 左側の大きな縦長ポートレート（デスクトップより少し中央寄り）
    { src: `${BASE_PATH}/images/hero/hero1.jpg`, size: "tablet-tall-large", delay: 0, x: "-8%", y: "5%" },
    // 中央下部の小さなクローズアップ
    { src: `${BASE_PATH}/images/hero/hero2.jpg`, size: "tablet-small-square", delay: 0.3, x: "30%", y: "65%" },
    // 中央のメイン画像（少し左寄り）
    { src: `${BASE_PATH}/images/hero/hero3.jpg`, size: "tablet-main-square", delay: 0.6, x: "65%", y: "35%" },
    // 右上の横長画像
    { src: `${BASE_PATH}/images/hero/hero4.jpg`, size: "tablet-wide-medium", delay: 0.9, x: "55%", y: "12%" },
  ];

  // モバイル用の位置調整
  const mobileBubbleImages = [
    { src: `${BASE_PATH}/images/hero/hero1.jpg`, size: "mobile-large", delay: 0, x: "0%", y: "-10%" },
    { src: `${BASE_PATH}/images/hero/hero2.jpg`, size: "mobile-small", delay: 0.3, x: "35%", y: "20%" },
    { src: `${BASE_PATH}/images/hero/hero3.jpg`, size: "mobile-large", delay: 0.6, x: "65%", y: "85%" },
    { src: `${BASE_PATH}/images/hero/hero4.jpg`, size: "mobile-medium", delay: 0.9, x: "35%", y: "68%" },
  ];

  // デバイスに応じて適切な画像配列を選択
  const bubbleImages = isMobile ? mobileBubbleImages : isTablet ? tabletBubbleImages : desktopBubbleImages;

  // 参考デザインに基づくサイズマッピング
  const getSizeClasses = (size: string) => {
    switch (size) {
      // デスクトップ用サイズ
      case "tall-large":
        return "w-48 h-72 lg:w-[500px] lg:h-auto"; // 縦長の大きな画像
      case "main-square":
        return "w-56 h-56 lg:w-[450px] lg:h-auto"; // メインの正方形画像
      case "small-square":
        return "w-24 h-24 lg:w-[200px] lg:h-auto"; // 小さな正方形画像
      case "wide-medium":
        return "w-48 h-32 lg:w-64 lg:h-40"; // 横長の中サイズ画像
      // タブレット用サイズ（デスクトップとモバイルの中間）
      case "tablet-tall-large":
        return "w-40 h-60 md:w-[350px] md:h-auto"; // タブレット用縦長画像
      case "tablet-main-square":
        return "w-44 h-44 md:w-[320px] md:h-auto"; // タブレット用メイン画像
      case "tablet-small-square":
        return "w-20 h-20 md:w-[150px] md:h-auto"; // タブレット用小画像
      case "tablet-wide-medium":
        return "w-40 h-28 md:w-52 md:h-32"; // タブレット用横長画像
      // モバイル用サイズ
      case "mobile-large":
        return "w-32 h-48 sm:w-40 sm:h-60";
      case "mobile-medium":
        return "w-28 h-28 sm:w-36 sm:h-36";
      case "mobile-small":
        return "w-20 h-20 sm:w-24 sm:h-24";
      default:
        return "w-28 h-28 sm:w-36 sm:h-36";
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
          className="relative min-h-[80vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-center gpu-accelerated"
        >
          {/* 背景の装飾要素（モバイルでは簡素化） */}
          <motion.div
            style={{ y: y1 }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.div
              animate={(isMobile || isTablet) ? {} : {
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#caa9af]/20 to-[#d6c6b5]/20 ${isMobile ? 'blur-xl' : isTablet ? 'blur-2xl' : 'blur-2xl sm:blur-3xl'}`}
              style={{ willChange: 'transform' }}
            />
            <motion.div
              animate={(isMobile || isTablet) ? {} : {
                scale: [1, 1.2, 1],
                rotate: [0, -3, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className={`absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#c2ac94]/20 to-[#dacacf]/20 ${isMobile ? 'blur-xl' : isTablet ? 'blur-2xl' : 'blur-2xl sm:blur-3xl'}`}
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
            className="relative z-10 w-full max-w-6xl h-[420px] sm:h-[500px] md:h-[550px] lg:h-[600px] contain-layout"
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
                  opacity: 1,//透明
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
                  // animate={isMobile ? {
                  //   y: [0, -15, 0],
                  // } : {
                  //   y: [0, -30, 0],
                  //   x: [0, 15, -10, 0],
                  //   rotate: [0, 5, -3, 0]
                  // }}
                  transition={{
                    duration: isMobile ? 6 : isTablet ? 7 : 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: bubble.delay + 1.2
                  }}
                  className={`${getSizeClasses(bubble.size)} overflow-hidden shadow-2xl cursor-pointer group gpu-accelerated smooth-animation ${isMobile ? 'mobile-optimized' : ''}`}
                  // whileHover={isMobile ? {} : {
                  //   scale: 1.1,
                  //   transition: { duration: 0.3 }
                  // }}
                  style={{
                    willChange: 'transform',
                    transform: 'translate3d(0, 0, 0)' // GPUアクセラレーション強制
                  }}
                >
                  {/* 画像 */}
                  <img
                    src={bubble.src}
                    alt={`Beauty Portrait ${index + 1}`}
                    className={`w-full h-full object-cover ${(isMobile || isTablet) ? '' : 'group-hover:scale-105'} transition-transform duration-500`}
                    loading="lazy"
                    style={{ willChange: 'transform' }}
                  />
                  
                  {/* 明るめの白オーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/30" />
                </motion.div>
              </motion.div>
            ))}

            {/* 追加の装飾シャボン玉（モバイルでは数を減らす） */}
            {[...Array(isMobile ? 3 : isTablet ? 4 : 6)].map((_, index) => (
              <motion.div
                key={`decoration-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isMobile ? {
                  opacity: [0.3, 0.5, 0.3],
                  scale: [0.9, 1.1, 0.9],
                } : isTablet ? {
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.85, 1.15, 0.85],
                  y: [0, -15, 0],
                  x: [0, 8, -3, 0]
                } : {
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.8, 1.2, 0.8],
                  y: [0, -20, 0],
                  x: [0, 10, -5, 0]
                }}
                transition={{
                  duration: isMobile ? 4 : isTablet ? 5 + index : 6 + index,
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
            <div className="text-center bg-white/10 backdrop-blur-sm md:backdrop-blur-md rounded-3xl px-8 py-6 border border-white/20">
              <p className="text-[#8a6d62] font-shippori text-sm sm:text-base mb-2">
                表参道の美肌治療専門クリニック
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
              animate={(isMobile || isTablet) ? {} : {
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
            className="absolute top-10 sm:top-20 right-4 sm:right-20 text-[#54585f]/20 font-shippori text-2xl sm:text-4xl font-light transform rotate-12 select-none"
          >
            <motion.div
              animate={(isMobile || isTablet) ? {} : {
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

          {/* 追加の浮遊要素（モバイルとタブレットでは非表示） */}
          {!isMobile && !isTablet && (
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
