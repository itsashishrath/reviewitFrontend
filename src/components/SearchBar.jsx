import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a mobile phone..."
          className="w-full py-4 px-6 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-lg"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;