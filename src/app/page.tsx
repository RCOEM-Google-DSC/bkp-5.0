import AboutSection from "@/components/about";
import CodeChefHistory from "@/components/codechefhistory";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Leaderboard from "@/components/leaderboard";
import MissionSection from "@/components/mission";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Partners />
      {/* <Leaderboard /> */}
      {/* <CodeChefHistory /> */}
      <MissionSection />
      <Footer />
    </>
  );
}
