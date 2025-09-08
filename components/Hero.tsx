
import React from 'react';

type HeroProps = {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  sections: { [key: string]: React.RefObject<HTMLDivElement> };
};

const Hero: React.FC<HeroProps> = ({ scrollToSection, sections }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 bg-cover bg-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Crafting Digital Experiences with Code<span className="text-teal-400">.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          I'm Mahmoud Salah, a React Frontend Developer trained through the intensive Digital Egypt Pioneers Initiative (DEPI). I build responsive, user-centric web applications that solve real-world problems.
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => scrollToSection(sections.projects)}
            className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore My Projects
          </button>
          <button 
            onClick={() => scrollToSection(sections.contact)}
            className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
