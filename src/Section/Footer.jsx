
import zar from '../assets/logo/titleLogo.png'
import fb from '../assets/icon/facebook.png'
import git from '../assets/icon/code.png'
import linkedin from '../assets/icon/lk.png'

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

                    <div className=" flex gap-6 font-mono">
                     <div className='flex justify-center items-center  gap-4 hover:scale-110 duration-500 ease-in-out '>
                            <img className='w-10 bg-[#2e88ee] rounded-full' src={fb} alt="" /> 
                            <a rel="noopener noreferrer" href="#">Facebook</a>
                        </div>
                        <div className='flex justify-center items-center  gap-4'>
                            <img className='w-10 bg-slate-400 rounded-full' src={git} alt="" />
                            <a rel="noopener noreferrer" href="#">Github</a>
                        </div>
                        <div className='flex justify-center items-center  gap-4'>
                            <img className='w-10 bg-sky-700 rounded-full' src={linkedin} alt="" />
                            <a rel="noopener noreferrer" href="#">Linkedin</a>
                        </div>
                        
                         
                    </div>

                    
                  
                </div>
            </footer>
        </div>
    );
};

export default Footer;