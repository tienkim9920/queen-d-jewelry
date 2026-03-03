"use client";

import { useState } from "react";
import FAQSectionEditor from "./sections/FAQSectionEditor";
import FinalCTASectionEditor from "./sections/FinalCTASectionEditor";
import HeroSectionEditor from "./sections/HeroSectionEditor";
import IntroSectionEditor from "./sections/IntroSectionEditor";
import ProductSectionEditor from "./sections/ProductSectionEditor";
import TestimonialSectionEditor from "./sections/TestimonialSectionEditor";

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState("intro");

  const sectionComponents: Record<string, React.ReactNode> = {
    intro: <IntroSectionEditor />,
    product: <ProductSectionEditor />,
    finalcta: <FinalCTASectionEditor />,
    hero: <HeroSectionEditor />,
    testimonial: <TestimonialSectionEditor />,
    faq: <FAQSectionEditor />,
  };

  const menuItems = [
    { key: "intro", label: "Phần Giới Thiệu" },
    { key: "product", label: "Phần Sản Phẩm" },
    { key: "finalcta", label: "Phần Final CTA" },
    { key: "hero", label: "Phần Điểm Nổi Bật" },
    { key: "testimonial", label: "Phần Đánh Giá" },
    { key: "faq", label: "Phần FAQ" },
  ];

  return (
    <div className="flex h-screen bg-[#0f0f1a] text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-[#141428] border-r border-gray-800 p-6">
        <h2 className="text-xl font-bold mb-6 text-purple-400">
          Admin Quản Lý
        </h2>

        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className={`px-4 py-2 rounded-lg text-left transition-all duration-300
                ${activeSection === item.key
                  ? "bg-gradient-to-r from-[#6c40c9] to-[#804fa0] text-white font-semibold"
                  : "bg-[#1a1a33] hover:bg-[#23234a] text-gray-300"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {sectionComponents[activeSection]}
      </main>
    </div>
  );
}