import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <FaTwitter className="text-2xl"/>
          <FaLinkedin className="text-2xl"/>
          <FaGithub className="text-2xl"/>
        </div>
        <p>&copy; 2024 Best Frontend Engineer. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
