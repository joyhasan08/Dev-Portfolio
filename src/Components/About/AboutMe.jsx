import me from './../../assets/bg/layered-final.svg';


const AboutMe = () => {
    return (
        <section id="about" className="py-12 text-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-xl border-2 border-black shadow-[0.25rem_0.25rem_#121212] overflow-hidden">
                    {/* <img src={me} alt="Background abstract" className="w-full object-cover h-48 sm:h-64" /> */}
                    <div className="p-8 space-y-6">
                        <div className="space-y-2 border-b-2 border-slate-200 pb-4">
                            <h2 className="text-3xl font-bold font-mono">About Me</h2>
                            <p className="text-sm font-mono text-gray-600">CSE Graduate & Full-Stack Developer</p>
                        </div>
                        <div className="font-mono text-gray-700 leading-relaxed space-y-4">
                            <p>
                                I am Zarjij Hasan Joy, a dedicated MERN Stack and Mobile Application Developer with a Computer Science and Engineering background. I specialize in turning complex problems into elegant, user-friendly digital solutions.
                            </p>
                            <p>
                                With experience across the full web stack—from architecting RESTful APIs and MongoDB data models to crafting dynamic frontends with React and cross-platform apps with React Native—I pride myself on building performant, maintainable, and scalable applications.
                            </p>
                            <p>
                                Beyond code, I am passionate about clean UI architecture, continuous learning, and contributing to impactful digital projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
