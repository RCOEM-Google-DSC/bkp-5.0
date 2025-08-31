import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Prizes from "@/components/prizes";
import Partners from "@/components/partners";
import Leaderboard from "@/components/leaderboard";
import { Footer } from "@/components/footer";
import CommunityPartners from "@/components/communitypartners";
import BannerSection from "@/components/banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <BannerSection />
      <Hero />
      <About />
      <Prizes />
      <Partners />
      <CommunityPartners />
      <Leaderboard />
      <Footer />
    </main>
  );
}
