import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/app/components/ProductCard';
import ProductGallery from '@/app/components/ProductGallery';
import AddToCartButton from '@/app/components/AddToCartButton';

// This would typically come from an API or database
const sampleProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 199.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=500",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"
    ],
    description: "Experience premium sound quality with our latest wireless headphones. These noise-cancelling headphones deliver crystal-clear audio while blocking out unwanted background noise. Perfect for music lovers, gamers, and professionals who need to focus in any environment.",
    category: "Electronics",
    rating: 4.8,
    reviewCount: 124,
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone",
      "Foldable design",
      "Quick charging (10 min = 5 hours)",
      "Multi-device connectivity",
      "Touch controls"
    ],
    specifications: {
      "Battery Life": "40 hours",
      "Bluetooth Version": "5.0",
      "Weight": "250g",
      "Warranty": "2 years",
      "Driver Size": "40mm",
      "Frequency Response": "20Hz-20kHz",
      "Impedance": "32 ohms",
      "Charging Time": "2 hours"
    }
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 299.99,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
    ],
    description: "Stay connected and track your fitness with our advanced smart watch. Features include heart rate monitoring, GPS tracking, sleep analysis, and seamless smartphone integration.",
    category: "Electronics",
    rating: 4.6,
    reviewCount: 89,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Sleep analysis",
      "Water resistant",
      "5-day battery life",
      "Smart notifications",
      "Fitness tracking",
      "Music storage"
    ],
    specifications: {
      "Display": "1.4\" AMOLED",
      "Battery Life": "5 days",
      "Water Resistance": "5 ATM",
      "Sensors": "Heart rate, GPS, Accelerometer",
      "Compatibility": "iOS & Android",
      "Storage": "4GB",
      "Weight": "45g",
      "Warranty": "1 year"
    }
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500"
    ],
    description: "Lightweight and comfortable running shoes designed for optimal performance. Features responsive cushioning and breathable mesh upper for maximum comfort during your runs.",
    category: "Sports",
    rating: 4.7,
    reviewCount: 156,
    features: [
      "Responsive cushioning",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Arch support",
      "Quick-lace system",
      "Reflective elements",
      "Moisture-wicking lining",
      "Shock absorption"
    ],
    specifications: {
      "Weight": "250g per shoe",
      "Material": "Mesh & Synthetic",
      "Closure": "Lace-up",
      "Sole": "Rubber",
      "Arch Support": "Medium",
      "Drop": "8mm",
      "Warranty": "6 months",
      "Care": "Machine washable"
    }
  },
  {
    id: 4,
    title: "Coffee Maker",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1570486916327-ef2a3b4a0b9a?w=500",
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500",
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500"
    ],
    description: "Programmable coffee maker with thermal carafe to keep your coffee hot for hours. Features multiple brew sizes and strength settings for the perfect cup every time.",
    category: "Home & Garden",
    rating: 4.5,
    reviewCount: 203,
    features: [
      "Programmable brewing",
      "Thermal carafe",
      "Multiple brew sizes",
      "Strength control",
      "Auto shut-off",
      "Water filter",
      "Easy cleaning",
      "Brew pause"
    ],
    specifications: {
      "Capacity": "12 cups",
      "Power": "1000W",
      "Material": "Stainless Steel",
      "Dimensions": "14\" x 8\" x 11\"",
      "Warranty": "1 year",
      "Filter Type": "Permanent",
      "Color": "Black",
      "Voltage": "120V"
    }
  },
  {
    id: 5,
    title: "Yoga Mat",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500"
    ],
    description: "Premium non-slip yoga mat with carrying strap. Perfect thickness for comfort and stability during your yoga practice.",
    category: "Sports",
    rating: 4.6,
    reviewCount: 178,
    features: [
      "Non-slip surface",
      "Perfect thickness",
      "Carrying strap",
      "Moisture resistant",
      "Eco-friendly material",
      "Alignment lines",
      "Easy to clean",
      "Durable construction"
    ],
    specifications: {
      "Thickness": "6mm",
      "Length": "72 inches",
      "Width": "24 inches",
      "Material": "TPE",
      "Weight": "2.2 lbs",
      "Color": "Purple",
      "Warranty": "1 year",
      "Care": "Wipe clean"
    }
  },
  {
    id: 6,
    title: "Novel Collection",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
    ],
    description: "Bestselling novel series box set featuring all five books in the acclaimed fantasy series. Includes exclusive author notes and illustrations.",
    category: "Books",
    rating: 4.9,
    reviewCount: 312,
    features: [
      "Complete series",
      "Hardcover editions",
      "Author notes",
      "Exclusive illustrations",
      "Bookmark included",
      "Collector's box",
      "Glossary",
      "Character guide"
    ],
    specifications: {
      "Books": "5 volumes",
      "Pages": "3000 total",
      "Format": "Hardcover",
      "Language": "English",
      "Publisher": "Fantasy Press",
      "ISBN": "978-1234567890",
      "Dimensions": "9\" x 6\" x 4\"",
      "Weight": "5 lbs"
    }
  },
  {
    id: 7,
    title: "Wireless Earbuds",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=500",
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=500",
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=500"
    ],
    description: "True wireless earbuds with active noise cancellation and premium sound quality. Features touch controls and long battery life.",
    category: "Electronics",
    rating: 4.7,
    reviewCount: 245,
    features: [
      "Active noise cancellation",
      "Touch controls",
      "Long battery life",
      "Water resistant",
      "Bluetooth 5.2",
      "Voice assistant",
      "Quick charging",
      "Comfortable fit"
    ],
    specifications: {
      "Battery Life": "8 hours",
      "Charging Case": "24 hours",
      "Bluetooth": "5.2",
      "Water Rating": "IPX4",
      "Weight": "5g per earbud",
      "Charging Time": "1.5 hours",
      "Warranty": "1 year",
      "Colors": "Black/White"
    }
  },
  {
    id: 8,
    title: "Designer Watch",
    price: 399.99,
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500"
    ],
    description: "Luxury designer watch with Swiss movement and genuine leather strap. Features date display and water resistance.",
    category: "Clothing",
    rating: 4.8,
    reviewCount: 167,
    features: [
      "Swiss movement",
      "Genuine leather strap",
      "Date display",
      "Water resistant",
      "Sapphire crystal",
      "Luminous hands",
      "Deployment clasp",
      "Limited edition"
    ],
    specifications: {
      "Movement": "Swiss Automatic",
      "Case": "Stainless Steel",
      "Crystal": "Sapphire",
      "Water Resistance": "50m",
      "Diameter": "42mm",
      "Thickness": "11mm",
      "Warranty": "2 years",
      "Strap": "Genuine Leather"
    }
  },
  {
    id: 9,
    title: "Skincare Set",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500"
    ],
    description: "Complete skincare routine set with cleanser, toner, serum, and moisturizer. Formulated with natural ingredients for all skin types.",
    category: "Beauty",
    rating: 4.6,
    reviewCount: 189,
    features: [
      "Natural ingredients",
      "Suitable for all skin types",
      "Complete routine",
      "Travel-friendly",
      "Cruelty-free",
      "Vegan formula",
      "Fragrance-free",
      "Hypoallergenic"
    ],
    specifications: {
      "Items": "4 products",
      "Volume": "30ml each",
      "Shelf Life": "12 months",
      "Origin": "Made in Korea",
      "Certification": "Vegan",
      "Age Range": "18+",
      "Gender": "Unisex",
      "Storage": "Cool, dry place"
    }
  },
  {
    id: 10,
    title: "Garden Tools",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500"
    ],
    description: "Essential gardening tool set including trowel, pruner, cultivator, and gloves. Made with durable materials for long-lasting use.",
    category: "Home & Garden",
    rating: 4.5,
    reviewCount: 134,
    features: [
      "Ergonomic handles",
      "Stainless steel heads",
      "Comfortable gloves",
      "Storage bag",
      "Durable construction",
      "Rust-resistant",
      "Easy to clean",
      "Gift box included"
    ],
    specifications: {
      "Tools": "4 pieces",
      "Material": "Stainless Steel",
      "Handle": "Rubber grip",
      "Glove Size": "One size fits most",
      "Weight": "2.5 lbs",
      "Dimensions": "24\" x 12\" x 4\"",
      "Warranty": "1 year",
      "Care": "Wipe clean"
    }
  }
];

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const product = sampleProducts.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = sampleProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back to Products Link */}
      <Link 
        href="/products"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Product Gallery */}
        <ProductGallery images={product.images} title={product.title} />

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="flex items-center mt-2 space-x-4">
              <p className="text-2xl font-semibold text-blue-600">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {product.features && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.specifications && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="ml-2 text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6">
            <AddToCartButton
              productId={product.id.toString()}
              title={product.title}
              price={product.price}
            />
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                title={product.title}
                price={product.price}
                imageUrl={product.images[0]}
                description={product.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage; 