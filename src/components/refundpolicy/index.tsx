"use client";

const Refundpolicy = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 dark:bg-darkmode">
      <div className="max-w-4xl mx-auto bg-dark shadow-lg rounded-2xl p-8 md:p-12">
       
        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white mb-6">
          Cancellation & Refund Policy
        </h1>

        {/* INTRO */}
        <p className="dark:text-white mb-8">
          At <span className="font-semibold">KP Square Publication</span>, printing, photocopying, scanning, and binding services are custom-made and on-demand. 
          Therefore, cancellations and refunds are limited as outlined below.
        </p>

        <div className="space-y-6 dark:text-white">

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">1. Non-Refundable Services</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Orders already printed, processed, or completed</li>
              <li>Files with formatting or content errors provided by the customer</li>
              <li>Document reprints due to incorrect submissions by the customer</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">2. Possible Cancellations</h2>
            <p>
              Cancellation requests may be considered only if production has not yet begun. Approval of cancellation is entirely at the discretion of KP Square Publication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">3. Refund Processing</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Refunds, if approved, will be sent to the original payment method</li>
              <li>Processed within 7–10 business days</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">4. Not Responsible For</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Low-quality printing due to low-resolution files</li>
              <li>Errors present in the customer’s document</li>
              <li>Delays caused by unforeseen events (technical failures, courier delays, power issues)</li>
            </ul>
          </div>

        </div>

        {/* CONTACT */}
        <p className="mt-10 dark:text-white text-sm">
          For any refund or cancellation queries, contact us at  
          <span className="font-semibold"> support@kpsquarepublication.com</span>.
        </p>

      </div>
    </section>
  );
};

export default Refundpolicy;
