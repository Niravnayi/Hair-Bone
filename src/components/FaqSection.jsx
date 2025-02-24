import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How much can I customise Webflow template?",
    answer:
      "You can customize the template as much as you want using Webflow's design tools.",
  },
  {
    question: "Do you offer discounts?",
    answer:
      "Yes, we offer discounts during special promotions and for bulk purchases.",
  },
  {
    question: "Why Chic Sal is a great template?",
    answer:
      "Chic Sal is designed with modern aesthetics and high performance in mind.",
  },
  {
    question: "What value Chic Sal brings?",
    answer:
      "It provides a sleek, user-friendly experience with responsive design and smooth animations.",
  },
  {
    question: "Who is Wavesdesign?",
    answer:
      "Wavesdesign is a creative agency specializing in high-quality Webflow templates.",
  },
  {
    question: "Why Wavesdesign templates are the best?",
    answer:
      "Wavesdesign templates are crafted with attention to detail, great UI/UX, and performance optimization.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FDF6F2] min-h-screen flex flex-col items-center py-10 px-5">
      <h2 className="text-center text-xl text-gray-700 font-semibold uppercase mb-4">
        faq
      </h2>
      <h1 className="text-3xl !font-normal mb-8">Questions and answers</h1>
      <div className="w-full max-w-xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-card mb-5 p-4 rounded-lg cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">{faq.question}</span>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                openIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === index ? 1 : 0 }}
                transition={{
                  duration: 0.3,
                  delay: openIndex === index ? 0.2 : 0,
                }}
                className="mt-2 font-normal text-lg"
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
