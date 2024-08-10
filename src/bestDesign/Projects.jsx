import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Project One', description: 'A fantastic project.', link: '#' },
  { title: 'Project Two', description: 'Another amazing project.', link: '#' },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-200 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-4 inline-block">View Project</a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
