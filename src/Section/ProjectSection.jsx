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
      <Title title={"MY PROJECTS"} />

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

        <ButtonCoustom title={"View All Projects"} />
      </div>
    </div>
  );
};

export default ProjectSection;
