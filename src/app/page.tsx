import AboutSection from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Partners />
    </>
  );
}
