import ProductHome from '../page/product/ProductHome';
import SidebarComponent from '../page/sidebar/SidebarComponent';

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SidebarComponent />

      {/* Main Content */}
      <ProductHome />
    </div>
  );
};

export default Home;