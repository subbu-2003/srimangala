"use client";

import Image from "next/image";

const Services = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white mt-16 dark:bg-white">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-secondary dark:text-black mb-8">
          Our Professional Packaging Services
        </h1>

        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 dark:text-darktext mb-14">
          We offer complete solutions for all your{" "}
          <span className="font-semibold">printing & packaging needs</span>,
          delivering quality, reliability, and cost-effective solutions for businesses of all sizes.
        </p>

      {/* SERVICES GRID */}
<div className="grid md:grid-cols-2 gap-12">

  {/* 1. WHOLESALE PACKAGING */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
    <Image
      src="/images/services/ser1.jpg"
      alt="Wholesale Packaging Supply"
      width={600}
      height={350}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
        1. Wholesale Packaging Supply
      </h2>

      <p className="text-gray-700 dark:text-darktext mb-4">
        We specialize in bulk packaging material supply for manufacturers, distributors,
        wholesalers, e-commerce sellers, and industrial clients.
      </p>

      <ul className="list-disc ml-6 text-gray-700 dark:text-darktext space-y-1">
        <li>Consistent quality across large volumes</li>
        <li>Cost-effective pricing for bulk orders</li>
        <li>Reliable supply chain support</li>
        <li>Packaging suitable for storage, transport & distribution</li>
      </ul>

      <p className="mt-4 text-sm font-semibold text-gray-600">
        Industries Served: Manufacturing | FMCG | Textiles | Food Processing | Electronics | Logistics | E-commerce
      </p>
    </div>
  </div>

  {/* 2. RETAIL PACKAGING */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
    <Image
      src="/images/services/ser2.jpg"
      alt="Retail Packaging Solutions"
      width={600}
      height={350}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
        2. Retail Packaging Solutions
      </h2>

      <p className="text-gray-700 dark:text-darktext mb-4">
        Our retail packaging services are designed for small businesses, retailers,
        home-based entrepreneurs, and start-ups who require flexibility without
        compromising on quality.
      </p>

      <ul className="list-disc ml-6 text-gray-700 dark:text-darktext space-y-1">
        <li>Small and medium quantity packaging supply</li>
        <li>Ready-to-use packaging materials</li>
        <li>Branding-friendly packaging options</li>
        <li>Affordable solutions for growing businesses</li>
      </ul>

      <p className="mt-4 text-sm text-gray-600">
        Whether you run a retail store or an online business, we help you present your products professionally.
      </p>
    </div>
  </div>

  {/* 3. CUSTOM PRINTING */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
    <Image
      src="/images/services/ser3.jpg"
      alt="Custom Printing Services"
      width={600}
      height={350}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
        3. Custom Printing Services
      </h2>

      <p className="text-gray-700 dark:text-darktext mb-4">
        We provide custom printing and branding services that enhance product visibility
        and strengthen brand identity.
      </p>

      <ul className="list-disc ml-6 text-gray-700 dark:text-darktext space-y-1">
        <li>Custom-printed boxes (CMYK standard printing)</li>
        <li>Product labels & stickers</li>
        <li>Branded packaging covers & pouches</li>
        <li>Custom sizes, designs & finishes</li>
      </ul>

      <p className="mt-4 text-sm text-gray-600">
        All printing undergoes strict quality checks to ensure sharp graphics and accurate colors.
      </p>
    </div>
  </div>

  {/* 4. CORPORATE & INDUSTRIAL */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
    <Image
      src="/images/services/ser4.jpg"
      alt="Corporate & Industrial Packaging Supply"
      width={600}
      height={350}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
        4. Corporate & Industrial Packaging Supply
      </h2>

      <p className="text-gray-700 dark:text-darktext mb-4">
        For corporates, factories, and large-scale production units, we offer
        long-term, contract-based packaging supply solutions.
      </p>

      <ul className="list-disc ml-6 text-gray-700 dark:text-darktext space-y-1">
        <li>High-volume supply capacity</li>
        <li>Industrial-grade packaging materials</li>
        <li>Consistent specifications across repeated orders</li>
        <li>Reliable dispatch schedules</li>
        <li>Dedicated account support</li>
      </ul>

      <p className="mt-4 text-sm text-gray-600">
        We support logistics companies, exporters, warehouses, and manufacturing plants.
      </p>
    </div>
  </div>

  {/* 5. ECO FRIENDLY */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition md:col-span-2">
    <Image
      src="/images/services/se5.jpg"
      alt="Eco-Friendly Packaging"
      width={1200}
      height={400}
      className="w-full h-56 object-cover"
    />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
        5. Eco-Friendly Packaging Options
      </h2>

      <p className="text-gray-700 dark:text-darktext mb-4">
        As sustainability becomes a priority, we offer eco-friendly and recyclable
        packaging materials to help businesses reduce their environmental footprint.
      </p>

      <ul className="list-disc ml-6 text-gray-700 dark:text-darktext space-y-1">
        <li>Kraft paper packaging</li>
        <li>Paper bags & recyclable boxes</li>
        <li>Reduced plastic usage options</li>
        <li>Environment-conscious material sourcing</li>
      </ul>

      <p className="mt-4 text-sm text-gray-600">
        Eco-friendly packaging enhances brand reputation while supporting environmental responsibility.
      </p>
    </div>
  </div>

</div>


      {/* PRODUCTS SECTION */}
<div className="mt-20">
  <h2 className="text-3xl font-bold text-center text-secondary dark:text-black mb-4">
    Our Complete Product Range
  </h2>

  <p className="text-center max-w-3xl mx-auto text-gray-700 dark:text-darktext mb-12">
    Sri Mangala Enterprises supplies a comprehensive range of printing and packaging
    materials suitable for multiple industries and applications. All products are
    available in standard as well as customized formats.
  </p>

  {/* PRIMARY PACKAGING */}
  <h3 className="text-xl font-semibold text-secondary dark:text-black mb-4">
    Primary Packaging Products
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {[
      { name: "Corrugated Boxes", desc: "Ideal for shipping, logistics & heavy-duty packaging." },
      { name: "Duplex Boxes", desc: "Widely used for retail & commercial packaging." },
      { name: "Mono Cartons", desc: "Suitable for FMCG, cosmetics, pharmaceuticals & consumer goods." },
      { name: "Kraft Paper Boxes", desc: "Eco-friendly packaging option for sustainable brands." },
      { name: "Printed Packaging Boxes", desc: "Custom-branded boxes with professional printing quality." },
      { name: "Shipping & Parcel Boxes", desc: "Designed for safe long-distance transport." },
    ].map((item, index) => (
      <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* FLEXIBLE & PROTECTIVE */}
  <h3 className="text-xl font-semibold text-secondary dark:text-black mb-4">
    Flexible & Protective Packaging
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {[
      { name: "LD / PP / HM Covers", desc: "Durable covers for retail, industrial & e-commerce use." },
      { name: "Bubble Wrap Rolls", desc: "Protection for fragile and sensitive products." },
      { name: "Stretch / Cling Film", desc: "Secures goods during storage and transportation." },
      { name: "Shrink Wrap Films", desc: "Ideal for bundling and tamper-proof packaging." },
    ].map((item, index) => (
      <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* TAPES & ACCESSORIES */}
  <h3 className="text-xl font-semibold text-secondary dark:text-black mb-4">
    Tapes & Packaging Accessories
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {[
      { name: "BOPP & Packaging Tapes", desc: "Strong sealing tapes for cartons and parcels." },
      { name: "Carton Sealing Tapes", desc: "High-adhesion tapes for industrial applications." },
    ].map((item, index) => (
      <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* BRANDING & PAPER */}
  <h3 className="text-xl font-semibold text-secondary dark:text-black mb-4">
    Branding & Paper Products
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    {[
      { name: "Paper Bags & Carry Bags", desc: "Retail-friendly and eco-conscious packaging." },
      { name: "Labels & Stickers", desc: "Branding, barcode & product information labels." },
      { name: "Envelope Covers", desc: "Business and commercial mailing solutions." },
    ].map((item, index) => (
      <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* INDUSTRIAL */}
  <h3 className="text-xl font-semibold text-secondary dark:text-black mb-4">
    Industrial Packaging Materials
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { name: "Heavy-Duty Industrial Packaging", desc: "Packaging materials for factories & warehouses." },
      { name: "Custom Packaging Rolls", desc: "Made-to-order rolls based on client specifications." },
      { name: "Export-Grade Packaging Solutions", desc: "Durable packaging for international shipments." },
    ].map((item, index) => (
      <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>

  <p className="text-center mt-10 text-lg font-semibold text-secondary dark:text-black">
    Additional products are available based on customer-specific requirements.
  </p>
</div>

       {/* WHY CHOOSE US */}
<div className="mt-20">
  <h2 className="text-3xl font-bold text-center text-secondary dark:text-black mb-4">
    Why Customers Trust Sri Mangala Enterprises
  </h2>

  <p className="text-center max-w-3xl mx-auto text-gray-700 dark:text-darktext mb-10">
    Sri Mangala Enterprises is built on trust, quality, and long-term business
    relationships. Our customers choose us because we consistently deliver value
    beyond just packaging.
  </p>

  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 dark:text-darktext text-lg">
    <div className="bg-white p-5 rounded-xl shadow">
      <h4 className="font-semibold mb-2">✔ Pan-India Delivery Network</h4>
      <p className="text-sm">
        We supply packaging materials across Tamil Nadu and all major cities in
        India with reliable logistics support.
      </p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h4 className="font-semibold mb-2">✔ High-Quality Packaging Materials</h4>
      <p className="text-sm">
        All products meet strict quality standards to ensure durability,
        consistency, and performance.
      </p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h4 className="font-semibold mb-2">✔ Bulk Orders Accepted</h4>
      <p className="text-sm">
        We specialize in large-volume orders while maintaining consistent
        quality and delivery timelines.
      </p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h4 className="font-semibold mb-2">✔ Competitive Wholesale Pricing</h4>
      <p className="text-sm">
        Our pricing structure is designed to support business profitability,
        especially for wholesalers and manufacturers.
      </p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h4 className="font-semibold mb-2">✔ Fast Dispatch & Reliable Service</h4>
      <p className="text-sm">
        Efficient order processing and timely dispatch help keep your operations
        running smoothly.
      </p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h4 className="font-semibold mb-2">✔ Custom Size & Printing Options</h4>
      <p className="text-sm">
        Tailor-made packaging solutions with professional CMYK printing standards.
      </p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow md:col-span-2">
      <h4 className="font-semibold mb-2">✔ Strong Customer Support</h4>
      <p className="text-sm">
        Our team offers responsive communication, technical guidance, and
        dependable post-order support.
      </p>
    </div>
  </div>

  <div className="mt-10 text-center max-w-3xl mx-auto">
    <h3 className="text-xl font-semibold text-secondary dark:text-black mb-2">
      Our Commitment
    </h3>
    <p className="text-gray-700 dark:text-darktext">
      We are committed to delivering consistent quality, transparent pricing,
      dependable service, and long-term value to every customer we serve.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Services;
