import React from 'react';
import { EDUCATION_UNIVERSITY, DEPI_TRAINING } from '../constants';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Education & Professional Training
        </h2>
        <div className="w-24 h-1 bg-teal-400 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto space-y-12">
            {/* University Education */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-teal-500/20">
                <h3 className="text-2xl font-semibold text-teal-400 mb-2">{EDUCATION_UNIVERSITY.degree}</h3>
                <p className="text-lg font-medium text-white mb-1">{EDUCATION_UNIVERSITY.university}</p>
                <p className="text-md text-gray-400 mb-4">{EDUCATION_UNIVERSITY.duration}</p>
                <p className="text-gray-300 mb-4">{EDUCATION_UNIVERSITY.description}</p>
                 <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {EDUCATION_UNIVERSITY.courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
            
            {/* DEPI Training */}
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-teal-500/20">
                <h3 className="text-2xl font-semibold text-teal-400 mb-2">{DEPI_TRAINING.title}</h3>
                <p className="text-lg font-medium text-white mb-1">{DEPI_TRAINING.organization}</p>
                <p className="text-md text-gray-400 mb-4">{DEPI_TRAINING.duration}</p>
                <p className="text-gray-300 mb-6">{DEPI_TRAINING.description}</p>
                <div className="grid md:grid-cols-2 gap-6">
                    {DEPI_TRAINING.modules.map((course, index) => (
                        <div key={index} className="bg-slate-700 p-4 rounded-md transform hover:scale-105 transition-transform duration-300">
                            <h4 className="text-lg font-semibold text-white mb-1">{course.title}</h4>
                            <p className="text-gray-400 text-sm">{course.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
