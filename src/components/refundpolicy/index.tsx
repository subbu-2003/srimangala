"use client";

import Image from "next/image";

const Refundpolicy = () => {
  return (
   <section className="w-full bg-white py-20 px-6 mt-20 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Product Catalog
      </h1>

      <p className="text-gray-700 mb-2 leading-relaxed font-semibold">
        SRI MANGALA ENTERPRISES
      </p>
      <p className="text-gray-700 mb-4">
        Printing & Packaging Supplier – Wholesale & Retail
      </p>

      <p className="text-gray-600 mb-6">
        📞 98403 41124 &nbsp;|&nbsp; 📧 sales@srimangala.com <br />
        📍 Chennai &nbsp;|&nbsp; Supplying Across India
      </p>

      <div className="space-y-6 text-gray-700">

        {/* Corrugated Packaging */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Corrugated Packaging
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Corrugated Boxes</li>
            <li>Duplex Boxes</li>
            <li>Mono Cartons</li>
            <li>Kraft Boxes</li>
            <li>Die-Cut Boxes</li>
            <li>Heavy Duty Shipping Boxes</li>
          </ul>
        </div>

        {/* Flexible Packaging */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Flexible Packaging
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>LD, PP, HM Packaging Covers</li>
            <li>Zip Lock Bags</li>
            <li>Shrink Wrap Films</li>
            <li>Stretch Films</li>
            <li>Bubble Wrap Rolls</li>
          </ul>
        </div>

        {/* Branding & Printing */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Branding & Printing
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Stickers & Labels</li>
            <li>Custom Printed Boxes</li>
            <li>Product Tags</li>
            <li>Envelope Covers</li>
          </ul>
        </div>

        {/* Tapes & Accessories */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Tapes & Accessories
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>BOPP Packing Tapes</li>
            <li>Carton Sealing Tapes</li>
            <li>Printed Tapes</li>
            <li>Strapping Rolls</li>
          </ul>
        </div>

        {/* Eco-Friendly Products */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Eco-Friendly Products
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Paper Bags</li>
            <li>Recyclable Packaging Options</li>
          </ul>
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full flex justify-center lg:justify-end">
      <div className="relative w-full max-w-md h-[420px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/product catlog.webp" // replace if needed
          alt="Product Catalog"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>

  </div>
</section>

  );
};

export default Refundpolicy;
