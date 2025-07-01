'use client';

import images from "@/app/assets/data-image";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const PromoSection = () => {
  const dataPromo = [
    { id: 1, image: images.promoSchool },
    { id: 2, image: images.promoSchool },
  ];

  const dataPromo2 = [
    { id: 1, image: images.hotelPromo },
    { id: 2, image: images.hotelPromo },
  ];

  return (
    <div className="lg:mt-12 pt-12 lg:pb-0 pb-6 lg:px-8 px-2 flex items-center justify-between gap-6 overflow-x-auto lg:overflow-x-hidden scrollPromo">
      {/* ✅ Perbaiki: Gunakan div relatif dan Image dengan fill prop */}
      <div className="relative w-[700px] h-[200px] bg-amber-100 rounded-lg lg:block hidden cursor-pointer group">
       <Image
          className="rounded-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
          src={images.banner}
          alt="Promo School"
          fill
          sizes="(min-width: 1024px) 700px, 100vw"
          style={{ objectFit: "cover" }}
           loading="lazy"
        />
      </div>

      <div className="w-fit">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          style={{ width: "300px", height: "200px" }}
        >
          {dataPromo.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-[300px] h-[200px]">
                <Image
                  className="rounded-lg"
                  src={item.image}
                  alt={`Promo ${item.id}`}
                   sizes="300px"
                  fill
                  style={{ objectFit: "cover" }}
                   loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Swiper 2 */}
      <div className="w-fit">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          style={{ width: "300px", height: "200px" }}
        >
          {dataPromo2.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-[300px] h-[200px]">
                <Image
                  className="rounded-lg"
                  src={item.image}
                  alt={`Promo ${item.id}`}
                  fill
                  sizes="300px"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PromoSection;
