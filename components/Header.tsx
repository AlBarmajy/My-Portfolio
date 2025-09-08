
import React, { useState, useEffect } from 'react';

type HeaderProps = {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  sections: { [key: string]: React.RefObject<HTMLDivElement> };
};

const Header: React.FC<HeaderProps> = ({ scrollToSection, sections }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', ref: sections.home },
    { name: 'About', ref: sections.about },
    { name: 'Education', ref: sections.education },
    { name: 'Skills', ref: sections.skills },
    { name: 'Projects', ref: sections.projects },
    { name: 'Contact', ref: sections.contact },
  ];
  
  const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToSection(ref);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => handleLinkClick(sections.home)}>
          Mahmoud<span className="text-teal-400">.</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
             <button key={link.name} onClick={() => handleLinkClick(link.ref)} className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">
                {link.name}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
       {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center py-4 space-y-4">
             {navLinks.map((link) => (
                 <button key={link.name} onClick={() => handleLinkClick(link.ref)} className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium">
                    {link.name}
                </button>
              ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
