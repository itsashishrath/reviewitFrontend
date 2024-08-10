import React from 'react';

const Contact = () => {
  return (
    <div className="contact bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded"/>
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-3 rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
