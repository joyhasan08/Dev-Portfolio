
const ButtonDownloadCV = () => {

    const cvURL = "https://drive.google.com/file/d/1bWG1A28JlS91szsQ6QHxKJITNnn5yjGj/view?usp=sharing"

    return (
        <div>
            <button
            className=" cursor-pointer bg-green-500 rounded-lg py-3 px-2 text-white 
            hover:scale-110 duration-500 ease-in-out font-mono text-base"
            onClick={()=>{
                window.location.href=cvURL
            }}

            > Download Resume
            </button>
        </div>
    );
};

export default ButtonDownloadCV;