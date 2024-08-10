import React from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const CategoryFilter = ({ categories, onFilterChange }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Categories</h3>
      {categories.map((category) => (
        <div key={category.id} className="flex items-center space-x-2">
          <Checkbox id={category.id} onCheckedChange={(checked) => onFilterChange(category.id, checked)} />
          <Label htmlFor={category.id}>{category.name}</Label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;