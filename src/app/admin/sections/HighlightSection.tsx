"use client";

import { useEffect, useState } from "react";

type Product = {
  name: string;
  price: string;
  img: string;
  description: string;
};

type HighlightForm = {
  label: string;
  title: string;
  products: Product[];
};

const defaultForm: HighlightForm = {
  label: "",
  title: "",
  products: Array(4).fill({
    name: "",
    price: "",
    img: "",
    description: "",
  }),
};

const HighlightSection = () => {
  const [form, setForm] = useState<HighlightForm>(defaultForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch("/api/highlight");
    //   const data = await res.json();
    //   setForm(data);
    // };
    // fetchData();
  }, []);

  const handleChange = (field: keyof HighlightForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleProductChange = (
    index: number,
    field: keyof Product,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      products: prev.products.map((p, i) =>
        i === index ? { ...p, [field]: value } : p
      ),
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    // await fetch("/api/highlight", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    setLoading(false);
    alert("Cập nhật thành công!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-yellow-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Main Card */}
        <div className="bg-white rounded-[32px] shadow-2xl border border-stone-200/70 p-12 space-y-16">

          {/* Header */}
          <div className="border-b border-stone-200 pb-8">
            <h1 className="text-3xl font-semibold text-stone-900 tracking-wide">
              Chỉnh sửa Highlight Section
            </h1>
            <p className="text-stone-500 text-sm mt-3">
              Quản lý nội dung và các sản phẩm nổi bật hiển thị trên trang chủ.
            </p>
          </div>

          {/* Section Info */}
          <div className="space-y-8">

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3 tracking-wide">
                Label
              </label>
              <input
                value={form.label}
                onChange={(e) => handleChange("label", e.target.value)}
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                placeholder="Highlight Collection"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-3 tracking-wide">
                Title
              </label>
              <textarea
                rows={3}
                value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                placeholder="Trang sức không chỉ để đeo..."
              />
            </div>

          </div>

          {/* Products */}
          <div className="space-y-14">
            {form.products.map((p, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-stone-50 to-white border border-stone-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm tracking-widest shadow-md">
                  0{index + 1}
                </div>

                <h3 className="text-lg font-medium text-stone-900 mb-6 tracking-wide">
                  Sản phẩm {index + 1}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                  <div className="space-y-6">
                    <input
                      value={p.name}
                      onChange={(e) =>
                        handleProductChange(index, "name", e.target.value)
                      }
                      className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
                      placeholder="Tên sản phẩm"
                    />

                    <input
                      value={p.price}
                      onChange={(e) =>
                        handleProductChange(index, "price", e.target.value)
                      }
                      className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
                      placeholder="Giá"
                    />

                    <input
                      value={p.img}
                      onChange={(e) =>
                        handleProductChange(index, "img", e.target.value)
                      }
                      className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
                      placeholder="Image URL"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={6}
                      value={p.description}
                      onChange={(e) =>
                        handleProductChange(index, "description", e.target.value)
                      }
                      className="w-full h-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition resize-none"
                      placeholder="Mô tả sản phẩm..."
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Submit */}
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
    </div>
  );
};

export default HighlightSection;
