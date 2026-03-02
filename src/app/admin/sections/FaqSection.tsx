"use client";

import { useEffect, useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

type FAQForm = {
  title: string;
  items: FAQItem[];
};

const FAQSection = () => {
  const [form, setForm] = useState<FAQForm>({
    title: "",
    items: [],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch("/api/faqs")
    //   .then((res) => res.json())
    //   .then((data) => setForm(data));
  }, []);

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({ ...prev, title: value }));
  };

  const handleChange = (
    index: number,
    field: keyof FAQItem,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addFAQ = () => {
    setForm((prev) => ({
      ...prev,
      items: [...prev.items, { q: "", a: "" }],
    }));
  };

  const removeFAQ = (index: number) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    // await fetch("/api/faqs", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    setLoading(false);
    alert("Cập nhật thành công!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-stone-50 to-white py-24 px-6">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-stone-200 rounded-[32px] shadow-2xl p-14 space-y-14">

        {/* ===== TITLE ===== */}
        <h1 className="text-4xl font-semibold tracking-tight text-stone-800">
          Chỉnh sửa FAQ Section
        </h1>

        {/* ===== SECTION TITLE INPUT ===== */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-stone-600">
            Tiêu đề Section
          </label>
          <input
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
          />
        </div>

        {/* ===== FAQ ITEMS ===== */}
        <div className="space-y-10">
          {form.items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-stone-200 bg-white 
                     shadow-lg hover:shadow-xl transition-all duration-300 p-10 space-y-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-stone-700">
                  Câu hỏi {index + 1}
                </h3>
                <button
                  onClick={() => removeFAQ(index)}
                  className="text-red-500 hover:text-red-600 text-sm font-medium transition"
                >
                  Xoá
                </button>
              </div>

              {/* Question */}
              <input
                value={item.q}
                onChange={(e) =>
                  handleChange(index, "q", e.target.value)
                }
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
                placeholder="Nhập câu hỏi..."
              />

              {/* Answer */}
              <textarea
                value={item.a}
                onChange={(e) =>
                  handleChange(index, "a", e.target.value)
                }
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
                placeholder="Nhập câu trả lời..."
              />
            </div>
          ))}
        </div>

        {/* ===== ACTION BUTTONS ===== */}
        <div className="flex justify-between items-center pt-4">
          <button
            onClick={addFAQ}
            className="px-6 py-3 rounded-full border border-stone-300 
                   hover:bg-stone-100 transition text-sm font-medium"
          >
            + Thêm câu hỏi
          </button>

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            {loading ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQSection;
