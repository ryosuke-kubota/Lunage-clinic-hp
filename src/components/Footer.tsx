import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#54585f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Logo and Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-shippori font-bold mb-6">
              BIJOU CLINIC
            </h3>
            <div className="space-y-2 text-[#dacacf] font-shippori">
              <p>〒104-0061</p>
              <p>東京都中央区銀座4丁目6-18 ギンザアクトビル9階</p>
              <p className="mt-4">
                TEL: <a href="tel:03-5915-4888" className="text-[#caa9af] hover:text-white transition-colors">03-5915-4888</a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-shippori font-medium mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link href="#home" className="block text-[#dacacf] hover:text-white transition-colors font-shippori">
                Home
              </Link>
              <Link href="#about" className="block text-[#dacacf] hover:text-white transition-colors font-shippori">
                About
              </Link>
              <Link href="#doctor" className="block text-[#dacacf] hover:text-white transition-colors font-shippori">
                Doctor
              </Link>
              <Link href="#menu" className="block text-[#dacacf] hover:text-white transition-colors font-shippori">
                Menu・PRICE
              </Link>
              <Link href="#access" className="block text-[#dacacf] hover:text-white transition-colors font-shippori">
                Access
              </Link>
            </div>
          </div>

          {/* Reservation */}
          <div>
            <h4 className="text-lg font-shippori font-medium mb-4">Reservation</h4>
            <Button
              className="bg-[#caa9af] hover:bg-[#c2ac94] text-white font-shippori px-6 py-2 rounded-full transition-colors w-full mb-4"
            >
              ご予約はこちら
            </Button>
            <p className="text-[#dacacf] font-shippori text-sm">
              診療時間: 9:00〜18:00
              <br />
              年中無休
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#8a6d62] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#dacacf] font-shippori text-sm">
              © 2025 BIJOU CLINIC All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-[#dacacf] hover:text-white transition-colors font-shippori text-sm">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-[#dacacf] hover:text-white transition-colors font-shippori text-sm">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
