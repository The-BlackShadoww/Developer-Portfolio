"use client";
import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="section">
      <div className="container">
        <h2 className="text-4xl lg:text-8xl md:text-7xl">FAQs</h2>
        <div className="lg:mt-20 md:mt-16 mt-10">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="border-dotted border-stone-400 border-t cursor-pointer group/faq isolate last:border-b lg:py-10 md:py-8 py-6 relative"
              onClick={() => {
                if (selectedIndex === index) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(index);
                }
              }}
            >
              <div
                className={twMerge(
                  "h-0 w-full absolute duration-700 bg-stone-300 group-hover/faq:h-full bottom-0 left-0 transition-all -z-10",
                  index === selectedIndex && "h-full"
                )}
              ></div>
              <div
                className={twMerge(
                  "flex justify-between gap-4 items-center transition-all duration-300 group-hover/faq:lg:px-8",
                  index === selectedIndex && "lg:px-8"
                )}
              >
                <div className="text-2xl lg:text-4xl md:text-3xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "border border-stone-400 justify-center rounded-full inline-flex items-center shrink-0 size-11 transition duration-300 bg-stone-200 ",
                    index === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              {/* answer */}
              <AnimatePresence>
                {index === selectedIndex && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden lg:px-8"
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
