import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
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
    <>
      <Header />

      <div data-aos="fade-right">
        <BodySection />
      </div>
      <ProjectSection />
      <div data-aos="fade-right">
        {/* <AboutMe /> */}
        <AddUser />
      </div>

      <FooterSection/>
    </>
  );
}

export default App;
