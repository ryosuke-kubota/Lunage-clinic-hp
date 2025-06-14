export default function InformationSection() {
  return (
    <section className="py-20 bg-white" id="access">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-[#caa9af] rounded-full mr-3" />
            <span className="text-[#caa9af] font-shippori text-sm tracking-wide">クリニック概要</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-light text-[#54585f] mb-8">
            Information
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Clinic Information */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-shippori font-medium text-[#54585f] mb-6">
                  BIJOU CLINIC
                </h3>
                <div className="space-y-4 text-[#54585f] font-shippori">
                  <div className="flex items-start">
                    <span className="w-20 text-[#8a6d62] font-medium">住所</span>
                    <div>
                      <p>〒104-0061</p>
                      <p>東京都中央区銀座4丁目6-18 ギンザアクトビル9階</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="w-20 text-[#8a6d62] font-medium">TEL</span>
                    <a href="tel:03-5915-4888" className="text-[#caa9af] hover:text-[#8a6d62] transition-colors">
                      03-5915-4888
                    </a>
                  </div>

                  <div className="flex items-start">
                    <span className="w-20 text-[#8a6d62] font-medium">アクセス</span>
                    <div>
                      <p>銀座線A8 A11出口30秒</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="w-20 text-[#8a6d62] font-medium">診療時間</span>
                    <div>
                      <p>9:00〜18:00</p>
                      <p className="text-sm text-[#8a6d62]">（年中無休）</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="bg-[#faf3ef] p-6 rounded-lg">
                <p className="text-[#54585f] font-shippori mb-4">
                  LINEでのお問い合わせ・ご予約も承っております
                </p>
                <div className="w-24 h-24 bg-white p-2 rounded-lg">
                  <img
                    src="https://ext.same-assets.com/390596101/849713345.png"
                    alt="LINE QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
              <img
                src="https://ext.same-assets.com/390596101/3962919721.png"
                alt="Clinic Location Map"
                className="w-full h-full object-cover"
              />

              {/* Map Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-[#caa9af] rounded-full border-4 border-white shadow-lg animate-pulse" />
              </div>

              {/* Location Label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <p className="font-shippori text-[#54585f] font-medium text-sm">
                  ギンザアクト
                </p>
                <p className="font-shippori text-[#8a6d62] text-xs">
                  銀座4丁目6-18
                </p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://www.google.com/maps/place/%E3%80%92104-0061+%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%8A%80%E5%BA%A7%EF%BC%94%E4%B8%81%E7%9B%AE%EF%BC%96%E2%88%92%EF%BC%91%EF%BC%98+%E3%82%AE%E3%83%B3%E3%82%B6%E3%82%A2%E3%82%AF%E3%83%88%E3%83%93%E3%83%AB/@35.6717381,139.7659222,17z/data=!3m1!4b1!4m6!3m5!1s0x60188be69b3ca549:0xeaf508e05578628b!8m2!3d35.6717381!4d139.7659222!16s%2Fg%2F11c71cb17v"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#caa9af] hover:text-[#8a6d62] font-shippori text-sm transition-colors underline"
              >
                Google Mapで開く
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
