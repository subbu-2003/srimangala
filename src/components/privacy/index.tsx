"use client";

const Privacy = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 dark:bg-darkmode">
      <div className="max-w-4xl mx-auto bg-dark shadow-lg rounded-2xl p-8 md:p-12">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold dark:text-dark mb-6">
          Privacy Policy
        </h1>

        {/* SUBTITLE */}
        <p className="dark:text-dark mb-8">
          At <span className="font-semibold">KP Square Publication</span>, your privacy is important to us. 
          We are committed to maintaining the confidentiality and security of your personal information and document files. 
          This Privacy Policy explains how your data is collected, used, stored, and protected while using Chennaixerox.com.
        </p>

        {/* PRIVACY POLICY CONTENT */}
        <div className="space-y-6 dark:text-dark">

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">1. Information Collection</h2>
            <p>
              We collect essential customer information such as name, phone number, email address, and documents/files for processing your order. 
              This information allows us to fulfil your service requests smoothly and provide after-service support. 
              Sensitive information such as payment details is securely handled through certified payment gateways—we do not store or retain card information on our systems.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">2. File Confidentiality</h2>
            <p>
              All files uploaded for printing or scanning are treated with maximum confidentiality. 
              We do not share, sell, or misuse your documents in any form. Files are used only for completing the order and may be automatically deleted within a reasonable time after service completion.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">3. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience, track performance, and improve service quality. 
              These do not compromise your personal data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">4. Purpose of Information</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Order processing and customer communication</li>
              <li>Invoices, receipts, and service confirmations</li>
              <li>Sending order-related updates</li>
              <li>Improving service quality</li>
              <li>Customer support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">5. Your Rights</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Request data modification or removal</li>
              <li>Opt-out of marketing updates</li>
              <li>Seek clarification about stored data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 dark:text-dark">6. Consent</h2>
            <p>
              By using our website, you consent to this Privacy Policy.
            </p>
          </div>

        </div>

        {/* CONTACT */}
        <p className="mt-10 dark:text-dark text-sm">
          For any questions, contact us at  
          <span className="font-semibold"> support@kpsquarepublication.com</span>.
        </p>

      </div>
    </section>
  );
};

export default Privacy;
