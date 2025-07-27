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
        equipment: "肌診断機x",
        description: "最新のカメラを用いて、肌の状態を詳細に分析する肌診断器です。シミ、しわ、毛穴など、様々な肌トラブルを数値化し、肌年齢を推定。肌治療前に測定することでベストな治療の提案に役立ちます。",
        memberPrice: "3300",
        regularPrice: "3630"
      }
    ]
  },
  "sagging": {
    title: "たるみ",
    description: "リフトアップ・引き締め効果が期待できる施術",
    treatments: [
      {
        name: "カスタマイズHIFU",
        equipment: "カスタマイズHIFU",
        branch: "頬下・顎下 600shot",
        description: "筋膜にアプローチして皮膚の内側から引き締まりが期待できるたるみ治療です。ひとりひとり脂肪や皮膚の厚みが違うため、当院ではお客様の状態に合わせたカスタマイズ HIFUを提案いたします。",
        memberPrice: "33000",
        regularPrice: "36300"
      },
      {
        name: "マッサージハイフ",
        equipment: "カスタマイズHIFU",
        branch: "20分",
        description: "皮膚の表層に優しい熱を入れることでその場でむくみを軽減する効果が期待できます。コラーゲンの産生も促進されるので定期的な施術で美肌効果も期待できます。細身で頬のコケが気になる方にもおすすめのメニューです。",
        memberPrice: "15000",
        regularPrice: "16500"
      },
      {
        name: "ウルトラフォーマー全顔・首",
        equipment: "ウルトラフォーマー",
        description: "高密度焦点式超音波（HIFU）を真皮やSMAS層に照射することで、熱によるコラーゲン変性と収縮が起こり、肌のハリ感や輪郭の引き締まり感が期待されます。照射深度を部位に合わせて調整でき、個々の状態に応じたケアが可能です。",
        memberPrice: "88000",
        regularPrice: "96800"
      },
      {
        name: "ウルトラフォーマー頬・顎下",
        equipment: "ウルトラフォーマー",
        description: "高密度焦点式超音波（HIFU）を真皮やSMAS層に照射することで、熱によるコラーゲン変性と収縮が起こり、肌のハリ感や輪郭の引き締まり感が期待されます。照射深度を部位に合わせて調整でき、個々の状態に応じたケアが可能です。",
        memberPrice: "44000",
        regularPrice: "48400"
      },
      {
        name: "ウルトラフォーマー顎下・首",
        equipment: "ウルトラフォーマー",
        description: "高密度焦点式超音波（HIFU）を真皮やSMAS層に照射することで、熱によるコラーゲン変性と収縮が起こり、肌のハリ感や輪郭の引き締まり感が期待されます。照射深度を部位に合わせて調整でき、個々の状態に応じたケアが可能です。",
        memberPrice: "44000",
        regularPrice: "48400"
      },
      {
        name: "ハイフシャワー全顔",
        equipment: "ウルトラフォーマー",
        description: "皮膚の表層に優しい熱を入れることでその場でむくみを軽減する効果が期待できます。コラーゲンの産生も促進されるので定期的な施術で美肌効果も期待できます。細身で頬のコケが気になる方にもおすすめのメニューです。",
        memberPrice: "33000",
        regularPrice: "36300"
      },
      {
        name: "オンダリフト頬",
        equipment: "オンダリフト",
        description: "マイクロ波を真皮・皮下脂肪層に選択的照射することで、脂肪細胞とコラーゲンに同時にアプローチし、フェイスラインの引き締め効果とハリが期待できます。個人差はありますが、痛みが少ないのが特徴です。",
        memberPrice: "30000",
        regularPrice: "33000"
      },
      {
        name: "オンダリフト頬・顎下",
        equipment: "オンダリフト",
        description: "マイクロ波を真皮・皮下脂肪層に選択的照射することで、脂肪細胞とコラーゲンに同時にアプローチし、フェイスラインの引き締め効果とハリが期待できます。個人差はありますが、痛みが少ないのが特徴です。",
        memberPrice: "42000",
        regularPrice: "46200"
      },
      {
        name: "水玉リフティング",
        equipment: "LDM",
        description: "艶感やハリといった変化が期待できる、痛みを伴わない施術です。老化が進んだ肌の奥の細胞を肌への負担を考慮しながら刺激し、コラーゲンやヒアルロン酸の再配列を活性化に働きかけます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "DIAMOND",
        equipment: "POTENZA",
        description: "高周波RF（ラジオ波）を肌に照射し、コラーゲンやエラスチンの生成を促進。肌の引き締めやハリ改善など小ジワや毛穴の開き、ニキビ跡の改善効果のある施術です。個人差はありますが、針を使用しないため、痛みやダウンタイムが少ないと言われています。",
        regularPrice: "計算中"
      },
      {
        name: "チタニウムリフト",
        equipment: "ソプラノ",
        description: "医療レーザーを使用し、肌のたるみやシワの改善が期待できるリフトアップ治療法です。3つの異なる波長のレーザーを同時に照射し、肌の浅い層から深い層までアプローチすることで、リフトアップ効果だけでなく、肌の引き締め、毛穴の開き改善、美白効果なども期待できます。",
        regularPrice: "準備中"
      },
      {
        name: "ソフウェーブ顔/首",
        equipment: "ソフウェーブ",
        description: "7MHzの超音波を皮膚真皮中層に照射し、熱刺激によりコラーゲンの生成を促す非侵襲的な施術です。皮膚表面を傷つけずに、目元やフェイスラインなどの変化にアプローチでき、エイジングケアを意識する方に選ばれています。",
        memberPrice: "99000",
        regularPrice: "108900"
      },
      {
        name: "ソフウェーブ顔・首",
        equipment: "ソフウェーブ",
        description: "7MHzの超音波を皮膚真皮中層に照射し、熱刺激によりコラーゲンの生成を促す非侵襲的な施術です。皮膚表面を傷つけずに、目元やフェイスラインなどの変化にアプローチでき、エイジングケアを意識する方に選ばれています。",
        memberPrice: "130000",
        regularPrice: "143000"
      },
      {
        name: "EMFACE",
        equipment: "EMFACE",
        branch: "額・目の下・頬・あご下から2エリア",
        description: "高周波（RF）と筋肉刺激（HIFES）を同時に照射し、皮膚と表情筋の両方にアプローチする技術です。非侵襲的に筋肉の収縮を促すことで、リフト感や引き締まった輪郭の印象を目指します。施術後のダウンタイムもほとんどなく、短時間でのケアが可能です。",
        memberPrice: "99000",
        regularPrice: "108900"
      },
      {
        name: "サーマクール顔",
        equipment: "サーマクール",
        description: "高周波（RF）を皮膚深部に届けることで、コラーゲン繊維の収縮および再構築を促し、肌の弾力や輪郭の変化が期待されます。リアルタイムで温度をモニターしながら照射できるため、安全性と快適性に配慮した治療が可能です。",
        memberPrice: "99000",
        regularPrice: "108900"
      },
      {
        name: "サーマクール顔・首",
        equipment: "サーマクール",
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
        name: "ウルトラフォーマーボディMパーツ",
        equipment: "ウルトラフォーマー",
        branch: "背中上部、背中下部、二の腕（左右）、腰、臀部（バナナロール）、ふくらはぎ、腹部、ウエスト",
        description: "超音波の熱を利用した施術により、気になる部位の脂肪にアプローチし、ボディラインの引き締めを目指します。気になる二の腕やブラ肉、細かな部位へのアプローチが可能です。",
        memberPrice: "50000",
        regularPrice: "55000"
      },
      {
        name: "ウルトラフォーマーボディLパーツ",
        equipment: "ウルトラフォーマー",
        branch: "大腿前面・大腿後面・大腿内側（左右）",
        description: "超音波の熱を利用した施術により、気になる部位の脂肪にアプローチし、ボディラインの引き締めを目指します。気になる二の腕やブラ肉、細かな部位へのアプローチが可能です。",
        memberPrice: "65000",
        regularPrice: "71500"
      },
      {
        name: "オンダリフトボディMパーツ",
        equipment: "オンダリフト",
        branch: "背中上部、背中下部、二の腕（左右）、腰、臀部（バナナロール）、ふくらはぎ、腹部、ウエスト",
        description: "マイクロ波が皮下深部の脂肪細胞に熱エネルギーを注ぐことで、脂肪分解とセルライト改善が期待できます。冷却機構付きで肌表面への負担を軽減し、痛みに配慮した施術です。たるみ・凸凹改善と引き締め効果が期待できます。",
        memberPrice: "40000",
        regularPrice: "44000"
      },
      {
        name: "オンダリフトボディLパーツ",
        equipment: "オンダリフト",
        branch: "大腿前面・大腿後面・大腿内側（左右）",
        description: "マイクロ波が皮下深部の脂肪細胞に熱エネルギーを注ぐことで、脂肪分解とセルライト改善が期待できます。冷却機構付きで肌表面への負担を軽減し、痛みに配慮した施術です。たるみ・凸凹改善と引き締め効果が期待できます。",
        memberPrice: "55000",
        regularPrice: "60500"
      },
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
      {
        name: "POTENZA s16肝斑",
        equipment: "POTENZA",
        description: "肝斑治療をお考えの方におすすめの施術です。お肌のメラノサイト自体に特定のRFエネルギーを与えることで、肝斑の原因となるメラニンの産生を抑制し、根本的な改善を目指します。本施術により、色素沈着や再発、白抜けのリスクに配慮した治療が可能です。また、赤ら顔や顔全体のくすみ・色素沈着の改善にも効果が期待できます。",
        regularPrice: "計算中"
      },
      {
        name: "ピコトーニング",
        equipment: "Picoway",
        description: "ピコ秒レーザーがメラニンに優しく作用し、肝斑・くすみ・色ムラを改善。ダウンタイムはほとんどなく透明感のある肌へ導きます。",
        memberPrice: "8000",
        regularPrice: "8800"
      },
      {
        name: "LDM超音波導入（トラネキサム酸）",
        equipment: "LDM",
        branch: "トラネキサム酸",
        description: "LDMのマイクロマッサージ作用により、肌に必要な成分を角質層まで届けやすくします。トラネキサム酸は肌のくすみ印象や色ムラが気になる方に用いられる成分で、LDMとの組み合わせにより、肌の明るさや均一感を意識したケアを行うことが可能です。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "クールガンCO2導入（トラネキサム酸）",
        equipment: "クールガン",
        branch: "トラネキサム酸",
        description: "肌のくすみ印象や色ムラが気になる方に用いられる成分で、CO2凍結との組み合わせにより、肌の明るさや均一感を意識したケアを行うことが可能です。",
        memberPrice: "15000",
        regularPrice: "16500"
      }
    ]
  },
  "pores-acne-scars": {
    title: "毛穴・ニキビ跡",
    description: "毛穴の開きやニキビ跡の改善を目指す施術",
    treatments: [
      {
        name: "POTENZA cp21導入（Pluryal Densify）",
        equipment: "POTENZA",
        branch: "Pluryal Densify",
        description: "ペプチド・アミノ酸・ヒアルロン酸を含む高濃度製剤が線維芽細胞を刺激し、コラーゲン・エラスチンの産生を促進。毛穴・小ジワ・ハリ低下の原因にアプローチします。",
        regularPrice: "計算中"
      },
      {
        name: "ダーマペン４全顔",
        equipment: "ダーマペン４",
        description: "極細針で肌に微細な刺激を与え、コラーゲン生成を促進。毛穴・ニキビ跡・小ジワの改善に有効な再生治療です。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "ダーマペン４ボディ",
        equipment: "ダーマペン４",
        description: "極細針で肌に微細な刺激を与え、コラーゲン生成を促進。毛穴・ニキビ跡・小ジワの改善に有効な再生治療です。",
        memberPrice: "30000",
        regularPrice: "33000"
      },
      {
        name: "ダーマペン４ボトックスフェイシャル",
        equipment: "ダーマペン４",
        description: "極少量のボトックスを顔全体に微注入。筋肉の動きは残しつつ、毛穴・小ジワ・皮脂テカリを整える肌質改善治療。肌質改善により、マスクの蒸れや夏場のメイク崩れが軽減されます。",
        memberPrice: "23000",
        regularPrice: "25300"
      },
      {
        name: "ダーマペン４ヴェルヴェットスキン",
        equipment: "ダーマペン４",
        description: "ダーマペンで肌に微細な穴を開けた直後にピーリング剤を導入。ハリ・ツヤ・毛穴・ニキビ跡を同時にケアするトリートメントです。",
        memberPrice: "25000",
        regularPrice: "27500"
      },
      {
        name: "ハイドラフェイシャル",
        equipment: "ハイドラフェイシャル",
        description: "クレンジング・角質除去・吸引・美容液導入を一度に行うことで、効率的なケアが期待できます。毛穴の黒ずみやザラつきを改善し、つるんとした透明肌へ。",
        specialPriceName: "単品15000円 他施術とセットで10000円",
        regularPrice: "15000"
      },
      {
        name: "ピコフラクショナル",
        equipment: "Picoway",
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
        name: "LDM炎症ニキビ",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみのある肌に優しく作用し、肌のコンディションを整えます。細胞外マトリックスに深く作用することで、肌の土台から健やかな状態へ導きます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "POTENZA cp21導入（臍帯血幹細胞培養液導入）",
        equipment: "POTENZA",
        branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        description: "幹細胞由来エクソソームが損傷組織の修復を促し、抗炎症・抗酸化・細胞再生に働きかけます。ニキビ跡、赤み、加齢による肌力低下など、複合的なお悩みに効果が期待できる再生治療です。",
        regularPrice: "計算中"
      },
      {
        name: "POTENZA A1-12ニキビ・汗管腫",
        equipment: "POTENZA",
        description: "真皮内の皮脂腺や汗管腫の腫瘍組織に直接熱エネルギーを届け、選択的に破壊・凝固します。ニキビの原因菌繁殖や皮脂過剰を抑制し、再発しにくい肌を目指します。汗管腫は複数回の照射で縮小・消退を目指す瘢痕を最小限に抑えた治療が可能です。",
        regularPrice: "計算中"
      },
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
      {
        name: "LDMヘアケア",
        equipment: "LDM",
        description: "頭皮の血流を促進し、細胞の再生力をサポート。抜け毛予防・育毛効果が期待される痛みの少ない頭皮ケアです。",
        regularPrice: "準備中"
      },
      {
        name: "ヘアクール",
        equipment: "クールガン",
        description: "頭皮深層に超低温の二酸化炭素が残存することで血流促進効果・ボーア効果による育毛を促進します。副作用やダウンタイムはほとんどないと言われています。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "ヘアクール導入（Hair filler）",
        equipment: "クールガン",
        branch: "Hair filler",
        description: "CO2によるボーア効果に加え、ペプチドやヒアルロン酸などを配合した製剤を頭皮に注入し、頭皮環境の健やかさを保つことを目的とした施術です。栄養成分が頭皮に行き渡ることで、ハリ・コシが気になる方の毛髪のボリューム維持をサポートします。痛みが苦手な方にオススメ。",
        memberPrice: "30000",
        regularPrice: "33000"
      },
      {
        name: "メソガンU225（Hair filler）",
        equipment: "メソガンU225",
        description: "ペプチドやヒアルロン酸などを配合した製剤を頭皮に注入し、頭皮環境の健やかさを保つことを目的とした施術です。栄養成分が頭皮に行き渡ることで、ハリ・コシが気になる方の毛髪のボリューム維持をサポートします。痛くても効果重視な方におすすめ。",
        regularPrice: "計算中"
      },
      {
        name: "メソガンU225（Hairエクソソーム）",
        equipment: "メソガンU225",
        description: "エクソソームは、頭皮環境の整備や毛包周辺へのアプローチが期待されており、注目される先端成分です。ドラッグデリバリー機器を用いて頭皮表面に微細な通路を形成し、栄養成分を効率よく浸透させる設計となっており、ボリューム感やハリ・コシが気になる方の頭皮ケアに取り入れられています。",
        regularPrice: "計算中"
      }
    ]
  },
  "hair-removal": {
    title: "脱毛",
    description: "医療レーザー脱毛による永久脱毛",
    treatments: [
      {
        name: "医療脱毛",
        equipment: "ソプラノ",
        description: "痛みに配慮し、高い脱毛効果を目指して丁寧に施術いたします。痛みが少ない、幅広い肌質・毛質に対応、施術時間が短い、3種類の波長をブレンドして様々な深さの毛に対応できます。",
        regularPrice: "準備中"
      }
    ]
  },
  "soothing": {
    title: "鎮静",
    description: "肌の炎症や赤みを鎮静する施術",
    treatments: [
      {
        name: "LDMアトピー",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみのある肌に優しく作用し、肌のコンディションを整えます。細胞外マトリックスに深く作用することで、肌の土台から健やかな状態へ導きます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "LDM赤み",
        equipment: "LDM",
        description: "トリプルオーバー周波数を用いて炎症やかゆみのある肌に優しく作用し、肌のコンディションを整えます。細胞外マトリックスに深く作用することで、肌の土台から健やかな状態へ導きます。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "LDM超音波導入（成長因子パック導入）",
        equipment: "LDM",
        branch: "成長因子パック導入",
        description: "成長因子を含むパックを組み合わせることで、乾燥やキメの乱れ、肌のコンディション低下が気になる方へ、整肌を目的としたトリートメントとして使用されています。",
        memberPrice: "12000",
        regularPrice: "13200"
      },
      {
        name: "クールガンCO2導入（ビタミンC）",
        equipment: "クールガン",
        branch: "ビタミンC",
        description: "2021年にFDAの認証を取得。（本機器は国内未承認医療機器です。諸外国における安全性等に係る情報として、米国FDAで承認されています。）氷の針状にした薬剤を高速噴射し、針を使わずに有効成分を肌深部へ導入。痛みが少なく、ダウンタイムもほとんどありません。",
        memberPrice: "15000",
        regularPrice: "16500"
      }
    ]
  },
  "firmness-glow": {
    title: "ハリ・艶",
    description: "肌のハリと艶を改善する施術",
    treatments: [
      {
        name: "LDMエイジングケア",
        equipment: "LDM",
        description: "1MHz／3MHz／10MHzといった周波数を部位や目的に応じて使い分けることで、真皮層への穏やかな刺激とマイクロマッサージ効果が得られ、肌のハリ・弾力・キメの整った印象を意識したケアが可能です。",
        memberPrice: "9900",
        regularPrice: "10890"
      },
      {
        name: "LDM超音波導入（スキンボトックス）",
        equipment: "LDM",
        branch: "スキンボトックス",
        description: "ボツリヌストキシンが汗腺・皮脂腺の活動を抑制し、毛穴の開き・皮脂分泌・肌のテカリを軽減します。滑らかでマットな質感へ整え、メイクのりの良い陶器肌のような仕上がりが期待できます。",
        memberPrice: "15000",
        regularPrice: "16500"
      },
      {
        name: "LDM超音波導入（プラセンタ）",
        equipment: "LDM",
        branch: "プラセンタ",
        description: "アミノ酸やビタミン、ミネラルを豊富に含むプラセンタ製剤を、LDMの超音波振動によって肌深部へ導入する施術です。ハリ感や潤いを意識した肌ケアとして用いられ、年齢や乾燥による肌状態の変化が気になる方に適したメニューとなっています。",
        memberPrice: "12000",
        regularPrice: "13200"
      }
    ]
  },
  "wrinkles": {
    title: "しわ",
    description: "しわの改善を目指す施術",
    treatments: [
      {
        name: "LDM超音波導入（臍帯血幹細胞培養液導入）",
        equipment: "LDM",
        branch: "臍帯血幹細胞培養液導入（エクソソーム）",
        description: "幹細胞由来エクソソームが損傷組織の修復を促し、抗炎症・抗酸化・細胞再生に働きかけます。ニキビ跡、赤み、加齢による肌力低下など、複合的なお悩みに効果が期待できる再生治療です。",
        memberPrice: "18000",
        regularPrice: "19800"
      }
    ]
  },
  "body": {
    title: "ボディ",
    description: "ボディの肌質改善を目指す施術",
    treatments: [
      {
        name: "LDM body肌質改善",
        equipment: "LDM",
        description: "背中やデコルテを始めとするお体の肌トラブルに1MHz／3MHz／10MHzといった周波数を部位や目的に応じて使い分けることで、真皮層への穏やかな刺激とマイクロマッサージ効果が得られ、肌のハリ・弾力・キメの整った印象を意識したケアが可能です。",
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
      {
        name: "妊娠線ケア",
        equipment: "ダーマペン４",
        description: "妊娠や急激な体重変化により生じた線状皮膚萎縮（いわゆる妊娠線）に対し、ダーマペンで微細な穿孔を行い、皮膚の創傷治癒機構を利用して滑らかでふっくらとした肌質感を目指します。",
        memberPrice: "45000",
        regularPrice: "49500"
      }
    ]
  }
};

// 機械別カテゴリのデータ（簡略版）
export const equipmentData: Record<string, Category> = {
  "hifu": {
    title: "HIFU（ハイフ）",
    description: "高密度焦点式超音波による引き締め治療",
    treatments: [
      {
        name: "カスタマイズHIFU 頬下・顎下",
        equipment: "カスタマイズHIFU",
        description: "筋膜にアプローチして皮膚の内側から引き締まりが期待できるたるみ治療です。",
        memberPrice: "33000",
        regularPrice: "36300"
      },
      {
        name: "マッサージハイフ 20分",
        equipment: "カスタマイズHIFU",
        description: "皮膚の表層に優しい熱を入れることでその場でむくみを軽減する効果が期待できます。",
        memberPrice: "15000",
        regularPrice: "16500"
      }
    ]
  }
};

// 統合されたメニューデータ
export const menuData: Record<string, Record<string, Category>> = {
  concerns: concernsData,
  equipment: equipmentData
};