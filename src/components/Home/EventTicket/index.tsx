import React from "react";
import Link from "next/link";
import Image from "next/image";

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
{/* Heading */}
<h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
Why Choose <span className="font-bold">Printo</span>
</h2>


{/* Description */}
<p className="max-w-4xl mx-auto text-center text-gray-600 text-base mb-16 leading-relaxed px-6">
At PRINTO, we offer a wide range of packaging supplies to suit diverse business needs.
Our commitment to versatility ensures tailored options, reflecting your brand's essence.
Choose us for packaging that speaks volumes about our dedication to quality and innovation.
</p>


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
</section>
);
};
export default EventTicket;
