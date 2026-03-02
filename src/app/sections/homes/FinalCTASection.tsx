'use client';

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const FinalCTASection = () => {

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
        <section className="relative pt-36 pb-28 px-6 overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/image/hero-bg-02.webp"
                    alt="Queen D Jewelry - Thời trang trang sức cao cấp"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0f0f1a]/75 -z-10"></div>

            {/* Soft Gradient Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
  bg-[linear-gradient(#6c40c9,#804fa0)] opacity-20 blur-[180px] rounded-full"></div>

            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[700px] h-[700px] 
                bg-gradient-to-r from-purple-600/25 via-fuchsia-500/20 to-pink-500/25
                blur-[140px] rounded-full opacity-80"></div>
            </div>

            <div className="relative max-w-4xl mx-auto text-center">

                <span className="reveal uppercase tracking-[0.4em] text-xs text-stone-400">
                    Queen D Jewelry
                </span>

                <h2 className="reveal delay-1 mt-6 text-4xl md:text-6xl text-white leading-tight tracking-tight">
                    Tỏa sáng theo cách của bạn.
                    <br />
                    Đẳng cấp không cần phô trương.
                </h2>

                <p className="reveal delay-2 mt-8 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Mỗi thiết kế tại Queen D Jewelry được tạo ra để tôn vinh khí chất riêng biệt,
                    lưu giữ những khoảnh khắc đáng giá và đồng hành cùng bạn qua năm tháng.
                    Không chỉ là trang sức – đó là dấu ấn cá nhân.
                </p>

                {/* Buttons */}
                <div className="reveal delay-3 mt-14 flex flex-col sm:flex-row gap-5 justify-center">

                    <Link
                        href="https://zalo.me/0763557366"
                        target="_blank"
                        className="group relative px-10 py-4 rounded-full 
                        bg-gradient-to-r from-purple-600 to-pink-500 
                        text-white font-medium tracking-wide
                        transition-all duration-300 
                        hover:shadow-2xl hover:shadow-purple-500/40
                        active:scale-95 overflow-hidden"
                    >
                        Nhận tư vấn trang sức
                    </Link>

                    <a
                        href="#collection-section"
                        className="px-10 py-4 rounded-full 
                        border border-white/20 text-white 
                        hover:bg-white/10 hover:border-white/40
                        active:scale-95
                        transition-all duration-300 backdrop-blur-sm"
                    >
                        Xem bộ sưu tập
                    </a>

                </div>

                {/* Trust Line */}
                <p className="reveal delay-4 mt-12 text-sm text-gray-500 tracking-[0.2em] uppercase">
                    Thiết kế tinh xảo · Chất liệu chọn lọc · Giá trị vượt thời gian
                </p>

            </div>

        </section>
    );
};

export default FinalCTASection;