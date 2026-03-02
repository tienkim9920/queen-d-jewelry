"use client";

import { useEffect, useState } from "react";

type HeroDarkForm = {
  title: string;
  description: string;
  buttonText: string;
};

const defaultForm: HeroDarkForm = {
  title: "",
  description: "",
  buttonText: "",
};

const ExplorarySection = () => {
  const [form, setForm] = useState<HeroDarkForm>(defaultForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch("/api/hero-dark");
    //   const data = await res.json();
    //   setForm(data);
    // };
    // fetchData();
  }, []);

  const handleChange = (
    field: keyof HeroDarkForm,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // await fetch("/api/hero-dark", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      alert("Cập nhật thành công!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-yellow-50 py-24 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl border border-stone-200 p-12 space-y-12">

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <h1 className="text-3xl font-semibold text-stone-900">
            Chỉnh sửa Hero Dark Section
          </h1>
          <p className="text-stone-500 text-sm mt-3">
            Nội dung phần banner nền tối ở trang chủ.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-8">

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Tiêu đề
            </label>
            <textarea
              rows={3}
              value={form.title}
              onChange={(e) =>
                handleChange("title", e.target.value)
              }
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition"
              placeholder="Trang sức cao cấp – ..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Mô tả
            </label>
            <textarea
              rows={4}
              value={form.description}
              onChange={(e) =>
                handleChange("description", e.target.value)
              }
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition"
              placeholder="Chuyên cung cấp..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Text nút
            </label>
            <input
              value={form.buttonText}
              onChange={(e) =>
                handleChange("buttonText", e.target.value)
              }
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition"
              placeholder="Khám phá bộ sưu tập"
            />
          </div>

        </div>

        {/* Submit */}
        <div className="flex justify-end pt-6 border-t border-stone-200">
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

export default ExplorarySection;
