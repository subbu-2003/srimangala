"use client";

import Image from "next/image";

const Paymentpolicy = () => {
  return (
  <section className="w-full bg-white py-20 px-6 mt-20 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Shipping & Return Policy
      </h1>

      <p className="text-gray-700 mb-8 leading-relaxed">
        This policy outlines the shipping, return, exchange, and cancellation
        terms of{" "}
        <span className="font-semibold text-gray-900">
          Sri Mangala Enterprises
        </span>
        .
      </p>

      <div className="space-y-6 text-gray-700">

        {/* Shipping Policy */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Shipping Policy
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Orders are securely packed and dispatched within 1–3 business
              days, subject to stock availability.
            </li>
            <li>
              Customized printing orders may require 5–12 business days for
              processing.
            </li>
            <li>
              We deliver across India through trusted courier and transport
              partners.
            </li>
            <li>
              Shipping charges vary based on delivery location, order volume,
              and weight.
            </li>
            <li>
              Tracking details will be shared via WhatsApp, SMS, or email once
              the order is shipped.
            </li>
          </ul>
        </div>

        {/* Return & Exchange Policy */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Return & Exchange Policy
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Returns are accepted only for damaged, defective, or incorrectly
              delivered products.
            </li>
            <li>
              Return requests must be raised within 48 hours of receiving the
              order.
            </li>
            <li>
              Products must be unused, sealed, and returned in their original
              packaging.
            </li>
            <li>
              Custom-printed packaging materials are not eligible for return or
              exchange.
            </li>
            <li>
              Refund or replacement will be processed only after inspection and
              approval.
            </li>
          </ul>
        </div>

        {/* Cancellation Policy */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Cancellation Policy
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Orders cannot be cancelled once dispatched.</li>
            <li>
              Customized product orders cannot be cancelled after design
              approval.
            </li>
          </ul>
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full flex justify-center lg:justify-end">
      <div className="relative w-full max-w-md h-[420px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/images/refund.webp" // you can reuse the same image if needed
          alt="Shipping and Return Policy"
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

export default Paymentpolicy;
