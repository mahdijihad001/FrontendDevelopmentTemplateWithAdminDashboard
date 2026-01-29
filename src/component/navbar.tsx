import { useState } from 'react';
import { User, Heart, ShoppingCart} from 'lucide-react';
import WishlistContent from './navComponent/WishlistContent';
import BagContent from './navComponent/BagContent';
import ProfileContent from './navComponent/ProfileContent';
import NavigationMenu from './navComponent/NavigationMenu';
import Sidebar from './navComponent/Sidebar';

export default function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = ['MEN', 'WOMEN', 'TEENS', 'KIDS', 'SPORTS'];

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-30">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
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