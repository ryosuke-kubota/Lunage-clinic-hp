"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { easeOut } from "framer-motion";

const faqData = [
  {
    id: 1,
    category: "施術について",
    question: "初回カウンセリングはどのような内容ですか？",
    answer: "お客様のお悩みやご希望をじっくりとお聞きした上で、最適な治療法をご提案いたします。施術内容、料金、リスク、アフターケアについて詳しくご説明し、納得いただいてから施術を行います。カウンセリングは無料ですので、お気軽にご相談ください。"
  },
  {
    id: 2,
    category: "施術について",
    question: "痛みはありますか？",
    answer: "施術の種類によって異なりますが、当クリニックでは痛みを最小限に抑える工夫をしております。注射系の施術では極細針を使用し、必要に応じて麻酔クリームや笑気ガスを使用いたします。痛みに不安がある方は、事前にご相談ください。"
  },
  {
    id: 3,
    category: "料金について",
    question: "支払い方法はどのようなものがありますか？",
    answer: "現金、各種クレジットカード（VISA、MasterCard、JCB、AMEX）、医療ローンをご利用いただけます。医療ローンは最大60回まで分割可能で、金利手数料当クリニック負担のキャンペーンも定期的に実施しております。"
  },
  {
    id: 4,
    category: "施術について",
    question: "ダウンタイムはどのくらいですか？",
    answer: "施術内容によって異なります。注射系の施術（ボトックス、ヒアルロン酸）は数日、糸リフトは1週間程度、切開を伴う施術は2週間程度が目安です。日常生活に支障が出ないよう、ライフスタイルに合わせた施術プランをご提案いたします。"
  },
  {
    id: 5,
    category: "予約について",
    question: "予約の変更・キャンセルはできますか？",
    answer: "はい、可能です。ただし、施術日の2日前までにご連絡をお願いしております。前日・当日のキャンセルの場合、キャンセル料が発生する場合がございます。予約の変更は、お電話またはLINEにてお気軽にご連絡ください。"
  },
  {
    id: 6,
    category: "アフターケア",
    question: "施術後のアフターケアはありますか？",
    answer: "はい、充実したアフターケアをご用意しております。施術後の経過観察、必要に応じた診察、お悩み相談などを承っております。また、24時間対応の緊急連絡先もご用意しており、何かご不安なことがあればいつでもご相談いただけます。"
  },
  {
    id: 7,
    category: "安全性について",
    question: "施術の安全性について教えてください",
    answer: "当クリニックでは、厚生労働省認可の薬剤・機器のみを使用し、経験豊富な医師が施術を行います。また、万が一の際に備えた医療設備も完備しており、安全性を最優先に施術を行っております。リスクについても事前に十分ご説明いたします。"
  },
  {
    id: 8,
    category: "効果について",
    question: "効果はどのくらい持続しますか？",
    answer: "施術内容や個人差によって異なりますが、ボトックスは4-6ヶ月、ヒアルロン酸は8-12ヶ月、糸リフトは1-2年程度が目安です。より長期的な効果をお求めの場合は、定期的なメンテナンスをおすすめしております。"
  }
];

const categories = ["すべて", "施術について", "料金について", "予約について", "アフターケア", "安全性について", "効果について"];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const filteredFAQ = selectedCategory === "すべて"
    ? faqData
    : faqData.filter(item => item.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#faf3ef]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-[#DDCDB9] rounded-full mr-3" />
            <span className="text-[#DDCDB9] font-shippori text-sm tracking-wide">よくあるご質問</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-light text-[#54585f] mb-8">
            FAQ
          </h2>
          <p className="text-[#8a6d62] font-shippori text-lg">
            お客様からよくいただくご質問にお答えします
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-shippori text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-[#DDCDB9] text-white shadow-lg'
                    : 'bg-white text-[#8a6d62] hover:bg-[#DDCDB9]/10 border border-[#dacacf]'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            {filteredFAQ.map((item, index) => (
              <motion.div
                key={`${selectedCategory}-${item.id}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                className="bg-white rounded-xl shadow-sm border border-[#dacacf]/20 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#faf3ef]/50 transition-colors"
                  whileHover={{ backgroundColor: "rgba(250, 243, 239, 0.5)" }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#DDCDB9]/10 rounded-full flex items-center justify-center text-[#DDCDB9] text-sm font-bold mt-1">
                      Q
                    </div>
                    <div>
                      <div className="text-xs text-[#DDCDB9] font-shippori mb-1">
                        {item.category}
                      </div>
                      <h3 className="text-[#54585f] font-shippori font-medium text-lg">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDownIcon className="w-5 h-5 text-[#DDCDB9]" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-6 h-6 bg-[#d6c6b5]/20 rounded-full flex items-center justify-center text-[#8a6d62] text-sm font-bold">
                            A
                          </div>
                          <p className="text-[#8a6d62] font-shippori leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-[#dacacf]/20"
        >
          <h3 className="text-2xl font-shippori font-medium text-[#54585f] mb-4">
            他にご質問がございましたら
          </h3>
          <p className="text-[#8a6d62] font-shippori mb-6">
            お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#DDCDB9] hover:bg-[#c2ac94] text-white font-shippori px-6 py-3 rounded-full transition-all"
            >
              電話で相談する
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d6c6b5] hover:bg-[#c2ac94] text-white font-shippori px-6 py-3 rounded-full transition-all"
            >
              LINEで相談する
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
