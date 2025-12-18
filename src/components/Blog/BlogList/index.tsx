"use client";

import BlogCard from "@/components/SharedComponent/Blog/blogCard";
import React from "react";

const BlogList: React.FC = () => {

  // ✅ HIGH-QUALITY SEO BLOG CONTENT
 const posts = [
  {
    title: "Printing & Packaging Solutions in India: A Complete Business Guide",
    date: "2025-03-01",
    excerpt:
      "Printing and packaging are strategic investments for modern businesses. This guide explains printing methods, packaging materials, CMYK standards, and how to choose the right packaging supplier in India.",
    coverImage: "/images/blog/1.jpg",
    keywords:
      "printing and packaging solutions India, packaging supplier Chennai, wholesale packaging materials, custom packaging India",
  },
  {
    title: "CMYK Printing in Packaging: Everything You Need to Know",
    date: "2025-03-05",
    excerpt:
      "Color accuracy is critical in professional printing. Learn how CMYK printing works, why it is used instead of RGB, and how it ensures consistent, high-quality packaging output.",
    coverImage: "/images/blog/2.jpg",
    keywords:
      "CMYK printing India, packaging printing Chennai, professional printing services, color accurate packaging",
  },
  {
    title: "How to Select the Right Packaging Materials for Your Products",
    date: "2025-03-10",
    excerpt:
      "Choosing the right packaging material reduces damage, cost, and returns. This guide explains packaging selection based on product weight, fragility, transport, and branding needs.",
    coverImage: "/images/blog/3.jpg",
    keywords:
      "packaging materials India, corrugated box supplier, packaging solutions Chennai, wholesale packaging supplier",
  },
  {
    title: "Bulk Packaging Purchase: A Smart Strategy for Business Growth",
    date: "2025-03-14",
    excerpt:
      "Bulk packaging purchases help businesses reduce costs, maintain quality consistency, and scale operations efficiently. Learn why wholesale packaging is a smart growth strategy.",
    coverImage: "/images/blog/4.jpg",
    keywords:
      "bulk packaging materials India, wholesale packaging supplier, packaging distributor Chennai",
  },
  {
    title: "Why Choosing the Right Printing & Packaging Partner Matters",
    date: "2025-03-18",
    excerpt:
      "Your packaging supplier is more than a vendor. Discover why experience, customization, delivery reliability, and transparent pricing matter when choosing a packaging partner.",
    coverImage: "/images/blog/5.jpg",
    keywords:
      "printing and packaging partner India, packaging supplier Chennai, professional packaging services",
  },
  {
    title: "Bulk Printing & Packaging Supplier in Madurai – Wholesale Solutions",
    date: "2025-03-22",
    excerpt:
      "Madurai businesses rely on bulk packaging for cost efficiency and branding. Learn how wholesale printing and packaging supports traders, manufacturers, and e-commerce sellers.",
    coverImage: "/images/blog/6.jpg",
    keywords:
      "printing and packaging supplier Madurai, bulk packaging Madurai, wholesale packaging materials Madurai",
  },
  {
    title: "Wholesale Printing & Packaging Supplier in Coimbatore for Industries",
    date: "2025-03-25",
    excerpt:
      "Coimbatore’s industrial and export businesses need durable, export-grade packaging. This guide explains bulk packaging, CMYK printing, and industrial supply benefits.",
    coverImage: "/images/blog/7.jpg",
    keywords:
      "printing and packaging supplier Coimbatore, bulk packaging Coimbatore, wholesale packaging supplier Tamil Nadu",
  },
  {
    title: "Bulk Printing & Packaging Solutions in Chennai for Retail & Corporates",
    date: "2025-03-28",
    excerpt:
      "Chennai businesses demand high-volume, premium packaging. Learn how bulk printing and packaging solutions support retail, logistics, and corporate brands in Chennai.",
    coverImage: "/images/blog/1.jpg",
    keywords:
      "printing and packaging supplier Chennai, bulk packaging Chennai, wholesale printing services Chennai",
  },
  {
    title: "Bulk Packaging & Printing Supplier in Karur for Textile Exports",
    date: "2025-04-01",
    excerpt:
      "Karur’s textile exporters require export-grade packaging with accurate printing. Discover packaging solutions designed for international textile and home furnishing markets.",
    coverImage: "/images/blog/2.jpg",
    keywords:
      "printing and packaging supplier Karur, textile packaging Karur, bulk packaging Karur Tamil Nadu",
  },
];


  return (
    <section
  className="mt-24 pt-12 pb-20 bg-gray-50 dark:bg-white"
  id="blog"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-secondary dark:text-black mb-4">
        Industry Insights & Packaging Guides
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-darktext">
        Expert articles on printing standards, packaging materials, CMYK
        processes, and supplier selection — written for businesses across India.
      </p>
    </div>

    {/* BLOG GRID */}
    <div className="grid grid-cols-12 gap-8">
      {posts.map((blog, i) => (
        <div
          key={i}
          className="col-span-12 md:col-span-6 lg:col-span-4"
          data-aos="fade-up"
          data-aos-delay={i * 150}
          data-aos-duration="900"
        >
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>

    {/* GENERAL SEO FOOTER NOTE */}
    <div className="mt-16 text-center max-w-4xl mx-auto">
      <p className="text-gray-700 dark:text-darktext text-lg">
        Sri Mangala Printing & Packaging shares industry knowledge to help
        businesses make informed decisions about packaging quality, cost
        efficiency, and brand consistency across India.
      </p>
    </div>

    {/* LOCATION-BASED SEO CONTENT */}
    <div className="mt-20 max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
      <h3 className="text-2xl font-bold text-secondary dark:text-black mb-4 text-center">
        Wholesale Printing & Packaging Supplier in Dindigul and Tirunelveli
      </h3>

      <p className="text-gray-700 dark:text-darktext mb-6 text-lg text-center">
        Dindigul and Tirunelveli are fast-growing commercial regions with a strong
        presence in food processing, trading, retail, agriculture-based
        industries, and small manufacturing units. Businesses in these regions
        require reliable, bulk packaging solutions to support growth and
        efficiency.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-gray-700 dark:text-darktext">
        <div>
          <h4 className="text-xl font-semibold mb-3">
            Common Packaging Requirements
          </h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Corrugated boxes for transport</li>
            <li>Food-grade packaging materials</li>
            <li>Retail mono cartons</li>
            <li>Labels and stickers for branding</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3">
            Why Bulk Packaging Is Important
          </h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Reduces overall packaging cost</li>
            <li>Ensures continuous material availability</li>
            <li>Improves operational efficiency</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-gray-700 dark:text-darktext text-lg text-center">
        With pan-Tamil Nadu logistics support, <strong>Sri Mangala Printing & Packaging</strong>
        serves bulk orders efficiently in Dindigul, Tirunelveli, and nearby
        districts.
      </p>
    </div>

  </div>
</section>

  );
};

export default BlogList;
