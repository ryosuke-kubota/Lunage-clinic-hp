import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="ご予約・お問い合わせ" title="Contact" lead="初診の方は、下記からご予約ください。" />

        {/* Reservation Section */}
        <div className="bg-lunage-sand rounded-2xl p-8 md:p-12 mb-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-shippori font-normal text-lunage-gold mb-6">
              Reservation
            </h3>
            <p className="text-[#54585f] font-shippori text-base mb-8">
              ネット予約は24時間受付中
            </p>

            <a
              href="https://lin.ee/teAI9dY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lunage-ink hover:bg-lunage-goldDark text-white font-shippori px-12 py-4 rounded-full text-base tracking-[0.15em] transition-colors block w-fit mx-auto"
            >
              LINEで予約
            </a>

            {/* <div className="text-[#8a6d62] font-shippori text-sm">
              ※ご予約確認後に担当者より確認のお電話をさせていただきます
            </div> */}
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-1 gap-8">
          {/* Phone Contact */}
          <div className="border border-lunage-line p-8 rounded-2xl text-center">
            <h4 className="text-[#54585f] font-shippori text-lg mb-4">
              お電話でご予約
            </h4>
            <a
              href="tel:03-4400-9519"
              className="text-3xl md:text-4xl font-shippori font-medium text-lunage-ink hover:text-lunage-goldDark transition-colors block mb-2"
            >
              03-4400-9519
            </a>
            <p className="text-[#8a6d62] font-shippori text-sm">
              年中無休：11:00〜22:00
            </p>
          </div>

          {/* LINE Contact */}
          {/* <div className="border border-lunage-line p-8 rounded-2xl text-center">
            <h4 className="text-[#54585f] font-shippori text-lg mb-4">
              LINEからもご予約いただけます
            </h4>
            <div className="flex justify-center mb-4">
              <a href="https://lin.ee/teAI9dY" target="_blank" rel="noopener noreferrer" className="underline text-2xl">LINEで予約</a>
            </div>
          </div> */}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <p className="text-[#8a6d62] font-shippori text-lg leading-relaxed max-w-3xl mx-auto">
          月明かりで包み込むようなケアを。<br />
          確かな効果と安全性を追求し、医学的根拠に基づく施術で、<br />
          お一人おひとりのからだが本来持つ力を最大限に引き出します。
          </p>
        </div>
      </div>
    </section>
  );
}
