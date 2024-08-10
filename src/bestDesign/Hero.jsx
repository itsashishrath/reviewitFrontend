import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="hero bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen flex items-center justify-center text-center">
      <motion.h1 
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        The Best Frontend Engineer
      </motion.h1>
    </div>
  );
};

export default Hero;
