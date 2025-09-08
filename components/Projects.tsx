
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { GithubIcon } from './icons/GithubIcon';

const TechTag: React.FC<{ name: string }> = ({ name }) => (
    <span className="bg-slate-700 text-teal-300 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">{name}</span>
);

const Projects: React.FC = () => {
    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-white mb-4">
                    Featured Projects
                </h2>
                <div className="w-24 h-1 bg-teal-400 mx-auto mb-12"></div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {PROJECTS_DATA.map((project, index) => (
                        <div key={index} className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                                <div className="mb-4">
                                    {project.techStack.map(tech => <TechTag key={tech} name={tech} />)}
                                </div>
                                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-white bg-teal-500 hover:bg-teal-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300">
                                        Live Demo
                                    </a>
                                    <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 flex items-center gap-2">
                                        <GithubIcon className="w-6 h-6" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
