import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen relative mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl absolute top-0 mt-8"
      >
        Skills
      </motion.h1>
    </div>
  );
};

export default Skills;
