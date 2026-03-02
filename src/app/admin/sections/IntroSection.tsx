"use client"
import { useEffect, useState } from "react";

const IntroSection = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    primaryButton: "",
    secondaryButton: "",
    image: "",
  });

  useEffect(() => {
    // fetch("/api/hero")
    //   .then((res) => res.json())
    //   .then((data) => setForm(data));
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // await fetch("/api/hero", {
    //   method: "POST",
    //   body: JSON.stringify(form),
    // });
    alert("Cập nhật thành công!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-yellow-50 pt-35 py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-10 space-y-8">

          {/* Header */}
          <div className="border-b border-stone-200 pb-6">
            <h1 className="text-3xl font-semibold text-stone-900 tracking-wide">
              Chỉnh sửa Phần Giới Thiệu
            </h1>
            <p className="text-stone-500 mt-2 text-sm">
              Cập nhật nội dung hiển thị tại phần giới thiệu.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Tiêu đề
              </label>
              <textarea
                name="title"
                value={form.title}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition"
                placeholder="Nhập tiêu đề..."
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Mô tả
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition"
                placeholder="Nhập mô tả..."
              />
            </div>

            {/* Buttons */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Text nút chính
                </label>
                <input
                  name="primaryButton"
                  value={form.primaryButton}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  placeholder="Khám phá ngay"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Text nút phụ
                </label>
                <input
                  name="secondaryButton"
                  value={form.secondaryButton}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition"
                  placeholder="Xem bộ sưu tập"
                />
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Image URL
              </label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition"
                placeholder="https://..."
              />
            </div>

          </div>

          {/* Footer Button */}
          <div className="pt-6 border-t border-stone-200 flex justify-end">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
