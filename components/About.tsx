import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-teal-400 mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto text-center text-gray-300 leading-relaxed">
          <p>
            Motivated and fast-learning Computer Science and AI student at Banha University, currently in junior year. I'm actively developing my skills as a React Frontend Web Developer through the prestigious <strong className="text-teal-400 font-semibold">Digital Egypt Pioneers Initiative (DEPI)</strong>, with a strong passion for programming and growing interest in cybersecurity. I thrive in team-based environments, eager to build real-world projects, and constantly push my limits to stay ahead in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
