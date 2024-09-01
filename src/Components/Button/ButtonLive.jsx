const btnCls = 'cursor-pointer uppercase font-mono  font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212] '

const ButtonLive = ({ link }) => {
    console.log(link);


    return (
        <div>
            <button className={`${btnCls} hover:bg-[#C1FF72] bg-[#FFDE59] `}>
                Live Link
            </button>
        </div>
    );
};

export default ButtonLive;