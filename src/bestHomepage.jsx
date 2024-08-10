import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, User, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const skills = [
  "React", "TypeScript", "Next.js", "TailwindCSS", "GraphQL", "WebGL", "Three.js", "CSS-in-JS", "Responsive Design", "Performance Optimization"
];

const projects = [
  { name: "3D Product Configurator", description: "Interactive 3D product customization tool built with Three.js and React" },
  { name: "AI-Powered Code Assistant", description: "VS Code extension using machine learning to suggest code improvements" },
  { name: "Real-time Collaborative Whiteboard", description: "WebRTC-based drawing app with real-time collaboration features" },
];

const PortfolioHomepage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Code size={48} className="text-blue-500" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Jane Doe
          </motion.h1>
          <div className="flex space-x-4">
            {['about', 'skills', 'projects', 'contact'].map((tab) => (
              <motion.button
                key={tab}
                className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === tab ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Frontend Engineering Extraordinaire</h2>
            <p className="text-xl mb-6">Crafting pixel-perfect, high-performance web experiences that push the boundaries of what's possible in the browser.</p>
            <div className="flex justify-center space-x-4">
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-blue-400"><Github size={24} /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-blue-400"><Linkedin size={24} /></motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-blue-400"><Twitter size={24} /></motion.a>
            </div>
          </motion.div>
        )}

        {activeTab === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Technical Expertise</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-gray-800 p-4 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="bg-gray-800 p-6 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p>{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-800 rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-800 rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-gray-800 rounded-md"></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 py-2 px-4 rounded-md font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        )}
      </main>

      <footer className="bg-gray-800 py-4 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          © 2024 Jane Doe. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHomepage;