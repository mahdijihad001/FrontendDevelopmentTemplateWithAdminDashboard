import { useState } from 'react';
import { MapPin, User, Heart, ShoppingCart, X } from 'lucide-react';

// Sidebar Component
const Sidebar = ({ isOpen, onClose, title, children } : any) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto h-full pb-20">
          {children}
        </div>
      </div>
    </>
  );
};

// Wishlist Content Component
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

// Bag Content Component
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

// Profile Content Component
const ProfileContent = () => {
  const [user] = useState({
    name: 'Rakib Hossain',
    email: 'rakib@example.com',
    phone: '+880 1234-567890',
    avatar: '👤'
  });

  const menuItems = [
    { icon: '📦', label: 'My Orders', badge: '3' },
    { icon: '📍', label: 'Saved Addresses', badge: null },
    { icon: '💳', label: 'Payment Methods', badge: null },
    { icon: '🎁', label: 'Rewards & Offers', badge: '2' },
    { icon: '⚙️', label: 'Settings', badge: null },
    { icon: '❓', label: 'Help & Support', badge: null },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6">
        <div className="flex items-center gap-4">
          <div className="text-6xl bg-white text-gray-900 rounded-full w-20 h-20 flex items-center justify-center">
            {user.avatar}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-gray-300 text-sm mt-1">{user.email}</p>
            <p className="text-gray-300 text-sm">{user.phone}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-gray-900">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <span className="text-gray-400">›</span>
              </div>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button className="w-full mt-6 p-4 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors">
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

// Navigation Menu Component
const NavigationMenu = ({ isOpen, onClose } : any) => {
  const navLinks = ['MEN', 'WOMEN', 'TEENS', 'KIDS', 'SPORTS'];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute inset-0 bg-black transform rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-white transform rotate-45"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">
              FABRI<span className="font-light">LIFE</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="py-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block px-6 py-3 text-gray-900 font-medium text-base hover:bg-gray-100 transition-colors"
              onClick={onClose}
            >
              {link}
            </a>
          ))}

          {/* Stores Link for Mobile */}
          <a
            href="#"
            className="sm:hidden flex items-center space-x-3 px-6 py-3 text-gray-900 font-medium text-base hover:bg-gray-100 transition-colors border-t border-gray-200 mt-4"
            onClick={onClose}
          >
            <MapPin className="h-5 w-5" />
            <span>Stores</span>
          </a>
        </div>
      </div>
    </>
  );
};

// Main Navbar Component
export default function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = ['MEN', 'WOMEN', 'TEENS', 'KIDS', 'SPORTS'];

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button - Three Dots */}
              <button
                onClick={() => setIsNavMenuOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 flex-shrink-0"
                aria-label="Open menu"
              >
                <div className="flex flex-col gap-1">
                  <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                </div>
              </button>

              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                  <div className="absolute inset-0 bg-black transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white transform rotate-45"></div>
                  </div>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-gray-900 whitespace-nowrap">
                  FABRI<span className="font-light">LIFE</span>
                </span>
              </div>
            </div>

            {/* Center Section - Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-900 font-medium text-sm hover:text-gray-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right Section - Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Profile */}
              <button
                onClick={() => setIsProfileOpen(true)}
                className="flex flex-col items-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <User className="h-5 w-5" />
                <span className="text-xs mt-1 hidden sm:block">Profile</span>
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="flex flex-col items-center text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Heart className="h-5 w-5" />
                <span className="text-xs mt-1 hidden sm:block">Wishlist</span>
              </button>

              {/* Bag */}
              <button
                onClick={() => setIsBagOpen(true)}
                className="flex flex-col items-center text-gray-700 hover:text-gray-900 transition-colors relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="text-xs mt-1 hidden sm:block">Bag</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Menu Sidebar */}
      <NavigationMenu isOpen={isNavMenuOpen} onClose={() => setIsNavMenuOpen(false)} />

      {/* Wishlist Sidebar */}
      <Sidebar 
        isOpen={isWishlistOpen} 
        onClose={() => setIsWishlistOpen(false)}
        title="My Wishlist"
      >
        <WishlistContent />
      </Sidebar>

      {/* Bag Sidebar */}
      <Sidebar 
        isOpen={isBagOpen} 
        onClose={() => setIsBagOpen(false)}
        title="Shopping Bag"
      >
        <BagContent />
      </Sidebar>

      {/* Profile Sidebar */}
      <Sidebar 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)}
        title="My Profile"
      >
        <ProfileContent />
      </Sidebar>
    </>
  );
};