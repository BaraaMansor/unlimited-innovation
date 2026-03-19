import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Metrics from "@/components/Metrics";
import Partners from "@/components/Partners";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Process />
        <Metrics />
        <Partners />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
