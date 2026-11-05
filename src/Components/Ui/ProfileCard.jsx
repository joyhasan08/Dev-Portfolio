import TiltedCard from './TitledCard';
import profilePic from "./../../assets/logo/pic2.jpg";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function ProfileCard() {
  return (
    <TiltedCard
      imageSrc={profilePic}
      altText="Zarjij Hasan Joy"
      captionText="MERN & Mobile Developer"
      containerHeight="400px"
      containerWidth="400px"
      imageHeight="400px"
      imageWidth="400px"
      rotateAmplitude={12}
      scaleOnHover={1.1}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <div>
            <p className='text-2xl pt-72 font-mono text-white drop-shadow-md font-bold'>Zarjij Hasan Joy</p>

            <IconContext.Provider value={{ size: "32px" }}>
            <div className='flex shadow-2xl p-3 rounded-xl items-center gap-4 py-3 text-gray-200 bg-black/40 backdrop-blur-sm mt-2'>
               <a
                 href="https://github.com/joyhasan08"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-yellow-400 hover:scale-110 transition-all duration-200"
                 aria-label="GitHub Profile"
               >
                 <FaGithub />
               </a>
               <a
                 href="https://www.linkedin.com/in/zarjij-hasan-143381151/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-yellow-400 hover:scale-110 transition-all duration-200"
                 aria-label="LinkedIn Profile"
               >
                 <FaLinkedin />
               </a>
               <a
                 href="https://wa.me/8801788450069"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-green-400 hover:scale-110 transition-all duration-200"
                 aria-label="WhatsApp Contact"
               >
                 <FaWhatsapp />
               </a>
            </div>
            </IconContext.Provider>
        </div>
      }
    />
  );
}
