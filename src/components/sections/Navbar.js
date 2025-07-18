import { useState } from "react";
import { BiMenu } from "react-icons/bi";

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
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about">About</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#portfolios">Portfolios</a>
          </li>
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="md:hidden" onClick={toggleMobileMenu}>
          <BiMenu className="text-3xl" />
        </button>

        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-black/90 border-b border-gray-800 space-y-5 py-16 text-center">
            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <a href="#about" onClick={toggleMobileMenu}>
                <span className="text-lg">About</span>
              </a>
            </li>
            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <a href="#portfolios" onClick={toggleMobileMenu}>
                <span className="text-lg">Portfolios</span>
              </a>
            </li>
            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <a href="#contact" onClick={toggleMobileMenu}>
                <span className="text-lg">Contact</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
