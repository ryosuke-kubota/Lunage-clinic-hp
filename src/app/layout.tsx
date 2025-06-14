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
  title: "銀座の美容皮膚科・美容外科 BIJOU CLINIC",
  description: "繊細な技術と確かな審美眼で、一人ひとりの美しさに寄り添う。肌・目元・輪郭など自然で上品な仕上がりを追求する美容医療クリニック。",
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
