export default function DentalTreatmentSection() {
  return (
    <section className="py-16 px-4 bg-[#faf3ef]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-[#d4af37]">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-[#d4af37] mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5a4a3a]">
              歯科治療も対応可能
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#5a4a3a] leading-relaxed text-center">
            LUNAGE CLINICのホワイトニングは、歯科治療も行っております。
          </p>
        </div>
      </div>
    </section>
  );
}
