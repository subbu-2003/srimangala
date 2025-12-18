"use client";
import Image from "next/image";

const Privacy = () => {
  return (
<section className="w-full bg-white py-20 px-6 mt-20 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Privacy Policy
      </h1>

      <p className="text-gray-700 mb-8 leading-relaxed">
        Your privacy is important to us. This policy explains how{" "}
        <span className="font-semibold text-gray-900">
          Sri Mangala Enterprises
        </span>{" "}
        collects, uses, and protects your information.
      </p>

      <div className="space-y-6 text-gray-700">

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name, contact number, email</li>
            <li>Billing and delivery address</li>
            <li>Order details & purchase history</li>
            <li>WhatsApp or chat interaction details</li>
            <li>Website usage and analytics data</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To process orders and deliver products</li>
            <li>To provide customer support</li>
            <li>To share order updates or promotional offers</li>
            <li>For invoicing and internal record maintenance</li>
            <li>To improve our website and services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            3. Data Protection
          </h2>
          <p>
            Your personal information is stored securely and is not shared with
            unauthorized third parties.
          </p>
          <p className="mt-2">
            We may share information only with trusted courier partners, payment
            gateways, or service providers strictly for order-related purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            4. Cookies
          </h2>
          <p>
            Our website may use cookies to enhance user experience and improve
            site performance.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            5. Third-Party Services
          </h2>
          <p>
            External tools such as payment gateways, analytics providers, and
            courier partners may collect limited data necessary for service
            functionality.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            6. User Rights
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Request data correction</li>
            <li>Request account deletion</li>
            <li>Opt-out from marketing updates</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            7. Updates
          </h2>
          <p>
            We may update this Privacy Policy periodically. Continued use of our
            website indicates acceptance of any changes.
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full flex justify-center lg:justify-end">
      <div className="relative w-full max-w-md h-[420px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/privacy.webp" // you can reuse terms.jpg if needed
          alt="Privacy Policy"
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

export default Privacy;
