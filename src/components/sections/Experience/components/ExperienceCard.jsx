const ExperienceCard = ({ date, label, content }) => {
  return (
    <div className="mb-5 w-full relative odd:pr-[calc(50%+30px)] odd:text-right even:pl-[calc(50%+30px)]">
      <div className="dot-glow h-[21px] w-[21px] bg-blue-500 absolute left-[calc(50%-9px)] rounded-[50%] top-[10px]"></div>
      <div className="text-2xl font-extrabold text-white mt-1 mb-2 mx-0">
        {date}
      </div>
      <div className="bg-blue-500/10 border-4 border-blue-500 px-[40px] py-[30px] rounded-[4rem] shadow-[0_0_10px_#3B82F6] cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_#3B82F6]">
        <h3 className="text-2xl mt-0 mx-0 mb-2 font-medium">{label}</h3>
        <p className="font-light text-base leading-[22px] text-left">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
