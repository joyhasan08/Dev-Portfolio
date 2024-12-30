
const ButtonDownloadCV = () => {

    const cvURL = "https://drive.google.com/file/d/1bWG1A28JlS91szsQ6QHxKJITNnn5yjGj/view?usp=sharing"

    return (
        <div>
            <button
            className="hover:text-[#FFDE59] cursor-pointer bg-green-500 rounded-lg py-3 px-2 text-white"
            onClick={()=>{
                window.location.href=cvURL
            }}

            >CV Download
            </button>
        </div>
    );
};

export default ButtonDownloadCV;