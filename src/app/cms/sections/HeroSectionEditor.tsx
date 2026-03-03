"use client";

import HeroSection from "@/app/sections/homes/HeroSection";
import { useState } from "react";

export default function HeroSectionEditor() {
    const [formData, setFormData] = useState({
        titleLine1: "Trang sức không chỉ để đeo.",
        titleLine2: "Mà để khẳng định đẳng cấp.",
        description:
            "Chúng tôi chuyên cung cấp nhẫn, dây chuyền, vòng tay và bông tai cao cấp với thiết kế sang trọng, tinh xảo trong từng chi tiết. Mỗi sản phẩm được chế tác từ chất liệu chọn lọc, đảm bảo giá trị thẩm mỹ vượt thời gian và tôn vinh vẻ đẹp riêng của người sở hữu.",
        stat1Number: "+500",
        stat1Text: "Sản phẩm đã được chế tác & phân phối",
        stat2Number: "98%",
        stat2Text: "Khách hàng hài lòng & quay lại",
        primaryButton: "Nhận tư vấn trang sức",
        secondaryButton: "Xem bộ sưu tập",
        image: "/image/hero-jewelry.jpg",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        console.log("Saved Hero Section:", formData);
        alert("Đã lưu Hero Section!");
    };

    return (
        <div className="space-y-12">
            {/* ================= FORM ================= */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-purple-400">
                    Edit Hero Section
                </h1>

                <div className="space-y-5">
                    <input
                        name="titleLine1"
                        value={formData.titleLine1}
                        onChange={handleChange}
                        placeholder="Title Line 1"
                        className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                    />

                    <input
                        name="titleLine2"
                        value={formData.titleLine2}
                        onChange={handleChange}
                        placeholder="Title Line 2"
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

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            name="stat1Number"
                            value={formData.stat1Number}
                            onChange={handleChange}
                            placeholder="Stat 1 Number"
                            className="p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                        />
                        <input
                            name="stat1Text"
                            value={formData.stat1Text}
                            onChange={handleChange}
                            placeholder="Stat 1 Text"
                            className="p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                        />

                        <input
                            name="stat2Number"
                            value={formData.stat2Number}
                            onChange={handleChange}
                            placeholder="Stat 2 Number"
                            className="p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                        />
                        <input
                            name="stat2Text"
                            value={formData.stat2Text}
                            onChange={handleChange}
                            placeholder="Stat 2 Text"
                            className="p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                        />
                    </div>

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
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Hero Image URL or Path"
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

                <HeroSection />
            </div>
        </div>
    );
}