"use client";

import IntroSection from "@/app/sections/homes/IntroSection";
import { useState } from "react";

export default function IntroSectionEditor() {
  const [formData, setFormData] = useState({
    title: "Queen D Jewelry - Tinh hoa trang sức cao cấp",
    subtitle: "Trang sức tinh xảo, thiết kế tinh tế",
    highlight: "Tôn vẻ đẹp vinh đẳng cấp",
    description:
      "Chuyên cung cấp các dòng nhẫn, dây chuyền, vòng tay và bông tai cao cấp, được chế tác tinh xảo từ những chất liệu chọn lọc như vàng, bạc và đá quý cao cấp. Mỗi thiết kế đều mang phong cách sang trọng, thanh lịch và đẳng cấp, tôn vinh vẻ đẹp riêng biệt của người sở hữu.",
    primaryButton: "Khám phá ngay",
    secondaryButton: "Xem bộ sưu tập",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
    alert("Đã lưu thay đổi!");
  };

  return (
    <div className="space-y-10">
      {/* ================= FORM ================= */}
      <div>
        <h1 className="text-3xl font-bold mb-6 text-purple-400">
          Edit Intro Section
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

          <input
            name="highlight"
            value={formData.highlight}
            onChange={handleChange}
            placeholder="Highlight Text"
            className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
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

        <IntroSection />
      </div>
    </div>
  );
}