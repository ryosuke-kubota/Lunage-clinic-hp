import SectionHeading from "./SectionHeading";

export default function InformationSection() {
  return (
    <section className="py-16 md:py-24 bg-lunage-sand" id="access">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading label="クリニック概要" title="Information" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side - Clinic Information */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-shippori font-medium text-[#54585f] mb-6 w-fit flex flex-col items-center">
                  <span className="text-[14px] leading-[1]">medical and dental</span>
                  LUNAGE CLINIC
                </h3>
                <div className="space-y-4 text-[#54585f] font-shippori">
                  <div className="flex items-start">
                    <span className="w-24 shrink-0 text-[#8a6d62] font-medium whitespace-nowrap">住所</span>
                    <div>
                      <p>〒150-0001</p>
                      <p>東京都渋谷区神宮前3-2-17 上田ビル202</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="w-24 shrink-0 text-[#8a6d62] font-medium whitespace-nowrap">TEL</span>
                    <a href="tel:03-4400-9519" className="text-[#8a6d62] underline underline-offset-4 hover:text-[#54585f] transition-colors">
                      03-4400-9519
                    </a>
                  </div>

                  <div className="flex items-start">
                    <span className="w-24 shrink-0 text-[#8a6d62] font-medium whitespace-nowrap">アクセス</span>
                    <div>
                      <p>表参道駅・外苑前駅から徒歩5分</p>
                      <a
                        href="https://www.instagram.com/lunage_clinic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm text-[#8a6d62] underline underline-offset-4 hover:text-[#54585f]"
                      >
                        道に迷ったら：Instagramで行き方を写真つきで案内しています
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="w-24 shrink-0 text-[#8a6d62] font-medium whitespace-nowrap">診療時間</span>
                    <div>
                      <p>11:00〜22:00</p>
                      <p className="text-sm text-[#8a6d62]">（年中無休）</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Section */}
              {/* <div className="bg-[#faf3ef] p-6 rounded-lg flex flex-col items-center">
                <p className="text-[#54585f] font-shippori mb-4">
                  LINEでのお問い合わせ・ご予約も承っております
                </p>
                <a href="https://lin.ee/teAI9dY" target="_blank" rel="noopener noreferrer" className="underline text-2xl">LINEで予約</a>
              </div> */}
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
                className="text-lunage-goldDark hover:text-lunage-ink font-shippori text-sm transition-colors underline underline-offset-4"
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
