"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// Treatment data based on the original site
const treatmentData = {
  "double-eyelid": {
    title: "二重・目元施術",
    description: "自然で美しい目元を作る施術です",
    treatments: [
      {
        name: "BIJOU埋没法 2点",
        regularPrice: "120,000",
        youtubePrice: "36,000",
        monthlyPrice: "60,000",
        installmentPrice: "84,000",
        duration: "20分",
        downtime: "2-3日",
        features: ["腫れが少ない", "自然な仕上がり", "当日メイク可能"]
      },
      {
        name: "BIJOU埋没法 3点",
        regularPrice: "180,000",
        youtubePrice: "54,000",
        monthlyPrice: "90,000",
        installmentPrice: "126,000",
        duration: "30分",
        downtime: "2-3日",
        features: ["より安定した二重", "持続力UP", "自然な仕上がり"]
      },
      {
        name: "クマ取り",
        regularPrice: "198,000",
        youtubePrice: "59,400",
        monthlyPrice: "99,000",
        installmentPrice: "138,600",
        duration: "45分",
        downtime: "1週間",
        features: ["若々しい印象", "クマの改善", "長期効果"]
      },
      {
        name: "切開法",
        regularPrice: "400,000",
        youtubePrice: "120,000",
        monthlyPrice: "200,000",
        installmentPrice: "280,000",
        duration: "60分",
        downtime: "2週間",
        features: ["永続的効果", "しっかりした二重", "幅広い適応"]
      }
    ]
  },
  "face-shaping": {
    title: "輪郭形成",
    description: "理想のフェイスラインを作る施術です",
    treatments: [
      {
        name: "顔脂肪吸引",
        regularPrice: "440,000",
        youtubePrice: "132,000",
        monthlyPrice: "220,000",
        installmentPrice: "308,000",
        duration: "90分",
        downtime: "2週間",
        features: ["小顔効果", "シャープな輪郭", "持続的効果"]
      },
      {
        name: "脂肪注入",
        regularPrice: "650,000",
        youtubePrice: "195,000",
        monthlyPrice: "325,000",
        installmentPrice: "455,000",
        duration: "120分",
        downtime: "1週間",
        features: ["自然なボリューム", "若返り効果", "安全性が高い"]
      }
    ]
  },
  "body-shaping": {
    title: "ボディケア",
    description: "理想のボディラインを目指す施術です",
    treatments: [
      {
        name: "脂肪吸引（体）",
        regularPrice: "1,650,000",
        youtubePrice: "495,000",
        monthlyPrice: "825,000",
        installmentPrice: "1,155,000",
        duration: "120分",
        downtime: "2週間",
        features: ["理想のボディライン", "部分痩せ効果", "リバウンドしにくい"]
      }
    ]
  },
  "skin-care": {
    title: "スキンケア・美肌治療",
    description: "美しい肌を育む治療メニューです",
    treatments: [
      {
        name: "水光注射",
        regularPrice: "23,000",
        monthlyPrice: "46,000",
        duration: "30分",
        downtime: "なし",
        features: ["ツヤ・ハリUP", "即効性", "ダウンタイムなし"]
      },
      {
        name: "肌育注射（手打ち）",
        regularPrice: "59,000",
        monthlyPrice: "118,000",
        duration: "45分",
        downtime: "なし",
        features: ["肌質改善", "毛穴の改善", "美白効果"]
      },
      {
        name: "ハイドラジェントル",
        regularPrice: "16,500",
        duration: "30分",
        downtime: "なし",
        features: ["毛穴の汚れ除去", "肌のトーン改善", "即効性"]
      }
    ]
  },
  "injections": {
    title: "注射・点滴療法",
    description: "美容成分を直接お肌に届ける治療です",
    treatments: [
      {
        name: "韓国製ボツリヌス注射",
        regularPrice: "18,000",
        duration: "15分",
        downtime: "なし",
        features: ["表情ジワの改善", "小顔効果", "汗止め効果"]
      },
      {
        name: "アラガン社製ボトックス注射",
        regularPrice: "18,000",
        duration: "15分",
        downtime: "なし",
        features: ["高品質", "持続性", "安全性"]
      },
      {
        name: "韓国製BIJOUヒアルロン酸 0.5cc",
        regularPrice: "39,800",
        duration: "20分",
        downtime: "なし",
        features: ["自然な仕上がり", "ボリュームアップ", "持続性"]
      },
      {
        name: "美容点滴",
        regularPrice: "6,600",
        duration: "30分",
        downtime: "なし",
        features: ["美白効果", "疲労回復", "免疫力UP"]
      }
    ]
  },
  "threads": {
    title: "糸リフト",
    description: "メスを使わずにリフトアップする治療です",
    treatments: [
      {
        name: "糸リフト 1本",
        regularPrice: "60,000",
        duration: "45分",
        downtime: "1週間",
        features: ["即効性", "ダウンタイム短", "自然な仕上がり"]
      },
      {
        name: "糸リフト 4本",
        regularPrice: "180,000",
        duration: "60分",
        downtime: "1週間",
        features: ["しっかりリフト", "持続性", "小顔効果"]
      }
    ]
  },
  "supplements": {
    title: "内服・サプリメント",
    description: "体の内側からの美容サポートです",
    treatments: [
      {
        name: "美容内服セット（1ヶ月分）",
        regularPrice: "8,800",
        features: ["美白効果", "肌質改善", "アンチエイジング"]
      },
      {
        name: "高濃度ビタミンC",
        regularPrice: "6,600",
        features: ["抗酸化作用", "美白効果", "免疫力向上"]
      }
    ]
  },
  "options": {
    title: "オプション・その他",
    description: "施術をより快適にするオプションです",
    treatments: [
      {
        name: "表面麻酔",
        regularPrice: "3,000",
        features: ["痛みの軽減", "快適な施術"]
      },
      {
        name: "笑気ガス麻酔",
        regularPrice: "5,000",
        features: ["リラックス効果", "不安の軽減"]
      },
      {
        name: "プレミアム個室",
        regularPrice: "10,000",
        features: ["プライベート空間", "特別なケア"]
      }
    ]
  }
};

