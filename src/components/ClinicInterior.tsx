import Image from "next/image";
import nextConfig from "../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

export default function ClinicInterior() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#faf3ef]">
      <div className="max-w-7xl mx-auto">
        {/* Interior Image Showcase */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={`${BASE_PATH}/images/space.jpg`}
              alt="LUNAGE Clinic Interior"
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-white/30 to-transparent" />
          </div>

          {/* Overlay Content - Responsive */}
          <div className="relative z-10 h-full flex items-end">
            <div className="p-4 sm:p-8 md:p-16 w-full">
              <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg max-w-sm sm:max-w-md">
                <div className="mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#DDCDB9] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <span className="text-white font-shippori text-lg sm:text-2xl font-bold">L</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-shippori font-medium text-[#54585f] mb-2">
                    LUNAGE CLINIC
                  </h3>
                  <p className="text-[#8a6d62] font-shippori text-sm sm:text-base">
                    上質な空間で、心地よいひとときを
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements - Responsive */}
          <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-12 h-12 sm:w-20 sm:h-20 border-2 border-white/30 rounded-full" />
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-full backdrop-blur-sm" />
        </div>

        {/* Bottom Content */}
        <div className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-shippori font-light text-[#54585f] mb-6 sm:mb-8">
              洗練された空間で、
              <br />
              特別なケアタイムを
            </h2>
            <p className="text-[#8a6d62] font-shippori text-base sm:text-lg leading-relaxed">
              モダンでエレガントなインテリアに包まれた当クリニックで、
              <br className="hidden sm:block" />
              リラックスしながら美容医療をお楽しみください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
