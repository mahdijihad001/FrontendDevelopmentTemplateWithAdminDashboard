import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./component/navbar";
import SidebarComponent from "./page/sidebar/SidebarComponent";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <SidebarComponent 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="w-full lg:ml-80 min-h-screen bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
