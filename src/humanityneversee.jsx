import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, Cpu, Globe, Zap } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ y: scrollY * 0.5 });
  }, [scrollY, controls]);

  const skills = [
    { icon: <Code />, name: 'Advanced React' },
    { icon: <Cpu />, name: 'AI Integration' },
    { icon: <Globe />, name: 'Internationalization' },
    { icon: <Zap />, name: 'Performance Optimization' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 to-indigo-900 text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-lg font-semibold hover:text-purple-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="relative h-screen flex items-center justify-center">
          <motion.div
            ref={parallaxRef}
            animate={controls}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-30" />
          </motion.div>
          <div className="z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-bold mb-4"
            >
              John Doe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl mb-8"
            >
              World's Best Frontend Engineer
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
            >
              View My Work
            </motion.button>
          </div>
        </section>

        <section id="skills" className="py-20 bg-black bg-opacity-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 rounded-lg p-6 text-center hover:bg-opacity-20 transition-all"
                >
                  <div className="text-4xl mb-4 flex justify-center">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add more sections for Projects, Contact, etc. */}
      </main>

      <footer className="bg-black bg-opacity-50 py-6 text-center">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;