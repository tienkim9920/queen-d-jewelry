"use client"

import AboutSection from "./sections/AboutSection"
import BrandValueSection from "./sections/BrandValueSection"
import CollectionSection from "./sections/CollectionSection"
import CommentSection from "./sections/CommentSection"
import ContactSection from "./sections/ContactSection"
import ExplorarySection from "./sections/ExplorarySection"
import FAQSection from "./sections/FaqSection"
import FooterSection from "./sections/FooterSection"
import HighlightSection from "./sections/HighlightSection"
import IntroSection from "./sections/IntroSection"
import SignatureSection from "./sections/SignatureSection"

const AdminTrangSuc = () => {
  return (
    <div className="w-full h-full">
      <IntroSection />
      <SignatureSection />
      <CollectionSection />
      <HighlightSection />
      <ExplorarySection />
      <BrandValueSection />
      <AboutSection />
      <CommentSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default AdminTrangSuc
