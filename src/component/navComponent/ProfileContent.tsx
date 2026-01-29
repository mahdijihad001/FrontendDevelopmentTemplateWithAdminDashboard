import { useState } from "react";

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


export default ProfileContent