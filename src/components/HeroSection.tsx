"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
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
          className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-center"
        >
          {/* Enhanced Background decorative elements */}
          <motion.div
            style={{ y: y1 }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
              className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#caa9af]/20 to-[#d6c6b5]/20 blur-2xl sm:blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -3, 0]
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#c2ac94]/20 to-[#dacacf]/20 blur-2xl sm:blur-3xl"
            />
          </motion.div>

          {/* Enhanced Image Collage - Responsive Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ y: y2 }}
            className="relative z-10 w-full max-w-6xl h-[420px] sm:h-[500px] lg:h-[600px]"
          >
            {/* Mobile Layout (< sm) - Improved Modern Design */}
            <div className="block sm:hidden space-y-6">
              {/* Main featured image with overlay text */}
              <motion.div
                variants={imageVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer h-56 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#c2ac94] to-[#8a6d62] relative">
                  <img
                    src="/images/hero/hero1.jpg"
                    alt="Beauty Portrait Main"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-115 contrast-85 saturate-75 blur-[0.3px] hue-rotate-15"
                  />
                </div>
              </motion.div>

              {/* Asymmetric grid layout */}
              <div className="grid grid-cols-3 gap-4 h-40">
                {/* Left - Medium portrait */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group cursor-pointer col-span-2 rounded-xl overflow-hidden shadow-lg"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#dacacf] to-[#c2ac94]">
                    <img
                      src="/images/hero/hero2.jpg"
                      alt="Beauty Portrait 1"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-112 contrast-82 saturate-70 blur-[0.2px] hue-rotate-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#caa9af]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Right - Two stacked small images */}
                <div className="space-y-4">
                  <motion.div
                    variants={imageVariants}
                    whileHover={{
                      scale: 1.08,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group cursor-pointer h-16 rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#d6c6b5] to-[#c2ac94]">
                      <img
                        src="/images/hero/hero3.jpg"
                        alt="Beauty Portrait 2"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-118 contrast-80 saturate-65 blur-[0.3px] hue-rotate-20"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={imageVariants}
                    whileHover={{
                      scale: 1.08,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group cursor-pointer h-16 rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#c2ac94] to-[#8a6d62]">
                      <img
                        src="/images/hero/hero4.jpg"
                        alt="Beauty Portrait 3"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-114 contrast-83 saturate-72 blur-[0.2px] hue-rotate-12"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom decorative row */}
              <div className="flex items-center justify-between">
                {/* Floating elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear"
                  }}
                  className="w-12 h-12 bg-gradient-to-br from-[#caa9af] to-[#dacacf] rounded-full opacity-80"
                />

                {/* Center text */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-center"
                >
                  <p className="text-[#8a6d62] font-shippori text-sm">
                    銀座の美容皮膚科
                  </p>
                  <h4 className="text-[#54585f] font-shippori font-medium text-base">
                    BIJOU CLINIC
                  </h4>
                </motion.div>

                {/* Right decorative element */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }}
                  className="w-8 h-8 border-2 border-[#caa9af] rounded-full opacity-60"
                />
              </div>
            </div>

            {/* Tablet Layout (sm to lg) */}
            <div className="hidden sm:block lg:hidden">
              <div className="grid grid-cols-8 grid-rows-6 gap-3 w-full h-full">
                {/* Main large portrait */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 3,
                    transition: { duration: 0.3 }
                  }}
                  className="col-span-3 row-span-6 relative group cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#c2ac94] to-[#8a6d62] rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/images/hero/hero2.jpg"
                      alt="Beauty Portrait 1"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-112 contrast-82 saturate-70 blur-[0.2px] hue-rotate-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8a6d62]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Medium square portrait */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.08,
                    rotateZ: 1,
                    transition: { duration: 0.3 }
                  }}
                  className="col-span-2 row-span-3 col-start-5 row-start-1 relative group cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#dacacf] to-[#c2ac94] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/hero/hero3.jpg"
                      alt="Beauty Portrait 2"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-118 contrast-80 saturate-65 blur-[0.3px] hue-rotate-20"
                    />
                  </div>
                </motion.div>

                {/* Large center portrait */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.06,
                    rotateX: 3,
                    rotateY: 3,
                    transition: { duration: 0.4 }
                  }}
                  className="col-span-3 row-span-4 col-start-4 row-start-3 relative z-20 group cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#caa9af] to-[#8a6d62] rounded-lg overflow-hidden shadow-xl transform rotate-1">
                    <img
                      src="/images/hero/hero1.jpg"
                      alt="Beauty Portrait Main"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-115 contrast-85 saturate-75 blur-[0.3px] hue-rotate-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#caa9af]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Small portrait top right */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: -2,
                    transition: { duration: 0.3 }
                  }}
                  className="col-span-2 row-span-2 col-start-7 row-start-1 relative group cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#d6c6b5] to-[#c2ac94] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/hero/hero4.jpg"
                      alt="Beauty Portrait 3"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-114 contrast-83 saturate-72 blur-[0.2px] hue-rotate-12"
                    />
                  </div>
                </motion.div>

                {/* Bottom right accent */}
                <motion.div
                  variants={imageVariants}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear"
                  }}
                  className="col-span-1 row-span-1 col-start-8 row-start-6 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#caa9af] to-[#dacacf] rounded-full" />
                </motion.div>
              </div>
            </div>

            {/* Desktop Layout (lg and up) - Original Grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-12 grid-rows-8 gap-4 w-full h-full">
                {/* Main large portrait with enhanced hover effect */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="col-span-4 row-span-8 relative group cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#c2ac94] to-[#8a6d62] rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src="/images/hero/hero2.jpg"
                      alt="Beauty Portrait 1"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-112 contrast-82 saturate-70 blur-[0.2px] hue-rotate-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8a6d62]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Medium square portrait */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.08,
                    rotateZ: 2,
                    transition: { duration: 0.3 }
                  }}
                  className="col-span-3 row-span-4 col-start-6 row-start-1 relative group cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#dacacf] to-[#c2ac94] rounded-lg overflow-hidden shadow-xl">
                    <img
                      src="/images/hero/hero3.jpg"
                      alt="Beauty Portrait 2"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-118 contrast-80 saturate-65 blur-[0.3px] hue-rotate-20"
                    />
                  </div>
                </motion.div>

                {/* Large center portrait with 3D effect */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.06,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.4 }
                  }}
                  className="col-span-5 row-span-6 col-start-5 row-start-3 relative z-20 group cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#caa9af] to-[#8a6d62] rounded-lg overflow-hidden shadow-2xl transform rotate-1">
                    <img
                      src="/images/hero/hero1.jpg"
                      alt="Beauty Portrait Main"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-115 contrast-85 saturate-75 blur-[0.3px] hue-rotate-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#caa9af]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Small portrait top right */}
                <motion.div
                  variants={imageVariants}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: -3,
                    transition: { duration: 0.3 }
                  }}
                  className="col-span-3 row-span-3 col-start-10 row-start-1 relative group cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#d6c6b5] to-[#c2ac94] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/images/hero/hero4.jpg"
                      alt="Beauty Portrait 3"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-114 contrast-83 saturate-72 blur-[0.2px] hue-rotate-12"
                    />
                  </div>
                </motion.div>

                {/* Enhanced bottom right accent with animation */}
                <motion.div
                  variants={imageVariants}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear"
                  }}
                  className="col-span-2 row-span-2 col-start-11 row-start-7 relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#caa9af] to-[#dacacf] rounded-full" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced floating text elements - Responsive */}
          <motion.div
            variants={floatingVariants}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
            className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 text-[#54585f]/30 font-shippori text-3xl sm:text-6xl font-light transform -rotate-12 select-none"
          >
            Beauty
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate={{
              y: [0, 15, 0],
              rotate: [0, -2, 0]
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-10 sm:top-20 right-10 sm:right-20 text-[#54585f]/20 font-shippori text-2xl sm:text-4xl font-light transform rotate-12 select-none"
          >
            LUNAGE
          </motion.div>

          {/* New floating elements - Responsive */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/4 w-2 h-2 sm:w-4 sm:h-4 bg-[#caa9af]/40 rounded-full"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 25, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-1/3 right-1/3 w-3 h-3 sm:w-6 sm:h-6 bg-[#d6c6b5]/30 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
