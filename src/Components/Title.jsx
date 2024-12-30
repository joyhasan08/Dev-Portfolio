const Title = ({ title }) => {
  return (
    <div className="my-8 md:my-0">
      <h1 className="md:text-3xl text-3xl font-mono font-semibold text-center border-b-4 w-fit mx-auto pb-4 py-8  border-[#FFDE59]">
        {title}
      </h1>
    </div>
  );
};

export default Title;
