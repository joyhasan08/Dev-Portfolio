
import Marquee from "react-fast-marquee";
import docker from '../assets/tech/docker-3.svg'
import next from '../assets/tech/nextjs-2.svg'
import ts from '../assets/tech/typescript.svg'
import tailwind from '../assets/tech/tailwind-css.svg'
import sql from '../assets/tech/sql.svg'
import git from '../assets/tech/git.svg'
import Title from "./Title";

const btnCls = 'cursor-pointer uppercase font-mono  font-bold py-2 px-4 rounded-full object-fit border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]  '
// const btnCls = 'cursor-pointer uppercase font-mono  font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]  '

const TechMarquee = () => {
    return (
        <div>
            <Title title={'Additional Skills'} />
            <Marquee gradient={false} speed={100} direction="left">
                <div className="flex gap-16 items-center p-4 pt-16">
                    {/* <p>HTML</p><p>CSS</p><p>JAVASCRIPT</p><p>REACT</p><p>TAILWIND</p> */}
                    <img className={`w-40 h-40   ${btnCls} `} src={docker} alt="" />
                    <img className={`w-40 h-40 ${btnCls} `} src={next} alt="" />
                    {/* <img className={`w-40 h-40 p-20  ${btnCls} `} src={ts} alt="" /> */}
                    <img className={`w-40 h-40 ${btnCls} `} src={sql} alt="" />
                    <img className={`w-40 h-40 ${btnCls} `} src={tailwind} alt="" />
                    <img className={`w-40 h-40 ${btnCls}  `} src={git} alt="" />
                </div>

            </Marquee >

        </div>
    );
};

export default TechMarquee;