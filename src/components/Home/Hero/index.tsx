"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#efe0d2] mt-16   overflow-hidden">

      {/* ===== HEADING ===== */}
      <div className="text-center dark: text-black mb-10 px-4">
        <h1 className=" text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Sri Mangala Enterprises – India’s Trusted Printing & Packaging Supplier
        </h1>
        <p className="mt-3 text-gray-700 text-base md:text-lg">
          Custom printing & packaging solutions that elevate your brand
        </p>
      </div>

      {/* ===== SLIDER ===== */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="max-w-6xl mx-auto"
      >

        {/* ===== SLIDE 1 ===== */}
        <SwiperSlide>
          <div className="flex justify-center px-4">
            <div className="w-full md:w-4/5 lg:w-3/4 bg-white rounded-3xl shadow-lg p-6">
              <img
                src="/images/banner/pack11.jpg"
                alt="Printing Services"
                className="w-full h-[280px] md:h-[320px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* ===== SLIDE 2 ===== */}
        <SwiperSlide>
          <div className="flex justify-center px-4">
            <div className="w-full md:w-4/5 lg:w-3/4 bg-white rounded-3xl shadow-lg p-6">
              <img
                src="/images/banner/pack22.jpg"
                alt="Packaging Solutions"
                className="w-full h-[280px] md:h-[320px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </SwiperSlide>

 <SwiperSlide>
          <div className="flex justify-center px-4">
            <div className="w-full md:w-4/5 lg:w-3/4 bg-white rounded-3xl shadow-lg p-6">
              <img
                src="/images/banner/pack33.jpg"
                alt="Packaging Solutions"
                className="w-full h-[280px] md:h-[320px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </SwiperSlide>

 <SwiperSlide>
          <div className="flex justify-center px-4">
            <div className="w-full md:w-4/5 lg:w-3/4 bg-white rounded-3xl shadow-lg p-6">
              <img
                src="/images/banner/pack44.avif"
                alt="Packaging Solutions"
                className="w-full h-[280px] md:h-[320px] object-contain rounded-2xl"
              />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Hero;
