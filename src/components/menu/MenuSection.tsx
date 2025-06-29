"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// スプレッドシートの各シートと施術サブカテゴリをトップレベルに配置
const menuData = {
  "skin-diagnosis": {
    title: "肌診断",
    description: "",
    treatments: [
      {
        name: "VISIA/オーラ",
        equipment: "VISIA/オーラ",
        description: "最新のカメラを用いて、肌の状態を詳細に分析する肌診断器です。シミ、しわ、毛穴など、様々な肌トラブルを数値化し、肌年齢を推定。肌治療や施術選別前に行います。",
        regularPrice: "3300",
        specialPrice: ""
      }
    ]
  },
  "body-slimming": {
    title: "痩身",
    description: "",
    treatments: [
      {
        name: "セルライト改善",
        equipment: "LDM",
        description: "ダウンタイム短縮にもオススメ◎最先端セルライト治療！超音波を用いてセルライトや脂肪吸引後の拘縮を分解します。痛みやダウンタイムも心配ありません。",
        regularPrice: "16000",
        specialPrice: ""
      },
      {
        name: "HIFUボディ",
        equipment: "HIFU",
        description: "超音波の熱を使用して脂肪細胞を直接破壊するためリバウンドが少ないと言われております。気になる二の腕やブラ肉、細かな部位アプローチ出来ます。",
        regularPrice: "30000",
        specialPrice: ""
      },
    ]
  },
  "lift-up": {
    title: "リフトアップ",
    description: "",
    treatments: [
      {
        name: "HIFU全顔 首",
        equipment: "HIFU",
        description: "たるみ治療と言えばHIFU。筋膜にアプローチして皮膚の内側から引き締まりを体験できます。ひとりひとり脂肪や皮膚の厚みが違うため、当院では看護師がお客様の状態に合わせたカスタマイズHIFUを提案いたします。",
        regularPrice: "30000",
      },
      {
        name: "HIFU 全顔+首",
        equipment: "HIFU",
        description: "たるみ治療と言えばHIFU。筋膜にアプローチして皮膚の内側から引き締まりを体験できます。ひとりひとり脂肪や皮膚の厚みが違うため、当院では看護師がお客様の状態に合わせたカスタマイズHIFUを提案いたします。",
        regularPrice: "30000",
        specialPrice: ""
      },
      {
        name: "HIFU 頬下",
        equipment: "HIFU",
        description: "たるみ治療と言えばHIFU。筋膜にアプローチして皮膚の内側から引き締まりを体験できます。ひとりひとり脂肪や皮膚の厚みが違うため、当院では看護師がお客様の状態に合わせたカスタマイズHIFUを提案いたします。",
        regularPrice: "25000",
        specialPrice: ""
      },
      {
        name: "HIFU アイリフト",
        equipment: "HIFU",
        description: "たるみ治療と言えばHIFU。筋膜にアプローチして皮膚の内側から引き締まりを体験できます。ひとりひとり脂肪や皮膚の厚みが違うため、当院では看護師がお客様の状態に合わせたカスタマイズHIFUを提案いたします。",
        regularPrice: "13000",
        specialPrice: ""
      },
      {
        name: "HIFU 首",
        equipment: "HIFU",
        description: "たるみ治療と言えばHIFU。筋膜にアプローチして皮膚の内側から引き締まりを体験できます。ひとりひとり脂肪や皮膚の厚みが違うため、当院では看護師がお客様の状態に合わせたカスタマイズHIFUを提案いたします。",
        regularPrice: "15000",
        specialPrice: ""
      },
      {
        name: "HIFU 人中",
        equipment: "HIFU",
        description: "たるみ治療と言えばHIFU。筋膜にアプローチして皮膚の内側から引き締まりを体験できます。ひとりひとり脂肪や皮膚の厚みが違うため、当院では看護師がお客様の状態に合わせたカスタマイズHIFUを提案いたします。",
        regularPrice: "5000",
        specialPrice: ""
      },
      {
        name: "即席小顔HIFUシャワー",
        equipment: "HIFU",
        description: "皮膚の表層に優しい熱を入れることでその場でむくみを取り除きます。コラーゲンの産生も促進されるので定期的な施術で美肌も叶います。細身で頬のコケが気になる方にもおすすめのメニューです。",
        regularPrice: "15000",
        specialPrice: ""
      },
      {
        name: "水玉リフト",
        equipment: "LDM",
        description: "痛みなく艶感、ハリを速攻で取り戻す！老化が進んだ肌の奥の細胞を肌を傷めることなく刺激し、コラーゲンやヒアルロン酸の再配列を活性化を促します。",
        regularPrice: "16000",
        specialPrice: ""
      },
      {
        name: "ダイヤモンドチップ",
        equipment: "POTENZA",
        description: "高周波RF（ラジオ波）を肌に照射し、コラーゲンやエラスチンの生成を促進。肌の引き締めやハリ改善など小ジワや毛穴の開き、ニキビ跡の改善効果のある施術。針を使用しないため、痛みやダウンタイムが少ないです。",
        regularPrice: "30000",
        specialPrice: ""
      },
      {
        name: "チタニウムリフト",
        equipment: "ソプラノ",
        description: "韓国で大人気のチタニウムリフト！医療レーザーを使用し、肌のたるみやシワを改善するリフトアップ治療法です。3つの異なる波長のレーザーを同時に照射し、肌の浅い層から深い層までアプローチすることで、リフトアップ効果だけでなく、肌の引き締め、毛穴の開き改善、美白効果なども期待できます。",
        regularPrice: "68000",
        specialPrice: ""
      },
    ]
  },
  "facial-beauty": {
    title: "フェイシャル・美肌",
    description: "",
    treatments: [
      {
        name: "LDM疾患コース",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみを抑え、肌のバリア機能を整える非侵襲型ケア。細胞外マトリックス全体に深く作用することで肌の状態を根本から整えます。",
        regularPrice: "16000"
      },
      {
        name: "POTENZA s16 肝斑",
        equipment: "POTENZA",
        description: "肝斑治療にオススメ！お肌のメラノサイト自体に特定のRFエネルギーを与えることで、肝斑の原因となるメラニンの産生を抑制し、根源的にアプローチいたします。従来の肝斑治療で起こる可能性のあった色素沈着、再発の可能性、白抜けなどのリスクが抑えられており、 赤ら顔や顔全体のくすみ・色素沈着の改善にも効果あり。",
        regularPrice: "30000"
      },
      {
        name: "POTENZA CP21 densify",
        equipment: "POTENZA",
        description: "ペプチド・アミノ酸・ヒアルロン酸を含む高濃度製剤が線維芽細胞を刺激し、コラーゲン・エラスチンの産生を促進。毛穴・小ジワ・ハリ低下に根本からアプローチし、なめらかで弾力のある肌へ導きます。",
        regularPrice: "40000"
      },
      {
        name: "POTENZAエクソソーム",
        equipment: "POTENZA",
        description: "幹細胞由来エクソソームが損傷組織の修復を促し、抗炎症・抗酸化・細胞再生を同時に活性化。ニキビ跡、赤み、加齢による肌力低下など、複合的なお悩みに有効な再生治療です。",
        regularPrice: "40000"
      },
      {
        name: "POTENZAスキンボトックス",
        equipment: "POTENZA",
        description: "ボツリヌストキシンが汗腺・皮脂腺の活動を抑制し、毛穴の開き・皮脂分泌・肌のテカリを抑えます。滑らかでマットな質感へ整え、メイクのりの良い陶器肌を実現。自然な表情のまま肌質改善が可能です。",
        regularPrice: "40000"
      },
      {
        name: "POTENZA ニキビ・汗管腫",
        equipment: "POTENZA",
        description: "真皮内の皮脂腺や汗管腫の腫瘍組織に直接熱エネルギーを届け、選択的に破壊・凝固します。ニキビの原因菌繁殖や皮脂過剰を抑制し、再発しづらい肌へ。汗管腫は複数回の照射で縮小・消退を目指す瘢痕を最小限に抑えた治療が可能です。",
        regularPrice: "10000"
      },
      {
        name: "マッサージピール全顔",
        equipment: "PRX",
        description: "従来のTCAピールにコウジ酸も合わさったことで美白効果アップ。しっかり効果が欲しいかたにおすすめ。角質が整い、水光肌に近づきます。",
        regularPrice: "15000"
      },
      {
        name: "ミラノリピール　ボディ",
        equipment: "BioRepeal",
        description: "背中やデコルテのニキビにはこれ！二の腕の毛孔性苔癬にも効果的です。今あるニキビの炎症を抑えながらニキビ跡も薄くしていきます。",
        regularPrice: "25000"
      },
      {
        name: "痛くない水光注射ビタミンC",
        equipment: "ターゲットクール",
        description: "2021年にFDAの認証を取得。氷の針状にした薬剤を高速噴射し、針を使わずに有効成分を肌深部へ導入。痛みやダウンタイムがなく、手軽に美肌ケアができる最新トリートメントです。",
        regularPrice: "19000"
      },
      {
        name: "痛くない水光注射トラネキサム酸",
        equipment: "ターゲットクール",
        description: "2021年にFDAの認証を取得。氷の針状にした薬剤を高速噴射し、針を使わずに有効成分を肌深部へ導入。痛みやダウンタイムがなく、手軽に美肌ケアができる最新トリートメントです。",
        regularPrice: "20000"
      },
      {
        name: "痛くない水光注射スキンボトックス",
        equipment: "ターゲットクール",
        description: "2021年にFDAの認証を取得。氷の針状にした薬剤を高速噴射し、針を使わずに有効成分を肌深部へ導入。痛みやダウンタイムがなく、手軽に美肌ケアができる最新トリートメントです。",
        regularPrice: "27000"
      },
      {
        name: "痛くない水光注射エクソソーム",
        equipment: "ターゲットクール",
        description: "2021年にFDAの認証を取得。氷の針状にした薬剤を高速噴射し、針を使わずに有効成分を肌深部へ導入。痛みやダウンタイムがなく、手軽に美肌ケアができる最新トリートメントです。",
        regularPrice: "29000"
      },
      {
        name: "痛くない水光注射プルリアル",
        equipment: "ターゲットクール",
        description: "2021年にFDAの認証を取得。氷の針状にした薬剤を高速噴射し、針を使わずに有効成分を肌深部へ導入。痛みやダウンタイムがなく、手軽に美肌ケアができる最新トリートメントです。",
        regularPrice: "27000"
      },
      {
        name: "痛くない水光注射プラセンタ",
        equipment: "ターゲットクール",
        description: "2021年にFDAの認証を取得。氷の針状にした薬剤を高速噴射し、針を使わずに有効成分を肌深部へ導入。痛みやダウンタイムがなく、手軽に美肌ケアができる最新トリートメントです。",
        regularPrice: "19000"
      },
      {
        name: "ニキビ・イボ1個",
        equipment: "ターゲットクール",
        description: "低温CO₂ガスによる即時冷却で、炎症を鎮静させます。",
        regularPrice: "5000"
      },
      {
        name: "ダーマペン　全顔",
        equipment: "ダーマペン",
        description: "極細針で肌に微細な刺激を与え、コラーゲン生成を促進。毛穴・ニキビ跡・小ジワの改善に有効な再生治療です。",
        regularPrice: "17000"
      },
      {
        name: "ダーマペン　ボディ",
        equipment: "ダーマペン",
        description: "極細針で肌に微細な刺激を与え、コラーゲン生成を促進。毛穴・ニキビ跡・小ジワの改善に有効な再生治療です。",
        regularPrice: "30000"
      },
      {
        name: "ダーマペン＋エクソソーム",
        equipment: "ダーマペン＋エクソソーム",
        description: "ダーマペンの微細な針刺激に、再生因子豊富なエクソソームを浸透。有名youtuberも重症クレーターがこの施術で治ったと大絶賛。肌再生力を最大限に高める次世代エイジングケア。",
        regularPrice: "25000"
      },
      {
        name: "ボトックスフェイシャル",
        equipment: "ダーマペン＋ボトックス",
        description: "極少量のボトックスを顔全体に微注入。筋肉の動きは残しつつ、毛穴・小ジワ・皮脂テカリを整える肌質改善治療。マスクの蒸れや夏場のメイク崩れが改善します。",
        regularPrice: "23000"
      },
      {
        name: "ヴェルヴェットスキン",
        equipment: "ダーマペン＋マッサージピール",
        description: "ダーマペンで肌に微細な穴を開けた直後にピーリング剤を導入。ハリ・ツヤ・毛穴・ニキビ跡を同時にケアする革新トリートメント。リピート率が高い治療です。",
        regularPrice: "25000"
      },
      {
        name: "ハイドラフェイシャル",
        equipment: "ハイドロフェイシャル",
        description: "クレンジング・角質除去・吸引・美容液導入を一度に実現。毛穴の黒ずみやザラつきを改善し、つるんとした透明肌へ。",
        regularPrice: "17000"
      },
      {
        name: "ピコトーニング",
        equipment: "ピコレーザー",
        description: "ピコ秒レーザーがメラニンに優しく作用し、肝斑・くすみ・色ムラを改善。ダウンタイムなく透明感のある肌へ導きます。",
        regularPrice: "12000"
      },
      {
        name: "ピコフラクショナル",
        equipment: "ピコレーザー",
        description: "真皮層に微細なレーザー刺激を与え、肌の再生を促進。毛穴・ニキビ跡・小ジワなどに高い効果を発揮する美肌治療です。",
        regularPrice: "30000"
      }
    ]
  },
  "hyperhidrosis": {
    title: "多汗症",
    description: "",
    treatments: [
      {
        name: "ワキガ治療",
        equipment: "ミラドライ機器",
        description: "マイクロ波エネルギーで汗腺を破壊し、多汗症やワキガを根本的に改善します。切らない治療で、長期的な効果が期待できます。",
        regularPrice: "",
      }
    ]
  },
  "aga": {
    title: "AGA",
    description: "",
    treatments: [
      {
        name: "ヘアクール",
        equipment: "ターゲットクール",
        description: "頭皮深層に超低温の二酸化炭素が残存することで血流促進効果・ボーア効果による育毛を促進します。副作用やダウンタイムの全くなく、大人気の新しいAGA治療です。",
        regularPrice: "12000",
        specialPrice: ""
      },
      {
        name: "LDMヘアケア",
        equipment: "LDM",
        description: "頭皮の血流を促進し、細胞の再生力をサポート。抜け毛予防・育毛効果が期待される痛みの少ない新しい頭皮ケアです。",
        regularPrice: "19000",
        specialPrice: ""
      }
    ]
  },
  // "artmake": {
  //   title: "アートメイク",
  //   description: "ストレッチマーク、白斑、リストカット跡などの色素トラブル対応",
  //   treatments: [
  //     {
  //       name: "ストレッチマーク",
  //       equipment: "レーザー・針治療機器",
  //       description: "妊娠線や肉割れなどのストレッチマークを改善する治療です。レーザーや針治療により、肌の再生を促し、目立たなくします。",
  //       regularPrice: "50,000",
  //       specialPrice: "40,000"
  //     },
  //     {
  //       name: "白斑治療",
  //       equipment: "アートメイク機器",
  //       description: "白斑部位にメラニン色素を補充し、周囲の肌色に近づける治療です。アートメイク技術を応用し、自然な仕上がりを実現します。",
  //       regularPrice: "80,000",
  //       specialPrice: "65,000"
  //     }
  //   ]
  // },
  "hair-removal": {
    title: "脱毛",
    description: `痛みは最小限に、効果は最大限に、丁寧に施術いたします。
      ⭕️痛みが少ない
      低出力のレーザーを繰り返し照射するため、痛みが少ないとされています。特に、ソプラノアイスプラチナムは、冷却機能も搭載しており、さらに痛みを軽減できます。
      ⭕️幅広い肌質・毛質に対応:
      メラニン色素の量と効果が直接関係しないため、色黒肌や産毛にも効果的です。
      ⭕️施術時間が短い:
      広い照射面積で、広範囲を短時間で脱毛できます。
      ⭕️3種類の波長をブレンド:
      ソプラノチタニウムは、3種類の波長のレーザーをブレンドして照射することで、様々な深さの毛に対応できます。`,
    treatments: [
      {
        name: "全身",
        equipment: "ソプラノ",
        description: "顔からつま先まで全身の医療脱毛です。自己処理の手間を大幅に削減し、滑らかで美しい肌を実現します。",
        regularPrice: "50000"
      },
      {
        name: "女性VIO",
        equipment: "ソプラノ",
        description: "デリケートゾーンの医療脱毛です。衛生面の向上と快適性を実現し、自己処理による肌トラブルを防ぎます。",
        regularPrice: "18000"
      },
      {
        name: "顔",
        equipment: "ソプラノ",
        description: "顔全体の医療脱毛です。産毛まで効果的に処理し、化粧ノリの向上と肌の透明感アップを実現します。",
        regularPrice: "15000"
      },
      {
        name: "口周り",
        equipment: "ソプラノ",
        description: "口周りの医療脱毛です。気になるヒゲや産毛を効果的に処理します。",
        regularPrice: "8000"
      },
      {
        name: "うなじ",
        equipment: "ソプラノ",
        description: "うなじの医療脱毛です。髪をアップにした時の美しいラインを作ります。",
        regularPrice: "8000"
      },
      {
        name: "肘上",
        equipment: "ソプラノ",
        description: "二の腕の医療脱毛です。ノースリーブも自信を持って着られます。",
        regularPrice: "8000"
      },
      {
        name: "肘下",
        equipment: "ソプラノ",
        description: "前腕の医療脱毛です。日常的に露出する部位をきれいに処理します。",
        regularPrice: "8000"
      },
      {
        name: "膝上",
        equipment: "ソプラノ",
        description: "太ももの医療脱毛です。スカートやショートパンツも安心して着用できます。",
        regularPrice: "8000"
      },
      {
        name: "膝下",
        equipment: "ソプラノ",
        description: "すねの医療脱毛です。自己処理による肌荒れから解放されます。",
        regularPrice: "8000"
      },
      {
        name: "胸部",
        equipment: "ソプラノ",
        description: "胸部の医療脱毛です。水着や薄着の季節も安心です。",
        regularPrice: "8000"
      },
      {
        name: "腹部",
        equipment: "ソプラノ",
        description: "お腹の医療脱毛です。へそ周りの毛も含めて処理します。",
        regularPrice: "8000"
      },
      {
        name: "上背部",
        equipment: "ソプラノ",
        description: "背中上部の医療脱毛です。背中の開いた服も美しく着こなせます。",
        regularPrice: "8000"
      },
      {
        name: "下背部",
        equipment: "ソプラノ",
        description: "背中下部の医療脱毛です。腰回りまでしっかりと処理します。",
        regularPrice: "8000"
      },
      {
        name: "ヒップ",
        equipment: "ソプラノ",
        description: "ヒップの医療脱毛です。水着や下着からはみ出る毛を処理します。",
        regularPrice: "8000"
      },
      {
        name: "手の甲・指",
        equipment: "ソプラノ",
        description: "手の甲と指の医療脱毛です。細かい部位もしっかりと処理します。",
        regularPrice: "5000"
      },
      {
        name: "足の甲・指",
        equipment: "ソプラノ",
        description: "足の甲と指の医療脱毛です。サンダルを履く時も安心です。",
        regularPrice: "5000"
      },
      {
        name: "ワキ",
        equipment: "ソプラノ",
        description: "ワキの医療脱毛です。最も人気の高い部位で、短時間で効果的に処理します。",
        regularPrice: "2000"
      },
      {
        name: "乳輪周り",
        equipment: "ソプラノ",
        description: "乳輪周りの医療脱毛です。デリケートな部位も安全に処理します。",
        regularPrice: "2000"
      },
      {
        name: "へそ周り",
        equipment: "ソプラノ",
        description: "へそ周りの医療脱毛です。お腹の露出時も美しく見えます。",
        regularPrice: "2000"
      },
      {
        name: "1shot",
        equipment: "ソプラノ",
        description: "気になる部位の1ショット照射です。お試しや追加照射に最適です。",
        regularPrice: "1000"
      },
      {
        name: "シェービング",
        equipment: "ソプラノ",
        description: "施術前のシェービングサービスです。剃り残しがある場合にご利用ください。",
        regularPrice: "1000"
      }
    ]
  },
  "iv-therapy": {
    title: "点滴",
    description: "",
    treatments: [
      {
        name: "カスタマイズ点滴",
        contents: "",
        treatmentTime: "",
        description: "自分だけのオリジナル点滴。お悩みや体質、目的に合わせてあなただけのカスタマイズ点滴メニューをご提案！",
        regularPrice: "8000",
        specialPrice: "1000",
        specialPriceName: "カウンセリング料金"
      },
      {
        name: "超高濃度ビタミンC",
        contents: "VC25g, 生食250ml",
        treatmentTime: "60",
        description: "国産の超高濃度ビタミン製剤を使用。強力な抗酸化作用により、アンチエイジングや美白作用あり。炎症鎮静効果も期待できる。",
        regularPrice: "8000"
      },
      {
        name: "プラセンタ点滴",
        contents: "生食100ml, ラエンネック10A",
        treatmentTime: "30",
        description: "体全体のお肌のハリUP！胎盤由来のプラセンタ製剤により、力がみなぎり元気になれます。ホルモンバランスの乱れや肝臓の疲れにも最適。美肌効果もあり、一度体験するとやみつきに。男性にもおすすめです！",
        regularPrice: "5000"
      },
      {
        name: "プラセンタ注射",
        contents: "ラエンネック２A",
        treatmentTime: "5",
        description: "お急ぎの方には５分でプラセンタを注射いたします。週に２回程度がおすすめです。",
        regularPrice: "1000"
      },
      {
        name: "グルタチオン点滴",
        contents: "生食100ml, ルチオン",
        treatmentTime: "30",
        description: "世間の白玉点滴がこちら。グルタチオン600mgt点滴。抗酸化作用と肝臓保護作用により、黄ぐすみを除去して白玉のような美白肌に。",
        regularPrice: "3000"
      },
      {
        name: "倍量グルタチオン点滴",
        contents: "生食100ml, ルチオン",
        treatmentTime: "30",
        description: "より効果を望むなら。グルタチオンの濃度が倍の1200mgをご用意！",
        regularPrice: "5000"
      },
      {
        name: "最強ルナージュ爆美カクテル",
        contents: "生食100ml, アスコルビン酸, トランサミン, ルチオン, クリストファン, ビタメジン, ビオチン",
        treatmentTime: "30",
        description: "どの点滴をするか迷ったらこれ。ルナージュこだわりのオリジナルカクテル。美白も美肌も美髪も全て１つの点滴で叶えたいというお客様のご意見のもと作ったメニュー。ビタミンもグルタチオンもたっぷり詰まった最強点滴です。",
        regularPrice: "8000"
      },
      {
        name: "超美白カクテル",
        contents: "生食100ml, トランサミン, クリストファン, アスコルビン酸",
        treatmentTime: "30",
        description: "夏にとってもオススメ！ビタミンCに加え、メラニンを抑えるトラネキサム酸やLシステインを配合。",
        regularPrice: "5000"
      },
      {
        name: "つるつる美肌カクテル",
        contents: "生食100ml, アスコルビン酸, パンテノール, クリストファン",
        treatmentTime: "30",
        description: "ターンオーバーUP！！ビタミンCの抗酸化作用とパントテン酸の代謝促進作用できめ細やかな肌に導きます",
        regularPrice: "5000"
      },
      {
        name: "肝斑対策点滴",
        contents: "生食100ml, トランサミン, クリストファン",
        treatmentTime: "30",
        description: "当院オリジナル！肝斑向け点滴。トラネキサム酸で肝斑を抑えながら、Lシステインでメラニン撃退。肝斑を改善していきます。",
        regularPrice: "3000"
      },
      {
        name: "美髪・美爪注射",
        contents: "生食20ml, ビオチン, パンテノール",
        treatmentTime: "10",
        description: "ストレスや副作用で爪や髪のダメージが気になるかたに。ビオチンとパントテン酸で髪や爪のケラチンを補修。白髪や爪割れにもおすすめです。",
        regularPrice: "3000"
      },
      {
        name: "-5歳若返り点滴",
        contents: "NMN",
        treatmentTime: "30",
        description: "長寿遺伝子と話題の若返りの成分NMN点滴。体内でNAD+となり細胞活性に働きかけます。細胞単位で若返りを望むならこれしかありません。",
        regularPrice: ""
      },
      {
        name: "ビタミン増し増し点滴",
        contents: "生食100ml,  アスコルビン酸, ビタメジン",
        treatmentTime: "30",
        description: "にんにく注射の匂いが苦手な方にもおすすめのビタミンBとCが入った点滴。製剤がピンクで見た目も可愛い点滴です。",
        regularPrice: "5000"
      },
      {
        name: "にんにく点滴",
        contents: "生食100ml, アリナミンF50",
        treatmentTime: "30",
        description: "日々の疲れが取れない方へ。疲労回復・活力アップ。にんにくの香りはしないので予定前でも大丈夫。",
        regularPrice: "3000"
      },
      {
        name: "にんにく注射",
        contents: "アリナミンF50",
        treatmentTime: "10",
        description: "時間がない方はこれ。にんにく点滴と有効成分量は変わらず、時短で施術可能です。",
        regularPrice: "2000"
      },
      {
        name: "疲労回復点滴",
        contents: "生食100ml, アスコルビン酸, アリナミンF50",
        treatmentTime: "30",
        description: "ビタミンCとビタミンBで活力アップ、体力回復。にんにく注射のレベルアップ点滴。イベント前後にもオススメ！",
        regularPrice: "3000"
      },
      {
        name: "二日酔い爆速回復点滴",
        contents: "ソルラクト, 強ミノ, ファモチジン",
        treatmentTime: "60",
        description: "二日酔いにはこれ一択。内臓環境回復など有効成分を詰め込んだ点滴です。オプションで吐き気どめも追加できます。",
        regularPrice: "8000"
      },
      {
        name: "飲み会前守りの点滴",
        contents: "ビタメジン, 強ミノ, 生食100ml",
        treatmentTime: "30",
        description: "飲み会前の二日酔い予防・酔い潰れ予防におすすめ。肝機能を向上させてビタミンB群も補給します。",
        regularPrice: "5000"
      },
      {
        name: "飲み会前守りの注射",
        contents: "強ミノ",
        treatmentTime: "10",
        description: "時間がない方にはこれ。10分で肝機能を鉄壁にして飲み会に備えることができます。",
        regularPrice: "2000"
      },
      {
        name: "ダイエット・筋トレ点滴",
        contents: "生食100ml, エルカルニチン, チオクト酸",
        treatmentTime: "30",
        description: "男女どちらにもおすすめ。脂肪の燃焼を促進させることで健康的なダイエットが叶います。",
        regularPrice: "5000"
      },
      {
        name: "痩せる注射",
        contents: "チオクト酸, エルカルニチン",
        treatmentTime: "10",
        description: "時間がないかたにおすすめ。成分はそのまま、濃縮したダイエット注射です。",
        regularPrice: "3000"
      },
      {
        name: "レッドブル注射",
        contents: "アリナミンF50, カフェイン",
        treatmentTime: "10",
        description: "踏ん張りたい時にオススメ！徹夜続きでも目が覚めるエナジー注射です。疲労回復と眠気覚ましの効果があります。",
        regularPrice: "3000"
      },
      {
        name: "免疫強化点滴",
        contents: "生食100ml, アスコルビン酸, ビタメジン, 強ミノ, エルカルニチン",
        treatmentTime: "30",
        description: "風邪の引き始めや疲れを感じた時に。体のダメージを補修して免疫を強化します。今以上に悪化しないように予防のためにもぜひ受けてほしい。",
        regularPrice: "5000"
      },
      {
        name: "OS1点滴",
        contents: "アスコルビン酸, ビタメジン, ソルラクト",
        treatmentTime: "60",
        description: "猛暑で脱水気味や食欲低下が気になる方や、体調回復におすすめ。ミネラルに加えてビタミン類も加えた点滴メニューです。",
        regularPrice: "5000"
      },
      {
        name: "口内炎点滴",
        contents: "生食100ml, アスコルビン酸, パンテノール, ビタメジン, ビオチン",
        treatmentTime: "30",
        description: "何をしても治らなかった口内炎に、ついに終止符。― 話題の”内側から治す”ビタミン点滴。サプリでも治らなかった口内炎が改善！10年以上悩んでいたお客様からは「初めて、口の中に口内炎がない日々を体験できた」と感動の声も。",
        regularPrice: "5000"
      },
      {
        name: "胃もたれ注射",
        contents: "生食20ml, ファモチジン",
        treatmentTime: "10",
        description: "今すぐ治したい胃もたれに注射でアタック！静脈からの吸収は消化管からの吸収より早く強く効果が出ます。胃腸が弱いスタッフがイチオシのメニューです。オプションで吐き気どめも追加できます。",
        regularPrice: "2000"
      },
      {
        name: "むくみスッキリ注射",
        contents: "ラシックス, 生食20ml",
        treatmentTime: "10",
        description: "体に溜まった毒素をデトックス。ストレスでお肌が荒れてしまった後のケアにもオススメです。施術後は頻繁にお手洗いに行きたくなるので注意。",
        regularPrice: "2000"
      },
      {
        name: "つわり点滴",
        contents: "ソルラクト, アスコルビン酸, プリンペラン, ファモチジン, ビタメジン",
        treatmentTime: "60",
        description: "辛いつわりに脱水補給と必須ビタミン類を補充。もちろん吐き気止めの効果も入っています。ご自身の楽な体制で点滴を受けていただけます。",
        regularPrice: "8000"
      },
      {
        name: "エクソソーム点滴",
        contents: "生食100ml, エクソソーム",
        treatmentTime: "30",
        description: "細胞間の情報伝達を担うエクソソームを高濃度に含み、肌の修復・再生力を高める先進的な再生医療由来の美容点滴です。手術や施術後のダウンタイム対策にも効果的です。",
        regularPrice: "9900"
      },
      {
        name: "育毛点滴",
        contents: "生食100ml, パンテノール, ビオチン, ビタメジン",
        treatmentTime: "30",
        description: "まるでミノキシジル？！毛髪に必要な成分をふんだんに詰め込んだ点滴です。飲み薬との併用でさらに効果を望めます。",
        regularPrice: "5000"
      },
      {
        name: "静脈麻酔",
        contents: "アタラックスP, 生食100ml",
        treatmentTime: "30",
        description: "痛みを伴う施術のオプションです。当日中の車の運転はお控えください。",
        regularPrice: "3000"
      }
    ]
  },
  "medication": {
    title: "薬剤",
    description: "",
    treatments: [
      {
        name: "べピオローション",
        type: "軟膏",
        drugName: "べピオローション",
        efficacy: "ニキビ",
        description: "ニキビの原因となるアクネ菌やブドウ球菌に対する抗菌作用でニキビを抑えます。また、古い角質を剥がれやすくし、角栓の形成を防ぐピーリング効果や毛穴部分の角質層を緩めることで、毛穴詰まりが原因の白ニキビ・毛穴が開きが目立つ黒ニキビにも効果が期待できます。",
        regularPrice: "2200"
      },
      {
        name: "べピオウォッシュ",
        type: "軟膏",
        drugName: "べピオウォッシュ",
        efficacy: "ニキビ",
        description: "洗い流すタイプの2025年夏に新発売された,新しいニキビのお薬。べピオローションと効果は変わらず、刺激性も抑えられています。いつものスキンケアも変わらずお使いいただけます。",
        regularPrice: "2200"
      },
      {
        name: "ゼビアックスローション",
        type: "軟膏",
        drugName: "ゼビアックスローション",
        efficacy: "",
        description: "アクネ菌の増殖を抑える作用があり、炎症した赤ニキビに効果を示します。",
        regularPrice: "2200"
      },
      {
        name: "ヒルドイドローション",
        type: "軟膏",
        drugName: "ヒルドイドローション",
        efficacy: "保湿",
        description: "高保湿成分が角質層まで浸透し、乾燥によるカサつき・毛穴の開き・ニキビをケア。血行促進で炎症や赤みの改善にも効果が期待できます。",
        regularPrice: "2200"
      },
      {
        name: "トラネキサム酸",
        type: "内服薬",
        drugName: "トラネキサム酸",
        efficacy: "肝斑",
        description: "肌の炎症やメラニン生成を抑え、肝斑やくすみの改善に。内側から透明感のある明るい肌を目指す方におすすめです。",
        regularPrice: "2200"
      },
      {
        name: "シナール",
        type: "内服薬",
        drugName: "シナール",
        efficacy: "ビタミンC",
        description: "抗酸化作用でシミやくすみをケア。コラーゲン生成を助け、内側からハリと明るさをサポートします。",
        regularPrice: "2200"
      },
      {
        name: "タチオン",
        type: "内服薬",
        drugName: "タチオン",
        efficacy: "美白　飲酒",
        description: "強力な抗酸化作用で全身の美白・解毒サポート。疲れやすさや肌のくすみが気になる方に最適です。",
        regularPrice: "2200"
      },
      {
        name: "ハイチオール",
        type: "内服薬",
        drugName: "ハイチオール",
        efficacy: "美白　飲酒",
        description: "シミの原因となる過剰なメラニンを生成抑制、無色化、排出します。アセトアルデヒドの分解もサポートするので二日酔いにも効果的です。",
        regularPrice: "2200"
      },
      {
        name: "ユベラ",
        type: "内服薬",
        drugName: "ユベラ",
        efficacy: "",
        description: "血行を促進し、冷え・くすみ・肌荒れを改善。ホルモンバランスを整え、肌の内側から健やかさを支えます。",
        regularPrice: ""
      },
      {
        name: "スピロノラクトン2w",
        type: "内服薬",
        drugName: "スピロノラクトン2w",
        efficacy: "ニキビ　むくみ",
        description: "皮脂分泌を抑える作用があり、ホルモン由来のニキビ改善に有効。大人の繰り返すニキビ対策に適しています。",
        regularPrice: "2200"
      },
      {
        name: "ミノキシジル",
        type: "内服薬",
        drugName: "ミノキシジル",
        efficacy: "AGA",
        description: "頭皮の血流を改善し、発毛因子を活性化。抜け毛を予防し、発毛・育毛を促進。薄毛が気になる方に効果が期待されます。",
        regularPrice: "3000"
      },
      {
        name: "フィナステリド",
        type: "内服薬",
        drugName: "フィナステリド",
        efficacy: "AGA",
        description: "男性型脱毛症の原因物質を抑制し、抜け毛の進行を防止。発毛環境を整える長期的ケアに適した成分です。",
        regularPrice: "3000"
      },
      {
        name: "デュタステリド",
        type: "",
        drugName: "デュタステリド",
        efficacy: "AGA",
        description: "抜け毛の原因に広くアプローチし、フィナステリドよりも強力に脱毛の進行を抑制。発毛効果もより高いとされています。",
        regularPrice: "3000"
      },
      {
        name: "イソトレチノイン",
        type: "内服薬",
        drugName: "イソトレチノイン",
        efficacy: "ニキビ",
        description: "皮脂の分泌を抑え、重度のニキビや炎症を根本から改善。繰り返す頑固なニキビに対し、高い効果が期待されます。",
        regularPrice: "10mg 8000円〜"
      },
      {
        name: "十味敗毒湯",
        type: "漢方",
        drugName: "十味敗毒湯",
        efficacy: "ニキビ",
        description: "肌の炎症や湿疹、ニキビなどの体の内側からのトラブルに。体質を整え、繰り返す肌荒れを根本から改善へ導きます。",
        regularPrice: "4000"
      },
      {
        name: "五苓散",
        type: "漢方",
        drugName: "五苓散",
        efficacy: "むくみ・二日酔い",
        description: "体内の余分な水分バランスを整え、むくみ・頭重感・天気痛などの不調を緩和。水分代謝の乱れにアプローチします。",
        regularPrice: "4000"
      },
      {
        name: "防風通聖散",
        type: "漢方",
        drugName: "防風通聖散",
        efficacy: "肥満",
        description: "脂肪代謝を高め、便通を改善。ぽっこりお腹や内臓脂肪が気になる方に。体の中からすっきり引き締めたい方に最適です。",
        regularPrice: "4000"
      },
      {
        name: "桂枝茯苓丸加意苡仁",
        type: "漢方",
        drugName: "桂枝茯苓丸加意苡仁",
        efficacy: "冷え　生理不順",
        description: "血流やホルモンバランスを整え、くすみ・肌荒れ・月経トラブルなどを緩和。ニキビや吹き出物にも効果が期待されます。",
        regularPrice: "4000"
      },
      {
        name: "ラピフォート",
        type: "外用",
        drugName: "ラピフォート",
        efficacy: "多汗症",
        description: "過剰なワキ汗を抑える外用薬。有効成分が汗腺に働きかけ、日常生活で気になる汗ジミやニオイをしっかり予防します。",
        regularPrice: ""
      },
      {
        name: "エクラープラスター",
        type: "外用",
        drugName: "エクラープラスター",
        efficacy: "赤い傷跡に",
        description: "皮膚の盛り上がりやしこりの改善に。ケロイドや肥厚性瘢痕に効果的で、なめらかな肌への回復をサポートします。",
        regularPrice: ""
      },
      {
        name: "ケロコート",
        type: "外用",
        drugName: "ケロコート",
        efficacy: "ケロイドなどの被覆材",
        description: "シリコンジェルが傷跡をコーティングし、水分バランスを整えて目立つ瘢痕の修復を促進。術後ややけど跡にもおすすめです。",
        regularPrice: ""
      }
    ]
  },
  "options": {
    title: "オプション・その他",
    description: "",
    treatments: [
      {
        name: "麻酔クリーム",
        supplies: "10%クリーム麻酔",
        description: "お顔にクリームを塗って痛みを軽減する表面麻酔です。韓国から強力な麻酔クリームを輸入しています。",
        regularPrice: "1000",
      },
      {
        name: "点滴麻酔",
        supplies: "",
        description: "恐怖心や痛みに弱い方は睡眠導入剤を使用して施術を受けられます。",
        regularPrice: "3000",
      },
      {
        name: "パック",
        supplies: "成長因子系パック",
        description: "施術後に成長因子のパックをすることで、赤みやダウンタイムの短縮に効果的です。傷の修復や炎症の鎮静に有効成分が働きかけます。",
        regularPrice: "2000",
      },
      {
        name: "痛くない点滴針",
        supplies: "サーフロー",
        description: "長時間の点滴をする方は、プラスチックの針に変更可能です。動いても違和感のない柔らかい素材でできているのでリラックスして点滴を受けられます。",
        regularPrice: "500",
      },
      {
        name: "水素吸入",
        supplies: "",
        description: "強力な抗酸化作用で体内の悪玉活性酸素を除去。疲労回復やアンチエイジング、肌荒れ・くすみ改善にも効果が期待されます。",
        regularPrice: "5000",
      }
    ]
  },
  "products": {
    title: "物販",
    description: "",
    treatments: [
      {
        name: "アルファサイエンス",
        regularPrice: "5,000",
        features: ["医師監修", "高品質"],
        description: ""
      },
      {
        name: "ナビジョン",
        regularPrice: "4,000",
        features: ["内側からケア", "美容効果"],
        description: ""
      }
    ]
  }
};

