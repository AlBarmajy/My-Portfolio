
import React from 'react';
import { SKILLS_DATA } from '../constants';

const SkillIcon: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex items-center space-x-3 bg-slate-700 p-3 rounded-md">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-gray-200">{name}</span>
    </div>
  );
};


const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Core Competencies
        </h2>
        <div className="w-24 h-1 bg-teal-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((category) => (
            <div key={category.category} className="bg-slate-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6 border-b-2 border-teal-400 pb-2">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillIcon key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
