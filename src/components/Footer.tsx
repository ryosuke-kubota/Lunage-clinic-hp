import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#54585f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Logo and Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-shippori font-bold mb-6">
              LUNAGE CLINIC
            </h3>
            <div className="space-y-2 text-[#dacacf] font-shippori">
              <p>〒150-0001</p>
              <p>東京都渋谷区神宮前3-2-17 上田ビル202</p>
              <p className="mt-4">
                TEL: <a href="tel:03-4400-9519" className="text-[#DDCDB9] hover:text-white transition-colors">03-4400-9519</a>
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
                Menu
              </Link>
              <Link href="#access" className="block text-[#dacacf] hover:text-white transition-colors font-shippori">
                Access
              </Link>
            </div>
          </div>

          {/* Reservation */}
          <div>
            <h4 className="text-lg font-shippori font-medium mb-4">SNS</h4>
            <div className="flex">
              <Link
                href="https://lin.ee/teAI9dY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-shippori block w-fit mb-4"
              >
                <Image
                  src="/icons/line.svg"
                  alt="LINE"
                  width={24}
                  height={24}
                  className="w-10 h-10 invert"
                />
              </Link>
              <Link
                href="https://www.instagram.com/lunage_clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-shippori block w-fit mb-4"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                  className="w-10 h-10 invert"
                />
              </Link>
            </div>
            <p className="text-[#dacacf] font-shippori text-sm">
              診療時間: 11:00〜21:00
              <br />
              年中無休
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#8a6d62] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#dacacf] font-shippori text-sm">
              © 2025 LUNAGE CLINIC All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <Link href="#" className="text-[#dacacf] hover:text-white transition-colors font-shippori text-sm">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-[#dacacf] hover:text-white transition-colors font-shippori text-sm">
                利用規約
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
