'use client';

import { Language } from "@/hooks/translations";
import { useTranslate } from "@/hooks/useTranslate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FAQSection() {
    const { lang = 'vi' } = useParams();
    const { t } = useTranslate(lang as Language);

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.15 }
        );

        reveals.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const faqs = [
        {
            question: t('faqQuestion1'),
            answer: t('faqAnswer1'),
        },
        {
            question: t('faqQuestion2'),
            answer: t('faqAnswer2'),
        },
        {
            question: t('faqQuestion3'),
            answer: t('faqAnswer3'),
        },
        {
            question: t('faqQuestion4'),
            answer: t('faqAnswer4'),
        },
    ];

    return (
        <section className="bg-[#0f0f1a] py-28 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="reveal text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {t('faqTitle')}
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        {t('faqSubtitle')}
                    </p>
                </div>

                {/* FAQ List */}
                <div className="reveal space-y-5">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`transition-all duration-500 rounded-2xl border backdrop-blur-md
                ${isOpen
                                        ? "border-purple-500/40 bg-white/10 shadow-lg shadow-purple-500/10"
                                        : "border-white/10 bg-white/5 hover:border-white/20"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex justify-between items-center p-6 text-left"
                                >
                                    <span className="text-white font-medium text-lg">
                                        {faq.question}
                                    </span>

                                    {/* Icon */}
                                    <span
                                        className={`text-purple-400 text-2xl transition-transform duration-500 ${isOpen ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>

                                {/* Animated Answer */}
                                <div
                                    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}