"use client";

const Aboutus = () => {
  return (
<div className="w-full">

  {/* HERO SECTION */}
 <section
  className="w-full h-[60vh] md:h-[70vh] bg-[#efe0d2] flex items-center justify-center"
 
>

    <div className=" w-full h-full flex items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center">
        About Sri Mangala Enterprises
      </h1>
    </div>
  </section>

  {/* MAIN CONTENT */}
  <section className="w-full py-20 px-6 md:px-20 bg-dark dark:bg-darkmode">
    <div className="max-w-7xl mx-auto">

      {/* INTRO SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Delivering Quality Packaging, Nationwide
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
           Sri Mangala Enterprises is a leading printing and packaging supplier in India, offering an extensive range of products for diverse industries. Our mission is to provide reliable, durable, and cost-efficient packaging solutions with a strong focus on customer satisfaction.
          </p><br />
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            With a dedicated team, advanced sourcing methods, and seamless logistics, we ensure every client receives premium-quality materials at the best market prices.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src="/images/about/about1.png"
            className="rounded-xl shadow-lg w-full object-cover"
            alt="Printing Service"
          />
        </div>

      </div>

  
{/* WHAT WE OFFER */}
<div className="mt-20">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
    What We Offer
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* CARD 1 */}
    <div className="bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <img src="/images/printico.png" className="rounded-lg mb-4 mx-auto" />
      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
        Pan-India Supply
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Seamless delivery across all major cities in India.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <img src="/images/printico.png" className="rounded-lg mb-4 mx-auto" />
      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
        Bulk Wholesale Pricing
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Cost-effective pricing for bulk orders.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <img src="/images/printico.png" className="rounded-lg mb-4 mx-auto" />
      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
        Premium Packaging Materials
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        High-quality, eco-friendly packaging solutions.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <img src="/images/printico.png" className="rounded-lg mb-4 mx-auto" />
      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
        Fast & Reliable Dispatch
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Quick processing and dependable delivery.
      </p>
    </div>

    {/* CARD 5 */}
    <div className="bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <img src="/images/printico.png" className="rounded-lg mb-4 mx-auto" />
      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
        Retail & Commercial Orders
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Serving both individual and enterprise clients.
      </p>
    </div>

    {/* CARD 6 */}
    <div className="bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
      <img src="/images/printico.png" className="rounded-lg mb-4 mx-auto" />
      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
        Customized Printing & Packaging
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Tailor-made solutions for your brand.
      </p>
    </div>

  </div>
</div>


      {/* CONTACT / ADDRESS */}
     <div className="mt-24 bg-dark dark:bg-dark p-10 rounded-2xl shadow-lg">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
    Registered Address
  </h2>

  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
    <strong>Sri Mangala Enterprises</strong> <br />
    Tamil Nadu, India
  </p>

  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
    Contact Details
  </h3>

  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
    📞 Mobile: <strong>98403 41124</strong> <br />
    📧 Email: <strong>sales@srimangala.com</strong>
  </p>

  <p className="mt-4 text-sm text-gray-600 dark:text-darktext">
    🕒 Monday to Saturday, 9:00 AM – 7:00 PM
  </p>
</div>


    </div>
  </section>
</div>


  );
};

export default Aboutus;
