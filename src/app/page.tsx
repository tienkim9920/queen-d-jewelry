import { Metadata } from "next";
import FAQSection from "./sections/homes/FAQSection";
import FinalCTASection from "./sections/homes/FinalCTASection";
import HeroSection from "./sections/homes/HeroSection";
import IntroSection from "./sections/homes/IntroSection";
import TestimonialSection from "./sections/homes/TestimonialSection";
import ProductSection from "./sections/homes/ProductSection";

export const metadata: Metadata = {
  title: "Nineweb Solution - Thiết Kế Website & Landing Page Chuẩn SEO",
  description:
    "Nineweb Solution chuyên thiết kế website chuẩn SEO, Landing Page tối ưu chuyển đổi và Ecommerce cho cá nhân, doanh nghiệp. Giải pháp website toàn diện giúp tăng trưởng bền vững và tối đa doanh thu.",
  keywords:
    "thiết kế website, website chuẩn SEO, landing page chuyển đổi, thiết kế ecommerce, giải pháp website doanh nghiệp, Nineweb Solution",
  openGraph: {
    title: "Nineweb Solution - Giải Pháp Website Chuẩn SEO & Tăng Trưởng",
    description:
      "Cung cấp giải pháp thiết kế website doanh nghiệp, landing page bán hàng và ecommerce tối ưu SEO, hiệu suất cao, hỗ trợ tăng trưởng và chuyển đổi số toàn diện.",
    url: "https://nineweb.com",
    type: "website",
    images: [
      {
        url: "/img/queen-d-jewelry-share.png",
        width: 1200,
        height: 630,
        alt: "Nineweb Solution - Thiết kế Website & Landing Page Chuẩn SEO",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <IntroSection />
      <HeroSection />
      <FinalCTASection />
      <ProductSection />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
}
