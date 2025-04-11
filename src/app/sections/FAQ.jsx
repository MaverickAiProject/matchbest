"use client";
import LayoutProvider from "@/components/layout/LayoutProvider";
import { ArrowRight } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQItem({ faq, isActive, onToggle, index }) {
    const contentRef = useRef(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="border-b border-white/10"
        >
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center py-5 text-left group transition-all duration-300"
            >
                <span className="text-lg font-medium text-gray-100 group-hover:text-[#D8A5FF]">
                    {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ArrowRight size={20} className="text-[#B372CF]" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: "auto", opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div
                            ref={contentRef}
                            className="text-gray-400 pb-6 leading-relaxed text-base"
                        >
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What types of IT services do you offer?",
            answer:
                "We provide a full range of IT services including managed IT, custom software development, cloud solutions, cybersecurity, IT staffing, and digital transformation services.",
        },
        {
            question: "How do you ensure data security?",
            answer:
                "We implement enterprise-grade security measures including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like GDPR and HIPAA.",
        },
        {
            question: "Can you help with cloud migration?",
            answer:
                "Yes, we specialize in seamless cloud migration with zero downtime. Our team handles everything from planning to execution and post-migration support.",
        },
        {
            question: "What industries do you serve?",
            answer:
                "We work with businesses across various industries including healthcare, finance, retail, manufacturing, and technology.",
        },
        {
            question: "Do you provide 24/7 support?",
            answer:
                "Absolutely! We offer round-the-clock support with guaranteed response times and dedicated account managers.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <LayoutProvider>
            <motion.section
                className="bg-[#0F0722] px-4 py-14 sm:py-16 mt-10 mb-20 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                index={index}
                                faq={faq}
                                isActive={activeIndex === index}
                                onToggle={() => toggleAccordion(index)}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>
        </LayoutProvider>
    );
}