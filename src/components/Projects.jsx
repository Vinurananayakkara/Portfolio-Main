import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CRUD Service APIs",
      description: "Developed highly efficient RESTful APIs using FastAPI and Flask, optimizing database queries with SQLAlchemy ORM.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      tags: ["FastAPI", "Flask", "SQLAlchemy"],
      link: "https://github.com/Vinurananayakkara/Python-API-1st"
    },
    {
      title: "Node.js Authentication System",
      description: "Engineered a JWT-based authentication system with secure OAuth2 integration and industry-standard security protocols.",
      image: "https://images.unsplash.com/photo-1584986766916-0646d2a9b1c4?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "JWT", "OAuth2"],
      link: "https://github.com/Vinurananayakkara/LogIn-SignIn-Backend"
    },
    {
      title: "MERN Stack CRUD Application",
      description: "Full-stack CRUD application with React.js frontend, Express.js backend, and MongoDB Atlas integration.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      tags: ["MERN", "Redux", "MongoDB"],
      link: "https://github.com/Vinurananayakkara/Simple--CRUD"
    },
    {
      title: "Driving School Management System",
      description: "Feature-rich web app with role-based access control for managing student enrollments and driving schedules.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
      tags: ["MERN", "Bootstrap", "Tailwind"],
      link: "https://github.com/Vinurananayakkara/Driving-School---Frontend"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 flex items-center">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;