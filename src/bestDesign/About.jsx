import React from 'react';

const About = () => {
  return (
    <div className="about bg-white py-20">
      <div className="container mx-auto text-center">
        <img src="profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4"/>
        <h2 className="text-4xl font-bold">John Doe</h2>
        <p className="mt-4 text-lg">A passionate frontend engineer with a love for creating beautiful and functional web experiences.</p>
      </div>
    </div>
  );
};

export default About;
