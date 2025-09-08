import React from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-center">
                <p className="text-gray-400 mb-4 sm:mb-0">
                    &copy; {new Date().getFullYear()} Mahmoud Salah. All Rights Reserved.
                </p>
                <div className="flex space-x-6">
                    <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                        <LinkedinIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
