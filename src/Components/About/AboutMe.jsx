import me from './../../assets/bg/layered-final.svg'

const AboutMe = () => {
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={me} alt="" className="w-full object-cover h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                            <p className="text-xs text-gray-600">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                            </p>
                            <p>About me</p>
                        </div>
                        <div className="text-gray-800">
                            <p>Insert the actual text content here...</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, harum!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;