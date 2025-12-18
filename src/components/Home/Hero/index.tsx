"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const heroImages = [
  "/images/hero/hero1.jpeg",
  "/images/hero/hero2.jpeg",
  "/images/hero/hero3.jpeg",
   "/images/hero/hero4.jpeg",
  "/images/hero/hero5.jpeg",
  "/images/hero/hero6.jpeg",
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

  <div className="absolute inset-0 z-0">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="w-full h-full z-0"
    >
      {heroImages.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-screen">
            <Image
              src={img}
              alt={`Hero ${index}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />
  </div>

  {/* Content */}
  <div className="relative z-30 flex items-center justify-center h-full text-center px-4">
    <div className="max-w-4xl">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white leading-tight">
        Sri Mangala Enterprises – India’s Trusted Printing & Packaging Supplier
      </h1>
      <p className="mt-4 text-white/90 text-base md:text-lg">
        Custom printing & packaging solutions that elevate your brand
      </p>
    </div>
  </div>

</section>

  );
};

export default Hero;
