import { btnCls } from "./ButtonCoustom";
import downloadIcon from '../../assets/icon/down.png'

const ButtonDownloadCV = () => {

    const cvURL = "https://drive.google.com/file/d/1bWG1A28JlS91szsQ6QHxKJITNnn5yjGj/view?usp=sharing"
    console.log(btnCls)
    return (
        <div   className={`${btnCls}
        bg-[#C1FF72] cursor-pointer  rounded-lg py-1 px-2
        hover:scale-110 duration-500 ease-in-out font-mono text-base 
        flex items-center justify-center gap-2
        `}>
          
            <button
            // className=" cursor-pointer bg-green-500 rounded-lg py-3 px-2 text-white 
            // hover:scale-110 duration-500 ease-in-out font-mono text-base"
            onClick={()=>{
                window.location.href=cvURL
            }}
            > Resume
            </button>
            <img className="w-8 h-8" src={downloadIcon} alt="" />
        </div>
    );
};

export default ButtonDownloadCV;