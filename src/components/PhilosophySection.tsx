export default function PhilosophySection() {
  return (
    <section className="py-20 bg-[#faf3ef]" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-[#DDCDB9] rounded-full mr-3" />
            <span className="text-[#DDCDB9] font-shippori text-sm tracking-wide">クリニック理念</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-normal text-[#54585f] mb-8">
            PHILOSOPHY
          </h2>
        </div> */}

        {/* Main Philosophy Statement */}
        <div className="">
          <h3 className="text-2xl md:text-4xl font-shippori font-medium text-[#54585f] leading-relaxed mb-8">
          月のように、<br className="md:hidden"/>あなたを照らす癒しを。
          </h3>

          <div className="space-y-6 text-[#54585f] font-shippori text-xs md:text-sm leading-relaxed">
            <p>
            LUNAGE clinicは、月の満ち欠けのように、女性の心と体のリズムに寄り添うクリニック。
            </p>
            <p>
            忙しさの中で忘れてしまいがちな「本来の自分らしさ」を、美容医療を通じて静かに呼び起こします。
            </p>
            <p>
            内面から輝きを引き出すような、心地よい“再生”と“癒し”の時間をあなたに。
            </p>
            <p>
            そんな“心が満たされる時間”をお届けしたいと願っています。
            </p>
          </div>
        </div>

        {/* Background Text */}
        {/* <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="text-[#54585f]/5 font-shippori text-[4rem] md:text-[12rem] font-bold select-none whitespace-nowrap">
              LUNAGE
            </div>
          </div>

          <div className="relative z-10 py-20">
            
          </div>
        </div> */}
      </div>
    </section>
  );
}
