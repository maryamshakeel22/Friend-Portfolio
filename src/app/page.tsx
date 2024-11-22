import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Services from "./components/ServicesSection";

export default function Home() {
  return (
    <main className="bg-[#2c0d3e]">
      <Navbar />
     <HeroSection />
     <AboutSection />
     <ProjectsSection projectsData={[]}/>
     <Services />
     <ContactSection />
     <Footer />
    </main>
  );
}
