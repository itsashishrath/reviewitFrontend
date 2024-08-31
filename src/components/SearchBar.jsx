import React, { useState } from 'react';
import { Search } from 'lucide-react';
import axios from 'axios';
import { API_BASE_URL } from './config';


const SearchBar = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Searching for:', searchQuery); // For debugging

    try {
      const response = await axios.get(`${API_BASE_URL}/wel/`, {
        params: { query: searchQuery }
      });
      console.log('Search response:', response.data); // For debugging
      onSearchResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
      onSearchResults([]);
    } finally {
      setIsLoading(false);
    }
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
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full transition-colors duration-300 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
          ) : (
            <Search size={24} />
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;