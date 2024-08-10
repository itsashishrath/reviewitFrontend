import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Client One', feedback: 'Outstanding work!' },
  { name: 'Client Two', feedback: 'Highly recommend!' },
  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <div className="testimonials bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
