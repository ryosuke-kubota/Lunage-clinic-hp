"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import nextConfig from "../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function HeroSection() {
  // SSR対応のデバイス判定（初期値をfalseに設定してhydration mismatchを回避）
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // デバイス判定の最適化
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    setIsLoaded(true);
    
    const handleResize = () => {
      checkDevice();
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="relative overflow-hidden mt-16 md:mt-20"
      id="home"
    >
      {/* メイン画像 - アニメーションを削除してFCPを改善 */}
      <div className="inset-0 w-full h-auto">
        {/* デスクトップ用画像 */}
        <Image
          src={`${BASE_PATH}/images/hero/hero.webp`}
          alt="LUNAGE CLINIC Hero"
          width={1920}
          height={1080}
          className="hidden md:block w-full h-auto object-cover"
          priority
          fetchPriority="high"
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        {/* スマホ用画像 */}
        <Image
          src={`${BASE_PATH}/images/hero/hero_sp.webp`}
          alt="LUNAGE CLINIC Hero Mobile"
          width={750}
          height={1334}
          className="block md:hidden w-full h-auto object-cover"
          priority
          fetchPriority="high"
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* 下部のグラデーション背景（スマホのみ） - hydration後に表示 */}
      {isLoaded && isMobile && (
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white/80 via-white/60 to-transparent z-10" />
      )}

      {/* 下部のテキスト（スマホのみ） - hydration後に表示 */}
      {isLoaded && isMobile && (
        <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center px-4">
          <div className="text-center px-6 py-4 sm:px-12 sm:py-8">
            <p className="text-[#c38092] font-shippori text-xs sm:text-base mb-2">
              表参道の美肌治療専門クリニック
            </p>
            
            <h1 className="text-[#54585f] font-shippori font-medium text-base sm:text-4xl lg:text-5xl">
              LUNAGE CLINIC
            </h1>
          </div>
        </div>
      )}
    </section>
  );
}
