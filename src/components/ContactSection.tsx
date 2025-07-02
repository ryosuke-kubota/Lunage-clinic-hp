import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#faf3ef]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-[#caa9af] rounded-full mr-3" />
            <span className="text-[#caa9af] font-shippori text-sm tracking-wide">ご予約・お問い合わせ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-light text-[#54585f] mb-8">
            Contact
          </h2>
          <p className="text-[#8a6d62] font-shippori text-lg">
            初診の方は、下記からご予約ください。
          </p>
        </div>

        {/* Reservation Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-8xl font-shippori font-light text-[#caa9af] mb-8">
              Reservation
            </h3>
            <p className="text-[#54585f] font-shippori text-lg mb-8">
              ネット予約は24時間受付中
            </p>

            <Button
              className="bg-[#caa9af] hover:bg-[#c2ac94] text-white font-shippori px-12 py-4 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg mb-8"
            >
              Reservation
            </Button>

            <div className="text-[#8a6d62] font-shippori text-sm">
              ※ご予約確認後に担当者より確認のお電話をさせていただきます
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Phone Contact */}
          <div className="bg-[#faf3ef] p-8 rounded-lg text-center">
            <h4 className="text-[#54585f] font-shippori text-lg mb-4">
              お電話でご予約
            </h4>
            <a
              href="tel:03-4400-9519"
              className="text-4xl font-shippori font-medium text-[#caa9af] hover:text-[#8a6d62] transition-colors block mb-2"
            >
              03-4400-9519
            </a>
            <p className="text-[#8a6d62] font-shippori text-sm">
              平日・土日：11:00〜21:00
            </p>
          </div>

          {/* LINE Contact */}
          <div className="bg-[#faf3ef] p-8 rounded-lg text-center">
            <h4 className="text-[#54585f] font-shippori text-lg mb-4">
              LINEからもご予約いただけます
            </h4>
            <div className="flex justify-center mb-4">
              <a href="#" className="underline text-2xl">ご予約はこちら</a>
            </div>
            {/* <p className="text-[#8a6d62] font-shippori text-sm">
              未成年者治療同意書はこちら
            </p> */}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <p className="text-[#8a6d62] font-shippori text-lg leading-relaxed max-w-3xl mx-auto">
            お肌のお悩み、美容のご相談、どんなことでも気軽にお話しください。
            <br />
            持続性と毎月お会いできること、美容のお話ができることを、心から楽しみにしております。
          </p>
        </div>
      </div>
    </section>
  );
}
