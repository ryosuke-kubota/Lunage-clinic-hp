"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { easeOut } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: easeOut,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <header className="w-full bg-white/95 backdrop-blur-sm fixed top-0 z-50 border-b border-[#d6c6b5]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="text-xl md:text-2xl font-bold text-[#54585f] font-shippori">
              LUNAGE CLINIC
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#54585f] hover:text-[#DDCDB9] transition-colors font-shippori text-sm">
              Home
            </Link>
            <Link href="/#about" className="text-[#54585f] hover:text-[#DDCDB9] transition-colors font-shippori text-sm">
              About
            </Link>
            <Link href="/menu" className="text-[#54585f] hover:text-[#DDCDB9] transition-colors font-shippori text-sm">
              Menu
            </Link>
            <Link href="/pricing" className="text-[#54585f] hover:text-[#DDCDB9] transition-colors font-shippori text-sm">
              Pricing
            </Link>
            {/* <Link href="/#doctor" className="text-[#54585f] hover:text-[#DDCDB9] transition-colors font-shippori text-sm">
              Doctor
            </Link> */}
            <Link href="/company" className="text-[#54585f] hover:text-[#DDCDB9] transition-colors font-shippori text-sm">
              Company
            </Link>
            {/* <Link href="/#faq" className="text-[#54585f] hover:text-[#DDCDB9] transition-colors font-shippori text-sm">
              FAQ
            </Link> */}
            <Link href="/#access" className="text-[#54585f] hover:text-[#DDCDB9] transition-colors font-shippori text-sm">
              Access
            </Link>
          </nav>

          {/* Reservation Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <a
              href="https://lin.ee/teAI9dY"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex bg-[#DDCDB9] hover:bg-[#c2ac94] text-white font-shippori px-4 md:px-6 py-2 rounded-full text-sm transition-colors"
            >
              ご予約はこちら
            </a>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg hover:bg-[#faf3ef] transition-colors"
              onClick={toggleMenu}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-[#54585f]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-[#54585f]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute left-0 right-0 top-full bg-white backdrop-blur-md border-b border-[#d6c6b5]/20 shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/"
                    className="block px-4 py-3 text-[#54585f] hover:text-[#DDCDB9] hover:bg-[#faf3ef] rounded-lg font-shippori transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/#about"
                    className="block px-4 py-3 text-[#54585f] hover:text-[#DDCDB9] hover:bg-[#faf3ef] rounded-lg font-shippori transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/menu"
                    className="block px-4 py-3 text-[#54585f] hover:text-[#DDCDB9] hover:bg-[#faf3ef] rounded-lg font-shippori transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Menu
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/pricing"
                    className="block px-4 py-3 text-[#54585f] hover:text-[#DDCDB9] hover:bg-[#faf3ef] rounded-lg font-shippori transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </motion.div>
                {/* <motion.div variants={menuItemVariants}>
                  <Link
                    href="/#doctor"
                    className="block px-4 py-3 text-[#54585f] hover:text-[#DDCDB9] hover:bg-[#faf3ef] rounded-lg font-shippori transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Doctor
                  </Link>
                </motion.div> */}
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/company"
                    className="block px-4 py-3 text-[#54585f] hover:text-[#DDCDB9] hover:bg-[#faf3ef] rounded-lg font-shippori transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Company
                  </Link>
                </motion.div>
                {/* <motion.div variants={menuItemVariants}>
                  <Link
                    href="/#faq"
                    className="block px-4 py-3 text-[#54585f] hover:text-[#DDCDB9] hover:bg-[#faf3ef] rounded-lg font-shippori transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </motion.div> */}
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/#access"
                    className="block px-4 py-3 text-[#54585f] hover:text-[#DDCDB9] hover:bg-[#faf3ef] rounded-lg font-shippori transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Access
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants} className="pt-4 border-t border-[#d6c6b5]/20">
                  <a
                    href="https://lin.ee/teAI9dY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#DDCDB9] hover:bg-[#c2ac94] text-sm text-white font-shippori py-2 px-6 rounded-full transition-colors block w-full mx-auto text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ご予約はこちら
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
    </LazyMotion>
  );
}
