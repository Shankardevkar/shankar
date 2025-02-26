import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['Home', 'Projects', 'Contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-[#1a1a1a] shadow-lg z-50">
      <nav className="container mx-auto px-8 md:px-12 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#c0ff1a]">Shankar.</h1>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveSection(item.toLowerCase())}
                className={`cursor-pointer transition-colors ${activeSection === item.toLowerCase() ? 'text-[#c0ff1a]' : 'text-white hover:text-[#c0ff1a]'}`}
              >
                {item}
              </Link>
            ))}
            <a href="mailto:shankardevkar09@gmail.com" className="px-6 py-2 bg-[#c0ff1a] text-black rounded-md hover:bg-opacity-90 transition-all inline-block">
              Hire me
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                spy={true}
                offset={-100}
                onClick={() => setIsMenuOpen(false)}
                onSetActive={() => setActiveSection(item.toLowerCase())}
                className={`cursor-pointer transition-colors ${activeSection === item.toLowerCase() ? 'text-[#c0ff1a]' : 'text-white hover:text-[#c0ff1a]'}`}
              >
                {item}
              </Link>
            ))}
            <a href="mailto:shankardevkar09@gmail.com" className="px-6 py-2 bg-[#c0ff1a] text-black rounded-md hover:bg-opacity-90 transition-all inline-block">
              Hire me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;