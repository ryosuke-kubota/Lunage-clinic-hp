"use client";
import { motion } from "framer-motion";

export default function PaymentSection() {
  const paymentMethods = [
    "クレジットカード",
    "PayPay", 
    "QRコード決済",
    "交通IC系",
    "メディカルローン"
  ];

  return (
    <section className="py-8 bg-[#faf3ef]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold text-[#8b5d3c] mb-4">お支払い方法</h3>
            <div className="flex flex-wrap flex-col md:flex-row gap-3">
              {paymentMethods.map((method, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-[#faf3ef] rounded-full text-xs md:text-sm text-center text-[#8b5d3c]"
                >
                  {method}
                </motion.span>
              ))}
            </div>
            {/* <p className="text-xs text-gray-600 mt-4">
              ※ 詳細については、ご来院時にスタッフまでお尋ねください
            </p> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}