"use client";

import { useInView } from "react-intersection-observer";
import { concernsData, formatPrice, type Treatment, type Category } from "../data/menuData";

export default function PricingTable() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // データが存在するかチェック
  if (!concernsData || Object.keys(concernsData).length === 0) {
    return (
      <section className="py-8 sm:py-16 bg-[#faf3ef]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-500">メニューデータが読み込まれていません</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-16 bg-[#faf3ef]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-[#DDCDB9] rounded-full mr-3" />
            <span className="text-[#DDCDB9] font-shippori text-sm tracking-wide">料金一覧表</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-shippori font-light text-[#54585f] mb-4">
            Pricing Table
          </h1>
          <p className="text-[#54585f] text-lg max-w-2xl mx-auto">
            全施術の料金を一覧でご確認いただけます
          </p>
        </div>

        {/* 料金表 */}
        <div
          className="space-y-8"
        >
          {Object.entries(concernsData).map(([key, category]) => (
            <div key={key} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* カテゴリヘッダー */}
              <div className="bg-[#c2ac94] text-white px-6 py-4">
                <h2 className="text-xl font-shippori font-medium">{category.title}</h2>
                <p className="text-sm opacity-90 mt-1">{category.description}</p>
              </div>

              {/* テーブル */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f8f4f0]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#54585f] border-b border-[#dacacf]/20">
                        施術名
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[#54585f] border-b border-[#dacacf]/20 hidden sm:table-cell">
                        機器・詳細
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-[#54585f] border-b border-[#dacacf]/20">
                        メンバー価格
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-[#54585f] border-b border-[#dacacf]/20">
                        通常価格
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.treatments.map((treatment: Treatment, index: number) => (
                      <tr key={index} className="hover:bg-[#faf3ef]/50 transition-colors">
                        <td className="px-6 py-4 border-b border-[#dacacf]/10">
                          <div>
                            <div className="font-medium text-[#54585f] text-sm sm:text-base">
                              {treatment.name}
                            </div>
                            {treatment.branch && (
                              <div className="text-xs text-[#8a6d62] mt-1">
                                {treatment.branch}
                              </div>
                            )}
                            {/* モバイルで機器名を表示 */}
                            <div className="text-xs text-[#8a6d62] mt-1 sm:hidden">
                              {treatment.equipment}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 border-b border-[#dacacf]/10 hidden sm:table-cell">
                          <div className="text-sm text-[#54585f]">
                            {treatment.equipment}
                          </div>
                        </td>
                        <td className="px-6 py-4 border-b border-[#dacacf]/10 text-right">
                          <div className="text-sm sm:text-base font-medium text-[#c2ac94]">
                            {treatment.specialPriceName ? (
                              <div className="text-xs text-[#8a6d62]">
                                {treatment.specialPriceName}
                              </div>
                            ) : treatment.memberPrice ? (
                              formatPrice(treatment.memberPrice)
                            ) : (
                              <span className="text-[#8a6d62]">-</span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 border-b border-[#dacacf]/10 text-right">
                          <div className="text-sm sm:text-base font-medium text-[#54585f]">
                            {treatment.specialPriceName ? (
                              <span className="text-[#8a6d62]">-</span>
                            ) : (
                              formatPrice(treatment.regularPrice)
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* 注意事項 */}
        <div
          className="mt-12 bg-white rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-shippori font-medium text-[#54585f] mb-4">
            料金について
          </h3>
          <div className="space-y-2 text-sm text-[#54585f]">
            <p>• 表示価格は全て税込価格です</p>
            <p>• メンバー価格は当院の会員様向けの特別価格です</p>
            <p>• 施術内容や料金は予告なく変更される場合があります</p>
            <p>• 詳細な料金やコース内容については、お気軽にお問い合わせください</p>
          </div>
        </div>
      </div>
    </section>
  );
}