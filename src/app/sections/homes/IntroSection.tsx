'use client';
import Image from "next/image";
import { useEffect } from "react";

const IntroSection = () => {
    const handleGentleAutoScroll = () => {
        let isCancelled = false;
        const speed = 3; // càng nhỏ càng chậm (0.3 – 0.8 là đẹp)

        const cancel = () => {
            isCancelled = true;
            window.removeEventListener("wheel", cancel);
            window.removeEventListener("touchstart", cancel);
        };

        window.addEventListener("wheel", cancel, { passive: true });
        window.addEventListener("touchstart", cancel, { passive: true });

        const scrollStep = () => {
            if (isCancelled) return;

            window.scrollBy(0, speed);

            if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
                requestAnimationFrame(scrollStep);
            }
        };

        requestAnimationFrame(scrollStep);
    };

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
        <section className="relative pt-36 pb-28 px-6 overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/image/hero-bg.jpg"
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

            <div className="relative max-w-7xl mx-auto text-center">

                {/* Badge */}
                <div className="reveal delay-1 inline-block mb-6 px-5 py-2 rounded-full 
    bg-white/5 border border-white/10 text-sm text-gray-300">
                    Queen D Jewelry - Tinh hoa trang sức cao cấp
                </div>

                {/* Headline */}
                <h1 className="reveal delay-2 text-4xl md:text-6xl font-semibold leading-tight mb-6 max-w-4xl mx-auto">
                    Trang sức tinh xảo, thiết kế tinh tế
                    <span className="block bg-gradient-to-r from-purple-600 to-pink-500
      bg-clip-text text-transparent">
                        Tôn vẻ đẹp vinh đẳng cấp
                    </span>
                </h1>

                {/* Subtext */}
                <p className="reveal delay-3 text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Chuyên cung cấp các dòng nhẫn, dây chuyền, vòng tay và bông tai cao cấp, được chế tác tinh xảo từ những chất liệu chọn lọc như vàng, bạc và đá quý cao cấp. Mỗi thiết kế đều mang phong cách sang trọng, thanh lịch và đẳng cấp, tôn vinh vẻ đẹp riêng biệt của người sở hữu.
                </p>

                {/* CTA */}
                <div className="reveal delay-4 flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={handleGentleAutoScroll}
                        className="px-8 py-4 rounded-full text-white font-medium
    bg-gradient-to-r from-purple-600 to-pink-500
    hover:opacity-90 transition-all duration-300 shadow-lg pointer"
                    >
                        Khám phá ngay
                    </button>

                    <a
                        href="#solution-section"
                        className="px-8 py-4 rounded-full border border-white/15 
        hover:bg-white/5 transition-all duration-300"
                    >
                        Xem bộ sưu tập
                    </a>
                </div>

            </div>
        </section>
    );
};

export default IntroSection;
