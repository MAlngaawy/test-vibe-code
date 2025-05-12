'use client';

import React, { useState } from 'react';

interface PriceRange {
  min: number;
  max: number;
}

interface FilterSidebarProps {
  onFilterChange: (filters: {
    categories: string[];
    priceRange: PriceRange;
    sortBy: string;
  }) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Garden',
    'Sports',
    'Beauty',
  ];

  const handleCategoryChange = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    onFilterChange({
      categories: newCategories,
      priceRange,
      sortBy,
    });
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value) || 0;
    const newPriceRange = {
      ...priceRange,
      [type]: numValue,
    };
    setPriceRange(newPriceRange);
    onFilterChange({
      categories: selectedCategories,
      priceRange: newPriceRange,
      sortBy,
    });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    onFilterChange({
      categories: selectedCategories,
      priceRange,
      sortBy: value,
    });
  };

  return (
    <div className="w-64 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      
      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) => handlePriceChange('min', e.target.value)}
              className="w-20 px-2 py-1 border rounded"
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) => handlePriceChange('max', e.target.value)}
              className="w-20 px-2 py-1 border rounded"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          setSelectedCategories([]);
          setPriceRange({ min: 0, max: 1000 });
          setSortBy('featured');
          onFilterChange({
            categories: [],
            priceRange: { min: 0, max: 1000 },
            sortBy: 'featured',
          });
        }}
        className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-300"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar; 