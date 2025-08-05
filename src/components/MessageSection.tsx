import Image from "next/image";

export default function MessageSection() {
  return (
    <section className="py-20 bg-[#faf3ef]" id="doctor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-[#DDCDB9] rounded-full mr-3" />
            <span className="text-[#DDCDB9] font-shippori text-sm tracking-wide">院長からのメッセージ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-shippori font-light text-[#54585f] mb-8">
            Message
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Message Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-shippori font-medium text-[#54585f] mb-8 leading-relaxed">
              美しさは、
              <br />
              生きる楽しさになる。
            </h3>

            <div className="space-y-6 text-[#54585f] font-shippori text-lg leading-relaxed">
              <p>
                はじめまして。
                <br />
                ルアージュクリニックをプロデュースしている院長の〇〇です。
              </p>
              <p>
                私たちのクリニックは、メッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージ。
              </p>
              <p>
              メッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージ
              </p>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
              <p className="text-[#8a6d62] font-shippori text-left mb-4">
                「あなたらしく、少しずつ自分が好きになる」そんな場所でありたい。そう願いながら、スタッフ一同、心を込めてお迎えしています。
              </p>
              <p className="text-[#54585f] font-shippori text-right font-medium">
                〇〇
              </p>
            </div>
          </div>

          {/* Right Side - Doctor Image and Credentials */}
          <div>
            <div className="mb-8">
              <Image
                src="https://ext.same-assets.com/390596101/2764878999.png"
                alt="LUNAGE CLINIC 院長 宮崎恵"
                width={400}
                height={500}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                quality={85}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-shippori font-medium text-[#54585f] mb-6">
                LUNAGE CLINIC 院長 〇〇
              </h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-shippori font-medium text-[#8a6d62] mb-2">経歴</h5>
                  <div className="text-[#54585f] font-shippori text-sm space-y-1">
                    <p>LUNAGE CLINIC設立</p>
                    <p>LUNAGE CLINIC設立</p>
                    <p>LUNAGE CLINIC設立</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-shippori font-medium text-[#8a6d62] mb-2">資格</h5>
                  <div className="text-[#54585f] font-shippori text-sm space-y-1">
                    <p>アメリカ心臓医会　ACLS（二次救命処置）資格</p>
                    <p>アラガンジュビダームビスタ認定医</p>
                    <p>アラガンボトックス認定医</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
