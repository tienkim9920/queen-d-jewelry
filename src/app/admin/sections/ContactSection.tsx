"use client";

import { useState } from "react";

interface JewelrySectionForm {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<JewelrySectionForm>({
    subtitle: "Fine Jewelry",
    title: "Trang sức không chỉ để đeo",
    description:
      "Đó là cách bạn kể câu chuyện của chính mình – tinh tế, khác biệt và không trùng lặp.",
    buttonText: "Liên hệ tư vấn",
    buttonLink: "/contact",
    image: "",
  });

  const handleChange = (
    field: keyof JewelrySectionForm,
    value: string | boolean
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // TODO: call API here
      console.log("Submit data:", form);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Lưu thành công!");
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-yellow-50 py-24 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl border border-stone-200 p-12 space-y-12">

        {/* HEADER */}
        <div className="border-b border-stone-200 pb-8">
          <h1 className="text-3xl font-semibold text-stone-900">
            CMS – Contact Section
          </h1>
          <p className="text-stone-500 text-sm mt-3">
            Chỉnh sửa nội dung section hiển thị ngoài website.
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-8">

          {/* Subtitle */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Subtitle
            </label>
            <input
              value={form.subtitle}
              onChange={(e) => handleChange("subtitle", e.target.value)}
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 
                         focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Tiêu đề
            </label>
            <textarea
              rows={3}
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 
                         focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Mô tả
            </label>
            <textarea
              rows={5}
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 
                         focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Button Text */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Nội dung nút
            </label>
            <input
              value={form.buttonText}
              onChange={(e) => handleChange("buttonText", e.target.value)}
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 
                         focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Button Link */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Link nút
            </label>
            <input
              value={form.buttonLink}
              onChange={(e) => handleChange("buttonLink", e.target.value)}
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 
                         focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Hình ảnh
            </label>

            <div className="h-56 rounded-2xl border border-dashed border-stone-300 
                            bg-stone-50 flex items-center justify-center 
                            text-stone-400 text-sm overflow-hidden">
              {form.image ? (
                <img
                  src={form.image}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                "Chưa có hình ảnh"
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-4 text-sm"
            />
          </div>
        </div>

        {/* SUBMIT */}
        <div className="flex justify-end pt-6 border-t border-stone-200">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 
                       text-white font-medium shadow-md hover:shadow-lg 
                       hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
