
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
    <div className="max-w-7xl mx-auto  ">
        <div className="fixed top-0 w-full md:max-w-7xl rounded-b-xl  z-20 text-lg font-mono font-semibold flex justify-between items-center bg-slate-100 py-4 px-10 shadow-lg drop-shadow-xl">
            <div className="flex items-center gap-3">
                <img className="w-14 h-14 rounded-full border-4 border-[#FFDE59]" src={logoPic} alt="Logo" />
                <p>ZARJIJ HASAN JOY</p>
            </div>
            <div className="hidden md:flex">
                <ul className="flex items-center gap-8 font-mono">
                    <li><a href="#home" className="hover:text-[#FFDE59] transition-colors cursor-pointer">HOME</a></li>
                    <li><a href="#about" className="hover:text-[#FFDE59] transition-colors cursor-pointer">ABOUT</a></li>
                    <li><a href="#skills" className="hover:text-[#FFDE59] transition-colors cursor-pointer">SKILLS</a></li>
                    <li><a href="#projects" className="hover:text-[#FFDE59] transition-colors cursor-pointer">PROJECTS</a></li>
                    <li><a href="#contact" className="hover:text-[#FFDE59] transition-colors cursor-pointer">CONTACT</a></li>
                    <ButtonDownloadCV/>
                </ul>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle navigation menu">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute top-16 right-0 w-full bg-slate-100 flex flex-col items-center md:hidden shadow-lg border-b border-slate-200">
                    <ul className="flex flex-col items-center gap-4 py-4 font-mono font-semibold">
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFDE59] cursor-pointer">HOME</a></li>
                        <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFDE59] cursor-pointer">ABOUT</a></li>
                        <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFDE59] cursor-pointer">SKILLS</a></li>
                        <li><a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFDE59] cursor-pointer">PROJECTS</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFDE59] cursor-pointer">CONTACT</a></li>
                    </ul>
                </div>
            )}
        </div>
    </div>
    );
};

export default NavbarPrimary;
