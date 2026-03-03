"use client";

import ProductSection from "@/app/sections/homes/ProductSection";
import { useState } from "react";

type Product = {
    name: string;
    description: string;
    price: string;
    image: string;
};

export default function ProductSectionEditor() {
    const [sectionTitle, setSectionTitle] = useState(
        "Tuyệt tác dành cho phong cách riêng biệt"
    );

    const [products, setProducts] = useState<Product[]>([
        {
            name: "Nhẫn Kim Cương Hoàng Gia",
            description: "Thiết kế sang trọng, tôn vinh đẳng cấp quý phái.",
            price: "25.000.000₫",
            image: "/image/product1.jpg",
        },
        {
            name: "Dây Chuyền Ánh Sao",
            description: "Tinh xảo trong từng chi tiết, nổi bật mọi ánh nhìn.",
            price: "18.500.000₫",
            image: "/image/product2.jpg",
        },
        {
            name: "Vòng Tay Ngọc Trai",
            description: "Thanh lịch và mềm mại, phù hợp mọi phong cách.",
            price: "12.900.000₫",
            image: "/image/product3.jpg",
        },
        {
            name: "Bông Tai Sapphire",
            description: "Sự kết hợp hoàn hảo giữa nghệ thuật và đẳng cấp.",
            price: "15.700.000₫",
            image: "/image/product4.jpg",
        },
    ]);

    const handleChange = (
        index: number,
        field: keyof Product,
        value: string
    ) => {
        const updated = [...products];
        updated[index][field] = value;
        setProducts(updated);
    };

    const handleSave = () => {
        console.log("Saved Product Section:", {
            sectionTitle,
            products,
        });
        alert("Đã lưu Product Section!");
    };

    return (
        <div className="space-y-12">
            {/* ================= FORM ================= */}
            <div>
                <h1 className="text-3xl font-bold mb-6 text-purple-400">
                    Edit Product Section
                </h1>

                {/* Section Title */}
                <input
                    value={sectionTitle}
                    onChange={(e) => setSectionTitle(e.target.value)}
                    placeholder="Section Title"
                    className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white mb-8"
                />

                {/* Product Editor */}
                <div className="space-y-10">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-[#111122] p-6 rounded-xl border border-gray-800 space-y-4"
                        >
                            <h2 className="text-lg font-semibold text-purple-300">
                                Product {index + 1}
                            </h2>

                            <input
                                value={product.name}
                                onChange={(e) =>
                                    handleChange(index, "name", e.target.value)
                                }
                                placeholder="Product Name"
                                className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                            />

                            <textarea
                                value={product.description}
                                onChange={(e) =>
                                    handleChange(index, "description", e.target.value)
                                }
                                rows={3}
                                placeholder="Product Description"
                                className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                            />

                            <input
                                value={product.price}
                                onChange={(e) =>
                                    handleChange(index, "price", e.target.value)
                                }
                                placeholder="Price"
                                className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                            />

                            <input
                                value={product.image}
                                onChange={(e) =>
                                    handleChange(index, "image", e.target.value)
                                }
                                placeholder="Image URL or Path"
                                className="w-full p-3 rounded-lg bg-[#1a1a33] border border-gray-700 text-white"
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleSave}
                    className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-[#6c40c9] to-[#804fa0] font-semibold"
                >
                    Save Changes
                </button>
            </div>

            {/* ================= PREVIEW ================= */}
            <div className="bg-[#111122] p-10 rounded-2xl border border-gray-800">
                <h2 className="text-sm uppercase text-gray-400 mb-6">
                    Live Preview
                </h2>

                <ProductSection />
            </div>
        </div>
    );
}