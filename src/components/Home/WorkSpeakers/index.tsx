"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Custom Packaging?",
    answer:
      "Custom Packaging involves printing on a base material such as paper, plastic, fabric, paperboard, etc. and then converting the material into the required packaging product which is like a bag or box. You can get custom packing tapes, custom bags, Custom Sticker Printing and much more from Printo.",
    open: true,
  },
  {
    question: "What are the minimum quantities for custom printed packaging?",
    answer:
      "Minimum order quantities vary based on product type, size, and material. Printo offers low MOQs to support startups and small businesses.",
  },
  {
    question: "Does the material affect how my design will look?",
    answer:
      "Yes, different materials absorb ink differently. Our team helps you choose the right material to ensure your design looks its best.",
  },
  {
    question:
      "Can you create other marketing materials to work with my packaging?",
    answer:
      "Absolutely. We offer business cards, flyers, brochures, stickers, and other marketing materials to match your packaging.",
  },
  {
    question:
      "What makes ordering custom packaging from Printo different from other packaging companies?",
    answer:
      "Printo combines quality, customization, low MOQs, and expert support to deliver packaging solutions tailored to your brand.",
  },
  {
    question: "Can I email you my artwork?",
    answer:
      "Yes, you can share your artwork with us via email or upload it during the order process.",
  },
  {
    question: "What if I don’t have a logo/artwork yet?",
    answer:
      "No worries! Our design team can help create professional artwork for your packaging.",
  },
];

export default function WorkSpeakers({ showTitle = true }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      {showTitle && (
        <h2 className="text-4xl text-center font-semibold text-gray-800 mb-14 px-6">
          Frequently Asked Questions
        </h2>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg bg-white shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-gray-900">
                {faq.question}
              </span>
              <span className="text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
