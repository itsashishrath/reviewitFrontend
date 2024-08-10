import React from 'react';
import NavMenu from './components/NavigationMenuComponent';
import SearchBar from './components/SearchBar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center p-4">
      <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center mb-16 ">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider mb-4 sm:mb-0">
          REVIEWIT
        </h1>
        <div className="sm:ml-auto">
          <NavMenu />
        </div>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <SearchBar />
        <p className="text-white text-center max-w-md mt-4">
          Enter a mobile phone name to get a summary of reviews from YouTube videos, including pros and cons.
        </p>
      </div>
    </div>
  );
};

export default HomePage;