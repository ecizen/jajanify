'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import type { StaticImageData } from "next/image";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type filteredData = {
    id: number;
    name: string;
    location: string;
    price: number;
    image : StaticImageData
    category: string;
}
type TravelData ={
    travel? : filteredData[];
}   
    


const CardCategory: React.FC<TravelData> = ({travel}) => {
  const route =useRouter()

  const handle =() => {
    route.push('/detail-travel')
  }
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      
      breakpoints={{
        1024: {
        slidesPerView: 5,
        },
        768: {
         slidesPerView: 3,
        },
        0: {
         slidesPerView: 1,
    },
  }}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      {travel && travel.map((item: filteredData) => (

          <SwiperSlide key={item.id}>
          <div onClick={handle} className="bg-white rounded-lg shadow  relative flex justify-center  w-full h-[260px]">
            <div className='absolute max-w-[90%] rounded-xl w-full bg-white/30 backdrop-blur-sm  bottom-3 p-2 px-4 flex items-center justify-between'>
                <div>
                    <h3 className="mt-2 text-sm font-semibold line-clamp-1 text-white">{item.name}</h3>
                    <p className='text-sm mt-0 text-gray-300'>{item.location}</p>
                    <p className=" text-blue-700
                     font-bold text-sm mt-2">
                    Rp {item.price.toLocaleString('id-ID')}
                    </p>
                </div>
                <button   className={ `  p-2 flex items-center justify-center  rounded-full bg-[#d1d1cb7c] border`}>
                    <Heart size={18} className= 'text-neutral-800 shadow-lg scale-125 transition-all ease-in-out duration-500 '/>
                </button>
              </div>
            <Image
              src={item.image}
              alt={item.name}
              
              className="rounded-lg object-cover aspect-square"
              />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardCategory;