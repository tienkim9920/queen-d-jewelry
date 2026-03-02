"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  content: string;
  name: string;
  rating: number;
};

type TestimonialForm = {
  title: string;
  items: Testimonial[];
};

const CommentSection = () => {
  const [form, setForm] = useState<TestimonialForm>({
    title: "Khách hàng nói gì về chúng tôi",
    items: [
      {
        content: "",
        name: "",
        rating: 5,
      },
      {
        content: "",
        name: "",
        rating: 5,
      },
      {
        content: "",
        name: "",
        rating: 5,
      },
    ],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch("/api/testimonials")
    //   .then((res) => res.json())
    //   .then((data) => setForm(data));
  }, []);

  const handleChange = (
    index: number,
    field: keyof Testimonial,
    value: string | number
  ) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({ ...prev, title: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    // await fetch("/api/testimonials", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    setLoading(false);
    alert("Cập nhật thành công!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 py-24 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-2xl border border-stone-200 p-14 space-y-14">

        {/* Header */}
        <div className="border-b border-stone-200 pb-8">
          <h1 className="text-3xl font-semibold text-stone-900 tracking-wide">
            Chỉnh sửa Testimonials
          </h1>
          <p className="text-sm text-stone-500 mt-3">
            Quản lý nội dung đánh giá khách hàng.
          </p>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-stone-700 tracking-wide">
            Tiêu đề Section
          </label>

          <input
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
            placeholder="Khách hàng nói gì về chúng tôi"
          />
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          {form.items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-stone-200 bg-stone-50 p-10 space-y-6"
            >
              {/* Header Item */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-stone-800">
                  Testimonial {index + 1}
                </h3>
              </div>

              {/* Content */}
              <div className="space-y-6">

                <textarea
                  value={item.content}
                  onChange={(e) =>
                    handleChange(index, "content", e.target.value)
                  }
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
                  rows={4}
                  placeholder="Nội dung đánh giá..."
                />

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    value={item.name}
                    onChange={(e) =>
                      handleChange(index, "name", e.target.value)
                    }
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
                    placeholder="Tên khách hàng"
                  />

                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={item.rating}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "rating",
                        Number(e.target.value)
                      )
                    }
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition"
                    placeholder="Rating (1–5)"
                  />

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-8 border-t border-stone-200">
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

export default CommentSection;
