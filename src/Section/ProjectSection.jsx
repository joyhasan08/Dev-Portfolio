import ButtonCoustom from "../Components/Button/ButtonCoustom";
import ButtonLive from "../Components/Button/ButtonLive";
import Title from "../Components/Title";
import atc from '../assets/project/atcWeb.png'
import arcf from '../assets/project/arcf.png'
import ngo from '../assets/project/ngo.png'
import ecom from '../assets/project/ecom.png'
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"
import CardProject from "../Components/Cards/ProjectCard/CardProject";
import { Link } from "react-router-dom";


const ProjectSection = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 10,
        })
    }, [])
    return (
        <div className="max-w-7xl mx-auto" >
            <Title title={'MY PROJECTS'} />

            <div className="flex justify-between items-center gap-20 p-4 font-mono" data-aos="slide-up" data-aos- >
                <div>
                    <img src={atc} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-semibold leading-relaxed">ATC Tech Ltd Website</h1>
                    <p className="max-w-4xl">The project involves converting a Figma design into a fully functional website for ATC Tech Ltd. The goal is to create an engaging and user-friendly website that accurately reflects the company’s brand and offerings</p>
                    <div className="flex gap-4">
                        <ButtonCoustom title={'Case Study'} />
                        <ButtonLive />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center gap-20 p-4 font-mono" data-aos="slide-up" >
                <div>
                    <img src={arcf} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-semibold leading-relaxed">ARCF Website</h1>
                    <p className="max-w-4xl">The project involves converting a Figma design into a fully functional website for ATC Tech Ltd. The goal is to create an engaging and user-friendly website that accurately reflects the company’s brand and offerings</p>
                    <div className="flex gap-4">
                        <ButtonCoustom title={'Case Study'} />
                        <ButtonLive />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center gap-20 p-4 font-mono" data-aos="slide-up" >
                <div>
                    <img src={ngo} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-semibold leading-relaxed">NGO Website</h1>
                    <p className="max-w-4xl">The project involves converting a Figma design into a fully functional website for ATC Tech Ltd. The goal is to create an engaging and user-friendly website that accurately reflects the company’s brand and offerings</p>
                    <div className="flex gap-4">
                        <ButtonCoustom title={'Case Study'} />
                        <ButtonLive />

                        {/* <Link to={'https://ngo-project-one.vercel.app/auth/login'} > gooo</Link> */}
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center gap-20 p-4 font-mono" data-aos="slide-up" >
                <div>
                    <img src={ecom} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-3xl font-semibold leading-relaxed"> E-commerce Website</h1>
                    <p className="max-w-4xl">The project involves converting a Figma design into a fully functional website for ATC Tech Ltd. The goal is to create an engaging and user-friendly website that accurately reflects the company’s brand and offerings</p>
                    <div className="flex gap-4">
                        <ButtonCoustom title={'Case Study'} />
                        <ButtonLive />
                    </div>
                </div>
            </div>
            {/* <div className="grid grid-cols-3 gap-4 w-fit mx-auto">
                <CardProject />
                <CardProject />
                <CardProject />
            </div> */}

            <div className="w-fit mx-auto">
                <ButtonCoustom title={'View All Projects'} />
            </div>
        </div>
    );
};

export default ProjectSection;