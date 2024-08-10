import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import FeaturedPhones from './components/FeaturedPhones';
import ComparisonTool from './components/ComparisonTool';
import CategoryFilter from './components/CategoryFilter';
import LatestNews from './components/LatestNews';
import UserProfile from './components/UserProfile';
import NavMenu from './components/NavigationMenuComponent';

const Homepage = () => {
  // Mock data - in a real app, this would come from an API or database
  const featuredPhones = [
    { id: 1, name: 'iPhone 13', brand: 'Apple', image: '/iphone13.jpg' },
    { id: 2, name: 'Galaxy S21', brand: 'Samsung', image: '/galaxys21.jpg' },
    { id: 3, name: 'Pixel 6', brand: 'Google', image: '/pixel6.jpg' },
  ];

  const allPhones = [
    ...featuredPhones,
    { id: 4, name: 'OnePlus 9', brand: 'OnePlus', image: '/oneplus9.jpg' },
    { id: 5, name: 'Xiaomi Mi 11', brand: 'Xiaomi', image: '/mi11.jpg' },
  ];

  const categories = [
    { id: 'flagship', name: 'Flagship' },
    { id: 'midrange', name: 'Mid-range' },
    { id: 'budget', name: 'Budget' },
  ];

  const newsItems = [
    { id: 1, title: 'New iPhone 14 Leaked', date: '2024-08-01', summary: 'Exciting features revealed...' },
    { id: 2, title: 'Android 15 Update', date: '2024-07-28', summary: 'What to expect in the next big update...' },
  ];

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl: '/john.jpg',
    recentActivity: ['Reviewed iPhone 13', 'Compared Pixel 6 and Galaxy S21'],
  };

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (categoryId, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavMenu />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Phones</h2>
          <FeaturedPhones phones={featuredPhones} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Compare Phones</h2>
            <ComparisonTool phones={allPhones} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Filter</h2>
            <CategoryFilter categories={categories} onFilterChange={handleCategoryChange} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <LatestNews newsItems={newsItems} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
          <UserProfile user={user} />
        </div>
      </main>
    </div>
  );
};

export default Homepage;