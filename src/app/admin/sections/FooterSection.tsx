"use client";

import { useState } from "react";

interface FooterLink {
  label: string;
  url: string;
}

interface FooterForm {
  brandName: string;
  brandDescription: string;
  links: FooterLink[];
  hotline: string;
  email: string;
  copyright: string;
}

const FooterSection = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FooterForm>({
    brandName: "Luxury Jewelry",
    brandDescription: "Trang sức cao cấp – Đẳng cấp vượt thời gian.",
    links: [
      { label: "Trang chủ", url: "/" },
      { label: "Sản phẩm", url: "/products" },
      { label: "Bộ sưu tập", url: "/collections" },
    ],
    hotline: "0909 999 999",
    email: "contact@luxuryjewelry.vn",
    copyright: "© 2026 Luxury Jewelry. All rights reserved.",
  });

  const handleChange = (field: keyof FooterForm, value: any) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLinkChange = (
    index: number,
    field: keyof FooterLink,
    value: string
  ) => {
    const updatedLinks = [...form.links];
    updatedLinks[index][field] = value;
    setForm((prev) => ({
      ...prev,
      links: updatedLinks,
    }));
  };

  const addLink = () => {
    setForm((prev) => ({
      ...prev,
      links: [...prev.links, { label: "", url: "" }],
    }));
  };

  const removeLink = (index: number) => {
    const updatedLinks = form.links.filter((_, i) => i !== index);
    setForm((prev) => ({
      ...prev,
      links: updatedLinks,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      console.log("Submit footer data:", form);

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
            CMS – Footer Section
          </h1>
          <p className="text-stone-500 text-sm mt-3">
            Chỉnh sửa nội dung footer hiển thị cuối website.
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-8">

          {/* Brand Name */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Tên thương hiệu
            </label>
            <input
              value={form.brandName}
              onChange={(e) => handleChange("brandName", e.target.value)}
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Brand Description */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Mô tả
            </label>
            <textarea
              rows={3}
              value={form.brandDescription}
              onChange={(e) =>
                handleChange("brandDescription", e.target.value)
              }
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
            />
          </div>

          {/* Links */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-4">
              Danh sách liên kết
            </label>

            <div className="space-y-4">
              {form.links.map((link, index) => (
                <div
                  key={index}
                  className="border border-stone-200 rounded-2xl p-4 space-y-3 bg-stone-50"
                >
                  <input
                    placeholder="Tên link"
                    value={link.label}
                    onChange={(e) =>
                      handleLinkChange(index, "label", e.target.value)
                    }
                    className="w-full rounded-xl border border-stone-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  />
                  <input
                    placeholder="URL"
                    value={link.url}
                    onChange={(e) =>
                      handleLinkChange(index, "url", e.target.value)
                    }
                    className="w-full rounded-xl border border-stone-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  />
                  <button
                    onClick={() => removeLink(index)}
                    className="text-red-500 text-sm"
                  >
                    Xoá
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={addLink}
              className="mt-4 px-6 py-2 border rounded-full text-sm hover:bg-stone-100 transition"
            >
              + Thêm liên kết
            </button>
          </div>

          {/* Contact */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">
                Hotline
              </label>
              <input
                value={form.hotline}
                onChange={(e) => handleChange("hotline", e.target.value)}
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3">
                Email
              </label>
              <input
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Copyright */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-3">
              Copyright
            </label>
            <input
              value={form.copyright}
              onChange={(e) => handleChange("copyright", e.target.value)}
              className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>
        </div>

        {/* SUBMIT */}
        <div className="flex justify-end pt-6 border-t border-stone-200">
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default FooterSection;
