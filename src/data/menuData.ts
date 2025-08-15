// 治療データの型定義
export interface Treatment {
  name: string;
  equipment: string;
  branch?: string;
  description: string;
  memberPrice?: string;
  regularPrice: string;
  contents?: string;
  treatmentTime?: string;
  specialPriceName?: string;
  image?: string;
}

// カテゴリの型定義
export interface Category {
  title: string;
  description: string;
  treatments: Treatment[];
}

// 価格フォーマット関数
export const formatPrice = (price: string) => {
  if (!price || price === "" || price === "0" || price === "#VALUE!" || price === "準備中" || price.includes("準備中") || price.includes("計算中")) {
    return "準備中";
  }
  const numPrice = parseInt(price.replace(/[^\d]/g, ''));
  if (isNaN(numPrice) || numPrice === 0) return "準備中";
  return `¥${numPrice.toLocaleString()}`;
};

// 悩み別カテゴリのデータ
export const concernsData: Record<string, Category> = {
  "skin-diagnosis": {
    title: "肌診断",
    description: "最新の肌診断機器で肌の状態を詳細に分析",
    treatments: [
      {
        name: "肌診断",
        equipment: "肌診断機",
        description: "最新のカメラを用いて、肌の状態を詳細に分析する肌診断器です。シミ、しわ、毛穴など、様々な肌トラブルを数値化し、肌年齢を推定。肌治療前に測定することでベストな治療の提案に役立ちます。肌治療を予約した方は無料で受けられます。",
        memberPrice: "3300",
        regularPrice: "3630"
      }
    ]
  },
  "stretch-marks": {
    title: "妊娠線・肉割れ",
    description: "妊娠線や肉割れを改善する施術",
    treatments: [
      {
        name: "妊娠線ケア(ハガキ1枚分)",
        equipment: "ダーマペン４",
        branch: "ミラノリピール",
        image: "/images/testimonials/dermapen.PNG",
        description: "妊娠や急激な体重変化により生じた線状皮膚萎縮（いわゆる妊娠線）に対し、ダーマペンで微細な穿孔を行い、皮膚の創傷治癒機構を利用して滑らかでふっくらとした肌質感を目指します。併用するミラノリピールは、TCA、ラクトビオン酸、サリチル酸、タルトル酸（酒石酸）、クエン酸の5種類の酸が配合されているピーリング治療です。これらの酸のピーリング効果に加えて、アミノ酸やビタミンが直接的に肌細胞を刺激し、Ⅲ型コラーゲンを増やして、エラスチンやヒアルロン酸を作る手助けをします。また、保湿成分のスクワラン、ビタミンＢ、Ｃ、GABA、アルギニンなどの成分も配合されています。TCAの濃度がマッサージピールよりも高いため、皮むけのリスクはその分高まりますが、配合成分の違いによって、ミラノリピールのほうが施術中の痛みを感じにくいと言われています。肌の奥に働きかける刺激で、硬くなった妊娠線周辺の皮膚にハリや柔軟性を感じやすく、回数を重ねることで線が徐々に目立ちにくくなる印象を目指します。",
        memberPrice: "69600",
        regularPrice: "76560"
      },
      {
        name: "妊娠線ケア(ハガキ1枚分)",
        equipment: "ダーマペン４",
        branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        image: "/images/testimonials/dermapen.PNG",
        description: "妊娠や体重変化に伴い生じた線状皮膚萎縮（妊娠線やストレッチマーク）に対し、ダーマペンによって微細な穿孔を行い、創傷治癒機構を刺激することでコラーゲンやエラスチンの産生を促し、皮膚の再構築を目指します。併用するエクソソームは、細胞間の情報伝達を担うナノサイズの成分で、数百種類もの成長因子やタンパク質、m;RNAなどが含まれています。これにより、皮膚細胞の修復・再生能力を高め、内側からふっくらとしたハリと弾力を与えます。エクソソームは炎症抑制や抗酸化作用にも優れており、施術後の赤みやダウンタイムの軽減にも寄与します。硬く乾燥しがちな妊娠線周囲の肌質を整え、回数を重ねることで、より自然な肌色と滑らかな質感を目指せます。",
        memberPrice: "69600",
        regularPrice: "76560"
      },
      {
        name: "妊娠線ケア(ハガキ1枚分)",
        equipment: "U225使用",
        branch: "エクソソーム(U225使用)",
        image: "/images/testimonials/u225.JPG",
        description: "メソガンを用いて皮膚へ注入することで無駄なく薬剤を皮膚内に注入でき、妊娠線部位の癒着した真皮を物理的にほぐす「サブシジョン効果」も期待できます。",
        // memberPrice: "",
        regularPrice: "+5000"
      }
    ]
  },
  "sagging": {
    title: "たるみ",
    description: "リフトアップ・引き締め効果が期待できる施術",
    treatments: [
      {
        name: "頬下・顎下 600shot",
        equipment: "カスタマイズHIFU",
        description: "筋膜にアプローチして皮膚の内側から引き締まりが期待できるたるみ治療です。ひとりひとり脂肪や皮膚の厚みが違うため、当院ではお客様の状態に合わせたカスタマイズ HIFUを提案いたします。",
        memberPrice: "33000",
        regularPrice: "36300"
      },
      {
        name: "マッサージハイフ 20分",
        equipment: "カスタマイズHIFU",
        description: "皮膚の表層に優しい熱を入れることでその場でむくみを軽減する効果が期待できます。コラーゲンの産生も促進されるので定期的な施術で美肌効果も期待できます。細身で頬のコケが気になる方にもおすすめのメニューです。",
        memberPrice: "15000",
        regularPrice: "16500"
      },
      {
        name: "全顔・目・首",
        equipment: "ウルトラフォーマーMPT",
        description: "高密度焦点式超音波（HIFU）を真皮やSMAS層に照射することで、熱によるコラーゲン変性と収縮が起こり、肌のハリ感や輪郭の引き締まり感が期待されます。照射深度を部位に合わせて調整でき、個々の状態に応じたケアが可能です。",
        memberPrice: "88000",
        regularPrice: "96800"
      },
      {
        name: "頬・顎下",
        equipment: "ウルトラフォーマーMPT",
        description: "高密度焦点式超音波（HIFU）を真皮やSMAS層に照射することで、熱によるコラーゲン変性と収縮が起こり、肌のハリ感や輪郭の引き締まり感が期待されます。照射深度を部位に合わせて調整でき、個々の状態に応じたケアが可能です。",
        memberPrice: "44000",
        regularPrice: "48400"
      },
      {
        name: "顎下・首",
        equipment: "ウルトラフォーマーMPT",
        description: "高密度焦点式超音波（HIFU）を真皮やSMAS層に照射することで、熱によるコラーゲン変性と収縮が起こり、肌のハリ感や輪郭の引き締まり感が期待されます。照射深度を部位に合わせて調整でき、個々の状態に応じたケアが可能です。",
        memberPrice: "44000",
        regularPrice: "48400"
      },
      {
        name: "ハイフシャワー全顔",
        equipment: "ウルトラフォーマーMPT",
        description: "皮膚の表層に優しい熱を入れることでその場でむくみを軽減する効果が期待できます。コラーゲンの産生も促進されるので定期的な施術で美肌効果も期待できます。細身で頬のコケが気になる方にもおすすめのメニューです。",
        memberPrice: "33000",
        regularPrice: "36300"
      },
      // {
      //   name: "頬",
      //   equipment: "オンダリフト",
      //   description: "マイクロ波を真皮・皮下脂肪層に選択的照射することで、脂肪細胞とコラーゲンに同時にアプローチし、フェイスラインの引き締め効果とハリが期待できます。個人差はありますが、痛みが少ないのが特徴です。",
      //   memberPrice: "30000",
      //   regularPrice: "33000"
      // },
      // {
      //   name: "頬・顎下",
      //   equipment: "オンダリフト",
      //   description: "マイクロ波を真皮・皮下脂肪層に選択的照射することで、脂肪細胞とコラーゲンに同時にアプローチし、フェイスラインの引き締め効果とハリが期待できます。個人差はありますが、痛みが少ないのが特徴です。",
      //   memberPrice: "42000",
      //   regularPrice: "46200"
      // },
      {
        name: "水玉リフティング",
        equipment: "LDM",
        description: "艶感やハリといった変化が期待できる、痛みを伴わない施術です。老化が進んだ肌の奥の細胞を肌への負担を考慮しながら刺激し、コラーゲンやヒアルロン酸の再配列を活性化に働きかけます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      // {
      //   name: "DAIAMOND",
      //   equipment: "POTENZA",
      //   description: "高周波RF（ラジオ波）を肌に照射し、コラーゲンやエラスチンの生成を促進。肌の引き締めやハリ改善など小ジワや毛穴の開き、ニキビ跡の改善効果のある施術です。個人差はありますが、針を使用しないため、痛みやダウンタイムが少ないと言われています。",
      //   regularPrice: "計算中"
      // },
      // {
      //   name: "チタニウムリフト",
      //   equipment: "ソプラノ",
      //   description: "医療レーザーを使用し、肌のたるみやシワの改善が期待できるリフトアップ治療法です。3つの異なる波長のレーザーを同時に照射し、肌の浅い層から深い層までアプローチすることで、リフトアップ効果だけでなく、肌の引き締め、毛穴の開き改善、美白効果なども期待できます。",
      //   regularPrice: "準備中"
      // },
      {
        name: "顔/首",
        equipment: "ソフウェーブ",
        image: "/images/testimonials/sofwave.JPG",
        description: "7MHzの超音波を皮膚真皮中層に照射し、熱刺激によりコラーゲンの生成を促す非侵襲的な施術です。皮膚表面を傷つけずに、目元やフェイスラインなどの変化にアプローチでき、エイジングケアを意識する方に選ばれています。",
        memberPrice: "99000",
        regularPrice: "108900"
      },
      {
        name: "顔・首",
        equipment: "ソフウェーブ",
        image: "/images/testimonials/sofwave.JPG",
        description: "7MHzの超音波を皮膚真皮中層に照射し、熱刺激によりコラーゲンの生成を促す非侵襲的な施術です。皮膚表面を傷つけずに、目元やフェイスラインなどの変化にアプローチでき、エイジングケアを意識する方に選ばれています。",
        memberPrice: "130000",
        regularPrice: "143000"
      },
      {
        name: "額・目の下・頬・あご下から2エリア",
        equipment: "EMFACE",
        image: "/images/testimonials/emface.JPG",
        description: "高周波（RF）と筋肉刺激（HIFES）を同時に照射し、皮膚と表情筋の両方にアプローチする技術です。非侵襲的に筋肉の収縮を促すことで、リフト感や引き締まった輪郭の印象を目指します。施術後のダウンタイムもほとんどなく、短時間でのケアが可能です。",
        memberPrice: "99000",
        regularPrice: "108900"
      },
      {
        name: "顔",
        equipment: "サーマクール",
        image: "/images/testimonials/thermacool.JPG",
        description: "高周波（RF）を皮膚深部に届けることで、コラーゲン繊維の収縮および再構築を促し、肌の弾力や輪郭の変化が期待されます。リアルタイムで温度をモニターしながら照射できるため、安全性と快適性に配慮した治療が可能です。",
        memberPrice: "99000",
        regularPrice: "108900"
      },
      {
        name: "顔・首",
        equipment: "サーマクール",
        image: "/images/testimonials/thermacool.JPG",
        description: "高周波（RF）を皮膚深部に届けることで、コラーゲン繊維の収縮および再構築を促し、肌の弾力や輪郭の変化が期待されます。リアルタイムで温度をモニターしながら照射できるため、安全性と快適性に配慮した治療が可能です。",
        memberPrice: "150000",
        regularPrice: "165000"
      }
    ]
  },
  "slimming": {
    title: "痩身",
    description: "ボディラインの引き締めを目指す施術",
    treatments: [
      {
        name: "ボディMパーツ",
        equipment: "ウルトラフォーマーMPT",
        branch: "背中上部、背中下部、二の腕（左右）、腰、臀部（バナナロール）、ふくらはぎ、腹部、ウエスト",
        description: "超音波の熱を利用した施術により、気になる部位の脂肪にアプローチし、ボディラインの引き締めを目指します。気になる二の腕やブラ肉、細かな部位へのアプローチが可能です。",
        memberPrice: "50000",
        regularPrice: "55000"
      },
      {
        name: "ボディLパーツ",
        equipment: "ウルトラフォーマーMPT",
        branch: "大腿前面・大腿後面・大腿内側（左右）",
        description: "超音波の熱を利用した施術により、気になる部位の脂肪にアプローチし、ボディラインの引き締めを目指します。気になる二の腕やブラ肉、細かな部位へのアプローチが可能です。",
        memberPrice: "65000",
        regularPrice: "71500"
      },
      // {
      //   name: "ボディMパーツ",
      //   equipment: "オンダリフト",
      //   branch: "背中上部、背中下部、二の腕（左右）、腰、臀部（バナナロール）、ふくらはぎ、腹部、ウエスト",
      //   description: "マイクロ波が皮下深部の脂肪細胞に熱エネルギーを注ぐことで、脂肪分解とセルライト改善が期待できます。冷却機構付きで肌表面への負担を軽減し、痛みに配慮した施術です。たるみ・凸凹改善と引き締め効果が期待できます。",
      //   memberPrice: "40000",
      //   regularPrice: "44000"
      // },
      // {
      //   name: "ボディLパーツ",
      //   equipment: "オンダリフト",
      //   branch: "大腿前面・大腿後面・大腿内側（左右）",
      //   description: "マイクロ波が皮下深部の脂肪細胞に熱エネルギーを注ぐことで、脂肪分解とセルライト改善が期待できます。冷却機構付きで肌表面への負担を軽減し、痛みに配慮した施術です。たるみ・凸凹改善と引き締め効果が期待できます。",
      //   memberPrice: "55000",
      //   regularPrice: "60500"
      // },
      {
        name: "bodyセルライト・拘縮改善",
        equipment: "LDM",
        description: "ダウンタイム短縮にもオススメ◎最先端セルライト治療！超音波を用いてセルライトや脂肪吸引後の拘縮を分解します。痛みやダウンタイムも心配ありません。",
        memberPrice: "16000",
        regularPrice: "17600"
      }
    ]
  },
  "spots-melasma": {
    title: "しみ・肝斑",
    description: "色素沈着やくすみの改善を目指す施術",
    treatments: [
      // {
      //   name: "s16肝斑",
      //   equipment: "POTENZA",
      //   description: "肝斑治療をお考えの方におすすめの施術です。お肌のメラノサイト自体に特定のRFエネルギーを与えることで、肝斑の原因となるメラニンの産生を抑制し、根本的な改善を目指します。本施術により、色素沈着や再発、白抜けのリスクに配慮した治療が可能です。また、赤ら顔や顔全体のくすみ・色素沈着の改善にも効果が期待できます。",
      //   regularPrice: "計算中"
      // },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "ルナージュオリジナル製剤",
        description: "LDMのマイクロマッサージ作用により、肌に必要な成分を皮膚深層まで届けやすくします。カウンセリングにてオリジナル製剤の中から最適な美容成分をご提案いたします。",
        memberPrice: "12900",
        regularPrice: "14190"
      },
      {
        name: "美白",
        equipment: "クールガン",
        // branch: "美白",
        description: "肌のくすみ印象や色ムラが気になる方に用いられる成分で、CO2凍結との組み合わせにより、肌の明るさや均一感を意識したケアを行うことが可能です。",
        memberPrice: "15000",
        regularPrice: "16500"
      },
      {
        name: "ピコジェネシス(レーザートーニング)",
        equipment: "ピコレーザー",
        description: "ピコ秒レーザーがメラニンに優しく作用し、肝斑・くすみ・色ムラを改善。ダウンタイムはほとんどなく透明感のある肌へ導きます。",
        memberPrice: "8000",
        regularPrice: "8800"
      }
    ]
  },
  "pores-acne-scars": {
    title: "毛穴・ニキビ跡",
    description: "毛穴の開きやニキビ跡の改善を目指す施術",
    treatments: [
      // {
      //   name: "cp21導入",
      //   equipment: "POTENZA",
      //   branch: "Pluryal Densify",
      //   description: "ペプチド・アミノ酸・ヒアルロン酸を含む高濃度製剤が線維芽細胞を刺激し、コラーゲン・エラスチンの産生を促進。毛穴・小ジワ・ハリ低下の原因にアプローチします。",
      //   regularPrice: "計算中"
      // },
      {
        name: "全顔",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "極細針で肌に微細な刺激を与え、コラーゲン生成を促進。毛穴・ニキビ跡・小ジワの改善に有効な再生治療です。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "ボディ(ハガキ1枚分)",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "極細針で肌に微細な刺激を与え、コラーゲン生成を促進。毛穴・ニキビ跡・小ジワの改善に有効な再生治療です。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "ボトックスフェイシャル",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "極少量のボトックスを顔全体に微注入。筋肉の動きは残しつつ、毛穴・小ジワ・皮脂テカリを整える肌質改善治療。肌質改善により、マスクの蒸れや夏場のメイク崩れが軽減されます。",
        memberPrice: "19000",
        regularPrice: "20900"
      },
      {
        name: "ヴェルヴェットスキン",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "ダーマペンで肌に微細な穴を開けた直後にピーリング剤を導入。ハリ・ツヤ・毛穴・ニキビ跡を同時にケアするトリートメントです。",
        memberPrice: "15000",
        regularPrice: "16500"
      },
      {
        name: "ダーマペンエクソソーム",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "エクソソームは細胞間の情報伝達を担うナノサイズの顆粒で、成長因子や核酸などを内包しています。微細な経路を形成しながら肌内部へ届けることで、肌の水分保持やキメ、ハリのある印象の維持をサポートします。加齢やニキビ跡が気になる方に適したケアです。",
        memberPrice: "47600",
        regularPrice: "52360"
      },
      // {
      //   name: "ハイドラフェイシャル",
      //   equipment: "ハイドラフェイシャル",
      //   description: "クレンジング・角質除去・吸引・美容液導入を一度に行うことで、効率的なケアが期待できます。毛穴の黒ずみやザラつきを改善し、つるんとした透明肌へ。",
      //   specialPriceName: "単品15000円 他施術とセットで10000円",
      //   regularPrice: "15000"
      // },
      {
        name: "ピコフラクショナル",
        equipment: "ピコレーザー",
        description: "真皮層に微細なレーザー刺激を与え、肌の再生を促進。毛穴・ニキビ跡・小ジワなどに効果が期待できる美肌治療です。",
        memberPrice: "9900",
        regularPrice: "10890"
      }
    ]
  },
  "acne-inflammation": {
    title: "肌荒れ",
    description: "ニキビや炎症の改善を目指す施術",
    treatments: [
      {
        name: "炎症ニキビ",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみのある肌に優しく作用し、肌のコンディションを整えます。細胞外マトリックスに深く作用することで、肌の土台から健やかな状態へ導きます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "cp21導入",
        equipment: "POTENZA",
        branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        description: "幹細胞由来エクソソームが損傷組織の修復を促し、抗炎症・抗酸化・細胞再生に働きかけます。ニキビ跡、赤み、加齢による肌力低下など、複合的なお悩みに効果が期待できる再生治療です。",
        regularPrice: "計算中"
      },
      // {
      //   name: "A1-12ニキビ・汗管腫",
      //   equipment: "POTENZA",
      //   description: "真皮内の皮脂腺や汗管腫の腫瘍組織に直接熱エネルギーを届け、選択的に破壊・凝固します。ニキビの原因菌繁殖や皮脂過剰を抑制し、再発しにくい肌を目指します。汗管腫は複数回の照射で縮小・消退を目指す瘢痕を最小限に抑えた治療が可能です。",
      //   regularPrice: "計算中"
      // },
      {
        name: "ララピール",
        equipment: "ピーリング",
        description: "ポリ乳酸やグルタチオンなどの成分を独自に配合した医療機関専用のピーリングです。角質層への穏やかなアプローチにより、肌のトーンやキメの乱れに配慮しながら、明るく滑らかな肌印象を目指します。ダウンタイムも少なく、定期的なスキンケアとしても選ばれています。",
        memberPrice: "10000",
        regularPrice: "11000"
      }
    ]
  },
  "hair-loss": {
    title: "薄毛",
    description: "育毛・発毛効果が期待できる施術",
    treatments: [
      // {
      //   name: "ヘアケア",
      //   equipment: "LDM",
      //   description: "頭皮の血流を促進し、細胞の再生力をサポート。抜け毛予防・育毛効果が期待される痛みの少ない頭皮ケアです。",
      //   regularPrice: "準備中"
      // },
      {
        name: "Hair filler",
        equipment: "メソガンU225",
        description: "ペプチドやヒアルロン酸などを配合した製剤を頭皮に注入し、頭皮環境の健やかさを保つことを目的とした施術です。栄養成分が頭皮に行き渡ることで、ハリ・コシが気になる方の毛髪のボリューム維持をサポートします。痛くても効果重視な方におすすめ。",
        memberPrice: "30000",
        regularPrice: "33000"
      },
      {
        name: "エクソソーム",
        equipment: "メソガンU225",
        description: "エクソソームは、頭皮環境の整備や毛包周辺へのアプローチが期待されており、注目される先端成分です。ドラッグデリバリー機器を用いて頭皮表面に微細な通路を形成し、栄養成分を効率よく浸透させる設計となっており、ボリューム感やハリ・コシが気になる方の頭皮ケアに取り入れられています。",
        memberPrice: "44600",
        regularPrice: "49060"
      },
      {
        name: "ヘアダーマ",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "ダーマペンで頭皮に微細な刺激を与えることで、頭皮のターンオーバーを促し、健やかな環境を整えます。毛髪の土台である頭皮の状態を見直したい方におすすめ。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "エクソソーム",
        equipment: "ダーマペン４",
        branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        image: "/images/testimonials/dermapen.PNG",
        description: "国内の大学病院で各種検査をクリアした限定ドナー由来の国産エクソソームを使用。ダーマペンによる傷で浸透させ、育毛を促進します。安全性と品質にこだわった施術です。",
        memberPrice: "47600",
        regularPrice: "52360"
      },
      {
        name: "ヘアクール",
        equipment: "クールガン",
        description: "頭皮深層に超低温の二酸化炭素が残存することで血流促進効果・ボーア効果による育毛を促進します。副作用やダウンタイムがないため前後の予定を気にせず治療を継続できます。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "Hair filler",
        equipment: "クールガン",
        // branch: "Hair filler",
        description: "CO2によるボーア効果に加え、ペプチドやヒアルロン酸などを配合した製剤を頭皮に注入し、頭皮環境の健やかさを保つことを目的とした施術です。栄養成分が頭皮に行き渡ることで、ハリ・コシが気になる方の毛髪のボリューム維持をサポートします。痛みが苦手な方にオススメ。",
        memberPrice: "42000",
        regularPrice: "46200"
      }
    ]
  },
  // "hair-growth": {
  //   title: "育毛",
  //   description: "育毛・発毛効果が期待できる施術",
  //   treatments: [
  //     {
  //       name: "ヘアクール",
  //       equipment: "クールガン",
  //       description: "頭皮深層に超低温の二酸化炭素が残存することで血流促進効果・ボーア効果による育毛を促進します。副作用やダウンタイムがないため前後の予定を気にせず治療を継続できます。",
  //       memberPrice: "12000",
  //       regularPrice: "13200"
  //     },
  //     {
  //       name: "Hair filler",
  //       equipment: "クールガン",
  //       // branch: "Hair filler",
  //       description: "CO2によるボーア効果に加え、ペプチドやヒアルロン酸などを配合した製剤を頭皮に注入し、頭皮環境の健やかさを保つことを目的とした施術です。栄養成分が頭皮に行き渡ることで、ハリ・コシが気になる方の毛髪のボリューム維持をサポートします。痛みが苦手な方にオススメ。",
  //       memberPrice: "42000",
  //       regularPrice: "46200"
  //     }
  //   ]
  // },
  "hair-removal": {
    title: "脱毛",
    description: "医療レーザー脱毛による永久脱毛",
    treatments: [
      // {
      //   name: "脱毛",
      //   equipment: "ソプラノ",
      //   description: "痛みに配慮し、高い脱毛効果を目指して丁寧に施術いたします。痛みが少ない、幅広い肌質・毛質に対応、施術時間が短い、3種類の波長をブレンドして様々な深さの毛に対応できます。",
      //   regularPrice: "準備中"
      // }
    ]
  },
  "soothing": {
    title: "鎮静",
    description: "肌の炎症や赤みを鎮静する施術",
    treatments: [
      {
        name: "アトピー",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみのある肌に優しく作用し、肌のコンディションを整えます。細胞外マトリックスに深く作用することで、肌の土台から健やかな状態へ導きます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "赤み",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみのある肌に優しく作用し、肌のコンディションを整えます。細胞外マトリックスに深く作用することで、肌の土台から健やかな状態へ導きます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "GFパック導入",
        description: "成長因子を含むパックを組み合わせることで、乾燥やキメの乱れ、肌のコンディション低下が気になる方へ、整肌を目的としたトリートメントとして使用されています。",
        memberPrice: "11900",
        regularPrice: "13090"
      },
      {
        name: "ニキビ",
        equipment: "クールガン",
        // branch: "ニキビ",
        description: "ピーリング作用と抗炎症効果のある製剤をCO2凍結との組み合わせにより、皮脂量の調整や溜まった角質層のケアを行うことが可能です。",
        memberPrice: "15000",
        regularPrice: "16500"
      }
    ]
  },
  "pores-firmness-glow": {
    title: "毛穴・ハリ・艶",
    description: "毛穴の引き締めとハリ・艶の改善を目指す施術",
    treatments: [
      {
        name: "エイジングケア",
        equipment: "LDM",
        description: "1MHz／3MHz／10MHzといった周波数を部位や目的に応じて使い分けることで、真皮層への穏やかな刺激とマイクロマッサージ効果が得られ、肌のハリ・弾力・キメの整った印象を意識したケアが可能です。物理的刺激によって細胞間マトリックス環境を整えることで、肌の健やかなコンディション維持をサポートします",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        description: "幹細胞由来エクソソームが損傷組織の修復を促し、抗炎症・抗酸化・細胞再生に働きかけます。ニキビ跡、赤み、加齢による肌力低下など、複合的なお悩みに効果が期待できる再生治療です。",
        memberPrice: "49500",
        regularPrice: "54450"
      },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "スキンボトックス",
        description: "ボツリヌストキシンが汗腺・皮脂腺の活動を抑制し、毛穴の開き・皮脂分泌・肌のテカリを軽減します。滑らかでマットな質感へ整え、メイクのりの良い陶器肌のような仕上がりが期待できます。自然な表情のまま肌質改善が可能です。",
        memberPrice: "25900",
        regularPrice: "28490"
      },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "プラセンタ",
        description: "アミノ酸やビタミン、ミネラルを豊富に含むプラセンタ製剤を、LDMの超音波振動によって肌深部へ導入する施術です。ハリ感や潤いを意識した肌ケアとして用いられ、年齢や乾燥による肌状態の変化が気になる方に適したメニューとなっています。",
        memberPrice: "14900",
        regularPrice: "16390"
      },
      {
        name: "マッサージピール",
        equipment: "ピーリング",
        description: "トリクロロ酢酸のピーリング効果に加え、コウジ酸の配合により美白効果が期待できます。しっかり効果が欲しい方におすすめ。角質が整い、水光肌に近づきます。",
        memberPrice: "10000",
        regularPrice: "11000"
      },
      // {
      //   name: "ブラックピール",
      //   equipment: "ピーリング",
      //   description: "ブラックピールはサリチル酸や乳酸に加え、炭（チャコール）を含む医療機関専用ピーリング剤を用いた施術です。皮脂や角質の詰まり、ざらつき、くすみ印象が気になる肌に対し、表面をなめらかに整えるサポートを行います。炭の吸着力と角質ケア成分の働きにより、毛穴の引き締まり感や肌の明るさを直後から実感しやすいメニューとして人気です。",
      //   regularPrice: "計算中"
      // },
      {
        name: "臍帯血幹細胞培養液導入（エクソソーム）",
        equipment: "クールガン",
        // branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        description: "エクソソームは細胞間の情報伝達を担うナノサイズの顆粒で、成長因子や核酸などを内包しています。微細な経路を形成しながら頭皮深層へ届けることで、毛母細胞の活性化やダメージを受けた組織の修復を通して育毛効果を期待できます。",
        memberPrice: "31800",
        regularPrice: "34980"
      },
      {
        name: "Pluryal Densify",
        equipment: "クールガン",
        // branch: "Pluryal Densify",
        description: "ペプチド・アミノ酸・ヒアルロン酸を含む高濃度製剤が線維芽細胞を刺激し、コラーゲン・エラスチンの産生を促進。毛穴・小ジワ・ハリ低下の原因にアプローチします。",
        memberPrice: "40700",
        regularPrice: "37000"
      },
      {
        name: "臍帯血幹細胞培養液導入（エクソソーム）",
        equipment: "クールガン",
        // branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        description: "エクソソームは細胞間の情報伝達を担うナノサイズの顆粒で、成長因子や核酸などを内包しています。微細な経路を形成しながら肌内部へ届けることで、肌の水分保持やキメ、ハリのある印象の維持をサポートします。加齢やニキビ跡が気になる方に適したケアです。",
        memberPrice: "34980",
        regularPrice: "31800"
      },
      {
        name: "スキンボトックス",
        equipment: "クールガン",
        // branch: "スキンボトックス",
        description: "極少量のボトックスを顔全体に微注入。筋肉の動きは残しつつ、毛穴・小ジワ・皮脂テカリを整える肌質改善治療。肌質改善により、マスクの蒸れや夏場のメイク崩れが軽減されます。",
        memberPrice: "25300",
        regularPrice: "23000"
      },
      {
        name: "LIZNE",
        equipment: "クールガン",
        // branch: "LIZNE",
        description: "ポリヌクレオチド（PN）、低分子ヒアルロン酸、ペプチド、コエンザイムなどが配合されており、肌の水分保持力やハリ感に働きかけることが期待されます。毛穴やざらつき、乾燥感など、肌の質感変化が気になる方に選ばれています。",
        memberPrice: "29700",
        regularPrice: "27000"
      },
      {
        name: "プラセンタ",
        equipment: "クールガン",
        // branch: "プラセンタ",
        description: "アミノ酸やビタミン、ミネラルを豊富に含むプラセンタ製剤を、LDMの超音波振動によって肌深部へ導入する施術です。ハリ感や潤いを意識した肌ケアとして用いられ、年齢や乾燥による肌状態の変化が気になる方に適したメニューとなっています。",
        memberPrice: "18700",
        regularPrice: "17000"
      },
      {
        name: "プラセンタフェイシャル",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        branch: "プラセンタ",
        description: "アミノ酸やビタミン、ミネラルを豊富に含むプラセンタ製剤を、LDMの超音波振動によって肌深部へ導入する施術です。ハリ感や潤いを意識した肌ケアとして用いられ、年齢や乾燥による肌状態の変化が気になる方に適したメニューとなっています。",
        memberPrice: "13000",
        regularPrice: "14300"
      },
      // {
      //   name: "cp21導入",
      //   equipment: "POTENZA",
      //   branch: "スキンボトックス",
      //   description: "ボツリヌストキシンが汗腺・皮脂腺の活動を抑制し、毛穴の開き・皮脂分泌・肌のテカリを軽減します。滑らかでマットな質感へ整え、メイクのりの良い陶器肌のような仕上がりが期待できます。自然な表情のまま肌質改善が可能です。",
      //   regularPrice: "計算中"
      // },
      {
        name: "Pluryal Densify",
        equipment: "メソガンU225",
        image: "/images/testimonials/u225.JPG",
        description: "ペプチド・アミノ酸・ヒアルロン酸を含む高濃度製剤が線維芽細胞を刺激し、コラーゲン・エラスチンの産生を促進。毛穴・小ジワ・ハリ低下の原因にアプローチします。",
        memberPrice: "30000",
        regularPrice: "33000"
      },
      {
        name: "LIZNE",
        equipment: "メソガンU225",
        description: "ポリヌクレオチド（PN）、低分子ヒアルロン酸、ペプチド、コエンザイムなどが配合されており、肌の水分保持力やハリ感に働きかけることが期待されます。毛穴やざらつき、乾燥感など、肌の質感変化が気になる方に選ばれています。",
        memberPrice: "20000",
        regularPrice: "22000"
      },
      {
        name: "臍帯血幹細胞培養液導入（エクソソーム）",
        equipment: "メソガンU225",
        description: "エクソソームは細胞間の情報伝達を担うナノサイズの顆粒で、成長因子や核酸などを内包しています。微細な経路を形成しながら肌内部へ届けることで、肌の水分保持やキメ、ハリのある印象の維持をサポートします。加齢やニキビ跡が気になる方に適したケアです。",
        memberPrice: "44600",
        regularPrice: "49060"
      },
      {
        name: "スキンボトックス",
        equipment: "メソガンU225",
        description: "極少量のボトックスを顔全体に微注入。筋肉の動きは残しつつ、毛穴・小ジワ・皮脂テカリを整える肌質改善治療。肌質改善により、マスクの蒸れや夏場のメイク崩れが軽減されます。",
        memberPrice: "16000",
        regularPrice: "17600"
      }
    ]
  },
  "body": {
    title: "ボディ",
    description: "ボディの肌質改善やケアを目指す施術",
    treatments: [
      {
        name: "body肌質改善",
        equipment: "LDM",
        description: "背中やデコルテを始めとするお体の肌トラブルに1MHz／3MHz／10MHzといった周波数を部位や目的に応じて使い分けることで、真皮層への穏やかな刺激とマイクロマッサージ効果が得られ、肌のハリ・弾力・キメの整った印象を意識したケアが可能です。物理的刺激によって細胞間マトリックス環境を整えることで、肌の健やかなコンディション維持をサポートします。",
        memberPrice: "16000",
        regularPrice: "17600"
      },
      {
        name: "ボディピーリング",
        equipment: "ピーリング",
        description: "背中やデコルテのニキビでお悩みの方におすすめです。二の腕の毛孔性苔癬にも効果が期待できます。今あるニキビの炎症を抑えながら、ニキビ跡の軽減を目指します。",
        memberPrice: "20000",
        regularPrice: "22000"
      },
    ]
  },
  "tenteki": {
    title: "点滴",
    description: "各種点滴・注射メニュー",
    treatments: [
      {
        name: "超高濃度ビタミンC",
        equipment: "点滴",
        description: "国産の超高濃度製剤を使用。強力な抗酸化作用が期待でき、アンチエイジングや美白へのアプローチとして注目されています。酸化剤不使用の国産ビタミンCを採用しています。",
        contents: "VC25g, 生食250ml",
        regularPrice: "10000"
      },
      {
        name: "プラセンタ点滴",
        equipment: "点滴",
        description: "胎盤由来のプラセンタ製剤により、健やかな毎日をサポートします。プラセンタは、ホルモンバランスの乱れや肝臓の疲れが気になる方にも活用されています。美肌効果もあり、女性はもちろん男性にもおすすめです！",
        contents: "生食100ml, ラエンネック10A",
        regularPrice: "5000"
      },
      {
        name: "プラセンタ注射",
        equipment: "点滴",
        description: "",
        contents: "ラエンネック２A",
        regularPrice: "1000"
      },
      {
        name: "グルタチオン点滴",
        equipment: "点滴",
        description: "グルタチオン600mgt点滴。抗酸化作用と肝臓保護作用により、黄ぐすみの軽減や美白効果が期待できます。",
        contents: "生食100ml, ルチオン",
        regularPrice: "3000"
      },
      {
        name: "倍量グルタチオン点滴",
        equipment: "点滴",
        description: "高濃度のグルタチオンを配合した点滴です。グルタチオンの濃度が倍の1200mgです。",
        contents: "生食100ml, ルチオン",
        regularPrice: "5000"
      },
      {
        name: "ルナージュオリジナル美肌カクテル",
        equipment: "点滴",
        description: "ルナージュこだわりのオリジナルカクテルです。美白、美肌、美髪など、複数の美容効果が期待できる成分を配合したオリジナルカクテル点滴です。ビタミンやグルタチオンなどをバランス良く配合しています。",
        contents: "生食100ml, アスコルビン酸, トランサミン, ルチオン, クリストファン, ビタメジン, ビオチン",
        regularPrice: "10000"
      },
      {
        name: "美白カクテル",
        equipment: "点滴",
        description: "ビタミンCに加え、メラニンを抑えるトラネキサム酸やLシステインを配合。",
        contents: "生食100ml, トランサミン, クリストファン, アスコルビン酸",
        regularPrice: "5000"
      },
      {
        name: "つるつる美肌カクテル",
        equipment: "点滴",
        description: "ビタミンCの抗酸化作用とパントテン酸の代謝促進作用できめ細やかな肌に導きます",
        contents: "生食100ml, アスコルビン酸, パンテノール, クリストファン",
        regularPrice: "5000"
      },
      {
        name: "肝斑対策点滴",
        equipment: "点滴",
        description: "トラネキサム酸が肝斑に働きかけ、Lシステインがメラニンの生成を抑制することで、肝斑の改善を目指します。",
        contents: "生食100ml, トランサミン, クリストファン",
        regularPrice: "3000"
      },
      {
        name: "美髪・美爪注射",
        equipment: "点滴",
        description: "ビオチンとパントテン酸で髪や爪のケラチンを補修。髪や爪の健康維持をサポートし、白髪や爪割れが気になる方にもお勧めです。",
        contents: "生食20ml, ビオチン, パンテノール",
        regularPrice: "3000"
      },
      {
        name: "高濃度ビタミン点滴",
        equipment: "点滴",
        description: "にんにく注射の匂いが苦手な方にもおすすめのビタミンBとCが入った点滴です。",
        contents: "生食100ml,  アスコルビン酸, ビタメジン",
        regularPrice: "5000"
      },
      {
        name: "にんにく点滴",
        equipment: "点滴",
        description: "疲労回復や活力アップが期待できます。にんにくの香りはしないので予定前でも大丈夫です。",
        contents: "生食100ml, アリナミンF50",
        regularPrice: "3000"
      },
      {
        name: "にんにく注射",
        equipment: "点滴",
        description: "時間がない方はこれ。にんにく点滴と同等の有効成分量を、短時間で注入できる注射です。",
        contents: "アリナミンF50",
        regularPrice: "2000"
      },
      {
        name: "臭わないにんにく注射",
        equipment: "点滴",
        description: "にんにく注射特有の香りが苦手な方におすすめです。香りを抑えた製剤を使用しています。",
        contents: "ビタメジン, 生食20ml",
        regularPrice: "2500"
      },
      {
        name: "疲労回復点滴",
        equipment: "点滴",
        description: "ビタミンCとビタミンBで活力アップや体力回復が期待できます。",
        contents: "生食100ml, アスコルビン酸, アリナミンF50",
        regularPrice: "3000"
      },
      {
        name: "二日酔い回復点滴",
        equipment: "点滴",
        description: "二日酔いへの有効成分を詰め込んだ点滴です。オプションで吐き気どめも追加できます。",
        contents: "ソルラクト, 強ミノ, ファモチジン",
        regularPrice: "8000"
      },
      {
        name: "飲み会前守りの点滴",
        equipment: "点滴",
        description: "飲酒前の二日酔い対策や体調管理におすすめです。肝機能のサポートやビタミンB群の補給が期待できます。",
        contents: "ビタメジン, 強ミノ, 生食100ml",
        regularPrice: "5000"
      },
      {
        name: "飲み会前守りの注射",
        equipment: "点滴",
        description: "短時間で肝機能のサポートやビタミンB群の補給が期待できます。男女どちらにもおすすめです。",
        contents: "強ミノ",
        regularPrice: "2000"
      },
      {
        name: "ダイエット・筋トレ点滴",
        equipment: "点滴",
        description: "男女どちらにもおすすめ。脂肪の燃焼を促進し、健康的なダイエットをサポートします。",
        contents: "生食100ml, エルカルニチン, チオクト酸",
        regularPrice: "5000"
      },
      {
        name: "ダイエットサポート注射",
        equipment: "点滴",
        description: "時間がない方におすすめです。ダイエット・筋トレ点滴と同様の有効成分を配合した注射です。",
        contents: "チオクト酸, エルカルニチン",
        regularPrice: "3000"
      },
      {
        name: "レッドブル注射",
        equipment: "点滴",
        description: "活力アップをサポートする注射です。疲労回復や眠気対策に効果が期待できます。",
        contents: "アリナミンF50, カフェイン",
        regularPrice: "3000"
      },
      {
        name: "免疫強化点滴",
        equipment: "点滴",
        description: "風邪の季節や疲れを感じた時などの体調管理に。体のコンディションを整え、健康維持をサポートします。",
        contents: "生食100ml, アスコルビン酸, ビタメジン, 強ミノ, エルカルニチン",
        regularPrice: "5000"
      },
      {
        name: "OS1点滴",
        equipment: "点滴",
        description: "猛暑で脱水気味や食欲低下が気になる方におすすめ。ミネラルに加えてビタミン類も加えた点滴メニューです。",
        contents: "アスコルビン酸, ビタメジン, ソルラクト",
        regularPrice: "5000"
      },
      {
        name: "口内炎点滴",
        equipment: "点滴",
        description: "口内炎が気になる方へ。ビタミンを補給し、口内炎の改善をサポートする点滴です。",
        contents: "生食100ml, アスコルビン酸, パンテノール, ビタメジン, ビオチン",
        regularPrice: "5000"
      },
      {
        name: "胃もたれ注射",
        equipment: "点滴",
        description: "胃もたれが気になる方へ。有効成分を直接注入することで、胃の不快感を和らげることが期待できます。オプションで吐き気どめも追加できます。",
        contents: "生食20ml, ファモチジン",
        regularPrice: "2000"
      },
      {
        name: "むくみスッキリ注射",
        equipment: "点滴",
        description: "むくみが気になる方へ。体内の余分な水分排出をサポートし、すっきり感を促すことが期待できます。施術後は頻繁にお手洗いに行きたくなるので注意。",
        contents: "ラシックス, 生食20ml",
        regularPrice: "2000"
      },
      {
        name: "つわり点滴",
        equipment: "点滴",
        description: "辛いつわりに、脱水補給と必須ビタミン類を補充します。吐き気止めの成分も配合されており、つわりの症状緩和が期待できます。ご自身の楽な体勢で点滴を受けていただけます。",
        contents: "ソルラクト, アスコルビン酸, プリンペラン, ファモチジン, ビタメジン",
        regularPrice: "8000"
      },
      {
        name: "エクソソーム点滴",
        equipment: "点滴",
        description: "エクソソームを高濃度に配合した、再生医療由来の美容点滴です。肌のコンディションを整え、ニキビ跡、赤み、加齢による肌力低下など複合的なお悩みの改善、および手術や施術後のダウンタイムの軽減が期待できます。",
        contents: "生食100ml, エクソソーム",
        regularPrice: "19800"
      },
      {
        name: "育毛点滴",
        equipment: "点滴",
        description: "毛髪に必要な成分を配合した点滴です。飲み薬との併用により、より良い効果が期待できる場合があります。",
        contents: "生食100ml, パンテノール, ビオチン, ビタメジン",
        regularPrice: "5000"
      },
      {
        name: "静脈麻酔",
        equipment: "点滴",
        description: "痛みを伴う施術のオプションです。当日中の車の運転はお控えください。",
        contents: "アタラックスP, 生食100ml",
        regularPrice: "3000"
      }
    ]
  },
  "others": {
    title: "その他",
    description: "その他の特殊な施術",
    treatments: [
      {
        name: "ワキガレーザー",
        equipment: "ワキガレーザー",
        description: "ワキガ治療のためのレーザー施術です。詳細は準備中です。",
        regularPrice: "準備中99000（仮）"
      },
      {
        name: "FOTONA",
        equipment: "FOTONA",
        description: "FOTONA機器を使用した施術です。詳細は準備中です。",
        regularPrice: "準備中"
      }
    ]
  },
};

