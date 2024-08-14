import ButtonCoustom from "../Components/Button/ButtonCoustom";
import ButtonLive from "../Components/Button/ButtonLive";
import Title from "../Components/Title";
import atc from '../assets/project/atcWeb.png'
import arcf from '../assets/project/arcf.png'


const ProjectSection = () => {
    return (
        <div className="max-w-7xl mx-auto" >
            <Title title={'MY PROJECTS'} />

            <div className="flex justify-between items-center gap-20 p-4 font-mono">
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
            <div className="flex justify-between items-center gap-20 p-4 font-mono">
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

        </div>
    );
};

export default ProjectSection;