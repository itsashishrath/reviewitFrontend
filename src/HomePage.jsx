import React, { useState } from 'react';
import { Search } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center p-4">
      <div className="w-full max-w-7xl flex justify-between items-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
          REVIEWIT
        </h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Account</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Welcome to REVIEWIT
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Sign up or log in to save your favorite mobile reviews and personalize your experience.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Button className="w-full" variant="outline">Sign In</Button>
                  </li>
                  <li>
                    <Button className="w-full">Sign Up</Button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Trending</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {["iPhone 13 Pro", "Samsung Galaxy S21"].map((phone) => (
                    <li key={phone}>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/"
                        >
                          <div className="text-sm font-medium leading-none">{phone}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Check out the latest reviews for this trending phone.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center w-full">
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
        <p className="text-white text-center max-w-md">
          Enter a mobile phone name to get a summary of reviews from YouTube videos, including pros and cons.
        </p>
      </div>
    </div>
  );
};

export default HomePage;