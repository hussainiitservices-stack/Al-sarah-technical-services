import ScrollProgress from "@/components/ScrollProgress";
import MobileCallBar from "@/components/MobileCallBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ExpandingCards from "@/components/ExpandingCards";
import StackingCards from "@/components/StackingCards";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Brochure from "@/components/Brochure";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <MobileCallBar />
      <main className="flex-1 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero />
        <Services />
        <ExpandingCards />
        <StackingCards />
        <Industries />
        <Clients />
        <WhyUs />
        <About />
        <Brochure />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
