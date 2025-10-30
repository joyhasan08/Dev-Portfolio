import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ButtonCoustom from "../Components/Button/ButtonCoustom";
import ButtonLive from "../Components/Button/ButtonLive";
import Title from "../Components/Title";
import arcf from "../assets/project/arcf.png";
import atc from "../assets/project/atcWeb.png";
import ecom from "../assets/project/ecom.png";
import ngo from "../assets/project/ngo.png";
import job from "../assets/project/jobsitee.png"

import appSs1 from "../assets/project/ract-app-ss.png"
import appSs2 from "../assets/project/ract-app-ss2.png"
import appSs3 from "../assets/project/ract-app-ss3.png"


const ProjectSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 10,
    });
  }, []);
  return (
    <div id="projects" className="max-w-7xl mx-auto">
      <div className="px-4">
      <Title title={"MY PROJECTS"} />
      </div>

      {/* app section  */}
            {/* cart start  */}
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-20 md:gap-28 p-4  md:p-10 mt-8 md:mt-24 md:ml-10 font-mono w-full"
        data-aos="slide-up"
        data-aos-
      >
        <div className="hover:scale-105 duration-500 ease-in-out md:w-1/2">
          
          <div className="flex flex-col md:flex-row justify-items-center items-center gap-4 md:gap-10 w-fit mx-auto">
            <img src={appSs1} alt="" />
            <img src={appSs3} alt="" />
            <img src={appSs2} alt="" />
            

          </div>
        </div>
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-3xl font-semibold leading-relaxed">
            Meditation App .
          </h1>
          <p className="max-w-4xl">
            Find your calm anywhere, anytime. This Meditation App helps you reduce stress, improve focus, and build mindfulness through guided sessions, calming sounds, and breathing exercises. Built with React Native for a smooth and responsive experience on both Android and iOS.
          </p>
          <div className="flex gap-4">
            {/* <a href="https://github.com/joyhasan08/Meditation-App-_-react-_-native">
            <ButtonCoustom title={"Case Study"} />
            </a> */}
            <ButtonLive link={"https://github.com/joyhasan08/Meditation-App-_-react-_-native"} />
          </div>
        </div>
      </div>
      {/* card end  */}



    {/* web section */}
      {/* cart start  */}
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-20 p-4 font-mono"
        data-aos="slide-up"
        data-aos-
      >
        <div className="hover:scale-105 duration-500 ease-in-out">
          <img src={atc} alt="" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold leading-relaxed">
            ATC Tech Ltd Website
          </h1>
          <p className="max-w-4xl">
            The project involves converting a Figma design into a fully
            functional website for ATC Tech Ltd. The goal is to create an
            engaging and user-friendly website that accurately reflects the
            company’s brand and offerings
          </p>
          <div className="flex gap-4">
            <ButtonCoustom title={"Case Study"} />
            <ButtonLive link={"https://www.atctechltd.com/"} />
          </div>
        </div>
      </div>
      {/* card end  */}


  



{/* Arcf site  */}
      {/* <div
        className="flex flex-col md:flex-row  justify-between items-center gap-20 p-4 font-mono"
        data-aos="slide-up"
      >
        <div>
          <img src={arcf} alt="" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold leading-relaxed">
            ARCF Website
          </h1>
          <p className="max-w-4xl">
            The project involves converting a Figma design into a fully
            functional website for ATC Tech Ltd. The goal is to create an
            engaging and user-friendly website that accurately reflects the
            company’s brand and offerings
          </p>
          <div className="flex gap-4">
            <ButtonCoustom title={"Case Study"} />
            <ButtonLive />
          </div>
        </div>
      </div> */}

      <div
        className="flex flex-col md:flex-row  justify-between items-center gap-20 p-4 font-mono"
        data-aos="slide-up"
      >
        <div className="hover:scale-105 duration-500 ease-in-out">
          <img src={ngo} alt="" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold leading-relaxed">
            NGO Website
          </h1>
          <p className="max-w-4xl">
            The project involves converting a Figma design into a fully
            functional website for ATC Tech Ltd. The goal is to create an
            engaging and user-friendly website that accurately reflects the
            company’s brand and offerings
          </p>
          <div className="flex gap-4">
            <ButtonCoustom title={"Case Study"} />
            <ButtonLive link={"https://ngo-project-one.vercel.app/"} />

            {/* <Link to={'https://ngo-project-one.vercel.app/auth/login'} > gooo</Link> */}
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row  justify-between items-center gap-20 p-4 font-mono"
        data-aos="slide-up"
      >
        <div className="hover:scale-105 duration-500 ease-in-out">
          <img src={ecom} alt="" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold leading-relaxed">
            {" "}
            E-commerce Website
          </h1>
          <p className="max-w-4xl">
            The project involves converting a Figma design into a fully
            functional website for ATC Tech Ltd. The goal is to create an
            engaging and user-friendly website that accurately reflects the
            company’s brand and offerings
          </p>
          <div className="flex gap-4">
            <ButtonCoustom title={"Case Study"} />
            <ButtonLive link={"https://gamerhub-a999a.web.app/"} />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row  justify-between items-center gap-20 p-4 font-mono "
        data-aos="slide-up"
      >
        <div className="hover:scale-105 duration-500 ease-in-out">
          <img src={job} alt="" />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold leading-relaxed">
            {" "}
            Online JobPlacemanet Website
          </h1>
          <p className="max-w-4xl">
            Connect is a Professional Job Placement Platform. Here we will
            provide you only interesting content, which you will like very much.
            We're dedicated to providing you the best of job, with a focus on
            dependability and Services. We're working to turn our passion for
            Job Placement Platform into a booming online website. We hope you
            enjoy our Job Placement Platform as much as we enjoy offering them
            to you.
          </p>
          <div className="flex gap-4">
            <ButtonCoustom title={"Case Study"} />
            <ButtonLive link={"https://connet-app.web.app/"} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-fit mx-auto">
        <div></div>
      </div>

      <div className="w-fit mx-auto">

        {/* <ButtonCoustom title={"View All Projects"} /> */}
      </div>
    </div>
  );
};

export default ProjectSection;
