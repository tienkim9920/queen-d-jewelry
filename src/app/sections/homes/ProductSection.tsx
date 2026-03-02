'use client';

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { use, useEffect } from "react";

const ProductSection = () => {
    const products = [
        {
            name: "Nhẫn Kim Cương Solitaire",
            price: "25.000.000đ",
            img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
            desc: "Thiết kế tối giản với viên kim cương chủ đạo, tôn vinh sự thanh lịch và khí chất."
        },
        {
            name: "Dây Chuyền Vàng 18K",
            price: "18.500.000đ",
            img: "https://images.unsplash.com/photo-1605106702842-01a887a31122",
            desc: "Đường nét mềm mại kết hợp cùng sắc vàng champagne tạo nên vẻ đẹp vượt thời gian."
        },
        {
            name: "Vòng Tay Cao Cấp",
            price: "12.000.000đ",
            img: "https://images.unsplash.com/photo-1605106702842-01a887a31122",
            desc: "Biểu tượng của sự tinh tế – hoàn thiện thủ công trong từng chi tiết nhỏ nhất."
        },
        {
            name: "Bông Tai Ngọc Trai",
            price: "9.800.000đ",
            img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
            desc: "Ngọc trai tự nhiên kết hợp thiết kế hiện đại, dành cho người phụ nữ thanh lịch sang trọng."
        },
    ];

    useEffect(() => {
        const reveals = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        reveals.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative py-28 bg-[#0b0b14] overflow-hidden">

            {/* Glow Background đồng bộ */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[800px] h-[800px] 
                    bg-gradient-to-r from-purple-600/20 via-fuchsia-500/15 to-pink-500/20
                    blur-[180px] rounded-full opacity-60">
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="reveal delay-1 text-center mb-28 max-w-3xl mx-auto">
                    <p className="uppercase tracking-[0.4em] text-xs text-stone-400 mb-6">
                        Highlight Collection
                    </p>
                    <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
                        Tuyệt tác dành cho
                        <br /> phong cách riêng biệt
                    </h2>
                    <div className="w-20 h-[1px] bg-white/30 mx-auto mt-8"></div>
                </div>

                {/* Products */}
                <div className="grid md:grid-cols-2 gap-20">

                    {products.map((p, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-[40px] overflow-hidden 
                            bg-white/5 backdrop-blur-xl border border-white/10
                            hover:border-white/20 transition duration-500 reveal delay-${i + 1}`}
                        >
                            <div className="grid md:grid-cols-2">

                                {/* Image */}
                                <div className="relative">
                                    <Image
                                        src={p.img}
                                        alt={p.name}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-12 flex flex-col justify-center">
                                    <p className="text-xs tracking-[0.35em] uppercase text-white/40 mb-6">
                                        0{i + 1}
                                    </p>

                                    <h3 className="text-2xl font-light text-white mb-6">
                                        {p.name}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        {p.desc}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-medium tracking-wide">
                                            {p.price}
                                        </span>

                                        <button className="group relative text-white">
                                            <ArrowUpRight
                                                size={20}
                                                strokeWidth={1.5}
                                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                            <span className="absolute left-0 -bottom-2 h-[1px] w-0 
        bg-gradient-to-r from-purple-400 to-pink-400 
        transition-all duration-500 group-hover:w-full">
                                            </span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ProductSection;