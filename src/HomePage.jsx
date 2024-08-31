import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavMenu from './components/NavigationMenuComponent';
import SearchBar from './components/SearchBar';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchResults = (results) => {
    if (results && Object.keys(results).length > 0) {
      navigate('/review', { state: { review: results } });
      console.log('moving ahead');
    } else {
      console.log('No results found');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
      <header className="p-4 border border-black">
        <NavMenu />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          REVIEWIT
        </h1>

        <div className="w-full max-w-md mb-8">
          <SearchBar onSearchResults={handleSearchResults} />
        </div>

        <p className="text-lg md:text-xl text-white max-w-2xl">
          Enter a mobile phone name to get a summary of reviews from YouTube videos, including pros and cons.
        </p>
      </main>

      <footer className="p-4 text-center text-white">
        <p>&copy; 2024 REVIEWIT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;