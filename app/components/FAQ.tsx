"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate is the food recognition?",
      answer: "Munch uses advanced AI technology with a 95% accuracy rate. Our database includes over 1 million foods and is constantly learning and improving."
    },
    {
      question: "Does the app work offline?",
      answer: "Yes! Once downloaded, Munch works completely offline. All processing happens on your device, ensuring both privacy and instant results without needing an internet connection."
    },
    {
      question: "What exercises can I choose from?",
      answer: "Munch supports 30+ different activities including walking, running, cycling, swimming, yoga, HIIT, dancing, tennis, basketball, gardening, and many more. You can customize which exercises to display."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely! Munch is privacy-first. All data stays on your device with no cloud storage or accounts required. We never see or store your photos or personal information."
    },
    {
      question: "Can I track multiple meals per day?",
      answer: "Yes! You can track unlimited meals throughout the day. The app provides daily and weekly balance summaries with beautiful visual charts to help you understand your overall energy balance."
    },
    {
      question: "How is this different from calorie counting apps?",
      answer: "Instead of showing abstract numbers, Munch translates calories into tangible exercise durations you can relate to. It's faster (4 seconds vs minutes of manual entry) and more intuitive than traditional calorie counters."
    },
    {
      question: "Is the app free?",
      answer: "Munch offers a free version with core features. A premium version unlocks additional exercise types, detailed analytics, and custom meal planning features."
    },
    {
      question: "Which languages are supported?",
      answer: "Currently, Munch supports English and French, with more languages coming soon based on user demand."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about Munch
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-purple-600 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@munchapp.com"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}