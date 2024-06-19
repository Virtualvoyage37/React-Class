import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Navbar from "./Component/Layout/Navbar";
import Footer from "./Component/Layout/Footer";
import PrivteRoute from "./Utils/PrivteRoute";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivteRoute />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="services" element={<Services />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="productdetail/:productId" element={<ProductDetails />} />

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