// 機械別カテゴリのデータ
export const equipmentData: Record<string, Category> = {
  "skin-diagnosis": {
    title: "肌診断機",
    description: "最新のカメラを用いた肌診断システム",
    treatments: [
      {
        name: "肌診断",
        equipment: "肌診断機",
        description: "最新のカメラを用いて、肌の状態を詳細に分析する肌診断器です。シミ、しわ、毛穴など、様々な肌トラブルを数値化し、肌年齢を推定。肌治療前に測定することでベストな治療の提案に役立ちます。肌治療を予約した方は無料で受けられます。",
        memberPrice: "3300",
        regularPrice: "3630"
      }
    ]
  },
  "customize-hifu": {
    title: "カスタマイズHIFU",
    description: "お客様の状態に合わせたカスタマイズHIFU治療",
    treatments: [
      {
        name: "頬下・顎下 600shot",
        equipment: "カスタマイズHIFU",
        description: "筋膜にアプローチして皮膚の内側から引き締まりが期待できるたるみ治療です。ひとりひとり脂肪や皮膚の厚みが違うため、当院ではお客様の状態に合わせたカスタマイズ HIFUを提案いたします。",
        memberPrice: "33000",
        regularPrice: "36300"
      },
      {
        name: "マッサージハイフ 20分",
        equipment: "カスタマイズHIFU",
        description: "皮膚の表層に優しい熱を入れることでその場でむくみを軽減する効果が期待できます。コラーゲンの産生も促進されるので定期的な施術で美肌効果も期待できます。細身で頬のコケが気になる方にもおすすめのメニューです。",
        memberPrice: "15000",
        regularPrice: "16500"
      }
    ]
  },
  "ultraformer": {
    title: "ウルトラフォーマーMPT",
    description: "高密度焦点式超音波（HIFU）による引き締め治療",
    treatments: [
      {
        name: "全顔・目・首",
        equipment: "ウルトラフォーマーMPT",
        description: "高密度焦点式超音波（HIFU）を真皮やSMAS層に照射することで、熱によるコラーゲン変性と収縮が起こり、肌のハリ感や輪郭の引き締まり感が期待されます。照射深度を部位に合わせて調整でき、個々の状態に応じたケアが可能です。",
        memberPrice: "88000",
        regularPrice: "96800"
      },
      {
        name: "頬・顎下",
        equipment: "ウルトラフォーマーMPT",
        description: "高密度焦点式超音波（HIFU）を真皮やSMAS層に照射することで、熱によるコラーゲン変性と収縮が起こり、肌のハリ感や輪郭の引き締まり感が期待されます。照射深度を部位に合わせて調整でき、個々の状態に応じたケアが可能です。",
        memberPrice: "44000",
        regularPrice: "48400"
      },
      {
        name: "顎下・首",
        equipment: "ウルトラフォーマーMPT",
        description: "高密度焦点式超音波（HIFU）を真皮やSMAS層に照射することで、熱によるコラーゲン変性と収縮が起こり、肌のハリ感や輪郭の引き締まり感が期待されます。照射深度を部位に合わせて調整でき、個々の状態に応じたケアが可能です。",
        memberPrice: "44000",
        regularPrice: "48400"
      },
      {
        name: "ハイフシャワー全顔",
        equipment: "ウルトラフォーマーMPT",
        description: "皮膚の表層に優しい熱を入れることでその場でむくみを軽減する効果が期待できます。コラーゲンの産生も促進されるので定期的な施術で美肌効果も期待できます。細身で頬のコケが気になる方にもおすすめのメニューです。",
        memberPrice: "33000",
        regularPrice: "36300"
      },
      {
        name: "ボディMパーツ",
        equipment: "ウルトラフォーマーMPT",
        branch: "背中上部、背中下部、二の腕（左右）、腰、臀部（バナナロール）、ふくらはぎ、腹部、ウエスト",
        description: "超音波の熱を利用した施術により、気になる部位の脂肪にアプローチし、ボディラインの引き締めを目指します。気になる二の腕やブラ肉、細かな部位へのアプローチが可能です。",
        memberPrice: "50000",
        regularPrice: "55000"
      },
      {
        name: "ボディLパーツ",
        equipment: "ウルトラフォーマーMPT",
        branch: "大腿前面・大腿後面・大腿内側（左右）",
        description: "超音波の熱を利用した施術により、気になる部位の脂肪にアプローチし、ボディラインの引き締めを目指します。気になる二の腕やブラ肉、細かな部位へのアプローチが可能です。",
        memberPrice: "65000",
        regularPrice: "71500"
      }
    ]
  },
  // "ondalift": {
  //   title: "オンダリフト",
  //   description: "マイクロ波による脂肪細胞とコラーゲンへの同時アプローチ",
  //   treatments: [
  //     {
  //       name: "頬",
  //       equipment: "オンダリフト",
  //       description: "マイクロ波を真皮・皮下脂肪層に選択的照射することで、脂肪細胞とコラーゲンに同時にアプローチし、フェイスラインの引き締め効果とハリが期待できます。個人差はありますが、痛みが少ないのが特徴です。",
  //       memberPrice: "30000",
  //       regularPrice: "33000"
  //     },
  //     {
  //       name: "頬・顎下",
  //       equipment: "オンダリフト",
  //       description: "マイクロ波を真皮・皮下脂肪層に選択的照射することで、脂肪細胞とコラーゲンに同時にアプローチし、フェイスラインの引き締め効果とハリが期待できます。個人差はありますが、痛みが少ないのが特徴です。",
  //       memberPrice: "42000",
  //       regularPrice: "46200"
  //     },
  //     {
  //       name: "ボディMパーツ",
  //       equipment: "オンダリフト",
  //       branch: "背中上部、背中下部、二の腕（左右）、腰、臀部（バナナロール）、ふくらはぎ、腹部、ウエスト",
  //       description: "マイクロ波が皮下深部の脂肪細胞に熱エネルギーを注ぐことで、脂肪分解とセルライト改善が期待できます。冷却機構付きで肌表面への負担を軽減し、痛みに配慮した施術です。たるみ・凸凹改善と引き締め効果が期待できます。",
  //       memberPrice: "40000",
  //       regularPrice: "44000"
  //     },
  //     {
  //       name: "ボディLパーツ",
  //       equipment: "オンダリフト",
  //       branch: "大腿前面・大腿後面・大腿内側（左右）",
  //       description: "マイクロ波が皮下深部の脂肪細胞に熱エネルギーを注ぐことで、脂肪分解とセルライト改善が期待できます。冷却機構付きで肌表面への負担を軽減し、痛みに配慮した施術です。たるみ・凸凹改善と引き締め効果が期待できます。",
  //       memberPrice: "55000",
  //       regularPrice: "60500"
  //     }
  //   ]
  // },
  "ldm": {
    title: "LDM",
    description: "超音波による細胞外マトリックス環境の整備",
    treatments: [
      {
        name: "水玉リフティング",
        equipment: "LDM",
        description: "艶感やハリといった変化が期待できる、痛みを伴わない施術です。老化が進んだ肌の奥の細胞を肌への負担を考慮しながら刺激し、コラーゲンやヒアルロン酸の再配列を活性化に働きかけます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "エイジングケア",
        equipment: "LDM",
        description: "1MHz／3MHz／10MHzといった周波数を部位や目的に応じて使い分けることで、真皮層への穏やかな刺激とマイクロマッサージ効果が得られ、肌のハリ・弾力・キメの整った印象を意識したケアが可能です。物理的刺激によって細胞間マトリックス環境を整えることで、肌の健やかなコンディション維持をサポートします",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "アトピー",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみのある肌に優しく作用し、肌のコンディションを整えます。細胞外マトリックスに深く作用することで、肌の土台から健やかな状態へ導きます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "炎症ニキビ",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみのある肌に優しく作用し、肌のコンディションを整えます。細胞外マトリックスに深く作用することで、肌の土台から健やかな状態へ導きます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "赤み",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみのある肌に優しく作用し、肌のコンディションを整えます。細胞外マトリックスに深く作用することで、肌の土台から健やかな状態へ導きます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "GFパック導入",
        description: "成長因子を含むパックを組み合わせることで、乾燥やキメの乱れ、肌のコンディション低下が気になる方へ、整肌を目的としたトリートメントとして使用されています。",
        memberPrice: "11900",
        regularPrice: "13090"
      },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        description: "幹細胞由来エクソソームが損傷組織の修復を促し、抗炎症・抗酸化・細胞再生に働きかけます。ニキビ跡、赤み、加齢による肌力低下など、複合的なお悩みに効果が期待できる再生治療です。",
        memberPrice: "49500",
        regularPrice: "54450"
      },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "スキンボトックス",
        description: "ボツリヌストキシンが汗腺・皮脂腺の活動を抑制し、毛穴の開き・皮脂分泌・肌のテカリを軽減します。滑らかでマットな質感へ整え、メイクのりの良い陶器肌のような仕上がりが期待できます。自然な表情のまま肌質改善が可能です。",
        memberPrice: "25900",
        regularPrice: "28490"
      },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "プラセンタ",
        description: "アミノ酸やビタミン、ミネラルを豊富に含むプラセンタ製剤を、LDMの超音波振動によって肌深部へ導入する施術です。ハリ感や潤いを意識した肌ケアとして用いられ、年齢や乾燥による肌状態の変化が気になる方に適したメニューとなっています。",
        memberPrice: "14900",
        regularPrice: "16390"
      },
      {
        name: "水玉スペシャル",
        equipment: "LDM",
        branch: "ルナージュオリジナル製剤",
        description: "LDMのマイクロマッサージ作用により、肌に必要な成分を皮膚深層まで届けやすくします。カウンセリングにてオリジナル製剤の中から最適な美容成分をご提案いたします。",
        memberPrice: "12900",
        regularPrice: "14190"
      },
      // {
      //   name: "ヘアケア",
      //   equipment: "LDM",
      //   description: "頭皮の血流を促進し、細胞の再生力をサポート。抜け毛予防・育毛効果が期待される痛みの少ない頭皮ケアです。",
      //   regularPrice: "準備中"
      // },
      {
        name: "bodyセルライト・拘縮改善",
        equipment: "LDM",
        description: "ダウンタイム短縮にもオススメ◎最先端セルライト治療！超音波を用いてセルライトや脂肪吸引後の拘縮を分解します。痛みやダウンタイムも心配ありません。",
        memberPrice: "16000",
        regularPrice: "17600"
      },
      {
        name: "body肌質改善",
        equipment: "LDM",
        description: "背中やデコルテを始めとするお体の肌トラブルに1MHz／3MHz／10MHzといった周波数を部位や目的に応じて使い分けることで、真皮層への穏やかな刺激とマイクロマッサージ効果が得られ、肌のハリ・弾力・キメの整った印象を意識したケアが可能です。物理的刺激によって細胞間マトリックス環境を整えることで、肌の健やかなコンディション維持をサポートします。",
        memberPrice: "16000",
        regularPrice: "17600"
      }
    ]
  },
  // "potenza": {
  //   title: "POTENZA",
  //   description: "高周波RF（ラジオ波）による肌質改善治療",
  //   treatments: [
  //     {
  //       name: "s16肝斑",
  //       equipment: "POTENZA",
  //       description: "肝斑治療をお考えの方におすすめの施術です。お肌のメラノサイト自体に特定のRFエネルギーを与えることで、肝斑の原因となるメラニンの産生を抑制し、根本的な改善を目指します。本施術により、色素沈着や再発、白抜けのリスクに配慮した治療が可能です。また、赤ら顔や顔全体のくすみ・色素沈着の改善にも効果が期待できます。",
  //       regularPrice: "計算中"
  //     },
  //     {
  //       name: "cp21導入",
  //       equipment: "POTENZA",
  //       branch: "Pluryal Densify",
  //       description: "ペプチド・アミノ酸・ヒアルロン酸を含む高濃度製剤が線維芽細胞を刺激し、コラーゲン・エラスチンの産生を促進。毛穴・小ジワ・ハリ低下の原因にアプローチします。",
  //       regularPrice: "計算中"
  //     },
  //     {
  //       name: "cp21導入",
  //       equipment: "POTENZA",
  //       branch: "臍帯血幹細胞培養液導入（エクソソーム）",
  //       description: "幹細胞由来エクソソームが損傷組織の修復を促し、抗炎症・抗酸化・細胞再生に働きかけます。ニキビ跡、赤み、加齢による肌力低下など、複合的なお悩みに効果が期待できる再生治療です。",
  //       regularPrice: "計算中"
  //     },
  //     {
  //       name: "cp21導入",
  //       equipment: "POTENZA",
  //       branch: "スキンボトックス",
  //       description: "ボツリヌストキシンが汗腺・皮脂腺の活動を抑制し、毛穴の開き・皮脂分泌・肌のテカリを軽減します。滑らかでマットな質感へ整え、メイクのりの良い陶器肌のような仕上がりが期待できます。自然な表情のまま肌質改善が可能です。",
  //       regularPrice: "計算中"
  //     },
  //     {
  //       name: "A1-12ニキビ・汗管腫",
  //       equipment: "POTENZA",
  //       description: "真皮内の皮脂腺や汗管腫の腫瘍組織に直接熱エネルギーを届け、選択的に破壊・凝固します。ニキビの原因菌繁殖や皮脂過剰を抑制し、再発しにくい肌を目指します。汗管腫は複数回の照射で縮小・消退を目指す瘢痕を最小限に抑えた治療が可能です。",
  //       regularPrice: "計算中"
  //     },
  //     {
  //       name: "DAIAMOND",
  //       equipment: "POTENZA",
  //       description: "高周波RF（ラジオ波）を肌に照射し、コラーゲンやエラスチンの生成を促進。肌の引き締めやハリ改善など小ジワや毛穴の開き、ニキビ跡の改善効果のある施術です。個人差はありますが、針を使用しないため、痛みやダウンタイムが少ないと言われています。",
  //       regularPrice: "計算中"
  //     }
  //   ]
  // },
  // "soprano": {
  //   title: "ソプラノ",
  //   description: "痛みに配慮した医療レーザー脱毛・リフト治療",
  //   treatments: [
  //     {
  //       name: "脱毛",
  //       equipment: "ソプラノ",
  //       description: "痛みに配慮し、高い脱毛効果を目指して丁寧に施術いたします。痛みが少ない、幅広い肌質・毛質に対応、施術時間が短い、3種類の波長をブレンドして様々な深さの毛に対応できます。",
  //       regularPrice: "準備中"
  //     },
  //     {
  //       name: "チタニウムリフト",
  //       equipment: "ソプラノ",
  //       description: "医療レーザーを使用し、肌のたるみやシワの改善が期待できるリフトアップ治療法です。3つの異なる波長のレーザーを同時に照射し、肌の浅い層から深い層までアプローチすることで、リフトアップ効果だけでなく、肌の引き締め、毛穴の開き改善、美白効果なども期待できます。",
  //       regularPrice: "準備中"
  //     }
  //   ]
  // },
  "peeling": {
    title: "ピーリング",
    description: "医療機関専用のピーリング治療",
    treatments: [
      {
        name: "マッサージピール",
        equipment: "ピーリング",
        description: "トリクロロ酢酸のピーリング効果に加え、コウジ酸の配合により美白効果が期待できます。しっかり効果が欲しい方におすすめ。角質が整い、水光肌に近づきます。",
        memberPrice: "10000",
        regularPrice: "11000"
      },
      {
        name: "ララピール",
        equipment: "ピーリング",
        description: "ポリ乳酸やグルタチオンなどの成分を独自に配合した医療機関専用のピーリングです。角質層への穏やかなアプローチにより、肌のトーンやキメの乱れに配慮しながら、明るく滑らかな肌印象を目指します。ダウンタイムも少なく、定期的なスキンケアとしても選ばれています。",
        memberPrice: "10000",
        regularPrice: "11000"
      },
      // {
      //   name: "ブラックピール",
      //   equipment: "ピーリング",
      //   description: "ブラックピールはサリチル酸や乳酸に加え、炭（チャコール）を含む医療機関専用ピーリング剤を用いた施術です。皮脂や角質の詰まり、ざらつき、くすみ印象が気になる肌に対し、表面をなめらかに整えるサポートを行います。炭の吸着力と角質ケア成分の働きにより、毛穴の引き締まり感や肌の明るさを直後から実感しやすいメニューとして人気です。",
      //   regularPrice: "計算中"
      // },
      {
        name: "ボディピーリング",
        equipment: "ピーリング",
        description: "背中やデコルテのニキビでお悩みの方におすすめです。二の腕の毛孔性苔癬にも効果が期待できます。今あるニキビの炎症を抑えながら、ニキビ跡の軽減を目指します。",
        memberPrice: "20000",
        regularPrice: "22000"
      }
    ]
  },
  "coolgun": {
    title: "クールガン",
    description: "CO2凍結による針を使わない導入治療",
    treatments: [
      {
        name: "ヘアクール",
        equipment: "クールガン",
        description: "頭皮深層に超低温の二酸化炭素が残存することで血流促進効果・ボーア効果による育毛を促進します。副作用やダウンタイムがないため前後の予定を気にせず治療を継続できます。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "Hair filler",
        equipment: "クールガン",
        // branch: "Hair filler",
        description: "CO2によるボーア効果に加え、ペプチドやヒアルロン酸などを配合した製剤を頭皮に注入し、頭皮環境の健やかさを保つことを目的とした施術です。栄養成分が頭皮に行き渡ることで、ハリ・コシが気になる方の毛髪のボリューム維持をサポートします。痛みが苦手な方にオススメ。",
        memberPrice: "42000",
        regularPrice: "46200"
      },
      {
        name: "臍帯血幹細胞培養液導入（エクソソーム）",
        equipment: "クールガン",
        // branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        description: "エクソソームは細胞間の情報伝達を担うナノサイズの顆粒で、成長因子や核酸などを内包しています。微細な経路を形成しながら頭皮深層へ届けることで、毛母細胞の活性化やダメージを受けた組織の修復を通して育毛効果を期待できます。",
        memberPrice: "31800",
        regularPrice: "34980"
      },
      {
        name: "ニキビ",
        equipment: "クールガン",
        // branch: "ニキビ",
        description: "ピーリング作用と抗炎症効果のある製剤をCO2凍結との組み合わせにより、皮脂量の調整や溜まった角質層のケアを行うことが可能です。",
        memberPrice: "15000",
        regularPrice: "16500"
      },
      {
        name: "美白",
        equipment: "クールガン",
        // branch: "美白",
        description: "肌のくすみ印象や色ムラが気になる方に用いられる成分で、CO2凍結との組み合わせにより、肌の明るさや均一感を意識したケアを行うことが可能です。",
        memberPrice: "15000",
        regularPrice: "16500"
      },
      {
        name: "Pluryal Densify",
        equipment: "クールガン",
        // branch: "Pluryal Densify",
        description: "ペプチド・アミノ酸・ヒアルロン酸を含む高濃度製剤が線維芽細胞を刺激し、コラーゲン・エラスチンの産生を促進。毛穴・小ジワ・ハリ低下の原因にアプローチします。",
        memberPrice: "37000",
        regularPrice: "40700"
      },
      {
        name: "臍帯血幹細胞培養液導入（エクソソーム）",
        equipment: "クールガン",
        // branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        description: "エクソソームは細胞間の情報伝達を担うナノサイズの顆粒で、成長因子や核酸などを内包しています。微細な経路を形成しながら肌内部へ届けることで、肌の水分保持やキメ、ハリのある印象の維持をサポートします。加齢やニキビ跡が気になる方に適したケアです。",
        memberPrice: "31800",
        regularPrice: "34980"
      },
      {
        name: "スキンボトックス",
        equipment: "クールガン",
        // branch: "スキンボトックス",
        description: "極少量のボトックスを顔全体に微注入。筋肉の動きは残しつつ、毛穴・小ジワ・皮脂テカリを整える肌質改善治療。肌質改善により、マスクの蒸れや夏場のメイク崩れが軽減されます。",
        memberPrice: "23000",
        regularPrice: "25300"
      },
      {
        name: "LIZNE",
        equipment: "クールガン",
        // branch: "LIZNE",
        description: "ポリヌクレオチド（PN）、低分子ヒアルロン酸、ペプチド、コエンザイムなどが配合されており、肌の水分保持力やハリ感に働きかけることが期待されます。毛穴やざらつき、乾燥感など、肌の質感変化が気になる方に選ばれています。",
        memberPrice: "27000",
        regularPrice: "29700"
      },
      {
        name: "プラセンタ",
        equipment: "クールガン",
        // branch: "プラセンタ",
        description: "アミノ酸やビタミン、ミネラルを豊富に含むプラセンタ製剤を、LDMの超音波振動によって肌深部へ導入する施術です。ハリ感や潤いを意識した肌ケアとして用いられ、年齢や乾燥による肌状態の変化が気になる方に適したメニューとなっています。",
        memberPrice: "17000",
        regularPrice: "18700"
      }
    ]
  },
  "dermapen4": {
    title: "ダーマペン４",
    description: "極細針による肌再生治療",
    treatments: [
      {
        name: "全顔",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "極細針で肌に微細な刺激を与え、コラーゲン生成を促進。毛穴・ニキビ跡・小ジワの改善に有効な再生治療です。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "ボディ(ハガキ1枚分)",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "極細針で肌に微細な刺激を与え、コラーゲン生成を促進。毛穴・ニキビ跡・小ジワの改善に有効な再生治療です。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "ボトックスフェイシャル",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "極少量のボトックスを顔全体に微注入。筋肉の動きは残しつつ、毛穴・小ジワ・皮脂テカリを整える肌質改善治療。肌質改善により、マスクの蒸れや夏場のメイク崩れが軽減されます。",
        memberPrice: "19000",
        regularPrice: "20900"
      },
      {
        name: "ヴェルヴェットスキン",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "ダーマペンで肌に微細な穴を開けた直後にピーリング剤を導入。ハリ・ツヤ・毛穴・ニキビ跡を同時にケアするトリートメントです。",
        memberPrice: "15000",
        regularPrice: "16500"
      },
      {
        name: "プラセンタフェイシャル",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        branch: "プラセンタ",
        description: "アミノ酸やビタミン、ミネラルを豊富に含むプラセンタ製剤を、LDMの超音波振動によって肌深部へ導入する施術です。ハリ感や潤いを意識した肌ケアとして用いられ、年齢や乾燥による肌状態の変化が気になる方に適したメニューとなっています。",
        memberPrice: "13000",
        regularPrice: "14300"
      },
      {
        name: "ダーマペンエクソソーム",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "エクソソームは細胞間の情報伝達を担うナノサイズの顆粒で、成長因子や核酸などを内包しています。微細な経路を形成しながら肌内部へ届けることで、肌の水分保持やキメ、ハリのある印象の維持をサポートします。加齢やニキビ跡が気になる方に適したケアです。",
        memberPrice: "47600",
        regularPrice: "52360"
      },
      {
        name: "妊娠線ケア(ハガキ1枚分)",
        equipment: "ダーマペン４",
        branch: "ミラノリピール",
        image: "/images/testimonials/dermapen.PNG",
        description: "妊娠や急激な体重変化により生じた線状皮膚萎縮（いわゆる妊娠線）に対し、ダーマペンで微細な穿孔を行い、皮膚の創傷治癒機構を利用して滑らかでふっくらとした肌質感を目指します。併用するミラノリピールは、TCA、ラクトビオン酸、サリチル酸、タルトル酸（酒石酸）、クエン酸の5種類の酸が配合されているピーリング治療です。これらの酸のピーリング効果に加えて、アミノ酸やビタミンが直接的に肌細胞を刺激し、Ⅲ型コラーゲンを増やして、エラスチンやヒアルロン酸を作る手助けをします。また、保湿成分のスクワラン、ビタミンＢ、Ｃ、GABA、アルギニンなどの成分も配合されています。TCAの濃度がマッサージピールよりも高いため、皮むけのリスクはその分高まりますが、配合成分の違いによって、ミラノリピールのほうが施術中の痛みを感じにくいと言われています。肌の奥に働きかける刺激で、硬くなった妊娠線周辺の皮膚にハリや柔軟性を感じやすく、回数を重ねることで線が徐々に目立ちにくくなる印象を目指します。",
        memberPrice: "69600",
        regularPrice: "76560"
      },
      {
        name: "妊娠線ケア(ハガキ1枚分)",
        equipment: "ダーマペン４",
        branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        image: "/images/testimonials/dermapen.PNG",
        description: "妊娠や体重変化に伴い生じた線状皮膚萎縮（妊娠線やストレッチマーク）に対し、ダーマペンによって微細な穿孔を行い、創傷治癒機構を刺激することでコラーゲンやエラスチンの産生を促し、皮膚の再構築を目指します。併用するエクソソームは、細胞間の情報伝達を担うナノサイズの成分で、数百種類もの成長因子やタンパク質、m;RNAなどが含まれています。これにより、皮膚細胞の修復・再生能力を高め、内側からふっくらとしたハリと弾力を与えます。エクソソームは炎症抑制や抗酸化作用にも優れており、施術後の赤みやダウンタイムの軽減にも寄与します。硬く乾燥しがちな妊娠線周囲の肌質を整え、回数を重ねることで、より自然な肌色と滑らかな質感を目指せます。",
        memberPrice: "69600",
        regularPrice: "76560"
      },
      {
        name: "妊娠線ケア(ハガキ1枚分)",
        equipment: "U225",
        branch: "エクソソーム(U225使用)",
        image: "/images/testimonials/u225.JPG",
        description: "メソガンを用いて皮膚へ注入することで無駄なく薬剤を皮膚内に注入でき、妊娠線部位の癒着した真皮を物理的にほぐす「サブシジョン効果」も期待できます。",
        // memberPrice: "",
        regularPrice: "+5000"
      },
      {
        name: "ヘアダーマ",
        equipment: "ダーマペン４",
        image: "/images/testimonials/dermapen.PNG",
        description: "ダーマペンで頭皮に微細な刺激を与えることで、頭皮のターンオーバーを促し、健やかな環境を整えます。毛髪の土台である頭皮の状態を見直したい方におすすめ。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "エクソソーム",
        equipment: "ダーマペン４",
        branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        image: "/images/testimonials/dermapen.PNG",
        description: "国内の大学病院で各種検査をクリアした限定ドナー由来の国産エクソソームを使用。ダーマペンによる傷で浸透させ、育毛を促進します。安全性と品質にこだわった施術です。",
        memberPrice: "47600",
        regularPrice: "52360"
      }
    ]
  },
  // "hydrafacial": {
  //   title: "ハイドラフェイシャル",
  //   description: "クレンジング・角質除去・吸引・美容液導入を一度に行う効率的なケア",
  //   treatments: [
  //     {
  //       name: "ハイドラフェイシャル",
  //       equipment: "ハイドラフェイシャル",
  //       description: "クレンジング・角質除去・吸引・美容液導入を一度に行うことで、効率的なケアが期待できます。毛穴の黒ずみやザラつきを改善し、つるんとした透明肌へ。",
  //       specialPriceName: "単品15000円 他施術とセットで10000円",
  //       regularPrice: "15000"
  //     }
  //   ]
  // },
  "picolaser": {
    title: "ピコレーザー",
    description: "ピコ秒レーザーによる肌質改善治療",
    treatments: [
      {
        name: "ピコジェネシス(レーザートーニング)",
        equipment: "ピコレーザー",
        description: "ピコ秒レーザーがメラニンに優しく作用し、肝斑・くすみ・色ムラを改善。ダウンタイムはほとんどなく透明感のある肌へ導きます。",
        memberPrice: "8000",
        regularPrice: "8800"
      },
      {
        name: "ピコフラクショナル",
        equipment: "ピコレーザー",
        description: "真皮層に微細なレーザー刺激を与え、肌の再生を促進。毛穴・ニキビ跡・小ジワなどに効果が期待できる美肌治療です。",
        memberPrice: "9900",
        regularPrice: "10890"
      }
    ]
  },
  "mesogun": {
    title: "メソガンU225",
    description: "ドラッグデリバリー機器による美容成分導入",
    treatments: [
      {
        name: "Pluryal Densify",
        equipment: "メソガンU225",
        image: "/images/testimonials/u225.JPG",
        description: "ペプチド・アミノ酸・ヒアルロン酸を含む高濃度製剤が線維芽細胞を刺激し、コラーゲン・エラスチンの産生を促進。毛穴・小ジワ・ハリ低下の原因にアプローチします。",
        memberPrice: "30000",
        regularPrice: "33000"
      },
      {
        name: "LIZNE",
        equipment: "メソガンU225",
        description: "ポリヌクレオチド（PN）、低分子ヒアルロン酸、ペプチド、コエンザイムなどが配合されており、肌の水分保持力やハリ感に働きかけることが期待されます。毛穴やざらつき、乾燥感など、肌の質感変化が気になる方に選ばれています。",
        memberPrice: "20000",
        regularPrice: "22000"
      },
      {
        name: "臍帯血幹細胞培養液導入（エクソソーム）",
        equipment: "メソガンU225",
        description: "エクソソームは細胞間の情報伝達を担うナノサイズの顆粒で、成長因子や核酸などを内包しています。微細な経路を形成しながら肌内部へ届けることで、肌の水分保持やキメ、ハリのある印象の維持をサポートします。加齢やニキビ跡が気になる方に適したケアです。",
        memberPrice: "44600",
        regularPrice: "49060"
      },
      {
        name: "スキンボトックス",
        equipment: "メソガンU225",
        description: "極少量のボトックスを顔全体に微注入。筋肉の動きは残しつつ、毛穴・小ジワ・皮脂テカリを整える肌質改善治療。肌質改善により、マスクの蒸れや夏場のメイク崩れが軽減されます。",
        memberPrice: "16000",
        regularPrice: "17600"
      },
      {
        name: "Hair filler",
        equipment: "メソガンU225",
        description: "ペプチドやヒアルロン酸などを配合した製剤を頭皮に注入し、頭皮環境の健やかさを保つことを目的とした施術です。栄養成分が頭皮に行き渡ることで、ハリ・コシが気になる方の毛髪のボリューム維持をサポートします。痛くても効果重視な方におすすめ。",
        memberPrice: "30000",
        regularPrice: "33000"
      },
      {
        name: "エクソソーム",
        equipment: "メソガンU225",
        description: "エクソソームは、頭皮環境の整備や毛包周辺へのアプローチが期待されており、注目される先端成分です。ドラッグデリバリー機器を用いて頭皮表面に微細な通路を形成し、栄養成分を効率よく浸透させる設計となっており、ボリューム感やハリ・コシが気になる方の頭皮ケアに取り入れられています。",
        memberPrice: "44600",
        regularPrice: "49060"
      }
    ]
  },
  "sofwave": {
    title: "ソフウェーブ",
    description: "7MHzの超音波による非侵襲的なコラーゲン生成促進",
    treatments: [
      {
        name: "顔/首",
        equipment: "ソフウェーブ",
        image: "/images/testimonials/sofwave.JPG",
        description: "7MHzの超音波を皮膚真皮中層に照射し、熱刺激によりコラーゲンの生成を促す非侵襲的な施術です。皮膚表面を傷つけずに、目元やフェイスラインなどの変化にアプローチでき、エイジングケアを意識する方に選ばれています。",
        memberPrice: "99000",
        regularPrice: "108900"
      },
      {
        name: "顔・首",
        equipment: "ソフウェーブ",
        image: "/images/testimonials/sofwave.JPG",
        description: "7MHzの超音波を皮膚真皮中層に照射し、熱刺激によりコラーゲンの生成を促す非侵襲的な施術です。皮膚表面を傷つけずに、目元やフェイスラインなどの変化にアプローチでき、エイジングケアを意識する方に選ばれています。",
        memberPrice: "130000",
        regularPrice: "143000"
      }
    ]
  },
  "emface": {
    title: "EMFACE",
    description: "高周波（RF）と筋肉刺激（HIFES）の同時照射による表情筋アプローチ",
    treatments: [
      {
        name: "額・目の下・頬・あご下から2エリア",
        equipment: "EMFACE",
        image: "/images/testimonials/emface.JPG",
        description: "高周波（RF）と筋肉刺激（HIFES）を同時に照射し、皮膚と表情筋の両方にアプローチする技術です。非侵襲的に筋肉の収縮を促すことで、リフト感や引き締まった輪郭の印象を目指します。施術後のダウンタイムもほとんどなく、短時間でのケアが可能です。",
        memberPrice: "99000",
        regularPrice: "108900"
      }
    ]
  },
  "thermacool": {
    title: "サーマクール",
    description: "高周波（RF）による皮膚深部へのコラーゲン繊維収縮・再構築",
    treatments: [
      {
        name: "顔",
        equipment: "サーマクール",
        image: "/images/testimonials/thermacool.JPG",
        description: "高周波（RF）を皮膚深部に届けることで、コラーゲン繊維の収縮および再構築を促し、肌の弾力や輪郭の変化が期待されます。リアルタイムで温度をモニターしながら照射できるため、安全性と快適性に配慮した治療が可能です。",
        memberPrice: "99000",
        regularPrice: "108900"
      },
      {
        name: "顔・首",
        equipment: "サーマクール",
        image: "/images/testimonials/thermacool.JPG",
        description: "高周波（RF）を皮膚深部に届けることで、コラーゲン繊維の収縮および再構築を促し、肌の弾力や輪郭の変化が期待されます。リアルタイムで温度をモニターしながら照射できるため、安全性と快適性に配慮した治療が可能です。",
        memberPrice: "150000",
        regularPrice: "165000"
      }
    ]
  },
  "tenteki": {
    title: "点滴",
    description: "各種点滴・注射メニュー",
    treatments: [
      {
        name: "超高濃度ビタミンC",
        equipment: "点滴",
        description: "国産の超高濃度製剤を使用。強力な抗酸化作用が期待でき、アンチエイジングや美白へのアプローチとして注目されています。酸化剤不使用の国産ビタミンCを採用しています。",
        contents: "VC25g, 生食250ml",
        regularPrice: "10000"
      },
      {
        name: "プラセンタ点滴",
        equipment: "点滴",
        description: "胎盤由来のプラセンタ製剤により、健やかな毎日をサポートします。プラセンタは、ホルモンバランスの乱れや肝臓の疲れが気になる方にも活用されています。美肌効果もあり、女性はもちろん男性にもおすすめです！",
        contents: "生食100ml, ラエンネック10A",
        regularPrice: "5000"
      },
      {
        name: "プラセンタ注射",
        equipment: "点滴",
        description: "",
        contents: "ラエンネック２A",
        regularPrice: "1000"
      },
      {
        name: "グルタチオン点滴",
        equipment: "点滴",
        description: "グルタチオン600mgt点滴。抗酸化作用と肝臓保護作用により、黄ぐすみの軽減や美白効果が期待できます。",
        contents: "生食100ml, ルチオン",
        regularPrice: "3000"
      },
      {
        name: "倍量グルタチオン点滴",
        equipment: "点滴",
        description: "高濃度のグルタチオンを配合した点滴です。グルタチオンの濃度が倍の1200mgです。",
        contents: "生食100ml, ルチオン",
        regularPrice: "5000"
      },
      {
        name: "ルナージュオリジナル美肌カクテル",
        equipment: "点滴",
        description: "ルナージュこだわりのオリジナルカクテルです。美白、美肌、美髪など、複数の美容効果が期待できる成分を配合したオリジナルカクテル点滴です。ビタミンやグルタチオンなどをバランス良く配合しています。",
        contents: "生食100ml, アスコルビン酸, トランサミン, ルチオン, クリストファン, ビタメジン, ビオチン",
        regularPrice: "10000"
      },
      {
        name: "美白カクテル",
        equipment: "点滴",
        description: "ビタミンCに加え、メラニンを抑えるトラネキサム酸やLシステインを配合。",
        contents: "生食100ml, トランサミン, クリストファン, アスコルビン酸",
        regularPrice: "5000"
      },
      {
        name: "つるつる美肌カクテル",
        equipment: "点滴",
        description: "ビタミンCの抗酸化作用とパントテン酸の代謝促進作用できめ細やかな肌に導きます",
        contents: "生食100ml, アスコルビン酸, パンテノール, クリストファン",
        regularPrice: "5000"
      },
      {
        name: "肝斑対策点滴",
        equipment: "点滴",
        description: "トラネキサム酸が肝斑に働きかけ、Lシステインがメラニンの生成を抑制することで、肝斑の改善を目指します。",
        contents: "生食100ml, トランサミン, クリストファン",
        regularPrice: "3000"
      },
      {
        name: "美髪・美爪注射",
        equipment: "点滴",
        description: "ビオチンとパントテン酸で髪や爪のケラチンを補修。髪や爪の健康維持をサポートし、白髪や爪割れが気になる方にもお勧めです。",
        contents: "生食20ml, ビオチン, パンテノール",
        regularPrice: "3000"
      },
      {
        name: "高濃度ビタミン点滴",
        equipment: "点滴",
        description: "にんにく注射の匂いが苦手な方にもおすすめのビタミンBとCが入った点滴です。",
        contents: "生食100ml,  アスコルビン酸, ビタメジン",
        regularPrice: "5000"
      },
      {
        name: "にんにく点滴",
        equipment: "点滴",
        description: "疲労回復や活力アップが期待できます。にんにくの香りはしないので予定前でも大丈夫です。",
        contents: "生食100ml, アリナミンF50",
        regularPrice: "3000"
      },
      {
        name: "にんにく注射",
        equipment: "点滴",
        description: "時間がない方はこれ。にんにく点滴と同等の有効成分量を、短時間で注入できる注射です。",
        contents: "アリナミンF50",
        regularPrice: "2000"
      },
      {
        name: "臭わないにんにく注射",
        equipment: "点滴",
        description: "にんにく注射特有の香りが苦手な方におすすめです。香りを抑えた製剤を使用しています。",
        contents: "ビタメジン, 生食20ml",
        regularPrice: "2500"
      },
      {
        name: "疲労回復点滴",
        equipment: "点滴",
        description: "ビタミンCとビタミンBで活力アップや体力回復が期待できます。",
        contents: "生食100ml, アスコルビン酸, アリナミンF50",
        regularPrice: "3000"
      },
      {
        name: "二日酔い回復点滴",
        equipment: "点滴",
        description: "二日酔いへの有効成分を詰め込んだ点滴です。オプションで吐き気どめも追加できます。",
        contents: "ソルラクト, 強ミノ, ファモチジン",
        regularPrice: "8000"
      },
      {
        name: "飲み会前守りの点滴",
        equipment: "点滴",
        description: "飲酒前の二日酔い対策や体調管理におすすめです。肝機能のサポートやビタミンB群の補給が期待できます。",
        contents: "ビタメジン, 強ミノ, 生食100ml",
        regularPrice: "5000"
      },
      {
        name: "飲み会前守りの注射",
        equipment: "点滴",
        description: "短時間で肝機能のサポートやビタミンB群の補給が期待できます。男女どちらにもおすすめです。",
        contents: "強ミノ",
        regularPrice: "2000"
      },
      {
        name: "ダイエット・筋トレ点滴",
        equipment: "点滴",
        description: "男女どちらにもおすすめ。脂肪の燃焼を促進し、健康的なダイエットをサポートします。",
        contents: "生食100ml, エルカルニチン, チオクト酸",
        regularPrice: "5000"
      },
      {
        name: "ダイエットサポート注射",
        equipment: "点滴",
        description: "時間がない方におすすめです。ダイエット・筋トレ点滴と同様の有効成分を配合した注射です。",
        contents: "チオクト酸, エルカルニチン",
        regularPrice: "3000"
      },
      {
        name: "レッドブル注射",
        equipment: "点滴",
        description: "活力アップをサポートする注射です。疲労回復や眠気対策に効果が期待できます。",
        contents: "アリナミンF50, カフェイン",
        regularPrice: "3000"
      },
      {
        name: "免疫強化点滴",
        equipment: "点滴",
        description: "風邪の季節や疲れを感じた時などの体調管理に。体のコンディションを整え、健康維持をサポートします。",
        contents: "生食100ml, アスコルビン酸, ビタメジン, 強ミノ, エルカルニチン",
        regularPrice: "5000"
      },
      {
        name: "OS1点滴",
        equipment: "点滴",
        description: "猛暑で脱水気味や食欲低下が気になる方におすすめ。ミネラルに加えてビタミン類も加えた点滴メニューです。",
        contents: "アスコルビン酸, ビタメジン, ソルラクト",
        regularPrice: "5000"
      },
      {
        name: "口内炎点滴",
        equipment: "点滴",
        description: "口内炎が気になる方へ。ビタミンを補給し、口内炎の改善をサポートする点滴です。",
        contents: "生食100ml, アスコルビン酸, パンテノール, ビタメジン, ビオチン",
        regularPrice: "5000"
      },
      {
        name: "胃もたれ注射",
        equipment: "点滴",
        description: "胃もたれが気になる方へ。有効成分を直接注入することで、胃の不快感を和らげることが期待できます。オプションで吐き気どめも追加できます。",
        contents: "生食20ml, ファモチジン",
        regularPrice: "2000"
      },
      {
        name: "むくみスッキリ注射",
        equipment: "点滴",
        description: "むくみが気になる方へ。体内の余分な水分排出をサポートし、すっきり感を促すことが期待できます。施術後は頻繁にお手洗いに行きたくなるので注意。",
        contents: "ラシックス, 生食20ml",
        regularPrice: "2000"
      },
      {
        name: "つわり点滴",
        equipment: "点滴",
        description: "辛いつわりに、脱水補給と必須ビタミン類を補充します。吐き気止めの成分も配合されており、つわりの症状緩和が期待できます。ご自身の楽な体勢で点滴を受けていただけます。",
        contents: "ソルラクト, アスコルビン酸, プリンペラン, ファモチジン, ビタメジン",
        regularPrice: "8000"
      },
      {
        name: "エクソソーム点滴",
        equipment: "点滴",
        description: "エクソソームを高濃度に配合した、再生医療由来の美容点滴です。肌のコンディションを整え、ニキビ跡、赤み、加齢による肌力低下など複合的なお悩みの改善、および手術や施術後のダウンタイムの軽減が期待できます。",
        contents: "生食100ml, エクソソーム",
        regularPrice: "19800"
      },
      {
        name: "育毛点滴",
        equipment: "点滴",
        description: "毛髪に必要な成分を配合した点滴です。飲み薬との併用により、より良い効果が期待できる場合があります。",
        contents: "生食100ml, パンテノール, ビオチン, ビタメジン",
        regularPrice: "5000"
      },
      {
        name: "静脈麻酔",
        equipment: "点滴",
        description: "痛みを伴う施術のオプションです。当日中の車の運転はお控えください。",
        contents: "アタラックスP, 生食100ml",
        regularPrice: "3000"
      }
    ]
  },
  "others": {
    title: "その他の機器",
    description: "その他の特殊な治療機器",
    treatments: [
      {
        name: "ワキガレーザー",
        equipment: "ワキガレーザー",
        description: "ワキガ治療のためのレーザー施術です。詳細は準備中です。",
        regularPrice: "準備中99000（仮）"
      },
      {
        name: "FOTONA",
        equipment: "FOTONA",
        description: "FOTONA機器を使用した施術です。詳細は準備中です。",
        regularPrice: "準備中"
      }
    ]
  },
};

// メニューデータの統合オブジェクト
export const menuData = {
  concerns: concernsData,
  equipment: equipmentData
};