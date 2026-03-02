"use client";

import { useEffect, useState } from "react";

type Product = {
  name: string;
  price: string;
  img: string;
};

type CollectionForm = {
  label: string;
  title: string;
  products: Product[];
};

const defaultForm: CollectionForm = {
  label: "",
  title: "",
  products: [
    { name: "", price: "", img: "" },
    { name: "", price: "", img: "" },
    { name: "", price: "", img: "" },
    { name: "", price: "", img: "" },
  ],
};

const CollectionSection = () => {
  const [form, setForm] = useState<CollectionForm>(defaultForm);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Bật lại khi có API
        // const res = await fetch("/api/featured");
        // const data: CollectionForm = await res.json();
        // setForm(data);

      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = <K extends keyof CollectionForm>(
    field: K,
    value: CollectionForm[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProductChange = <
    K extends keyof Product
  >(
    index: number,
    field: K,
    value: Product[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      products: prev.products.map((product, i) =>
        i === index ? { ...product, [field]: value } : product
      ),
    }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // await fetch("/api/featured", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      alert("Cập nhật thành công!");
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  /* ================= RENDER ================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-yellow-50 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-stone-200 p-10 space-y-10">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-stone-900">
            Chỉnh sửa Collection Selection
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Quản lý nội dung và 4 sản phẩm hiển thị.
          </p>
        </div>

        {/* Section Info */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Label
            </label>
            <input
              value={form.label}
              onChange={(e) =>
                handleChange("label", e.target.value)
              }
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:outline-none transition"
              placeholder="Signature Selection"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              value={form.title}
              onChange={(e) =>
                handleChange("title", e.target.value)
              }
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:outline-none transition"
              placeholder="Tuyển chọn tinh hoa"
            />
          </div>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 gap-8">
          {form.products.map((product, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded-2xl p-6 space-y-4 bg-stone-50"
            >
              <h3 className="font-medium text-stone-800">
                Sản phẩm {index + 1}
              </h3>

              <input
                value={product.name}
                onChange={(e) =>
                  handleProductChange(index, "name", e.target.value)
                }
                className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-yellow-500 focus:outline-none"
                placeholder="Tên sản phẩm"
              />

              <input
                value={product.price}
                onChange={(e) =>
                  handleProductChange(index, "price", e.target.value)
                }
                className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-yellow-500 focus:outline-none"
                placeholder="Giá"
              />

              <input
                value={product.img}
                onChange={(e) =>
                  handleProductChange(index, "img", e.target.value)
                }
                className="w-full border border-stone-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-yellow-500 focus:outline-none"
                placeholder="Image URL"
              />
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="flex justify-end">
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
};

export default CollectionSection;