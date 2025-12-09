"use client";

const Aboutus = () => {
  return (
<div className="w-full">

  {/* HERO SECTION */}
 <section
  className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center"
  style={{
    background: "linear-gradient(to right, #0047FF, #4CC3FF)"
  }}
>

    <div className=" w-full h-full flex items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
        About KP Square Publication
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
            Your Reliable Printing & Document Partner in Chennai
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Located in Anna Nagar, KP Square Publication delivers high-quality printing,
            scanning, Xerox, and binding solutions for students, corporates, and businesses.
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

      {/* WHO WE ARE */}
      <div className="grid md:grid-cols-2 gap-16 mt-20">
        
        <div>
          <img
            src="/images/about/about2.png"
            className="rounded-xl shadow-lg w-full"
            alt="Our Office"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-dark mb-3">
            Who We Are
          </h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            KP Square Publication is a professionally managed document service center offering 
            fast, affordable, and high-quality printing and document services.
          </p>

          <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
            We have grown into a trusted hub for customers from Anna Nagar, 
            Thirumangalam, Mogappair, Kilpauk, and nearby areas.
          </p>
        </div>

      </div>

      {/* WHAT WE OFFER */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD */}
          <div className="bg-dark dark:bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <img src="/images/printico.png" className="rounded-lg mb-4  mx-auto block" />
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              High-Quality Printing
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Color/BW prints, brochures, custom sizes.
            </p>
          </div>

          <div className="bg-dark dark:bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <img src="/images/printico.png" className="rounded-lg mb-4  mx-auto block"  />
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Xerox / Photocopy
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Bulk Xerox with student-friendly pricing.
            </p>
          </div>

          <div className="bg-dark dark:bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <img src="/images/printico.png" className="rounded-lg mb-4  mx-auto block" />
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Scanning Services
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              High-resolution scans delivered instantly.
            </p>
          </div>

          <div className="bg-dark dark:bg-dark p-6 rounded-xl shadow hover:shadow-xl transition text-center">
            <img src="/images/printico.png" className="rounded-lg mb-4  mx-auto block" />
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Binding Services
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Spiral, wiro, thermal & thesis binding.
            </p>
          </div>

        </div>
      </div>

      {/* CONTACT / ADDRESS */}
      <div className="mt-24 bg-dark dark:bg-dark p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Visit Us
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          KP Square Publication <br />
          176, Block 1st Street, Opp Ayyappan Temple,<br />
          Near Tower Park Backside, Anna Nagar,<br />
          Chennai – 600040
        </p>

        <p className="mt-4 text-gray-700 dark:text-gray-300">
          📞 <strong>7502802800</strong> <br />
          📧 <strong>kpsquare3@gmail.com</strong> <br />
          🌐 <strong>chennaixerox.com</strong>
        </p>
      </div>

    </div>
  </section>
</div>


  );
};

export default Aboutus;
