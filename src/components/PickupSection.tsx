"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import PickupModal from "./PickupModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ピックアップアイテムのデータ
const pickupItems = [
  {
    id: "babylip",
    title: "ベビーリップ",
    thumbnail: "/images/pickup/babylip01.jpg",
    images: [
      "/images/pickup/babylip02.jpg",
      "/images/pickup/babylip03.jpg"
    ],
    description: "唇のエイジングケア"
  },
  {
    id: "exosome",
    title: "エクソソーム",
    thumbnail: "/images/pickup/exosome01.jpg",
    images: [
      "/images/pickup/exosome02.jpg",
      "/images/pickup/exosome03.jpg",
      "/images/pickup/exosome04.jpg",
      "/images/pickup/exosome05.jpg",
      "/images/pickup/exosome06.jpg"
    ],
    description: "最先端の再生医療"
  },
  {
    id: "subscription",
    title: "サブスクリプション",
    thumbnail: "/images/pickup/subscription01.jpg",
    images: [
      "/images/pickup/subscription02.jpg",
      "/images/pickup/subscription03.jpg"
    ],
    description: "お得な定額プラン"
  }
];

export default function PickupSection() {
  const [selectedItem, setSelectedItem] = useState<typeof pickupItems[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: typeof pickupItems[0]) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-shippori font-light text-[#54585f] mb-2">
            Pick Up
          </h2>
          <p className="text-sm md:text-base text-[#8b4513]/70">ピックアップ</p>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 30,
                centeredSlides: true,
              },
            }}
            className="pickup-swiper"
          >
            {pickupItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="cursor-pointer group"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Swiper Styles */}
        <style jsx global>{`
          .pickup-swiper {
            padding: 20px 0 50px;
          }
          
          .pickup-swiper .swiper-button-next,
          .pickup-swiper .swiper-button-prev {
            color: #8b4513;
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          
          .pickup-swiper .swiper-button-next:after,
          .pickup-swiper .swiper-button-prev:after {
            font-size: 18px;
            font-weight: bold;
          }
          
          .pickup-swiper .swiper-pagination-bullet {
            background: #dacacf;
            opacity: 0.5;
          }
          
          .pickup-swiper .swiper-pagination-bullet-active {
            background: #8b4513;
            opacity: 1;
          }

          @media (max-width: 640px) {
            .pickup-swiper .swiper-button-next,
            .pickup-swiper .swiper-button-prev {
              width: 35px;
              height: 35px;
            }
            
            .pickup-swiper .swiper-button-next:after,
            .pickup-swiper .swiper-button-prev:after {
              font-size: 14px;
            }
          }
        `}</style>
      </div>

      {/* Modal */}
      {selectedItem && (
        <PickupModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}