// 通貨フォーマット - 特殊なテキストにも対応
const fmt = (price: string) => {
  if (!price) return "";
  
  // 数値のみの場合は従来通りフォーマット
  const numericPrice = price.replace(/[^\d]/g, '');
  if (numericPrice && price === numericPrice) {
    return `¥${Number.parseInt(price).toLocaleString()}`;
  }
  
  // 特殊なテキストが含まれる場合はそのまま表示
  // 例: "10g 8000円〜", "施術とセットで無料", "仕入れ値確認中。恐らく3万〜"
  return price;
};

interface Treatment {
  name: string;
  regularPrice: string;
  specialPrice?: string;
  specialPriceName?: string; // 特別価格の名前をカスタマイズ可能に
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
      className="flex flex-col bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-[#dacacf]/20"
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
        <p className="text-sm text-[#8a6d62] mb-2">施術時間: {treatment.treatmentTime}分</p>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 mt-auto">
        <div className="bg-[#faf3ef] p-3 rounded-lg">
          <p className="text-xs text-[#8a6d62]">通常価格</p>
          <p className="font-bold text-[#54585f]">{fmt(treatment.regularPrice)}</p>
        </div>
        {treatment.specialPrice && (
          <div className="bg-gradient-to-r from-[#caa9af]/10 to-[#d6c6b5]/10 p-3 rounded-lg">
            <p className="text-xs text-[#8a6d62]">{treatment.specialPriceName || "特別料金"}</p>
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
              {cat.description && (
                <p className="text-lg text-[#8a6d62] whitespace-pre-line">
                  {cat.description}
                </p>
              )}
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
