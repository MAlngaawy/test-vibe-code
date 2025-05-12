import React from 'react';
import ProductList from './ProductList';

// Sample product data - this would typically come from an API or database
const sampleProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "Premium noise-cancelling wireless headphones",
    category: "Electronics"
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Latest model with health tracking features",
    category: "Electronics"
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Lightweight and comfortable running shoes",
    category: "Sports"
  },
  {
    id: 4,
    title: "Coffee Maker",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1570486916327-ef2a3b4a0b9a?w=500",
    description: "Programmable coffee maker with thermal carafe",
    category: "Home & Garden"
  },
  {
    id: 5,
    title: "Yoga Mat",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
    description: "Non-slip yoga mat with carrying strap",
    category: "Sports"
  },
  {
    id: 6,
    title: "Novel Collection",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
    description: "Bestselling novel series box set",
    category: "Books"
  },
  {
    id: 7,
    title: "Wireless Earbuds",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=500",
    description: "True wireless earbuds with charging case",
    category: "Electronics"
  },
  {
    id: 8,
    title: "Designer Watch",
    price: 399.99,
    imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
    description: "Luxury designer watch with leather strap",
    category: "Clothing"
  },
  {
    id: 9,
    title: "Skincare Set",
    price: 69.99,
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500",
    description: "Complete skincare routine set",
    category: "Beauty"
  },
  {
    id: 10,
    title: "Garden Tools",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500",
    description: "Essential gardening tool set",
    category: "Home & Garden"
  }
];

// This is now a Server Component
const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <ProductList initialProducts={sampleProducts} />
    </div>
  );
};

export default ProductsPage;