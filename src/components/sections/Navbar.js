import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Link from "../ui/Link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-700 border-opacity-20 z-50">
      <nav className="max-w-7xl mx-auto p-6 lg:px-32 flex items-center justify-between text-white">
        <a
          href="#about"
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text hover:scale-110 transition-all duration-300"
        >
          Kiho
        </a>

        <ul className="hidden md:flex gap-10">
          <Link href="#about" desktop>
            About
          </Link>
          <Link href="#portfolios" desktop>
            Portfolios
          </Link>
          <Link href="#contact" desktop>
            Contact
          </Link>
        </ul>

        <button className="md:hidden" onClick={toggleMobileMenu}>
          <BiMenu className="text-3xl" />
        </button>

        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-black/90 border-b border-gray-800 space-y-5 py-16 text-center">
            <Link href="#about" mobile onClick={toggleMobileMenu}>
              <span className="text-lg">About</span>
            </Link>
            <Link href="#portfolios" mobile onClick={toggleMobileMenu}>
              <span className="text-lg">Portfolios</span>
            </Link>
            <Link href="#contact" mobile onClick={toggleMobileMenu}>
              <span className="text-lg">Contact</span>
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