interface Treatment {
  name: string;
  regularPrice: string;
  youtubePrice?: string;
  monthlyPrice?: string;
  installmentPrice?: string;
  duration?: string;
  downtime?: string;
  features?: string[];
}

interface TreatmentCardProps {
  treatment: Treatment;
  index: number;
}

const TreatmentCard = ({ treatment, index }: TreatmentCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#dacacf]/20"
    >
      <div className="mb-4">
        <h3 className="text-xl font-shippori font-medium text-[#54585f] mb-2">
          {treatment.name}
        </h3>
        {treatment.duration && (
          <div className="flex items-center text-sm text-[#8a6d62] font-shippori mb-2">
            <span className="mr-4">施術時間: {treatment.duration}</span>
            {treatment.downtime && (
              <span>ダウンタイム: {treatment.downtime}</span>
            )}
          </div>
        )}
      </div>

      {/* Price Section */}
      <div className="mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#faf3ef] p-3 rounded-lg">
            <p className="text-xs text-[#8a6d62] font-shippori mb-1">通常価格</p>
            <p className="text-lg font-shippori font-bold text-[#caa9af]">
              ¥{Number.parseInt(treatment.regularPrice).toLocaleString()}
            </p>
          </div>
          {treatment.youtubePrice && (
            <div className="bg-gradient-to-r from-[#caa9af]/10 to-[#d6c6b5]/10 p-3 rounded-lg">
              <p className="text-xs text-[#8a6d62] font-shippori mb-1">YouTube特価</p>
              <p className="text-lg font-shippori font-bold text-[#54585f]">
                ¥{Number.parseInt(treatment.youtubePrice).toLocaleString()}
              </p>
            </div>
          )}
          {treatment.monthlyPrice && (
            <div className="bg-[#dacacf]/20 p-3 rounded-lg">
              <p className="text-xs text-[#8a6d62] font-shippori mb-1">月額制</p>
              <p className="text-lg font-shippori font-bold text-[#54585f]">
                ¥{Number.parseInt(treatment.monthlyPrice).toLocaleString()}
              </p>
            </div>
          )}
          {treatment.installmentPrice && (
            <div className="bg-[#c2ac94]/20 p-3 rounded-lg">
              <p className="text-xs text-[#8a6d62] font-shippori mb-1">分割払い</p>
              <p className="text-lg font-shippori font-bold text-[#54585f]">
                ¥{Number.parseInt(treatment.installmentPrice).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      {treatment.features && (
        <div className="space-y-2">
          <p className="text-sm font-shippori font-medium text-[#54585f]">特徴・効果</p>
          <div className="flex flex-wrap gap-2">
            {treatment.features.map((feature: string) => (
              <span
                key={`feature-${feature}`}
                className="px-3 py-1 bg-[#caa9af]/10 text-[#8a6d62] text-xs font-shippori rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("double-eyelid");

  return (
    <section className="py-16 bg-[#faf3ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {Object.entries(treatmentData).map(([categoryId, category]) => (
          <div key={categoryId} id={categoryId} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-shippori font-light text-[#54585f] mb-4">
                {category.title}
              </h2>
              <p className="text-[#8a6d62] font-shippori text-lg max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.treatments.map((treatment, index) => (
                <TreatmentCard
                  key={`${categoryId}-${treatment.name}-${index}`}
                  treatment={treatment}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Payment Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-shippori font-medium text-[#54585f] mb-6 text-center">
            お支払い方法
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa9af]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💳</span>
              </div>
              <h4 className="font-shippori font-medium text-[#54585f] mb-2">現金</h4>
              <p className="text-sm text-[#8a6d62] font-shippori">一括払い</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa9af]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💳</span>
              </div>
              <h4 className="font-shippori font-medium text-[#54585f] mb-2">クレジットカード</h4>
              <p className="text-sm text-[#8a6d62] font-shippori">各種対応</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa9af]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-shippori font-medium text-[#54585f] mb-2">医療ローン</h4>
              <p className="text-sm text-[#8a6d62] font-shippori">最大60回分割</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#caa9af]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-shippori font-medium text-[#54585f] mb-2">月額制</h4>
              <p className="text-sm text-[#8a6d62] font-shippori">サブスクプラン</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
