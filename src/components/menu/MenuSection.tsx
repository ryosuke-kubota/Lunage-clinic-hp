"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// スプレッドシートの各シートと施術サブカテゴリをトップレベルに配置
const menuData = {
  "skin-diagnosis": {
    title: "肌診断",
    description: "VISIA／オーラ（施術とセットで無料）",
    treatments: [
      { name: "VISIA", regularPrice: "0", duration: "診断のみ", features: ["詳細レポート", "肌質解析"] },
      { name: "オーラ", regularPrice: "0", duration: "診断のみ", features: ["色素・血行解析"] }
    ]
  },
  "lift-up": {
    title: "リフトアップ",
    description: "水玉リフト（LDM）、チタニウムリフト（ソプラノ）、HIFUで理想のフェイスラインを実現",
    treatments: [
      { name: "水玉リフト（LDM）", regularPrice: "150,000", duration: "60分", downtime: "1週間", features: ["リフトアップ", "小顔効果"] },
      { name: "チタニウムリフト（ソプラノ）", regularPrice: "180,000", duration: "60分", downtime: "1週間", features: ["タイトニング", "コラーゲン生成"] },
      { name: "HIFU 全顔＋首", regularPrice: "200,000", duration: "90分", downtime: "なし", features: ["たるみ改善", "引き締め"] },
      { name: "HIFU 頬下", regularPrice: "100,000", duration: "45分", downtime: "なし", features: ["部分リフト", "小顔効果"] }
    ]
  },
  "body-slimming": {
    title: "ボディ痩身",
    description: "HIFUボディ／セルライト改善で部分痩せをサポート",
    treatments: [
      { name: "HIFUボディ（二の腕・腹部・太もも）", regularPrice: "250,000", duration: "60〜90分", downtime: "なし", features: ["部分痩せ", "脂肪破壊"] },
      { name: "セルライト改善（LDM）", regularPrice: "80,000", duration: "30分", downtime: "なし", features: ["セルライト除去", "肌質改善"] }
    ]
  },
  "facial-beauty": {
    title: "フェイシャル・美肌",
    description: "ピコレーザーやダーマペンで美肌を育成",
    treatments: [
      { name: "ピコトーニング（ピコレーザー）", regularPrice: "30,000", duration: "20分", downtime: "なし", features: ["色ムラ改善", "くすみ除去"] },
      { name: "ダーマペン全顔／ボディ", regularPrice: "40,000", duration: "30分", downtime: "2日", features: ["美肌再生", "毛穴縮小"] },
      { name: "水光注射（ビタミンC）", regularPrice: "23,000", duration: "30分", downtime: "なし", features: ["保湿", "ツヤUP"] }
    ]
  },
  "hyperhidrosis": {
    title: "多汗症・ワキガ治療",
    description: "ミラドライ等で汗・ニオイの悩みを解消",
    treatments: [
      { name: "ミラドライ", regularPrice: "220,000", duration: "90分", downtime: "1週間", features: ["汗腺除去", "長期効果"] }
    ]
  },
  "artmake": {
    title: "アートメイク",
    description: "ストレッチマーク、白斑、リストカット跡などの色素トラブル対応",
    treatments: [
      { name: "ストレッチマーク治療", regularPrice: "50,000", duration: "30分", downtime: "なし", features: ["肌質改善"] },
      { name: "白斑治療", regularPrice: "80,000", duration: "45分", downtime: "2日", features: ["色素再生"] }
    ]
  },
  "hair-removal": {
    title: "医療脱毛",
    description: "顔～VIOまで全身対応の医療脱毛メニュー",
    treatments: [
      { name: "ワキ脱毛", regularPrice: "10,000", features: [] },
      { name: "VIO脱毛", regularPrice: "20,000", features: [] },
      { name: "全身脱毛", regularPrice: "150,000", features: [] }
    ]
  },
  "iv-therapy": {
    title: "点滴治療",
    description: "高濃度ビタミンC点滴など各種点滴メニュー",
    treatments: [
      { name: "高濃度ビタミンC点滴", regularPrice: "10,000", features: [] },
      { name: "プラセンタ点滴", regularPrice: "8,000", features: [] }
    ]
  },
  "medication": {
    title: "薬剤治療",
    description: "ボトックス・ヒアルロン酸注射、内服薬など",
    treatments: [
      { name: "ボトックス注射", regularPrice: "18,000", features: [] },
      { name: "ヒアルロン酸注射", regularPrice: "39,800", features: [] }
    ]
  },
  "options": {
    title: "オプション・その他",
    description: "麻酔クリームや個室など施術オプション",
    treatments: [
      { name: "表面麻酔", regularPrice: "3,000", features: [] },
      { name: "笑気ガス麻酔", regularPrice: "5,000", features: [] }
    ]
  },
  "products": {
    title: "物販",
    description: "ドクターズコスメやサプリメントなど販売商品",
    treatments: [
      { name: "ドクターズコスメ", regularPrice: "5,000", features: [] },
      { name: "ビタミンサプリ", regularPrice: "4,000", features: [] }
    ]
  }
};

