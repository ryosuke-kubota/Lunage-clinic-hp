import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会社概要｜一般社団法人 医療あおぞら会",
  description: "一般社団法人 医療あおぞら会の会社概要。科学的根拠に基づく医療情報の提供による健康増進・疾病予防の推進を目的とした法人です。",
  keywords: "会社概要, 一般社団法人, 医療あおぞら会, 健康増進, 疾病予防, 医療情報",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "会社概要｜一般社団法人 医療あおぞら会",
    description: "一般社団法人 医療あおぞら会の会社概要。科学的根拠に基づく医療情報の提供による健康増進・疾病予防の推進を目的とした法人です。",
    url: "https://runaju-clinic.com/company",
    siteName: "ルナージュクリニック",
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "一般社団法人 医療あおぞら会 会社概要",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "会社概要｜一般社団法人 医療あおぞら会",
    description: "一般社団法人 医療あおぞら会の会社概要。科学的根拠に基づく医療情報の提供による健康増進・疾病予防の推進を目的とした法人です。",
    images: ["/images/ogp.png"],
  },
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-[#faf3ef]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 bg-gradient-to-b from-white to-[#faf3ef]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#54585f] font-shippori mb-4">
              会社概要
            </h1>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* 基本情報 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#54585f] font-shippori mb-8 border-b-2 border-[#DDCDB9] pb-3">
                基本情報
              </h2>
              <div className="grid gap-6">
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-semibold text-[#54585f] font-shippori w-full sm:w-32 mb-2 sm:mb-0">
                    法人名
                  </dt>
                  <dd className="text-[#54585f] font-shippori flex-1 text-sm md:text-base">
                    一般社団法人 医療あおぞら会
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-semibold text-[#54585f] font-shippori w-full sm:w-32 mb-2 sm:mb-0">
                    設立日
                  </dt>
                  <dd className="text-[#54585f] font-shippori flex-1 text-sm md:text-base">
                    令和7年3月12日（2025年3月12日）
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="font-semibold text-[#54585f] font-shippori w-full sm:w-32 mb-2 sm:mb-0">
                    所在地
                  </dt>
                  <dd className="text-[#54585f] font-shippori flex-1 text-sm md:text-base">
                    東京都渋谷区神宮前3丁目2番17号 上田ビル2階
                  </dd>
                </div>
              </div>
            </div>

            {/* 事業内容 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#54585f] font-shippori mb-8 border-b-2 border-[#DDCDB9] pb-3">
                事業内容
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#DDCDB9] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-[#54585f] font-shippori text-sm md:text-base">
                    診療所の開設および運営
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#DDCDB9] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-[#54585f] font-shippori text-sm md:text-base">
                    健康増進・疾病予防・美容に関するエビデンス研究と情報提供
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#DDCDB9] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-[#54585f] font-shippori text-sm md:text-base">
                    医療・健康に関する啓発活動や研究会の開催
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#DDCDB9] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-[#54585f] font-shippori text-sm md:text-base">
                    訪問診療および地域医療の提供に関する事業
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#DDCDB9] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-[#54585f] font-shippori text-sm md:text-base">
                    医療技術および治療法に関する調査・研究
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#DDCDB9] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-[#54585f] font-shippori text-sm md:text-base">
                    医療従事者の育成および支援事業
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#DDCDB9] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-[#54585f] font-shippori text-sm md:text-base">
                    その他当法人の目的を達成するために必要な事業
                  </span>
                </li>
              </ul>
            </div>

            {/* 代表者・役員 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#54585f] font-shippori mb-8 border-b-2 border-[#DDCDB9] pb-3">
                代表者・役員
              </h2>
              
              {/* 代表者 */}
              <div className="mb-8">
                <div className="space-y-4">

                    <div className="bg-[#faf3ef] rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row">
                        <dt className="font-semibold text-[#54585f] font-shippori w-full sm:w-24 mb-2 sm:mb-0">
                        代表理事
                        </dt>
                        <dd className="text-[#54585f] font-shippori flex-1">
                        佐渡 章悟
                        </dd>
                    </div>
                    </div>
                    <div className="bg-[#faf3ef] rounded-lg p-6">
                        <div className="flex flex-col sm:flex-row">
                            <dt className="font-semibold text-[#54585f] font-shippori w-full sm:w-16 mb-2 sm:mb-0">
                            理事
                            </dt>
                            <dd className="text-[#54585f] font-shippori flex-1">
                            矢口 俊貴
                            </dd>
                        </div>
                    </div>
                    <div className="bg-[#faf3ef] rounded-lg p-6">
                        <div className="flex flex-col sm:flex-row">
                            <dt className="font-semibold text-[#54585f] font-shippori w-full sm:w-16 mb-2 sm:mb-0">
                            理事
                            </dt>
                            <dd className="text-[#54585f] font-shippori flex-1">
                            北村 玲
                            </dd>
                        </div>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}