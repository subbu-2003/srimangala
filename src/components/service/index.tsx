"use client";

const Services = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white mt-16 dark:bg-white">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-secondary dark:text-black mb-8">
          Our Professional Packaging Services
        </h1>

        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 dark:text-darktext mb-14">
          We offer complete solutions for all your <span className="font-semibold">printing & packaging needs</span>,
          delivering quality, reliability, and cost-effective solutions for businesses of all sizes.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* 1. WHOLESALE PACKAGING */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
              1. Wholesale Packaging Supply
            </h2>
            <p className="text-gray-700 dark:text-darktext mb-4">
              Bulk packaging materials for manufacturers, distributors, e-commerce sellers, and industries.
            </p>

            <ul className="list-disc ml-6 text-gray-700 dark:text-darktext">
              <li>High-volume packaging supply</li>
              <li>Consistent quality materials</li>
              <li>Ideal for factories & production units</li>
              <li>Best wholesale pricing</li>
            </ul>
          </div>

          {/* 2. RETAIL PACKAGING */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
              2. Retail Packaging Solutions
            </h2>
            <p className="text-gray-700 dark:text-darktext mb-4">
              Flexible order quantities for small businesses, retail shops, home businesses & start-ups.
            </p>

            <ul className="list-disc ml-6 text-gray-700 dark:text-darktext">
              <li>Low minimum order quantity</li>
              <li>Retail-ready packaging</li>
              <li>Cost-effective solutions</li>
              <li>Perfect for new brands</li>
            </ul>
          </div>

          {/* 3. CUSTOM PRINTING */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
              3. Custom Printing Services
            </h2>
            <p className="text-gray-700 dark:text-darktext mb-4">
              Customized boxes, labels, stickers, pouches, and branded packaging tailored to your product.
            </p>

            <ul className="list-disc ml-6 text-gray-700 dark:text-darktext">
              <li>Brand-focused printing</li>
              <li>Custom size & design options</li>
              <li>Logos, labels & product branding</li>
              <li>High-quality print finish</li>
            </ul>
          </div>

          {/* 4. CORPORATE & INDUSTRIAL */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
              4. Corporate & Industrial Supply
            </h2>
            <p className="text-gray-700 dark:text-darktext mb-4">
              Reliable long-term packaging supply for corporates, factories, logistics & production units.
            </p>

            <ul className="list-disc ml-6 text-gray-700 dark:text-darktext">
              <li>Long-term supply contracts</li>
              <li>Bulk & recurring orders</li>
              <li>Reliable dispatch schedules</li>
              <li>Dedicated business support</li>
            </ul>
          </div>

          {/* 5. ECO FRIENDLY */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition md:col-span-2">
            <h2 className="text-2xl font-bold text-secondary dark:text-black mb-3">
              5. Eco-Friendly Packaging Options
            </h2>
            <p className="text-gray-700 dark:text-darktext mb-4">
              Sustainable packaging materials designed to reduce environmental impact.
            </p>

            <ul className="list-disc ml-6 text-gray-700 dark:text-darktext">
              <li>Recyclable & biodegradable materials</li>
              <li>Eco-conscious production</li>
              <li>Ideal for sustainable brands</li>
            </ul>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-secondary dark:text-black mb-10">
            Our Product Range
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 dark:text-darktext">
            {[
              "Corrugated Boxes",
              "Duplex Boxes",
              "Mono Cartons",
              "Kraft Paper Boxes",
              "Printed Packaging Boxes",
              "Shipping & Parcel Boxes",
              "LD / PP / HM Covers",
              "Bubble Wrap Rolls",
              "Stretch / Cling Film",
              "BOPP & Carton Sealing Tapes",
              "Paper Bags & Carry Bags",
              "Labels, Stickers & Envelopes",
              "Shrink Wrap Films",
              "Industrial Packaging Materials",
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow">
                {item}
              </div>
            ))}
          </div>

          <p className="text-center mt-6 text-lg font-semibold text-secondary dark:text-black">
            More products available based on customer requirements.
          </p>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-secondary dark:text-black mb-8">
            Why Choose Us
          </h2>

          <ul className="max-w-3xl mx-auto space-y-3 text-lg text-gray-700 dark:text-darktext">
            <li>✔ Pan-India Delivery</li>
            <li>✔ High-Quality Packaging Materials</li>
            <li>✔ Bulk Orders Accepted</li>
            <li>✔ Competitive Wholesale Rates</li>
            <li>✔ Fast Dispatch & Reliable Service</li>
            <li>✔ Custom Size & Printing Options</li>
            <li>✔ Strong Customer Support</li>
          </ul>

          <p className="text-center mt-6 text-lg font-semibold text-secondary dark:text-black">
            We ensure consistent quality, transparent pricing, and long-term business value.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