// 通貨フォーマット
const fmt = (price: string) => price ? `¥${Number.parseInt(price).toLocaleString()}` : "";

interface Treatment {
  name: string;
  regularPrice: string;
  duration?: string;
  downtime?: string;
  features?: string[];
  youtubePrice?: string;
}

// カードコンポーネント
const TreatmentCard = ({ treatment, index }: { treatment: Treatment; index: number }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#dacacf]/20"
    >
      <h3 className="text-xl font-shippori font-medium text-[#54585f] mb-2">{treatment.name}</h3>
      {treatment.duration && <p className="text-sm text-[#8a6d62] mb-1">施術時間: {treatment.duration}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        <div className="bg-[#faf3ef] p-3 rounded-lg">
          <p className="text-xs">通常価格</p>
          <p className="font-bold">{fmt(treatment.regularPrice)}</p>
        </div>
        {treatment.youtubePrice && <div className="bg-gradient-to-r from-[#caa9af]/10 to-[#d6c6b5]/10 p-3 rounded-lg"><p className="text-xs">YouTube特価</p><p className="font-bold">{fmt(treatment.youtubePrice)}</p></div>}
      </div>
      {(treatment.features ?? []).length > 0 && (
      <div className="flex flex-wrap gap-2">
        {(treatment.features ?? []).map((f) => (
          <span key={f} className="px-2 py-1 bg-[#caa9af]/10 rounded-full text-xs">{f}</span>
        ))}
      </div>
    )}
    </motion.div>
  );
};

// メニューセクション
export default function MenuSection() {
  return (
    <section className="py-16 bg-[#faf3ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {Object.entries(menuData).map(([key, cat]) => (
          <div key={key} id={key} className="mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-light text-[#54585f] mb-4">{cat.title}</h2>
              {cat.description && <p className="text-lg text-[#8a6d62]">{cat.description}</p>}
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.treatments.map((t, i) => <TreatmentCard key={i} treatment={t} index={i} />)}
            </div>
          </div>
        ))}
        {/* お支払い情報 */}
        {/* <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-medium text-center text-[#54585f] mb-6">お支払い方法</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: '💳', title: '現金', label: '一括払い' },
              { icon: '💳', title: 'クレジットカード', label: '各種対応' },
              { icon: '📋', title: '医療ローン', label: '最大60回分割' },
              { icon: '📱', title: '月額制', label: 'サブスクプラン' }
            ].map((m) => (
              <div key={m.title}>
                <div className="w-16 h-16 bg-[#caa9af]/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">{m.icon}</div>
                <h4 className="font-medium text-[#54585f] mb-1">{m.title}</h4>
                <p className="text-sm text-[#8a6d62]">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
