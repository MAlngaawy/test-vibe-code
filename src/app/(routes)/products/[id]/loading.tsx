import React from 'react';

const ProductLoading = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <div className="relative h-[400px] md:h-[600px] rounded-lg bg-gray-200 animate-pulse" />

        {/* Content Skeleton */}
        <div className="space-y-6">
          <div>
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse" />
          </div>

          <div>
            <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          <div>
            <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>

          <div>
            <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          </div>

          <div className="pt-6">
            <div className="h-12 w-full bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoading; 