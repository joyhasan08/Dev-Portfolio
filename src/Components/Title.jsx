


const Title = ({ title }) => {
  
  const btnStyle= 'px-4  max-w-7xl mx-auto cursor-pointer uppercase font-mono  font-bold py-2 px-4 rounded border-b-2  border-[#FFDE59] shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]'
  return (
    <div className="my-8 md:my-0">
      {/* <h1 className="md:text-3xl text-3xl font-mono font-semibold text-center border-b-4 w-fit mx-auto pb-4 py-8  border-[#FFDE59]">
        {title}
      </h1> */}
      <p className={btnStyle}> {title}</p>
    </div>
  );
};

export default Title;
