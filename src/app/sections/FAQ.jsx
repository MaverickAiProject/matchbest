"use client"
import React, { useState, useRef, useEffect } from 'react';

function FAQItem({ faq, isActive, onToggle }) {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [isActive]);

    return (
        <div className="border-b border-[#472283]/30">
            <button
                onClick={onToggle}
                className="w-full text-left text-lg font-medium py-4 text-[#B372CF] hover:text-[#D8A5FF] focus:outline-none"
            >
                {faq.question}
            </button>
            <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ height: isActive ? height : 0 }}
            >
                <div ref={contentRef} className="text-gray-300 pb-4">
                    {faq.answer}
                </div>
            </div>
        </div>
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
        <div className="max-w-4xl mx-auto py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                Frequently Asked Questions
            </h2>
            <div className="w-full">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        faq={faq}
                        isActive={activeIndex === index}
                        onToggle={() => toggleAccordion(index)}
                    />
                ))}
            </div>
        </div>
    );
}

