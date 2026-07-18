import { Outlet } from "react-router-dom";
import "./App.css";
import Navebar from "./Header/Navebar";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
