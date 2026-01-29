import { Search, ShoppingCart } from "lucide-react";

const ProductHome = () => {
  const products = [
    {
      id: 1,
      name: 'Mens Premium Sports Joggers - Interactive',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop',
      rating: 4.3,
      reviews: 103,
      price: 770,
      originalPrice: 1010,
      discount: 24
    },
    {
      id: 2,
      name: 'Mens Premium Jacket - RedRush',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 156,
      price: 1390,
      originalPrice: 2500,
      discount: 44
    },
    {
      id: 3,
      name: 'Mens Premium Jacket - Creamite',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 74,
      price: 1490,
      originalPrice: 2500,
      discount: 40
    },
    // Repeated products (you may want to give them unique IDs)
    {
      id: 4,
      name: 'Mens Premium Sports Joggers - Interactive',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop',
      rating: 4.3,
      reviews: 103,
      price: 770,
      originalPrice: 1010,
      discount: 24
    },
    {
      id: 5,
      name: 'Mens Premium Jacket - RedRush',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 156,
      price: 1390,
      originalPrice: 2500,
      discount: 44
    },
    {
      id: 6,
      name: 'Mens Premium Jacket - Creamite',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 74,
      price: 1490,
      originalPrice: 2500,
      discount: 40
    },
    {
      id: 7,
      name: 'Mens Premium Sports Joggers - Interactive',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop',
      rating: 4.3,
      reviews: 103,
      price: 770,
      originalPrice: 1010,
      discount: 24
    },
    {
      id: 8,
      name: 'Mens Premium Jacket - RedRush',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 156,
      price: 1390,
      originalPrice: 2500,
      discount: 44
    },
    {
      id: 9,
      name: 'Mens Premium Jacket - Creamite',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 74,
      price: 1490,
      originalPrice: 2500,
      discount: 40
    },
    {
      id: 10,
      name: 'Mens Premium Sports Joggers - Interactive',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop',
      rating: 4.3,
      reviews: 103,
      price: 770,
      originalPrice: 1010,
      discount: 24
    },
    {
      id: 11,
      name: 'Mens Premium Jacket - RedRush',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 156,
      price: 1390,
      originalPrice: 2500,
      discount: 44
    },
    {
      id: 12,
      name: 'Mens Premium Jacket - Creamite',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 74,
      price: 1490,
      originalPrice: 2500,
      discount: 40
    },
  ];

  return (
    <div className="flex-1 p-3 sm:p-4 md:p-6">
      {/* Search Bar */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
          <input
            type="text"
            placeholder="Search a product"
            className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Products Grid - Responsive from 2 to 6 columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
        {products.map((product, index) => (
          <div 
            key={`${product.id}-${index}`} 
            className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative aspect-square bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-pink-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs sm:text-sm font-bold">
                -{product.discount}%
              </div>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full border-2 border-gray-300"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-2 sm:p-3">
              <h3 className="text-gray-800 font-semibold text-xs sm:text-sm md:text-[15px] mb-1 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                {product.name}
              </h3>

              {/* Price and Cart */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-1 md:space-x-2">
                  <span className="text-xs sm:text-sm md:text-[15px] font-bold text-gray-900">
                    ৳{product.price}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-400 line-through text-[10px] sm:text-xs">
                      ৳{product.originalPrice}
                    </span>
                    <span className="text-red-500 text-[10px] sm:text-xs font-semibold">
                      -{product.discount}%
                    </span>
                  </div>
                </div>
                <button className="bg-black text-white p-1.5 sm:p-2 md:p-3 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0">
                  <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHome;
