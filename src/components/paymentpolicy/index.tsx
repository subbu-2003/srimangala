"use client";

const Paymentpolicy = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 dark:bg-darkmode">
      <div className="max-w-4xl mx-auto bg-dark shadow-lg rounded-2xl p-8 md:p-12">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold dark:text-dark mb-6">
          Payment Policy
        </h1>

        {/* SUBTITLE */}
        <p className="dark:text-dark mb-8">
          At <span className="font-semibold">KP Square Publication</span>, we follow a clear and customer-friendly payment structure. 
          All orders require complete payment or partial advance payment as notified during checkout or order confirmation. 
          Orders are initiated only after payment confirmation.
        </p>

        {/* PAYMENT POLICY CONTENT */}
        <div className="space-y-6 dark:text-dark">

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">1. Accepted Payment Modes</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
              <li>Credit/Debit Cards</li>
              <li>Net Banking</li>
              <li>Bank Transfers</li>
              <li>Cash at store</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">2. Payment Terms</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Full payment may be required for bulk, urgent, or customized orders</li>
              <li>Prices may vary until order confirmation based on material cost, customization, and order size</li>
              <li>GST and applicable service charges will be added as per government regulations</li>
              <li>Payment failures due to bank or gateway issues are not the responsibility of KP Square Publication</li>
            </ul>
          </div>

        </div>

        {/* CONTACT */}
        <p className="mt-10 dark:text-dark text-sm">
          For any payment-related queries, contact us at  
          <span className="font-semibold"> support@kpsquarepublication.com</span>.
        </p>

      </div>
    </section>
  );
};

export default Paymentpolicy;
