import { ChevronRight } from "lucide-react"

const SidebarComponent = () => {

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
        <div className="fixed top-16 left-0 w-80 h-[calc(100vh-4rem)] bg-white border-r border-gray-200">
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
    )
}

export default SidebarComponent