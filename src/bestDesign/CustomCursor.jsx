import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });

    return () => {
      document.removeEventListener('mousemove', null);
    };
  }, []);

  return <div className="custom-cursor fixed w-8 h-8 rounded-full bg-blue-500 pointer-events-none"></div>;
};

export default CustomCursor;
