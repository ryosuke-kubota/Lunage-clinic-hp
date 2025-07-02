export default function PhilosophySection() {
  return (
    <section className="py-20 bg-[#faf3ef]" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-[#caa9af] rounded-full mr-3" />
            <span className="text-[#caa9af] font-shippori text-sm tracking-wide">クリニック理念</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-light text-[#54585f] mb-8">
            PHILOSOPHY
          </h2>
        </div>

        {/* Main Philosophy Statement */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-shippori font-medium text-[#54585f] leading-relaxed mb-8">
            あなたの毎日に、そっと輝きを。
          </h3>

          <div className="space-y-6 text-[#54585f] font-shippori text-lg leading-relaxed">
            <p>
              ルナージュクリニックは、表参道の心地よい空間で、肌の小さな不安にもやさしく寄り添います。
            </p>
            <p>
            経験豊かな医師とナースがチームとなり、わかりやすい説明と丁寧なケアで安心をご提供。
            </p>
            <p>
            完全予約制の落ち着いた院内で、自分のペースで通いながら美肌を育む――
            </p>
            <p>
            そんな“心が満たされる時間”をお届けしたいと願っています。
            </p>
          </div>
        </div>

        {/* Background Text */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="text-[#54585f]/5 font-shippori text-[4rem] md:text-[12rem] font-bold select-none whitespace-nowrap">
              LUNAGE
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="relative z-10 py-20">
            
          </div>
        </div>
      </div>
    </section>
  );
}
