import { TopBanner } from "@/components/layout/TopBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CourseHighlights } from "@/components/home/CourseHighlights";
import { PlacementSnapshot } from "@/components/home/PlacementSnapshot";
import { AboutSnapshot } from "@/components/home/AboutSnapshot";
import { CampusGallery } from "@/components/home/CampusGallery";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { RecruitersMarquee } from "@/components/home/RecruitersMarquee";
import { NewsPreview } from "@/components/home/NewsPreview";
import { CTABanner } from "@/components/home/CTABanner";

const Index = () => {
  return (
    <div className="relative">
      <TopBanner />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <WhyChooseUs />
        <CourseHighlights />
        <PlacementSnapshot />
        <AboutSnapshot />
        <CampusGallery />
        <TestimonialsCarousel />
        <RecruitersMarquee />
        <NewsPreview />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
