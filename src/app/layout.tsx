import type { Metadata } from "next";
import { Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const shippioriMincho = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "表参道の美肌治療専門クリニック｜ルナージュクリニック",
  description: "表参道にあるルナージュクリニックは、シミ・しわ・たるみ・ニキビなど肌悩みに特化。経験豊富なナースが医師指示のもと丁寧に施術し、完全予約制の落ち着いた院内で最適な美肌ケアを提供します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${shippioriMincho.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
