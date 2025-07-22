import { motion } from "framer-motion";
import ExperienceCard from "./components/ExperienceCard";
import Header from "../../ui/Header";

const experiences = [
  {
    date: "2018",
    label: "Concordia University",
    content:
      "Concordia Unversity에서 Computer Science (Web Services and Application) 전공으로 컴퓨터공학 학사 과정을 졸업했습니다. 웹 기반 시스템을 중심으로 다양한 프로그래밍 언어(Java, Python, C++ 등)를 사용하며 학문과 실무를 연결하는 여러 팀 프로젝트를 수행해 왔습니다. 인공지능(AI) 분야까지 아우르는 폭넓은 경험을 통해 문제 해결 능력과 협업 능력을 키웠으며, 맡은 일에 항상 책임감을 가지고 꾸준히 임해왔습니다.",
  },
  {
    date: "2021",
    label: "Eye-in-Media",
    content:
      "학업 중 웹 개발 서비스 제공을 위한 인턴십을 성공적으로 수행하며, Digital Signage, 셀프오더 플렛폼, 레스토랑 메뉴보드 등을 제공하는 기업에서 실무를 경험했습니다. L'Oréal Canada, McDonald's, transdev, Place des Arts 등 다양한 기업의 플랫폼을 대상으로 웹사이트 및 모바일 주문 및 결제 시스템의 테스트와 버그 수정 작업을 수행했습니다. Vue.js와 Node.js를 활용한 팀 프로젝트에서 활약하며, 신규 고객 등록 페이지와 고객의 식사 청구서를 관리·표시하는 페이지를 직접 개발한 경험이 있습니다.",
  },
];

const experienceList = experiences.map((experience) => {
  return (
    <ExperienceCard
      date={experience.date}
      label={experience.label}
      content={experience.content}
    ></ExperienceCard>
  );
});

const Experience = () => {
  return (
    <div
      id="experience"
      className="min-h-screen relative mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col items-center justify-center"
    >
      <Header>Experiences</Header>

      <motion.div
        className="relative m-auto max-w-[1200px] flex flex-wrap before:content-[''] before:absolute before:w-[5px] before:h-full before:bg-blue-500 before:left-[calc(50%-1px)]"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {experienceList}
      </motion.div>
    </div>
  );
};

export default Experience;
