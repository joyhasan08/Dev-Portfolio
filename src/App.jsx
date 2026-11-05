import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import WhatsAppContact from "./Components/Contact/WhatsAppContact";
import FloatingWhatsApp from "./Components/Button/FloatingWhatsApp";
import AboutMe from "./Components/About/AboutMe";
import BodySection from "./Section/BodySection";
import Header from "./Section/Header";
import ProjectSection from "./Section/ProjectSection";
import FooterSection from "./Components/Footer/FooterSection";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 300,
      easing: "ease-in-out-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <Header />
      <div data-aos="fade-right">
        <BodySection />
      </div>
      <ProjectSection />
      <div data-aos="fade-up">
        <AboutMe />
        <WhatsAppContact />
      </div>
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
