const btnCls = 'cursor-pointer uppercase font-mono  font-bold rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212] '

const CardTech = ({ title, img, desc }) => {
    return (
        <div>
            <div className={`${btnCls} hover:bg-slate-100 m-2 p-4 space-y-4`}>
                <img src={img} alt="" />
                <div className='space-y-2'>
                    <h1 className='text-2xl'>{title}</h1>
                    <p className='font-thin leading-relaxed '>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardTech;