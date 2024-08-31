import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/search/', { params: { query } });
      console.log(response.data);
      // Handle the response data here (e.g., update state to display results)
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter your search query"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;