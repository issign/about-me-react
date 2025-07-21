import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import Link from "../ui/Link";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

const sections = ["home", "about", "experience", "skills", "portfolios"];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const desktopNavLinks = sections.map((section) => {
    return (
      <Link
        href={`#${section}`}
        desktop
        isActive={activeSection === section}
        key={section}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </Link>
    );
  });

  const mobileNavLinks = sections.map((section) => {
    return (
      <Link
        href={`#${section}`}
        mobile
        onClick={toggleMobileMenu}
        isActive={activeSection === section}
        key={section}
      >
        <span className="text-2xl">
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </span>
      </Link>
    );
  });

  return (
    <header className="fixed top-0 w-full z-50 ">
      <nav className="mx-12 my-4 px-6 py-4 lg:px-8 backdrop-blur-md rounded border border-gray-400 border-opacity-40 flex items-center justify-between text-white">
        <a
          href="#about"
          className="text-xl md:text-2xl font-semibold color-primary text-transparent bg-clip-text hover:scale-110 transition-all duration-300"
        >
          Kiho
        </a>

        <ul className="hidden md:flex gap-10">{desktopNavLinks}</ul>

        <Button primary>
          <a href="#contact">Contact</a>
        </Button>

        <button className="md:hidden" onClick={toggleMobileMenu}>
          <BiMenu className="text-3xl" />
        </button>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 w-[70%] h-full bg-black flex justify-center"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <button
              onClick={toggleMobileMenu}
              className="absolute right-0 mr-20 mt-6"
            >
              <BiX className="text-3xl text-white text-5xl " />
            </button>

            <ul className="space-y-10 flex flex-col justify-center items-center text-center text-white">
              {mobileNavLinks}
            </ul>
            <div className="md:hidden flex flex-col-reverse gap-5 absolute right-0 bottom-0 mr-20 pb-12">
              <Icon href="https://github.com/issign" className="text-3xl">
                <BiLogoGithub />
              </Icon>
              <Icon
                href="https://github.com/kiho2734?tab=repositories"
                className="text-3xl"
              >
                <BiLogoGithub />
              </Icon>
              <Icon
                href="https://www.linkedin.com/in/kiholeedeveloper/"
                className="text-3xl"
              >
                <BiLogoLinkedin />
              </Icon>
              <Icon
                href="https://www.instagram.com/kiho_lee2734/"
                className="text-3xl"
              >
                <BiLogoInstagram />
              </Icon>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
