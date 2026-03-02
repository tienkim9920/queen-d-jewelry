"use client";

import { useEffect, useState } from "react";

type BrandItem = {
  title: string;
  desc: string;
  icon: string;
};

type BrandForm = {
  items: BrandItem[];
};

const BrandValueSection = () => {
  const [form, setForm] = useState<BrandForm>({ items: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch("/api/brand-values")
    //   .then((res) => res.json())
    //   .then((data) => setForm(data));
  }, []);

  const handleChange = (
    index: number,
    field: keyof BrandItem,
    value: string
  ) => {
    setForm((prev) => ({
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    // await fetch("/api/brand-values", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    setLoading(false);
    alert("Cập nhật thành công!");
  };

  return (
    <div className="min-h-screen bg-stone-50 py-24 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-12 space-y-12">

        <h1 className="text-3xl font-semibold">
          Chỉnh sửa Brand Values Section
        </h1>

        <div className="space-y-10">
          {form.items.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 bg-stone-50 space-y-4"
            >
              <h3 className="font-medium">Item {index + 1}</h3>

              <input
                value={item.title}
                onChange={(e) =>
                  handleChange(index, "title", e.target.value)
                }
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Title"
              />

              <textarea
                value={item.desc}
                onChange={(e) =>
                  handleChange(index, "desc", e.target.value)
                }
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Description"
              />

              <textarea
                value={item.icon}
                onChange={(e) =>
                  handleChange(index, "icon", e.target.value)
                }
                className="w-full border rounded-lg px-4 py-2 font-mono text-xs"
                rows={4}
                placeholder="SVG code"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end">
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

export default BrandValueSection;
