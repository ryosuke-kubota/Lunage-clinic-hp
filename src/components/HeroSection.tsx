"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import nextConfig from "../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function HeroSection() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // デバイス判定
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden mt-16 md:mt-20"
      id="home"
    >
      {/* メイン画像 */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y: y1 }}
        className="inset-0 w-full h-auto"
      >
        {/* デスクトップ用画像 */}
        <img
          src={`${BASE_PATH}/images/hero/hero.png`}
          alt="LUNAGE CLINIC Hero"
          className="hidden md:block w-full h-auto object-cover"
          loading="eager"
        />
        
        {/* スマホ用画像 */}
        <img
          src={`${BASE_PATH}/images/hero/hero_sp.png`}
          alt="LUNAGE CLINIC Hero Mobile"
          className="block md:hidden w-full h-auto object-cover"
          loading="eager"
        />
      </motion.div>

      {/* 下部のテキスト（スマホのみ） */}
      {/* {isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ opacity }}
          className="absolute bottom-6 left-0 right-0 z-20 flex justify-center px-4"
        >
          <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl px-6 py-4 sm:px-12 sm:py-8 border border-white/30 shadow-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-[#8a6d62] font-shippori text-xs sm:text-base mb-2"
            >
              表参道の美肌治療専門クリニック
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="text-[#54585f] font-shippori font-medium text-sm sm:text-4xl lg:text-5xl"
            >
              LUNAGE CLINIC
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "4rem" } : { width: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mt-4 h-0.5 bg-gradient-to-r from-[#DDCDB9] to-[#dacacf] mx-auto"
            />
          </div>
        </motion.div>
      )} */}

      {/* 装飾的な浮遊要素（デスクトップのみ） */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-10 w-4 h-4 bg-white/40 rounded-full backdrop-blur-sm"
          />
          
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 right-16 w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm"
          />
          
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute top-2/3 left-1/4 w-3 h-3 bg-white/50 rounded-full backdrop-blur-sm"
          />
        </>
      )}
    </section>
  );
}
