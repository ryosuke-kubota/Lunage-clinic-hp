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
                  LUNAGE CLINIC
                </h3>
                <div className="space-y-4 text-[#54585f] font-shippori">
                  <div className="flex items-start">
                    <span className="w-20 text-[#8a6d62] font-medium">住所</span>
                    <div>
                      <p>〒150-0001</p>
                      <p>東京都渋谷区神宮前3-2-17 上田ビル201</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="w-20 text-[#8a6d62] font-medium">TEL</span>
                    <a href="tel:03-4400-9519" className="text-[#caa9af] hover:text-[#8a6d62] transition-colors">
                      03-4400-9519
                    </a>
                  </div>

                  <div className="flex items-start">
                    <span className="w-20 text-[#8a6d62] font-medium">アクセス</span>
                    <div>
                      <p>表参道駅・外苑前駅から徒歩5分</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="w-20 text-[#8a6d62] font-medium">診療時間</span>
                    <div>
                      <p>11:00〜21:00</p>
                      <p className="text-sm text-[#8a6d62]">（年中無休）</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="bg-[#faf3ef] p-6 rounded-lg flex flex-col items-center">
                <p className="text-[#54585f] font-shippori mb-4">
                  LINEでのお問い合わせ・ご予約も承っております
                </p>
                <a href="#" className="underline text-2xl">ご予約はこちら</a>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3243277804618!2d139.71344059999998!3d35.6690153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d878426ebf9%3A0x6f445a5ada639d42!2z44Or44OK44O844K444Ol44Kv44Oq44OL44OD44Kv!5e0!3m2!1sen!2sjp!4v1751445044095!5m2!1sen!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LUNAGE CLINIC Location"
                className="w-full h-full"
              />
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/mchA5zYJcx22ZCc87"
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
