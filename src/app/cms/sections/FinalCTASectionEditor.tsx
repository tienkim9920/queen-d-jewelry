"use client";

import FinalCTASection from "@/app/sections/homes/FinalCTASection";
import { useState } from "react";

export default function FinalCTASectionEditor() {
    const [formData, setFormData] = useState({
        title: "Tỏa sáng theo cách của bạn.",
        subtitle: "Đẳng cấp không cần phô trương.",
        description:
            "Mỗi thiết kế tại Queen D Jewelry được tạo ra để tôn vinh khí chất riêng biệt, lưu giữ những khoảnh khắc đáng giá và đồng hành cùng bạn qua năm tháng. Không chỉ là trang sức – đó là dấu ấn cá nhân.",
        primaryButton: "Nhận tư vấn trang sức",
        secondaryButton: "Xem bộ sưu tập",
        tagline:
            "Thiết kế tinh xảo · Chất liệu chọn lọc · Giá trị vượt thời gian",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log("Saved Final CTA Section:", formData);
        alert("Đã lưu Final CTA Section!");
    };

    return (
        <div className="space-y-12">
            {/* ================= FORM ================= */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-purple-400">
                    Edit CTA Section
                </h1>

                <div className="space-y-5">
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Main Title"
                        className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                    />

                    <input
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        placeholder="Subtitle"
                        className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                    />

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Description"
                        className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                    />

                    <input
                        name="primaryButton"
                        value={formData.primaryButton}
                        onChange={handleChange}
                        placeholder="Primary Button Text"
                        className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                    />

                    <input
                        name="secondaryButton"
                        value={formData.secondaryButton}
                        onChange={handleChange}
                        placeholder="Secondary Button Text"
                        className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                    />

                    <input
                        name="tagline"
                        value={formData.tagline}
                        onChange={handleChange}
                        placeholder="Bottom Tagline"
                        className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                    />

                    <button
                        onClick={handleSave}
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#6c40c9] to-[#804fa0] font-semibold"
                    >
                        Save Changes
                    </button>
                </div>
            </div>


            {/* ================= PREVIEW ================= */}
            <div className="bg-[#111122] p-10 rounded-2xl border border-gray-800">
                <h2 className="text-sm uppercase text-gray-400 mb-6">
                    Live Preview
                </h2>

                <FinalCTASection />
            </div>
        </div>
    );
}