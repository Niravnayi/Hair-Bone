import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: " What services do you offer?",
    answer:
      "We offer haircuts, styling, coloring, keratin treatments, hair extensions, and more. Visit our Services page for a full list.",
  },
  {
    question: " Do I need to book an appointment, or do you accept walk-ins?",
    answer:
      "We recommend booking an appointment to ensure availability, but we also welcome walk-ins based on availability.",
  },
  {
    question: "Do you offer hair treatments for damaged hair?",
    answer:
      "Yes! We provide deep conditioning, keratin treatments, and hair spa services to restore hair health.",
  },
  {
    question: "Can I bring a picture of a hairstyle I want?",
    answer:
      "Absolutely! Our stylists will work with you to achieve the look you desire.",
  },
  {
    question: "Do you use organic or chemical-free hair products?",
    answer:
      "Yes, we have a selection of organic and sulfate-free products for customers with sensitive hair or scalp.",
  },
  {
    question: "What hair color brands do you use?",
    answer:
      "We use high-quality, professional brands that ensure long-lasting and vibrant results.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FDF6F2] min-h-fit flex flex-col items-center  ">
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
