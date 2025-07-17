import { BiMenu } from "react-icons/bi";

function Navbar() {

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

        <button className="md:hidden">
          <BiMenu className="text-3xl"/>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
