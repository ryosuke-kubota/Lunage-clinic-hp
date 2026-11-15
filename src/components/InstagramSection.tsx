"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

export default function InstagramSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <SectionHeading label="最新の施術情報やキャンペーン" title="Instagram" />

          <div className="mx-auto mb-8 max-w-md border-l-2 border-lunage-gold bg-lunage-sand px-5 py-4 text-left">
            <p className="font-shippori text-sm font-medium text-[#54585f] mb-1">
              クリニックまでの行き方も、Instagramでご案内しています
            </p>
            <p className="font-shippori text-xs leading-relaxed text-[#8a6d62]">
              初めての方も迷わないよう、駅からの道順を写真つきで紹介しています。来院前にぜひご覧ください。
            </p>
          </div>

          <div className="mx-auto mb-8 w-full max-w-[540px] overflow-hidden rounded-xl bg-white border border-lunage-line">
            <iframe
              src="https://www.instagram.com/lunage_clinic/embed"
              title="LUNAGE CLINIC Instagram"
              className="block w-full border-0"
              style={{ height: "min(490px, calc(125px + (100vw - 32px) * 0.667))" }}
              loading="lazy"
              scrolling="no"
              allowTransparency
            />
          </div>

          <Link
            href="https://www.instagram.com/lunage_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-lunage-ink text-lunage-ink px-8 py-3 rounded-full hover:bg-lunage-ink hover:text-white transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
            </svg>
            <span className="font-medium">@lunage_clinic</span>
          </Link>

          <div className="mt-6 text-sm text-lunage-goldDark">
            <p>フォロー&いいねで最新情報をチェック！</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}