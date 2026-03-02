"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslate } from "@/hooks/useTranslate";
import { Language } from "@/hooks/translations";
import Image from "next/image";

const HeroSection = () => {
    const { lang = 'vi' } = useParams();
    const { t } = useTranslate(lang as Language);

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
            { threshold: 0.15 }
        );

        reveals.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative py-28 px-6 bg-[#0b0b14] text-white overflow-hidden">
            {/* Gradient Background Glow */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] 
      bg-gradient-to-r from-purple-600 to-pink-500 opacity-15 blur-[160px] rounded-full animate-glow"></div>

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <p className="reveal delay-1 text-sm text-purple-400 mb-4 tracking-wide uppercase">
                        Queen D Jewelry
                    </p>

                    <h1 className="reveal delay-2 text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        Trang sức không chỉ để đeo.
                        <span className="block bg-gradient-to-r from-purple-600 to-pink-500 
                bg-clip-text text-transparent">
                            Mà để khẳng định đẳng cấp.
                        </span>
                    </h1>

                    <p className="reveal delay-3 text-gray-400 text-lg leading-relaxed mb-8">
                        Chúng tôi chuyên cung cấp nhẫn, dây chuyền, vòng tay và bông tai cao cấp
                        với thiết kế sang trọng, tinh xảo trong từng chi tiết.
                        Mỗi sản phẩm được chế tác từ chất liệu chọn lọc, đảm bảo giá trị thẩm mỹ
                        vượt thời gian và tôn vinh vẻ đẹp riêng của người sở hữu.
                    </p>

                    <div className="reveal delay-4 flex gap-10 mb-10 flex-wrap">
                        <div>
                            <h3 className="text-2xl font-semibold">+500</h3>
                            <p className="text-gray-400 text-sm">Sản phẩm đã được chế tác & phân phối</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">98%</h3>
                            <p className="text-gray-400 text-sm">Khách hàng hài lòng & quay lại</p>
                        </div>
                    </div>

                    <div className="reveal delay-5 flex gap-4 flex-wrap">
                        <Link
                            href="https://zalo.me/0763557366"
                            target="_blank"
                            className="px-8 py-4 rounded-full text-white font-medium
                    bg-gradient-to-r from-purple-600 to-pink-500
                    hover:opacity-90 transition-all duration-300 shadow-lg"
                        >
                            Nhận tư vấn trang sức
                        </Link>

                        <a
                            href="#collection-section"
                            className="px-8 py-4 rounded-full border border-white/15 
                    hover:bg-white/5 transition-all duration-300"
                        >
                            Xem bộ sưu tập
                        </a>
                    </div>

                </div>

                {/* RIGHT MOCKUP */}
                <div className="reveal delay-3 relative scale-95 mockup">
                    <div className="max-w-[380px] mx-auto rounded-3xl overflow-hidden 
        border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

                        <Image
                            src="/image/jewelry-01.jpg"
                            alt="Queen D Jewelry cao cấp"
                            width={400}
                            height={520}
                            className="w-full h-auto object-cover"
                            priority
                        />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;