import pic from "../../assets/logo/joyPicSM.png";
import pin2 from "./../../assets/logo/pic2.jpg";
import ButtonCoustom from "../Button/ButtonCoustom";

import git from "../../assets/icon/code.png";
import fb from "../../assets/icon/facebook.png";
import lk from "../../assets/icon/lk.png";
import QusButton from "../Button/QusButton";
import TitleAnimation from "../Ui/TitleAnimation";
import GitState from "../Ui/GitState";
import ProfileCard from "../Ui/ProfileCard";
// import CoolText from './../Ui/CoolText';
const BannerPrimary = () => {
  return (
    <div
      style={{
        // backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
      className=" min-h-[700px]   flex flex-col  items-center text-left space-y-8 px-8 pt-32 "
    >
      <div className="flex flex-col-reverse md:flex-row text-center  md:text-left space-y-16 items-center justify-between gap-8 max-w-7xl">
        <div className=" space-y-8 ">

         {/* <div className="flex gap-4 items-center">
            <QusButton/>
           <h1 className="md:text-5xl text-3xl font-bold  gap-4">
            {" "}
            HEY , I'M ZARJIJ HASAN
          </h1>
         </div> */}
         {/* <CoolText/> */}

          <p className="leading-relaxed tracking-wide max-w-3xl text-center md:text-left text-lg font-mono">
            A passionate MERN Stack Developer and CSE graduate with a strong foundation in both backend and frontend technologies. Currently, I'm honing my skills in creating dynamic and responsive web applications and cross-platform mobile apps using React Native.

          </p>
          {/* <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p> */}
          <div className="">
            {/* <GitState/> */}
          </div>
          <ButtonCoustom title={"VIEW PROJECTS"} />         
        </div>
        {/* img card */}
       <div className="pb-14">
           <ProfileCard/>
       </div>
        {/* <div className="flex flex-col justify-center items-center gap-4">
          <img
            className="rounded-full md:w-80 md:h-80 w-64 h-64 object-fill"
            src={pin2}
            alt=""
          />
          <div className="flex gap-4">
           <a href="https://github.com/joyhasan08">
           <img
            // border-[#FFDE59]
              className="w-14 h-14  border-4 hover:border-8  rounded-full  bg-[#8396ff77]"
              src={git}
              alt=""
            />
           </a>
           <a href="https://dev-portfolio-steel-five.vercel.app/">
           <img
              className="w-14 h-14  border-4 hover:border-8  rounded-full bg-[#5498ff59]"
              src={fb}
              alt=""
            />
           </a>
          <a href="https://www.linkedin.com/in/zarjij-hasan-143381151/">
          <img
              className="w-14 h-14  border-4 hover:border-8  rounded-full bg-[#40bcff60]"
              src={lk}
              alt=""
            />
          </a>
          </div>
        </div> */}
        {/* img card 2 */}
      </div>
    </div>
  );
};

export default BannerPrimary;
