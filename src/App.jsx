import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import BodySection from "./Section/BodySection";
import Header from "./Section/Header";
import ProjectSection from "./Section/ProjectSection";
import FooterSection from "./Components/Footer/FooterSection";
// import GitState from "./Components/Ui/GitState";
// import TitleCard from "./Components/Ui/ProfileCard";
import ProfileCard from "./Components/Ui/ProfileCard";
import { FaGithub } from "react-icons/fa";

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
    <div className="">
          <Header />
      <div className="max-w-7xl  mx-auto">
        {/* <GitState/> */}
        {/* <TitleCard /> */}
        {/* <ProfileCard/> */}
        
      </div>  
      <div data-aos="fade-right">
        <BodySection />
        
      </div>
      <ProjectSection />
      <div data-aos="fade-right">
        {/* <AboutMe /> */}
        <AddUser />
      </div>

      <FooterSection/>
    </div>
    
    </>
  );
}

export default App;
