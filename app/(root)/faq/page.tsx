"use client";

import { useState } from "react";
import { APP_NAME } from "@/lib/constants";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqsData = [
  {
    question: "What is Vibes Store?",
    answer:
      "Vibes Store is an online marketplace offering high-quality products at affordable prices.",
  },
  {
    question: "How can I track my order?",
    answer:
      " You can check your order status in your account. Once your order is delivered, the status will be updated to Delivered.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and other secure payment options.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes! We offer worldwide shipping. Shipping costs and delivery times vary by location.",
  },
  {
    question: "How do I return a product?",
    answer:
      "You can return products within 30 days of purchase. Visit our Returns page for more details.",
  },
];

const FAQsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Find answers to common questions about {APP_NAME}.
        </p>
      </section>

      {/* FAQs List */}
      <section className="mt-12 space-y-4">
        {faqsData.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left py-3 text-lg font-semibold text-gray-800"
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp size={18} />
              ) : (
                <FaChevronDown size={18} />
              )}
            </button>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default FAQsPage;
