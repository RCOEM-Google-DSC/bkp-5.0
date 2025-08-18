import AboutSection from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Partners from "@/components/partners";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <AboutSection />
    <Partners/>
    </>
  );
}
