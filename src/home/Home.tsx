import { useState } from 'react';
import { Search, ShoppingCart, ChevronRight } from 'lucide-react';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Men');

  const categories = [
    { name: 'Men', icon: '👨', color: 'bg-blue-50 text-blue-600' },
    { name: 'Women', icon: '👗', color: 'bg-pink-50 text-pink-600' },
    { name: 'Kids', icon: '👶', color: 'bg-green-50 text-green-600' },
    { name: 'Teens', icon: '👕', color: 'bg-purple-50 text-purple-600' }
  ];

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
    }
  ];

  const menuItems = [
    { name: 'Mega Deal', icon: '⚡' },
    { name: 'New Arrival', icon: '⚡' },
    { name: 'Top Selling', icon: '⚡' },
    { name: 'Free Delivery', icon: '⚡' },
    { name: 'Winter Exclusive', icon: '⚡' },
    { name: 'Merchandise', icon: '⚡' },
    { name: 'Clearance', icon: '⚡' },
    { name: 'Ninja Sharp Cut', icon: '⚡' }
  ];

  const subCategories = [
    { name: 'Half Sleeve T-Shirt', count: 320 },
    { name: 'Full Sleeve T-Shirt', count: 143 },
    { name: 'Maggie', count: 6 }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
        {/* Special Offers Section */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-red-600 mb-4">Special Offers</h2>
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 py-2 cursor-pointer hover:bg-gray-50 rounded">
                <span className="text-yellow-500">{item.icon}</span>
                <span className="text-gray-800 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-3 px-4 bg-blue-50 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 text-xl">👕</span>
                <span className="text-blue-600 font-semibold">Mens</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 text-sm">1099</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            {/* Subcategories */}
            <div className="ml-8 space-y-1 mt-2">
              {subCategories.map((sub, index) => (
                <div key={index} className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-50 rounded">
                  <span className="text-gray-700">{sub.name}</span>
                  <span className="text-gray-500 text-sm">{sub.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search a product"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex space-x-4 mb-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat.name
                  ? cat.color
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-md font-bold">
                  -{product.discount}%
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full border-2 border-gray-300"></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-gray-800 font-semibold text-lg mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    <span className="mr-1">★</span>
                    {product.rating}
                  </div>
                  <span className="text-gray-500 text-sm">({product.reviews})</span>
                </div>

                {/* Price and Cart */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-gray-900">৳{product.price}</span>
                    <span className="text-gray-400 line-through text-sm">৳{product.originalPrice}</span>
                    <span className="text-red-500 text-sm font-semibold">-{product.discount}%</span>
                  </div>
                  <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;