import React from "react";

const ContactInfo = () => {
  return (
    <section className="dark:bg-white lg:pt-20 pt-16 lg:pb-24 pb-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">

         {/* PAGE HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-16 text-secondary dark:text-black mb-8">
          Our Professional Packaging Services
        </h1>

        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700 dark:text-darktext mb-14">
          We offer complete solutions for all your <span className="font-semibold">printing & packaging needs</span>,
          delivering quality, reliability, and cost-effective solutions for businesses of all sizes.
        </p>


        {/* CONTACT INFO */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">

          {/* ADDRESS */}
          <div className="bg-cyan-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-secondary dark:text-dark mb-3">
              Registered Address
            </h3>
            <p className="text-gray-700 dark:text-darktext">
              Sri Mangala Enterprises <br />
              Tamil Nadu, India
            </p>
          </div>

          {/* CONTACT DETAILS */}
          <div className="bg-cyan-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-secondary dark:text-dark mb-3">
              Contact Details
            </h3>
            <p className="text-gray-700 dark:text-darktext">
              Mobile: <strong> 94459 44479</strong>
            </p>
            <p className="text-gray-700 dark:text-darktext">
              Email: <strong>sales@srimangala.com</strong>
            </p>
            <p className="text-sm text-gray-600 dark:text-darktext mt-2">
              Monday – Saturday, 9:00 AM – 7:00 PM
            </p>
          </div>

          {/* BULK ENQUIRIES */}
          <div className="bg-cyan-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold text-secondary dark:text-dark mb-3">
              Bulk Order Enquiries
            </h3>
            <p className="text-gray-700 dark:text-darktext mb-3">
              Wholesale packaging materials, custom-printed boxes, and industrial supplies.
            </p>
            <p className="text-gray-700 dark:text-darktext">
               Call / WhatsApp: <strong>98403 41124 </strong>
            </p>
            <p className="text-gray-700 dark:text-darktext">
               Email: <strong>ashok@srimangala.com</strong>
            </p>
          </div>

        </div>

       {/* ENQUIRY FORM */}
<div className="bg-dark rounded-2xl shadow p-8 max-w-4xl mx-auto">
  <h2 className="text-2xl font-bold text-center text-secondary dark:text-black mb-8">
    Enquiry Form
  </h2>

  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* NAME */}
    <input
      type="text"
      placeholder="Name"
      className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-dark_border 
                 bg-transparent text-gray-800 dark:text-white 
                 focus:outline-none focus:ring-2 focus:ring-secondary"
      required
    />

    {/* MOBILE */}
    <input
      type="tel"
      placeholder="Mobile Number"
      className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-dark_border 
                 bg-transparent text-gray-800 dark:text-white 
                 focus:outline-none focus:ring-2 focus:ring-secondary"
      required
    />

    {/* EMAIL */}
    <input
      type="email"
      placeholder="Email"
      className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-dark_border 
                 bg-transparent text-gray-800 dark:text-white 
                 focus:outline-none focus:ring-2 focus:ring-secondary"
      required
    />

    {/* BUSINESS NAME */}
    <input
      type="text"
      placeholder="Business Name (Optional)"
      className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-dark_border 
                 bg-transparent text-gray-800 dark:text-white 
                 focus:outline-none focus:ring-2 focus:ring-secondary"
    />

    {/* REQUIREMENT */}
    <textarea
      placeholder="Requirement Details"
      rows={4}
      className="md:col-span-2 w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark_border 
                 bg-transparent text-gray-800 dark:text-white resize-none
                 focus:outline-none focus:ring-2 focus:ring-secondary"
    ></textarea>

    {/* QUANTITY */}
    <input
      type="text"
      placeholder="Quantity / Size Needed"
      className="md:col-span-2 w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-dark_border 
                 bg-transparent text-gray-800 dark:text-white 
                 focus:outline-none focus:ring-2 focus:ring-secondary"
    />

    {/* BUTTON */}
    <div className="md:col-span-2 text-center mt-2">
      <button
        type="submit"
        className="bg-secondary hover:bg-secondary/90 text-white px-10 py-3 rounded-full 
                   font-semibold transition shadow-md"
      >
        Send Enquiry
      </button>
      <p className="text-sm text-gray-600 dark:text-darktext mt-4">
        Our team will get back to you within 24 hours.
      </p>
    </div>
  </form>
</div>
</div>
    </section>
  );
};

export default ContactInfo;
