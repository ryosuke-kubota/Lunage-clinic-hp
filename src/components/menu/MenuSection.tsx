"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// スプレッドシートの各シートと施術サブカテゴリをトップレベルに配置
const menuData = {
  "skin-diagnosis": {
    title: "肌診断",
    description: "VISIA／オーラ（施術とセットで無料）",
    treatments: [
      {
        name: "VISIA",
        equipment: "VISIA肌診断機器",
        description: "最新の肌診断機器VISIAを使用し、肌の状態を詳細に分析します。シミ、シワ、毛穴、色素沈着などを可視化し、最適な治療プランをご提案いたします。",
        regularPrice: "0",
        specialPrice: "0"
      },
      {
        name: "オーラ",
        equipment: "オーラシステム",
        description: "オーラシステムによる色素分析と血行状態の診断を行います。肌の深層部の状態を把握し、より効果的な治療方針を決定するための重要な診断です。",
        regularPrice: "0",
        specialPrice: "0"
      }
    ]
  },
  "lift-up": {
    title: "リフトアップ",
    description: "水玉リフト（LDM）、チタニウムリフト（ソプラノ）、HIFUで理想のフェイスラインを実現",
    treatments: [
      {
        name: "水玉リフト（LDM）",
        equipment: "LDM機器",
        description: "LDM（局所動的マイクロマッサージ）技術を使用したリフトアップ治療です。超音波の力で皮膚深層に働きかけ、自然なリフトアップ効果を実現します。",
        regularPrice: "150,000",
        specialPrice: "120,000"
      },
      {
        name: "チタニウムリフト（ソプラノ）",
        equipment: "ソプラノチタニウム",
        description: "ソプラノチタニウムによる高周波治療で、肌の深層部を温めてコラーゲンの生成を促進します。引き締め効果とリフトアップを同時に実現する最新治療です。",
        regularPrice: "180,000",
        specialPrice: "150,000"
      },
      {
        name: "HIFU 全顔＋首",
        equipment: "HIFU機器",
        description: "高密度焦点式超音波（HIFU）で顔全体と首のたるみを改善します。メスを使わずに深層筋膜（SMAS層）にアプローチし、自然なリフトアップ効果が期待できます。",
        regularPrice: "200,000",
        specialPrice: "170,000"
      },
      {
        name: "HIFU 頬下",
        equipment: "HIFU機器",
        description: "頬下のたるみに特化したHIFU治療です。フェイスラインをシャープにし、小顔効果を実現します。ダウンタイムがほとんどなく、日常生活に支障をきたしません。",
        regularPrice: "100,000",
        specialPrice: "80,000"
      }
    ]
  },
  "body-slimming": {
    title: "ボディ痩身",
    description: "HIFUボディ／セルライト改善で部分痩せをサポート",
    treatments: [
      {
        name: "HIFUボディ（二の腕・腹部・太もも）",
        equipment: "ボディ専用HIFU機器",
        description: "ボディ専用HIFUで気になる部位の脂肪細胞を破壊し、部分痩せを実現します。二の腕、腹部、太ももなど、運動では落ちにくい部位に効果的です。",
        regularPrice: "250,000",
        specialPrice: "200,000"
      },
      {
        name: "セルライト改善（LDM）",
        equipment: "LDM機器",
        description: "LDM技術でセルライトの原因となる脂肪組織と線維組織の癒着を改善します。肌表面の凸凹を滑らかにし、美しいボディラインを作ります。",
        regularPrice: "80,000",
        specialPrice: "65,000"
      }
    ]
  },
  "facial-beauty": {
    title: "フェイシャル・美肌",
    description: "ピコレーザーやダーマペンで美肌を育成",
    treatments: [
      {
        name: "ピコトーニング（ピコレーザー）",
        equipment: "ピコレーザー機器",
        description: "ピコ秒レーザーで肌の色ムラやくすみを改善します。メラニン色素を細かく破砕し、透明感のある美しい肌へと導きます。ダウンタイムがほとんどありません。",
        regularPrice: "30,000",
        specialPrice: "25,000"
      },
      {
        name: "ダーマペン全顔／ボディ",
        equipment: "ダーマペン機器",
        description: "極細針で肌に微細な穴を開け、自然治癒力を活用して肌再生を促進します。毛穴の縮小、ニキビ跡の改善、肌質向上に効果的です。",
        regularPrice: "40,000",
        specialPrice: "32,000"
      },
      {
        name: "水光注射（ビタミンC）",
        equipment: "水光注射機器",
        description: "高濃度ビタミンCを肌の浅い層に注入し、内側から輝く美肌を作ります。保湿効果が高く、肌のツヤとハリを向上させます。",
        regularPrice: "23,000",
        specialPrice: "18,000"
      }
    ]
  },
  "hyperhidrosis": {
    title: "多汗症・ワキガ治療",
    description: "ミラドライ等で汗・ニオイの悩みを解消",
    treatments: [
      {
        name: "ミラドライ",
        equipment: "ミラドライ機器",
        description: "マイクロ波エネルギーで汗腺を破壊し、多汗症やワキガを根本的に改善します。切らない治療で、長期的な効果が期待できます。",
        regularPrice: "220,000",
        specialPrice: "180,000"
      }
    ]
  },
  "artmake": {
    title: "アートメイク",
    description: "ストレッチマーク、白斑、リストカット跡などの色素トラブル対応",
    treatments: [
      {
        name: "ストレッチマーク治療",
        equipment: "レーザー・針治療機器",
        description: "妊娠線や肉割れなどのストレッチマークを改善する治療です。レーザーや針治療により、肌の再生を促し、目立たなくします。",
        regularPrice: "50,000",
        specialPrice: "40,000"
      },
      {
        name: "白斑治療",
        equipment: "アートメイク機器",
        description: "白斑部位にメラニン色素を補充し、周囲の肌色に近づける治療です。アートメイク技術を応用し、自然な仕上がりを実現します。",
        regularPrice: "80,000",
        specialPrice: "65,000"
      }
    ]
  },
  "hair-removal": {
    title: "医療脱毛",
    description: "顔～VIOまで全身対応の医療脱毛メニュー",
    treatments: [
      {
        name: "ワキ脱毛",
        equipment: "医療レーザー脱毛機器",
        description: "医療レーザーによるワキの永久脱毛です。短時間で効果的に毛根を破壊し、ムダ毛の悩みを解消します。",
        regularPrice: "10,000",
        specialPrice: "8,000"
      },
      {
        name: "VIO脱毛",
        equipment: "医療レーザー脱毛機器",
        description: "デリケートゾーンの医療脱毛です。衛生面の向上と快適性を実現し、自己処理による肌トラブルを防ぎます。",
        regularPrice: "20,000",
        specialPrice: "16,000"
      },
      {
        name: "全身脱毛",
        equipment: "医療レーザー脱毛機器",
        description: "顔からつま先まで全身の医療脱毛です。自己処理の手間を大幅に削減し、滑らかで美しい肌を実現します。",
        regularPrice: "150,000",
        specialPrice: "120,000"
      }
    ]
  },
  "iv-therapy": {
    title: "点滴治療",
    description: "高濃度ビタミンC点滴など各種点滴メニュー",
    treatments: [
      {
        name: "高濃度ビタミンC点滴",
        contents: "VC25g, 生食250ml",
        description: "高濃度のビタミンCを直接血管内に投与し、強力な抗酸化作用で美肌効果を実現します。疲労回復や免疫力向上にも効果的です。",
        treatmentTime: "30分",
        regularPrice: "10,000",
        specialPrice: "8,000"
      },
      {
        name: "プラセンタ点滴",
        contents: "プラセンタエキス2A, 生食100ml",
        description: "プラセンタエキスの点滴で、細胞の再生を促進し、アンチエイジング効果を実現します。疲労回復や肌質改善に効果的です。",
        treatmentTime: "20分",
        regularPrice: "8,000",
        specialPrice: "6,500"
      }
    ]
  },
  "medication": {
    title: "薬剤治療",
    description: "ボトックス・ヒアルロン酸注射、内服薬など",
    treatments: [
      {
        name: "ボトックス注射",
        type: "注射薬",
        drugName: "ボツリヌストキシン",
        efficacy: "表情筋弛緩、シワ改善、小顔効果",
        description: "ボツリヌストキシンを注射し、表情筋の動きを抑制してシワを改善します。エラ張りの改善による小顔効果も期待できます。",
        regularPrice: "18,000",
        specialPrice: "15,000"
      },
      {
        name: "ヒアルロン酸注射",
        type: "注射薬",
        drugName: "ヒアルロン酸",
        efficacy: "ボリュームアップ、保湿、ハリ改善",
        description: "ヒアルロン酸を注入し、失われたボリュームを補います。ほうれい線の改善や唇のボリュームアップなど、自然な若返り効果を実現します。",
        regularPrice: "39,800",
        specialPrice: "32,000"
      }
    ]
  },
  "options": {
    title: "オプション・その他",
    description: "麻酔クリームや個室など施術オプション",
    treatments: [
      {
        name: "表面麻酔",
        supplies: "麻酔クリーム",
        description: "施術部位に麻酔クリームを塗布し、痛みを軽減します。レーザー治療や注射治療の際に、より快適に施術を受けていただけます。",
        regularPrice: "3,000",
        specialPrice: "2,500"
      },
      {
        name: "笑気ガス麻酔",
        supplies: "笑気ガス吸入器",
        description: "笑気ガスを吸入することで、リラックス状態を作り出し、施術への不安や緊張を和らげます。意識はしっかりと保たれます。",
        regularPrice: "5,000",
        specialPrice: "4,000"
      }
    ]
  },
  "products": {
    title: "物販",
    description: "ドクターズコスメやサプリメントなど販売商品",
    treatments: [
      {
        name: "ドクターズコスメ",
        regularPrice: "5,000",
        features: ["医師監修", "高品質"],
        description: "医師が監修した高品質なスキンケア製品です。クリニックでの治療効果を維持・向上させるためのホームケア用品をご提供します。"
      },
      {
        name: "ビタミンサプリ",
        regularPrice: "4,000",
        features: ["内側からケア", "美容効果"],
        description: "美容と健康をサポートする高品質なビタミンサプリメントです。外側からの治療と併用することで、より効果的な美容効果を実現します。"
      }
    ]
  }
};

