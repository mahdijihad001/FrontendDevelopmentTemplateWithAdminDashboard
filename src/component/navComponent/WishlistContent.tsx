import { Heart, X } from "lucide-react";
import { useState } from "react";

const WishlistContent = () => {
  const [wishlistItems] = useState([
    { id: 1, name: 'Classic T-Shirt', price: '৳ 599', image: '🎽' },
    { id: 2, name: 'Denim Jeans', price: '৳ 1,299', image: '👖' },
    { id: 3, name: 'Sneakers', price: '৳ 2,499', image: '👟' },
  ]);

  return (
    <div className="p-4">
      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Heart className="h-16 w-16 text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
          <p className="text-gray-400 text-sm mt-2">Add items you love to your wishlist</p>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-5xl">{item.image}</div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-gray-600 mt-1">{item.price}</p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistContent