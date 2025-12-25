import { useState } from 'react';
// import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Building2, Briefcase, LogOut, Menu, MessageSquare, Settings, User } from 'lucide-react';
import { Outlet, useLocation, useNavigate } from 'react-router';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path : any) => {
    if (path === '/admin' && location.pathname === '/admin') return true;
    if (path !== '/admin' && location.pathname === path) return true;
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 flex flex-col`}>
        {/* User Profile */}
        <div className="p-6 bg-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              AM
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm">Arlene McCoy</div>
                <div className="text-xs text-gray-400 truncate">am.jennings@example.com</div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <button
            onClick={() => navigate('/admin')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              isActive('/admin') ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
            }`}
          >
            <Building2 size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </button>
          <button
            onClick={() => navigate('/admin/my-jobs')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              isActive('/admin/my-jobs') ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
            }`}
          >
            <Briefcase size={20} />
            {sidebarOpen && <span>My Jobs</span>}
          </button>
          <button
            onClick={() => navigate('/admin/message')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              isActive('/admin/message') ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
            }`}
          >
            <MessageSquare size={20} />
            {sidebarOpen && <span>Messages</span>}
          </button>
          <button
            onClick={() => navigate('/admin/setting')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/admin/setting') ? 'bg-blue-600 text-white' : 'hover:bg-slate-800'
            }`}
          >
            <Settings size={20} />
            {sidebarOpen && <span>Settings</span>}
          </button>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Log out</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Menu size={24} />
              </button>
              <div className="flex items-center gap-2">
                <Building2 className="text-blue-600" size={24} />
                <span className="font-bold text-xl">IN KLEIN</span>
                <span className="text-xs text-gray-500 ml-2">ELEVATOR SOFTWARE</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Search bids or keywords"
                className="px-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <User size={24} />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content - This will render child routes */}
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;