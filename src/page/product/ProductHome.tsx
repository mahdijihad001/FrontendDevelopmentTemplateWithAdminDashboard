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
    ];

    return (
        <div className="flex-1 p-6">
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
            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
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
                        <div className="p-2">
                            <h3 className="text-gray-800 font-semibold text-[17px] mb-2 line-clamp-2">
                                {product.name}
                            </h3>

                            {/* Rating */}
                            {/* <div className="flex items-center space-x-2 mb-2">
                                <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                                    <span className="mr-1">★</span>
                                    {product.rating}
                                </div>
                                <span className="text-gray-500 text-sm">({product.reviews})</span>
                            </div> */}

                            {/* Price and Cart */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-baseline space-x-2">
                                    <span className="text-[15px] font-bold text-gray-900">৳{product.price}</span>
                                    <span className="text-gray-400 line-through text-sm">৳{product.originalPrice}</span>
                                    <span className="text-red-500 text-sm font-semibold">-{product.discount}%</span>
                                </div>
                                <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                                    <ShoppingCart className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductHome