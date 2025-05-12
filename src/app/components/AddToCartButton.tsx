'use client';

import React from 'react';
import { useCart } from '../context/CartContext';

interface AddToCartButtonProps {
  productId: string;
  title: string;
  price: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, title, price }) => {
  const { addToCart } = useCart();

  return (
    <button
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      onClick={() => addToCart({ id: productId, title, price })}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton; 