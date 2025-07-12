import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { IndustriesSection } from "@/components/industries-section"
import { WhyBpeSection } from "@/components/why-bpe-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <IndustriesSection />
      <WhyBpeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
