
import zar from '../assets/logo/titleLogo.png'
import fb from '../assets/icon/facebook.png'
import git from '../assets/icon/code.png'
import linkedin from '../assets/icon/lk.png'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    
    const divStyle = {
        backgroundImage: "url('../assets/bg/layered-waves-haikei.svg')", // Replace with your image path
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // width: '100%',
        // height: '100%',
        
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center'
      };


    return (
        <div
        style={divStyle}       
        >
            <footer className="px-4 py-8  bg-gray-900  text-gray-200">
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div>
                        <p>All Rights Reserved @ <span className='text-yellow-400 font-medium font-mono'>ZARJIJ HASAN</span></p>
                    </div>

                    <div className="flex gap-6 font-mono">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-2 hover:scale-110 hover:text-yellow-400 duration-300 ease-in-out"
                        >
                            <img className="w-8 h-8 bg-[#2e88ee] rounded-full object-cover" src={fb} alt="Facebook" />
                            <span>Facebook</span>
                        </a>
                        <a
                            href="https://github.com/joyhasan08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-2 hover:scale-110 hover:text-yellow-400 duration-300 ease-in-out"
                        >
                            <img className="w-8 h-8 bg-slate-400 rounded-full object-cover" src={git} alt="GitHub" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/zarjij-hasan-143381151/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-2 hover:scale-110 hover:text-yellow-400 duration-300 ease-in-out"
                        >
                            <img className="w-8 h-8 bg-sky-700 rounded-full object-cover" src={linkedin} alt="LinkedIn" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://wa.me/8801788450069"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center gap-2 hover:scale-110 hover:text-green-400 duration-300 ease-in-out"
                        >
                            <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white text-lg">
                                <FaWhatsapp />
                            </div>
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    
                  
                </div>
            </footer>
        </div>
    );
};

export default Footer;