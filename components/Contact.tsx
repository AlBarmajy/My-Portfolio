import React, { useState } from 'react';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { CONTACT_INFO } from '../constants';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);


const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here (e.g., send to an API endpoint)
        console.log({ name, email, message });
        setStatus('Thank you for your message!');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-white mb-4">Let's Connect</h2>
                <div className="w-24 h-1 bg-teal-400 mx-auto mb-8"></div>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
                    I am currently available for freelance projects and full-time opportunities. If you have a project in mind or just want to connect, feel free to reach out.
                </p>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-slate-700 text-white rounded-md p-3 border border-slate-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-slate-700 text-white rounded-md p-3 border border-slate-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full bg-slate-700 text-white rounded-md p-3 border border-slate-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-teal-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Send Message
                            </button>
                            {status && <p className="text-center text-teal-400 mt-4">{status}</p>}
                        </form>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start">
                        <h3 className="text-2xl font-semibold text-white mb-6">Or find me here:</h3>
                        <div className="space-y-6">
                            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-4 text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg">
                                <MailIcon className="w-8 h-8" />
                                <span className="break-all">{CONTACT_INFO.email}</span>
                            </a>
                             <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg">
                                <LinkedinIcon className="w-8 h-8" />
                                <span>linkedin.com/in/albarmajy</span>
                            </a>
                            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-teal-400 transition-colors duration-300 text-lg">
                                <GithubIcon className="w-8 h-8" />
                                <span>github.com/albarmajy</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
