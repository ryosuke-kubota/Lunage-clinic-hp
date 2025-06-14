export default function MessageSection() {
  return (
    <section className="py-20 bg-[#faf3ef]" id="doctor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-[#caa9af] rounded-full mr-3" />
            <span className="text-[#caa9af] font-shippori text-sm tracking-wide">院長からのメッセージ</span>
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
                美女クリニックをプロデュースしている院長のちゃんです。
              </p>
              <p>
                私たちのクリニックは、「美容医療をもっと身近に、もっと心地よく」をコンセプトに、一人ひとりのお悩みに丁寧に寄り添う場所でありたいと願い、日々お客様と向き合っています。
              </p>
              <p>
                私自身、学生時代に肌トラブルや自分のコンプレックスの外見に悩み、たくさんの施術を試しては効果を実感できず、お金も気持ちも無駄にしてしまった経験があります。
              </p>
              <p>
                その体験から実感したのは、美容医療は"継続してこそ効果がある"ということ。勉強やダイエットと同じように、一日で変わる魔法はありません。
              </p>
              <p>
                だからこそ、継続しやすく、確かな結果を実感していただけるように。
              </p>
              <p>
                私自身が「これは良い」と思える治療だけを厳選し、月額制でご提供できるコスパ最強のサブスクプランなどもつくりました。
              </p>
              <p>
                ご来院の際の悩み、美容のご相談、どんなことでも気軽にお話しください。持続性と毎月お会いできること、美容のお話ができることを、心から楽しみにしております。
              </p>
            </div>

            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
              <p className="text-[#8a6d62] font-shippori text-right mb-4">
                「あなたらしく、少しずつ自分が好きになる」そんな場所でありたい。そう願いながら、スタッフ一同、心を込めてお迎えしています。
              </p>
              <p className="text-[#54585f] font-shippori text-right font-medium">
                院長ちゃん
              </p>
            </div>
          </div>

          {/* Right Side - Doctor Image and Credentials */}
          <div>
            <div className="mb-8">
              <img
                src="https://ext.same-assets.com/390596101/2764878999.png"
                alt="BIJOU CLINIC 院長 宮崎恵"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-shippori font-medium text-[#54585f] mb-6">
                BIJOU CLINIC 院長 宮崎恵
              </h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-shippori font-medium text-[#8a6d62] mb-2">経歴</h5>
                  <div className="text-[#54585f] font-shippori text-sm space-y-1">
                    <p>大分大学医学部医学科卒業</p>
                    <p>大分中村病院診療所麻酔科</p>
                    <p>大手美容クリニック 宮崎院勤務</p>
                    <p>大手美容クリニック 新宿院勤務</p>
                    <p>大手美容クリニック 八王子院院長</p>
                    <p>BIJOU CLINIC設立</p>
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
