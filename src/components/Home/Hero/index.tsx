"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
   <section className="relative w-full bg-[#efe0d2] mt-16 h-screen overflow-hidden flex items-center justify-center">
  
  {/* ===== HEADING ===== */}
  <div className="text-center px-4">
    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
      Sri Mangala Enterprises – India’s Trusted Printing & Packaging Supplier
    </h1>
    <p className="mt-3 text-gray-700 text-base md:text-lg">
      Custom printing & packaging solutions that elevate your brand
    </p>
  </div>

</section>

  );
};

export default Hero;
