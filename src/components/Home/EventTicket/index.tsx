"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const EventTicket = () => {

  const features = [
{
title: "Customization",
desc: "Personalized packaging solutions tailored to your preferences",
icon: "/images/whychoose/1ico.png",
},
{
title: "Sustainability",
desc: "Packaging with a conscience",
icon: "/images/whychoose/2ico.png",
},
{
title: "Low MOQ",
desc: "Flexible options with affordable prices and low minimums",
icon: "/images/whychoose/3ico.png", 
},
{
title: "Expertise",
desc: "From Startups to Established Business – supporting Every Growth Journey",
icon: "/images/whychoose/4ico.png",
},
];
    return (
       <section className="bg-white py-20">
<div>
  {/* Heading */}
<h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
Why Choose <span className="font-bold">Us</span>
</h2>


{/* Description */}
<p className="max-w-4xl mx-auto text-center text-gray-600 text-base mb-16 leading-relaxed px-6">
At PRINTO, we offer a wide range of packaging supplies to suit diverse business needs.
Our commitment to versatility ensures tailored options, reflecting your brand's essence.
Choose us for packaging that speaks volumes about our dedication to quality and innovation.
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



{/* Light background box */}
<div className="bg-yellow-100 py-16">
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-6">
{features.map((item, index) => (
<div key={index} className="text-center">
{/* Icon */}
<div className="flex justify-center mb-6">
<Image
src={item.icon}
alt={item.title}
width={90}
height={90}
className="object-contain"
/>
</div>


{/* Title */}
<h3 className="text-xl font-semibold text-gray-800 mb-2">
{item.title}
</h3>


{/* Description */}
<p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
{item.desc}
</p>
</div>
))}
</div>
</div>
{/* ===== VIDEO SECTION ===== */}
<div className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">

    {/* Video Heading */}
    <div className="text-center mb-12">
      <h3 className="text-3xl font-semibold text-gray-800 mb-4">
        Watch Our Packaging in Action
      </h3>
      <p className="text-gray-600 max-w-3xl mx-auto">
        Experience how Sri Mangala Printing & Packaging delivers precision,
        quality materials, and scalable bulk packaging solutions for businesses.
      </p>
    </div>

    {/* Two Videos Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT VIDEO */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/EO2-9I3g2KE?rel=0&modestbranding=1"
          title="Packaging Process Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* RIGHT VIDEO */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/PyodpXv9Y2s?rel=0&modestbranding=1"
          title="Bulk Packaging Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>

  </div>
</div>

</section>
);
};
export default EventTicket;
