"use client";

import FAQSection from "@/app/sections/homes/FAQSection";
import { useState } from "react";

type FAQ = {
    question: string;
    answer: string;
};

export default function FAQSectionEditor() {
    const [sectionTitle, setSectionTitle] = useState(
        "Câu hỏi thường gặp"
    );

    const [sectionDescription, setSectionDescription] = useState(
        "Giải đáp những thắc mắc phổ biến trước khi bắt đầu hợp tác."
    );

    const [faqs, setFaqs] = useState<FAQ[]>([
        {
            question: "Queen D Jewelry có nhận thiết kế theo yêu cầu không?",
            answer:
                "Chúng tôi nhận thiết kế trang sức theo yêu cầu riêng, đảm bảo mỗi sản phẩm là một dấu ấn cá nhân độc đáo.",
        },
        {
            question: "Chất liệu trang sức có đảm bảo chất lượng không?",
            answer:
                "Tất cả sản phẩm đều được chế tác từ vàng, bạc và đá quý chọn lọc, có nguồn gốc rõ ràng và đảm bảo tiêu chuẩn chất lượng cao.",
        },
        {
            question: "Chính sách bảo hành như thế nào?",
            answer:
                "Chúng tôi cung cấp chính sách bảo hành và hỗ trợ làm mới sản phẩm trong suốt quá trình sử dụng.",
        },
        {
            question: "Thời gian hoàn thành một sản phẩm là bao lâu?",
            answer:
                "Tùy theo độ phức tạp của thiết kế, thời gian hoàn thành dao động từ 5–14 ngày làm việc.",
        },
    ]);

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleChange = (
        index: number,
        field: keyof FAQ,
        value: string
    ) => {
        const updated = [...faqs];
        updated[index][field] = value;
        setFaqs(updated);
    };

    const handleSave = () => {
        console.log("Saved FAQ Section:", {
            sectionTitle,
            sectionDescription,
            faqs,
        });
        alert("Đã lưu FAQ Section!");
    };

    return (
        <div className="space-y-12">
            {/* ================= FORM ================= */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-purple-400">
                    Edit FAQ Section
                </h1>

                <input
                    value={sectionTitle}
                    onChange={(e) => setSectionTitle(e.target.value)}
                    placeholder="Section Title"
                    className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white mb-4"
                />

                <textarea
                    value={sectionDescription}
                    onChange={(e) => setSectionDescription(e.target.value)}
                    rows={3}
                    placeholder="Section Description"
                    className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white mb-8"
                />

                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#111122] p-6 rounded-xl border border-gray-800 space-y-4"
                        >
                            <h2 className="text-lg font-semibold text-purple-300">
                                FAQ {index + 1}
                            </h2>

                            <input
                                value={faq.question}
                                onChange={(e) =>
                                    handleChange(index, "question", e.target.value)
                                }
                                placeholder="Question"
                                className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                            />

                            <textarea
                                value={faq.answer}
                                onChange={(e) =>
                                    handleChange(index, "answer", e.target.value)
                                }
                                rows={3}
                                placeholder="Answer"
                                className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleSave}
                    className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-[#6c40c9] to-[#804fa0] font-semibold"
                >
                    Save Changes
                </button>
            </div>

            {/* ================= PREVIEW ================= */}
            <div className="bg-[#111122] p-10 rounded-2xl border border-gray-800">
                <h2 className="text-sm uppercase text-gray-400 mb-6">
                    Live Preview
                </h2>

                <FAQSection />
            </div>
        </div>
    );
}