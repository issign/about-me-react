import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start justify-center gap-3"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left color-primary text-transparent bg-clip-text">
            Kiho Lee
          </h1>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 text-transparent bg-clip-text">
            Web Developer
          </h3>
          <p className="text-md text-slate-400 text-center md:text-left text-pretty">
            클릭하면 반응하고, 스크롤하면 움직이는 웹. 보기엔 간단하지만, 그
            속엔 수많은 고민과 디테일이 숨어 있습니다. 저는 그 과정을 즐깁니다.
          </p>
        </motion.div>

        <img
          src="/kiho.png"
          className="w-[300px] md:w-[400px] rounded-full hover:shadow-2xl hover:shadow-blue-800 hovr:scale-105 hover:rotate-2 transition-all duration-500"
          alt=""
        />
      </motion.div>

      <div className="flex flex-col-reverse gap-5 mt-3 absolute left-0 ml-12 pb-24 min-h-screen">
        <BiLogoGithub className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
        <BiLogoLinkedin className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
        <BiLogoYoutube className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-red-500 hover:-rotate-12 transition-all duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default Home;
