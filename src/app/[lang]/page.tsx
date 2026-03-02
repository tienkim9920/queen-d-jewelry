import FAQSection from "../sections/homes/FAQSection";
import FinalCTASection from "../sections/homes/FinalCTASection";
import HeroSection from "../sections/homes/HeroSection";
import IntroSection from "../sections/homes/IntroSection";
import TestimonialSection from "../sections/homes/TestimonialSection";

export default function Home() {
  return (
    <div>
      <IntroSection />
      <HeroSection />
      <TestimonialSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
