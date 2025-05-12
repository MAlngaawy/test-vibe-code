'use client';

import React, { useState } from 'react';
import ProductCard from '@/app/components/ProductCard';
import FilterSidebar from '@/app/components/FilterSidebar';

interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  category: string;
}

interface ProductListProps {
  initialProducts: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ initialProducts }) => {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: { min: 0, max: 1000 },
    sortBy: 'featured'
  });

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  // Filter and sort products
  const filteredProducts = initialProducts
    .filter(product => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }
      // Price range filter
      if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Sort products
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Filter Sidebar */}
      <div className="lg:w-64 flex-shrink-0">
        <FilterSidebar onFilterChange={handleFilterChange} />
      </div>

      {/* Products Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id.toString()}
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              description={product.description}
              // onAddToCart={() => console.log(`Added ${product.title} to cart`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList; 