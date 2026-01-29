import { MapPin, X } from "lucide-react";

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



export default NavigationMenu