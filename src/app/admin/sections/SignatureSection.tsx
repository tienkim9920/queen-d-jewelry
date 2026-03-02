"use client";

import { useEffect, useState } from "react";

const SignatureSection = () => {
  const [form, setForm] = useState({
    label: "",
    title: "",
    buttonText: "",
    image: "",
  });

  useEffect(() => {
    // fetch("/api/signature")
    //   .then((res) => res.json())
    //   .then((data) => setForm(data));
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // await fetch("/api/signature", {
    //   method: "POST",
    //   body: JSON.stringify(form),
    // });
    alert("Cập nhật thành công!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-black/5 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-stone-200 space-y-8">

        <div>
          <h1 className="text-3xl font-semibold text-stone-900">
            Chỉnh sửa Signature Section
          </h1>
          <p className="text-stone-500 text-sm mt-2">
            Cập nhật nội dung tại phần Signature Collection.
          </p>
        </div>

        <div className="space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2">Label</label>
            <input
              name="label"
              value={form.label}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <textarea
              name="title"
              rows={3}
              value={form.title}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Button Text</label>
            <input
              name="buttonText"
              value={form.buttonText}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:ring-1 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureSection;
