"use client";

import TestimonialSection from "@/app/sections/homes/TestimonialSection";
import { useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    position: string;
    avatar: string;
};

export default function TestimonialSectionEditor() {
    const [sectionTitle, setSectionTitle] = useState(
        "Khách hàng nói gì về chúng tôi"
    );

    const [sectionDescription, setSectionDescription] = useState(
        "Sự hài lòng của khách hàng là minh chứng rõ ràng nhất cho chất lượng dịch vụ."
    );

    const [testimonials, setTestimonials] = useState<Testimonial[]>([
        {
            quote:
                "Tôi thực sự ấn tượng với thiết kế tinh xảo và dịch vụ chuyên nghiệp tại Queen D Jewelry.",
            name: "Nguyễn Thị Minh Anh",
            position: "Doanh nhân",
            avatar: "/image/avatar1.jpg",
        },
        {
            quote:
                "Trang sức rất sang trọng và đẳng cấp. Tôi chắc chắn sẽ quay lại cho những dịp đặc biệt.",
            name: "Trần Hoàng Nam",
            position: "Giám đốc Marketing",
            avatar: "/image/avatar2.jpg",
        },
    ]);

    const handleChange = (
        index: number,
        field: keyof Testimonial,
        value: string
    ) => {
        const updated = [...testimonials];
        updated[index][field] = value;
        setTestimonials(updated);
    };

    const handleSave = () => {
        console.log("Saved Testimonial Section:", {
            sectionTitle,
            sectionDescription,
            testimonials,
        });
        alert("Đã lưu Testimonial Section!");
    };

    return (
        <div className="space-y-12">
            {/* ================= FORM ================= */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-purple-400">
                    Edit Testimonial Section
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
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#111122] p-6 rounded-xl border border-gray-800 space-y-4"
                        >
                            <h2 className="text-lg font-semibold text-purple-300">
                                Testimonial {index + 1}
                            </h2>

                            <textarea
                                value={item.quote}
                                onChange={(e) =>
                                    handleChange(index, "quote", e.target.value)
                                }
                                rows={3}
                                placeholder="Quote"
                                className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                            />

                            <input
                                value={item.name}
                                onChange={(e) =>
                                    handleChange(index, "name", e.target.value)
                                }
                                placeholder="Customer Name"
                                className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                            />

                            <input
                                value={item.position}
                                onChange={(e) =>
                                    handleChange(index, "position", e.target.value)
                                }
                                placeholder="Position"
                                className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                            />

                            <input
                                value={item.avatar}
                                onChange={(e) =>
                                    handleChange(index, "avatar", e.target.value)
                                }
                                placeholder="Avatar Image URL"
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

                <TestimonialSection />
            </div>
        </div>
    );
}