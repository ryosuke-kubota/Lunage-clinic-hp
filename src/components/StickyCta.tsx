export default function StickyCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-sm border-t border-[#d6c6b5]/40 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-2 p-2">
        <a
          href="https://lin.ee/teAI9dY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-[#c2ac94] text-white font-shippori py-3 rounded-full text-sm"
        >
          LINEで予約
        </a>
        <a
          href="tel:03-4400-9519"
          className="flex-1 text-center border border-[#c2ac94] text-[#8a6d62] font-shippori py-3 rounded-full text-sm"
        >
          電話する
        </a>
      </div>
    </div>
  );
}
