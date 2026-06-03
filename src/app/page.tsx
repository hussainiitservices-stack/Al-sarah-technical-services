import ScrollProgress from "@/components/ScrollProgress";
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
      <main className="flex-1">
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
