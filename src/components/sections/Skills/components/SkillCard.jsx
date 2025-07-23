const SkillCard = ({ label, skills }) => {
  const renderedIcons = skills.map((skill) => {
    return (
      <div
        className="flex flex-col justify-center items-center p-6 hover:scale-110 transition duration-300 cursor-pointer"
        key={skill.name}
      >
        <div className="text-5xl mb-1" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <div>{skill.name}</div>
      </div>
    );
  });

  return (
    <div className="flex flex-1 flex-col items-center relative xl:py-8 px-5 mt-20 xl:mt-0">
      <h2 className="text-4xl mb-2">{label}</h2>
      <div className="w-full grid grid-cols-4 xl:grid-cols-3 xl:grid-rows-3 relative border rounded-lg px-3">
        {renderedIcons}
      </div>
    </div>
  );
};

export default SkillCard;
