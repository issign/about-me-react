import { motion } from "framer-motion";
import Header from "../ui/Header";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen relative mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col items-center justify-center"
    >
      <Header>About Me</Header>

      <motion.div
        className="flex justify-center items-center flex-col lg:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          src="/kiho.png"
          className="w-[300px] md:w-[400px] rounded-full hover:shadow-2xl hover:shadow-blue-800 hovr:scale-105 hover:rotate-2 transition-all duration-500"
          alt=""
        />
        <motion.p
          className="px-20 text-lg pt-8 lg:pt-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          안녕하세요. 저는 이기호입니다.
          <br /> 캐나다 몬트리올에 위치한 Concordia University에서 컴퓨터공학
          학사 과정을 마쳤습니다. <br />
          저는 꾸준함과 책임감을 가장 중요하게 생각하며, 어떤 프로젝트든 끝까지
          성실하게 완수해내는 개발자입니다.
          <br /> 개인 작업이든 팀 프로젝트든 항상 신뢰할 수 있는 사람이 되고자
          노력하며, 명확한 커뮤니케이션과 깔끔한 코드로 결과를 만듭니다.
          <br />
          기술만큼이나 태도도 중요하다고 믿기에, 저는 실력과 성실함을 함께 갖춘
          개발자가 되고자 합니다.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
