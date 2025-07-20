import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import Link from "../ui/Link";
import Button from "../ui/Button";

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
        <span className="text-lg">
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </span>
      </Link>
    );
  });

  return (
    <header className="fixed top-0 w-full z-50 ">
      <nav className="m-4 px-6 py-4 lg:px-8 backdrop-blur-md rounded border border-gray-400 border-opacity-20 flex items-center justify-between text-white">
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

        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-black/90 border-b border-gray-800 space-y-5 py-16 text-center">
            {mobileNavLinks}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
