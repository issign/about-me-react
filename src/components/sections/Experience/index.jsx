import { motion } from "framer-motion";

const Experience = () => {
      return (
    <div
      id="experience"
      className="min-h-screen relative mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl absolute top-0 mt-8"
      >
        Experience
      </motion.h1>

      <div className="relative m-auto max-w-[1200px] flex flex-wrap before:content-[''] before:absolute before:w-[5px] before:h-full before:bg-blue-500 before:left-[calc(50%-1px)]">
        <div className="mb-[40px] w-full relative last:mb-0 odd:pr-[calc(50%+30px)] odd:text-right even:pl-[calc(50%+30px)]">
          <div className="dot-glow h-[21px] w-[21px] bg-blue-500 absolute left-[calc(50%-8px)] rounded-[50%] top-[10px]"></div>
          <div className="text-xl font-extrabold text-white mt-[6px] mb-[15px] mx-0">
            2018
          </div>
          <div className="bg-blue-500 border-4 border-blue-500 px-[50px] py-[30px] rounded-[4rem] shadow-[0_0_10px_#3B82F6] cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_#3B82F6]">
            <h3 className="text-xl mt-0 mx-0 mb-[10px] font-medium">
              Concordia University
            </h3>
            <p className="font-light text-base leading-[22px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              quas? Mollitia rem alias quam, officiis placeat doloribus veniam
              et eveniet, accusamus eligendi quia tempore excepturi, quae
              quibusdam suscipit sequi! Cum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;