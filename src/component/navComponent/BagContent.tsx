import { ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const BagContent = () => {
  const [bagItems] = useState([
    { id: 1, name: 'Polo Shirt', price: '৳ 799', quantity: 2, image: '👕' },
    { id: 2, name: 'Sports Shorts', price: '৳ 599', quantity: 1, image: '🩳' },
  ]);

  const total = bagItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace('৳ ', '').replace(',', ''));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {bagItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">Your bag is empty</p>
            <p className="text-gray-400 text-sm mt-2">Add items to get started</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bagItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                <div className="text-5xl">{item.image}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 mt-1">{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">-</button>
                    <span className="px-3">{item.quantity}</span>
                    <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100">+</button>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-md">
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Checkout Section */}
      {bagItems.length > 0 && (
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-lg font-bold">৳ {total.toLocaleString()}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};


export default BagContent