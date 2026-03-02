"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslate } from "@/hooks/useTranslate";
import { Language } from "@/hooks/translations";

const TestimonialSection = () => {
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
        <section className="bg-[#10101d] py-28 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="reveal text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {t('khachHangNoiGi')}
                    </h2>
                    <p className="mt-4 text-gray-400 text-lg">
                        {t('moTaTestimonial')}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Testimonial 1 */}
                    <div className="reveal delay-1 group p-8 rounded-2xl bg-white/5 border border-white/10 
        backdrop-blur-md hover:bg-white/10 hover:-translate-y-3 
        transition-all duration-500">

                        <div className="text-yellow-400 mb-4 transition-opacity duration-500 group-hover:opacity-80">
                            ★★★★★
                        </div>

                        <p className="text-gray-300 mb-6">
                            {t('testimonial1Content')}
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src="/image/ceo-duhocqueen.webp"
                                    alt={t('client')}
                                    fill
                                    sizes="48px"
                                    className="rounded-full object-cover border border-white/10 shadow-md"
                                />
                            </div>
                            <div>
                                <div className="text-white font-semibold">
                                    {t('testimonial1Name')}
                                </div>
                                <div className="text-gray-500 text-sm">
                                    {t('testimonial1Role')}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="reveal delay-2 group p-8 rounded-2xl bg-white/5 border border-white/10 
        backdrop-blur-md hover:bg-white/10 hover:-translate-y-3 
        transition-all duration-500">

                        <div className="text-yellow-400 mb-4 transition-opacity duration-500 group-hover:opacity-80">
                            ★★★★★
                        </div>

                        <p className="text-gray-300 mb-6">
                            {t('testimonial2Content')}
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src="/image/ceo-tran-hoang-nam.jpg"
                                    alt={t('client')}
                                    fill
                                    sizes="48px"
                                    className="rounded-full object-cover border border-white/10 shadow-md"
                                />
                            </div>
                            <div>
                                <div className="text-white font-semibold">
                                    {t('testimonial2Name')}
                                </div>
                                <div className="text-gray-500 text-sm">
                                    {t('testimonial2Role')}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="reveal delay-3 group p-8 rounded-2xl bg-white/5 border border-white/10 
        backdrop-blur-md hover:bg-white/10 hover:-translate-y-3 
        transition-all duration-500">

                        <div className="text-yellow-400 mb-4 transition-opacity duration-500 group-hover:opacity-80">
                            ★★★★★
                        </div>

                        <p className="text-gray-300 mb-6">
                            {t('testimonial3Content')}
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src="/image/ceo-le-thi-thanh.jpg"
                                    alt={t('client')}
                                    fill
                                    sizes="48px"
                                    className="rounded-full object-cover border border-white/10 shadow-md"
                                />
                            </div>
                            <div>
                                <div className="text-white font-semibold">
                                    {t('testimonial3Name')}
                                </div>
                                <div className="text-gray-500 text-sm">
                                    {t('testimonial3Role')}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;