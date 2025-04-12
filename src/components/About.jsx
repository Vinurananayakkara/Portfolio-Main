import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800"
              alt="Developer"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm an ICT undergraduate at General Sir John Kotelawala Defence University with a passion for backend development
              and cloud computing. My expertise spans across FastAPI, Flask, MERN stack, and AWS services.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I've successfully reduced API response times by 40% through optimization and developed multiple full-stack
              applications with industry-standard security measures.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Vinurananayakkara" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vinura-nanayakkara-270aa8342/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vinurananayakkara24@gmail.com" className="text-gray-600 hover:text-blue-600">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;