"use client";

import Image from "next/image";

const Terms = () => {
  return (
    <section className="w-full bg-white py-20 px-6 mt-20 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-gray-900">
              Sri Mangala Enterprises
            </span>
            . By accessing or purchasing from our website or through offline
            communication, you agree to the following Terms & Conditions.
            Please read them carefully.
          </p>

          <div className="space-y-6 text-gray-700">

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                1. General
              </h2>
              <p>
                Sri Mangala Enterprises operates as a printing and packaging
                supplier serving wholesale and retail customers across India.
              </p>
              <p className="mt-2">
                All orders placed with us are subject to availability, pricing,
                and approval.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                2. Products & Specifications
              </h2>
              <p>
                Product images, sizes, and specifications displayed on the
                website or catalog may vary slightly due to printing and
                manufacturing variations.
              </p>
              <p className="mt-2">
                Custom orders will be processed only after final approval from
                the customer.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                3. Pricing & Payment
              </h2>
              <p>
                Prices may change without prior notice, depending on raw
                material costs and supplier variations.
              </p>
              <p className="mt-2">
                Payments must be made as per the invoice terms.
              </p>
              <p className="mt-2">
                For customized orders, advance payment will be required.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                4. Order Confirmation
              </h2>
              <p>
                Orders are processed only after confirmation via phone, email,
                or WhatsApp.
              </p>
              <p className="mt-2">
                Sri Mangala Enterprises reserves the right to reject or modify
                any order.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                5. Delivery
              </h2>
              <p>
                Delivery timelines are estimated and may vary based on
                logistics availability, location, and order size.
              </p>
              <p className="mt-2">
                We are not liable for shipping delays caused by courier
                partners, strikes, or unforeseen events.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                6. Returns & Cancellations
              </h2>
              <p>
                Returns are applicable only for damaged or defective products,
                subject to inspection.
              </p>
              <p className="mt-2">
                Custom-printed materials are not eligible for return or
                exchange.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                7. Warranty
              </h2>
              <p>
                No implied or direct warranty applies unless mentioned in
                writing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                8. Limitation of Liability
              </h2>
              <p>
                Sri Mangala Enterprises is not responsible for indirect or
                consequential damages related to shipping, loss, or product
                misuse.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                9. Governing Law
              </h2>
              <p>
                All disputes will be subject to the jurisdiction of Chennai,
                Tamil Nadu, India.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/terms.webp"
              alt="Terms and Conditions"
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

export default Terms;
