
import zar from '../assets/logo/titleLogo.png'

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
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        {/* <div className="flex items-center justify-center flex-shrink-0 rounded-full bg-default-600">
                            <img className='w-64 border-2  border-yellow-300 rounded-xl p-1' src={zar} alt="" />
                        </div> */}
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li> 
                            <a rel="noopener noreferrer" href="#">Facebook</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Instagram</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">Twitter</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#">All Rights Reserved @ <span className='text-yellow-400 font-medium'><em>ZARJIJ HASAN JOY  </em> </span></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;