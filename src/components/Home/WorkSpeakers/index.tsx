"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you supply all over India?",
    answer:
      "Yes, we provide nationwide delivery through trusted logistics partners.",
    open: true,
  },
  {
    question: "Do you handle both wholesale and retail?",
    answer:
      "Absolutely — from small orders to bulk requirements, we support all business sizes.",
  },
  {
    question: "Can I get customized packaging?",
    answer:
      "Yes, we offer custom printing, branding, and size customization.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can contact us via call, WhatsApp, or email for pricing and product details.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve e-commerce, FMCG, textiles, electronics, food industry, logistics, manufacturing, retail stores, and more.",
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
