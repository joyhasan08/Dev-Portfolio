// import logoPic from "../../assets/logo/Jlogo.png"

// const NavbarPrimary = () => {
//     return (
//         <div className="fixed top-0 w-full z-20  text-lg font-mono font-semibold flex justify-between items-center bg-slate-100 py-4 px-10 shadow-lg  drop-shadow-2xl">
//             <div className="flex items-center gap-3">
//                 <img className=" w-14 h-14 rounded-full border-4 border-[#FFDE59]" src={logoPic} alt="" />
//                 <p>ZARJIJ HASAN JOY</p>
//             </div>
//             <div>
//                 <ul className="flex items-center gap-8">
//                     <li>HOME</li>
//                     <li> ABOUT</li>
//                     <li> CONTACT</li>
//                     <li> PROJECTS</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default NavbarPrimary;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoPic from "../../assets/logo/Jlogo.png";
import { Link } from "react-router-dom";
import ButtonDownloadCV from "../Button/ButtonDownloadCV";

const NavbarPrimary = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 w-full z-20 text-lg font-mono font-semibold flex justify-between items-center bg-slate-100 py-4 px-10 shadow-lg drop-shadow-2xl">
            <div className="flex items-center gap-3">
                <img className="w-14 h-14 rounded-full border-4 border-[#FFDE59]" src={logoPic} alt="Logo" />
                <p>ZARJIJ HASAN JOY</p>
            </div>
            <div className="hidden md:flex">
                <ul className="flex items-center gap-8">
                    <li className="hover:text-[#FFDE59] cursor-pointer">HOME</li>
                    <li className="hover:text-[#FFDE59] cursor-pointer">ABOUT</li>
                    <li className="hover:text-[#FFDE59] cursor-pointer">CONTACT</li>
                    {/* <a href="#project"><li className="hover:text-[#FFDE59] cursor-pointer">PROJECTS</li></a> */}
                    {/* <Link></Link> */}
                    {/* <Link to={'projects'}><li className="hover:text-[#FFDE59] cursor-pointer">PROJECTS</li></Link> */}
                    {/* <li className="hover:text-[#FFDE59] cursor-pointer bg-green-500 rounded-lg py-3 px-2 text-white">CV DOWNLOAD</li> */}
                    <ButtonDownloadCV/>
                </ul>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute top-16 right-0 w-full bg-slate-100 flex flex-col items-center md:hidden">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <li className="hover:text-[#FFDE59] cursor-pointer">HOME</li>
                        <li className="hover:text-[#FFDE59] cursor-pointer">ABOUT</li>
                        <li className="hover:text-[#FFDE59] cursor-pointer">CONTACT</li>
                        <li className="hover:text-[#FFDE59] cursor-pointer">PROJECTS</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavbarPrimary;
