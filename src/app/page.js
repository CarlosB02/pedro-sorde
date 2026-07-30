import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioPreview from "@/components/PortfolioPreview";
import CategoryCarousel from "@/components/CategoryCarousel";
import AboutTeaser from "@/components/AboutTeaser";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="film-grain" />
      <Header />
      <Hero />

      <PortfolioPreview />

      {/* Visual Chapters - Carousels */}
      <CategoryCarousel type="weddings" />
      <CategoryCarousel type="nightlife" />
      <CategoryCarousel type="personal" />
      <CategoryCarousel type="events" />

      <AboutTeaser />
      <CTA />
      <Footer />
    </main>
  );
}
