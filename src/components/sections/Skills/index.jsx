import { motion } from "framer-motion";
import Header from "../../ui/Header";
import SkillCard from "./components/SkillCard";
import {
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
  FaNodeJs,
  FaVuejs,
  FaSass,
} from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const skillsList = [
  {
    label: "Front-end",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61DBFB" },
      { name: "Redux", icon: <SiRedux />, color: "#61DBFB" },
      { name: "Vuejs", icon: <FaVuejs />, color: "#41B883" },
      { name: "HTML", icon: <SiHtml5 />, color: "#E34C26" },
      { name: "CSS", icon: <SiCss3 />, color: "#3C99DC" },
      { name: "Javascript", icon: <SiJavascript />, color: "#F0DB4F" },
      { name: "Sass", icon: <FaSass />, color: "#cd6799" },
      { name: "Tailwindcss", icon: <SiTailwindcss />, color: "#61DBFB" },
    ],
  },
  {
    label: "Back-end",
    skills: [
      { name: "Nodejs", icon: <FaNodeJs />, color: "#3c873a" },
      { name: "Java", icon: <FaJava />, color: "#ed1d25" },
      { name: "python", icon: <FaPython />, color: "#4b8bbe" },
      { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
    ],
  },
  {
    label: "Tools & Languages",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
      { name: "C++", icon: <SiCplusplus />, color: "#5E97D0" },
    ],
  },
];

const renderedSkills = skillsList.map(({ label, skills }) => {
  return <SkillCard label={label} skills={skills} key={label} />;
});

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen relative mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col items-center justify-center"
    >
      <Header>Skills</Header>
      <motion.div
        className="flex flex-col xl:flex-row"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {renderedSkills}
      </motion.div>
    </div>
  );
};

export default Skills;