// 通貨フォーマット
const fmt = (price: string) => price ? `¥${Number.parseInt(price).toLocaleString()}` : "";

interface Treatment {
  name: string;
  regularPrice: string;
  specialPrice?: string;
  duration?: string;
  downtime?: string;
  features?: string[];
  description?: string;
  // 基本カテゴリ用
  equipment?: string;
  // 点滴用
  contents?: string;
  treatmentTime?: string;
  // 薬剤用
  type?: string;
  drugName?: string;
  efficacy?: string;
  // オプション用
  supplies?: string;
}

// カードコンポーネント
const TreatmentCard = ({ treatment, index }: { treatment: Treatment; index: number }) => {
  const [animationState, setAnimationState] = useState<'hidden' | 'visible'>('hidden');
  const cardRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Safari対応のためのより堅牢な実装
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && animationState === 'hidden') {
          // 遅延を追加してSafariの問題を回避
          setTimeout(() => {
            setAnimationState('visible');
          }, index * 100 + 50);
          
          // 一度トリガーされたらObserverを切断
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });

    if (cardRef.current) {
      observerRef.current.observe(cardRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [index, animationState]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={animationState === 'visible' ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        // Safari対応のためのスタイル強制
        willChange: 'opacity, transform',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-[#dacacf]/20"
    >
      <h3 className="text-xl font-shippori font-medium text-[#54585f] mb-3">{treatment.name}</h3>
      
      {/* 基本カテゴリ用の機械表示 */}
      {treatment.equipment && (
        <p className="text-sm text-[#8a6d62] mb-2">使用機械: {treatment.equipment}</p>
      )}
      
      {/* 点滴用の内容と施術時間表示 */}
      {treatment.contents && (
        <p className="text-sm text-[#8a6d62] mb-2">内容: {treatment.contents}</p>
      )}
      {treatment.treatmentTime && (
        <p className="text-sm text-[#8a6d62] mb-2">施術時間: {treatment.treatmentTime}</p>
      )}
      
      {/* 薬剤用の種類、薬剤名、効能表示 */}
      {treatment.type && (
        <p className="text-sm text-[#8a6d62] mb-2">種類: {treatment.type}</p>
      )}
      {treatment.drugName && (
        <p className="text-sm text-[#8a6d62] mb-2">薬剤名: {treatment.drugName}</p>
      )}
      {treatment.efficacy && (
        <p className="text-sm text-[#8a6d62] mb-2">効能: {treatment.efficacy}</p>
      )}
      
      {/* オプション用の使用物品表示 */}
      {treatment.supplies && (
        <p className="text-sm text-[#8a6d62] mb-2">使用物品: {treatment.supplies}</p>
      )}
      
      {treatment.description && (
        <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">{treatment.description}</p>
      )}
      
      {/* 従来の施術時間とダウンタイム（基本カテゴリ用） */}
      {treatment.duration && <p className="text-sm text-[#8a6d62] mb-1">施術時間: {treatment.duration}</p>}
      {treatment.downtime && <p className="text-sm text-[#8a6d62] mb-3">ダウンタイム: {treatment.downtime}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        <div className="bg-[#faf3ef] p-3 rounded-lg">
          <p className="text-xs text-[#8a6d62]">通常価格</p>
          <p className="font-bold text-[#54585f]">{fmt(treatment.regularPrice)}</p>
        </div>
        {treatment.specialPrice && (
          <div className="bg-gradient-to-r from-[#caa9af]/10 to-[#d6c6b5]/10 p-3 rounded-lg">
            <p className="text-xs text-[#8a6d62]">特別料金</p>
            <p className="font-bold text-[#54585f]">{fmt(treatment.specialPrice)}</p>
          </div>
        )}
      </div>
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-12"
            >
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
