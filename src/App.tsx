import { Outlet } from "react-router";
import Navbar from "./component/navbar";
import SidebarComponent from "./page/sidebar/SidebarComponent";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <SidebarComponent />

        {/* Main Content */}
        <div className="ml-80 pt-16 min-h-screen bg-gray-50 p-4">
          <Outlet />  {/* Routes will render here */}
        </div>
      </div>
    </div>
  );
};

export default App;
