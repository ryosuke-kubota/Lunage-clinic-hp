"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "山田 美香",
    age: 28,
    treatment: "ヒアルロン酸注射",
    rating: 5,
    comment: "自然な仕上がりで、とても満足しています。スタッフの皆さんも親切で、安心して施術を受けることができました。定期的に通いたいと思います。",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "佐藤 理恵",
    age: 35,
    treatment: "ボトックス注射",
    rating: 5,
    comment: "施術後の効果に大変満足しています。痛みもほとんどなく、先生の技術力の高さを実感しました。また、アフターケアも丁寧で安心です。",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "田中 聡子",
    age: 42,
    treatment: "肌管理メニュー",
    rating: 5,
    comment: "肌の調子が格段に良くなりました。クリニックの雰囲気も落ち着いていて、リラックスして過ごせます。継続して通っています。",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "鈴木 麻衣",
    age: 31,
    treatment: "水光注射",
    rating: 5,
    comment: "肌のハリとツヤが戻ってきて、周りの人からも「綺麗になったね」と言われるようになりました。コスパも良く、定期的に利用しています。",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "高橋 香織",
    age: 26,
    treatment: "二重形成",
    rating: 5,
    comment: "ずっと悩んでいたコンプレックスが解消されました。自然で美しい仕上がりに大満足です。先生の丁寧なカウンセリングも良かったです。",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "中村 智美",
    age: 39,
    treatment: "糸リフト",
    rating: 5,
    comment: "フェイスラインがすっきりして、若返った気分です。ダウンタイムも短く、仕事にも支障がありませんでした。信頼できるクリニックです。",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const StarRating = ({ rating }: { rating: number }) => {
    const stars = Array.from({ length: 5 }, (_, i) => ({ id: i, filled: i < rating }));
    return (
      <div className="flex space-x-1">
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}-${star.filled}`}
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: star.id * 0.1, duration: 0.3 }}
          >
            <svg
              className={`w-5 h-5 ${star.filled ? 'text-[#caa9af]' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#faf3ef] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-[#caa9af] rounded-full mr-3" />
            <span className="text-[#caa9af] font-shippori text-sm tracking-wide">お客様の声</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-light text-[#54585f] mb-8">
            Customer Reviews
          </h2>
          <p className="text-[#8a6d62] font-shippori text-lg max-w-2xl mx-auto">
            多くのお客様から頂いた喜びの声をご紹介します。
            <br />
            あなたも美しさを手に入れませんか？
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#caa9af]/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#caa9af] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    ★
                  </div>
                </motion.div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <StarRating rating={testimonials[activeIndex].rating} />
                <blockquote className="text-xl font-shippori text-[#54585f] mt-4 mb-6 leading-relaxed">
                  "{testimonials[activeIndex].comment}"
                </blockquote>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                  <div>
                    <p className="font-shippori font-medium text-[#54585f]">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-[#8a6d62] font-shippori text-sm">
                      {testimonials[activeIndex].age}歳 • {testimonials[activeIndex].treatment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              onClick={() => setActiveIndex(index)}
              className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? 'ring-2 ring-[#caa9af] shadow-xl'
                  : 'hover:shadow-xl'
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-shippori font-medium text-[#54585f] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#8a6d62] font-shippori text-xs">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className="text-[#54585f] font-shippori text-sm mt-3 line-clamp-3">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "2,500+", label: "満足いただいたお客様" },
            { number: "98%", label: "リピート率" },
            { number: "5.0", label: "平均評価" },
            { number: "3年", label: "平均継続期間" }
          ].map((stat, index) => (
            <motion.div
              key={`testimonial-stat-${stat.label}-${index}`}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-3xl md:text-4xl font-shippori font-bold text-[#caa9af] mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-[#8a6d62] font-shippori text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
