import React from 'react';
import { Code, Database, Globe } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Python</li>
              <li>JavaScript (ES6+)</li>
              <li>Java</li>
              <li>HTML5 & CSS3</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Frameworks & Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>FastAPI & Flask</li>
              <li>MERN Stack</li>
              <li>Redux</li>
              <li>Bootstrap & Tailwind</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
            <ul className="space-y-2 text-gray-600">
              <li>AWS (Lambda, EC2, S3)</li>
              <li>Docker</li>
              <li>CI/CD Pipelines</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;