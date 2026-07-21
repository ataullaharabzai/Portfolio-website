import { Outlet } from "react-router-dom";
import "./App.css";
import Navebar from "./Header/Navebar";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-200">
      <ScrollToTop />
      <Navebar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
