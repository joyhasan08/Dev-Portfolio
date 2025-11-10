import TiltedCard from './TitledCard';
import profilePic from "./../../assets/logo/pic2.jpg";
import { FaGithub, FaTeamspeak, FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";






export default function ProfileCard() {
  return (
    <TiltedCard
      imageSrc={profilePic}
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Frontend Developer"
      containerHeight="400px"
      containerWidth="400px"
      imageHeight="400px"
      imageWidth="400px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <div>
       
            <p className='text-2xl pt-72 rela font-mono text-gray-400 '>Zarjij Hasan joy </p>

            <IconContext.Provider value={{size:"40px", }} >
            <div className='flex shadow-2xl p-4 rounded-xl items-center gap-4 py-4 text-gray-400 '>
               <FaGithub />
               <FaLinkedin/>
               <FaTelegram/>
            </div>
            </IconContext.Provider>
        
        </div>
        
        
      }
    />
  );
}
