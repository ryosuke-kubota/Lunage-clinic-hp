interface SectionHeadingProps {
  label: string;
  title: string;
  align?: "center" | "left";
  lead?: string;
}

// セクション見出しの共通部品（日本語ラベル＋英字タイトル＋細い線）
export default function SectionHeading({ label, title, align = "center", lead }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center" : "text-left"}`}>
      <p className="font-shippori text-sm tracking-[0.2em] text-lunage-gold">{label}</p>
      <h2 className="mt-2 font-shippori font-normal text-4xl md:text-5xl tracking-wide text-lunage-ink">{title}</h2>
      <div className={`mt-5 h-px w-10 bg-lunage-gold ${center ? "mx-auto" : ""}`} />
      {lead && (
        <p className="mt-5 font-shippori text-[15px] md:text-base leading-relaxed text-lunage-ink/80">{lead}</p>
      )}
    </div>
  );
}
