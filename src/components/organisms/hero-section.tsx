'use client'

import images from "@/app/assets/data-image";
import Image from "next/image";
import { memo } from "react";

import dynamic from "next/dynamic";


const HeroSection = () => {
  const TravelSearchTabs = dynamic(() => import('../molecules/search-card'), {
  ssr: false,
});

 
  return (
    <div className="relative bg-black dark:bg-zinc-900 text-white ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        width={640}
        height={360}
      >
        <source
           src="/video/video_hero.mp4"  // <- akses dari public folder
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="hero w-full z-10 relative flex flex-col items-center text-center">
        <div className="flex flex-col items-center px-8 py-12">
          <div className="text-xs text-black cursor-pointer px-4 py-2 bg-blue-500 rounded-full max-w-max flex items-center space-x-2">
            <Image
              src={images.earth}
              alt="earth"
            
              className="w-6 h-auto"
              loading="eager"
            />
            <h1 className="font-semibold text-white ">Explore the World</h1>
          </div>

          <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold mt-6">
            Your Gateway to Extraordinary Adventures
          </h1>
          

          <p className="lg:max-w-[520px] mt-4 text-sm text-white/80 dark:text-white/60">
            Pack your bags and let Travila redefine your travel experience. Where
            every journey is a story waiting to be told.
          </p>
        </div>

        {/* Desktop Card */}
        <div
         
          className="w-full max-w-5xl lg:block md:block hidden absolute z-30 -bottom-20"
        >
            <TravelSearchTabs/>
        </div>

        {/* Mobile Card */}
        <div
        
          className="mt-10 w-full max-w-5xl block md:hidden lg:hidden z-30"
        >
           <TravelSearchTabs/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
