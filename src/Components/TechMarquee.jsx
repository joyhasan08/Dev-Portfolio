
import Marquee from "react-fast-marquee";

const TechMarquee = () => {
    return (
        <div>
            <Marquee gradient={false} speed={100} direction="left">
                <div className="flex gap-10">
                    <p>HTML</p><p>CSS</p><p>JAVASCRIPT</p><p>REACT</p><p>TAILWIND</p>
                </div>

            </Marquee >

        </div>
    );
};

export default TechMarquee;