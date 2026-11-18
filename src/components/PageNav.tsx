// トップのページ内ナビ（長いページの目次）。スマホでは2段に折り返す
const LINKS = [
  { href: "#about", label: "クリニックについて" },
  { href: "#menu", label: "メニュー・料金" },
  { href: "#access", label: "アクセス" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contact", label: "ご予約" },
];

export default function PageNav() {
  return (
    <nav aria-label="ページ内の移動" className="border-b border-lunage-line bg-white">
      <ul className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-2 px-4 py-4">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="block rounded-full border border-lunage-line px-4 py-2 font-shippori text-sm text-lunage-ink transition-colors hover:border-lunage-gold hover:text-lunage-goldDark"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
