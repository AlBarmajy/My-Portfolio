
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = {
    home: homeRef,
    about: aboutRef,
    education: educationRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 text-gray-300 antialiased selection:bg-teal-500 selection:text-white">
      <Header scrollToSection={scrollToSection} sections={sections} />
      <main>
        <div ref={homeRef}>
          <Hero scrollToSection={scrollToSection} sections={sections} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
