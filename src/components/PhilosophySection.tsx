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
            美容医療をもっと身近に、もっと心地よく
          </h3>

          <div className="space-y-6 text-[#54585f] font-shippori text-lg leading-relaxed">
            <p>
              美容医療を、もっと日常に。
            </p>
            <p>
              特別な日だけのものではなく、スキンケアのように、ヘアメイクのように。
            </p>
            <p>
              私たちは、美容医療を"習慣"として提案します。
            </p>
            <p>
              一人ひとりの悩みに丁寧に向き合いながら、通うたびに、自分をもっと好きになれるように。
            </p>
            <p>
              あなたの日常に、そっと寄り添うクリニックでありたいと願っています。
            </p>
          </div>
        </div>

        {/* Background Text */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="text-[#54585f]/5 font-shippori text-[5rem] md:text-[12rem] font-bold select-none whitespace-nowrap">
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
