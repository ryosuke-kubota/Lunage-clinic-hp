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
    title: "ボディ痩身",
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
        firstPrice: "16000",
        specialPrice: ""
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
    description: "ピコレーザーやダーマペンで美肌を育成",
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
    title: "多汗症・ワキガ治療",
    description: "",
    treatments: [
      {
        name: "ワキガ治療",
        equipment: "ミラドライ機器",
        description: "マイクロ波エネルギーで汗腺を破壊し、多汗症やワキガを根本的に改善します。切らない治療で、長期的な効果が期待できます。",
        regularPrice: "220,000",
        specialPrice: "180,000"
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
