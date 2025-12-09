"use client";

const Deliverypolicy = () => {
  return (
    <section className="dark:bg-darkmode lg:pb-24 pb-16 pt-0">
      <div className="max-w-4xl mx-auto bg-dark shadow-lg rounded-2xl p-8 md:p-12">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white mb-6">
          Shipping / Delivery Policy
        </h1>

        {/* INTRO */}
        <p className="dark:text-white mb-8">
          At <span className="font-semibold">KP Square Publication</span>, we provide both digital and physical delivery options depending on the type of service requested.
        </p>

        <div className="space-y-6 dark:text-white">

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">1. Digital Delivery (For Scanning & Soft Copies)</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Email delivery</li>
              <li>WhatsApp delivery</li>
              <li>Secure file-sharing links (if required)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">2. Physical Delivery (For Printed & Bound Documents)</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Pick-up from store</li>
              <li>Courier delivery (subject to service availability)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">3. Important Notes</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Courier timelines may vary based on location</li>
              <li>KP Square Publication is not liable for courier delays, damage, or loss during shipment</li>
              <li>Additional charges may apply for packing or courier services</li>
            </ul>
          </div>

        </div>

        {/* CONTACT */}
        <p className="mt-10 dark:text-white text-sm">
          For any delivery-related queries, contact us at  
          <span className="font-semibold"> support@kpsquarepublication.com</span>.
        </p>

      </div>
    </section>
  );
};

export default Deliverypolicy;
