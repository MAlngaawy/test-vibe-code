'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  }, [isZoomed]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    } else if (e.key === 'ArrowRight') {
      setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }
  }, [images.length]);

  return (
    <div 
      className="space-y-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Product gallery"
    >
      {/* Main Image Container */}
      <div className="relative aspect-square w-full max-w-2xl mx-auto">
        <div 
          className="relative w-full h-full rounded-lg overflow-hidden cursor-zoom-in bg-gray-100"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <Image
            src={images[selectedImage]}
            alt={`${title} - Main view`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-contain transition-transform duration-200 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            style={{
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
            }}
            priority={selectedImage === 0}
            quality={90}
          />
        </div>

        {/* Navigation Arrows - Desktop */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
          <button
            onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
            className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors pointer-events-auto"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
            className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors pointer-events-auto"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 sm:gap-4 max-w-2xl mx-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
              selectedImage === index 
                ? 'ring-2 ring-blue-600 scale-105' 
                : 'hover:ring-2 hover:ring-blue-400'
            }`}
            aria-label={`View ${title} - Image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${title} - Thumbnail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 16vw"
              className="object-cover"
              quality={75}
            />
          </button>
        ))}
      </div>

      {/* Mobile Navigation - Only visible on small screens */}
      <div className="flex justify-between items-center sm:hidden">
        <button
          onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-sm text-gray-600">
          {selectedImage + 1} / {images.length}
        </span>
        <button
          onClick={() => setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductGallery; 