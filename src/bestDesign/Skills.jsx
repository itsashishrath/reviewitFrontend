import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="skills bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex justify-center space-x-6">
          <FaReact className="text-blue-500 text-6xl"/>
          <FaHtml5 className="text-orange-600 text-6xl"/>
          <FaCss3Alt className="text-blue-400 text-6xl"/>
          <FaJs className="text-yellow-500 text-6xl"/>
          <FaNodeJs className="text-green-500 text-6xl"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
