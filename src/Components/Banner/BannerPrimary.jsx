import titleLogo from '../../assets/logo/titleLogo.png'
import bg from '../../assets/bg/haikei.svg'
import titleBg from '../../assets/bg/Polygon Luminary.svg'
import pic from '../../assets/logo/joyPicSM.png'
const BannerPrimary = () => {
    return (
        <div
            style={{
                backgroundImage: `url('${bg}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
            }}
            className=' min-h-[800px] flex flex-col  items-center text-left space-y-8 '>

            <div className='flex  text-left space-y-8 items-center justify-between gap-8 max-w-5xl'>
                <div className='text-center space-y-8 '>
                    <h1 className='text-5xl font-bold flex items-center gap-4'> HEY ,  I'M  <span><img className='w-96' src={titleLogo} alt="" /></span></h1>

                    <p className='leading-relaxed tracking-wide max-w-3xl text-left text-lg font-mono'>A passionate MERN Stack Developer and CSE graduate with a strong foundation in both backend and frontend technologies. Currently, I'm honing my skills in creating dynamic and responsive web applications.</p>
                    {/* <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p> */}

                </div>
                <div>
                    <img className='rounded-full w-96 h-96* object-fill' src={pic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerPrimary;