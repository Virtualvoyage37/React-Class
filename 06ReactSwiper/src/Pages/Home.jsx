import React, { useEffect, useState } from "react";
import HeroSection from "../Component/HeroSection";
import Navbar from "../Component/Layout/Navbar";
import Product from "../Component/Product";
import Cart from "../Component/Cart";

const Home = ({ showCart, setShowCart }) => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  }, []);

  // cart All Data

  const [cartData, setCartData] = useState([]);

  const AddItems = (data) => {
    setCartData([...cartData, data]);
    setShowCart(true);
  };

  const RemoveItems = (productId) => {
    const updateitems = cartData.filter((item) => item.id !== productId);
    setCartData(updateitems);
  };

  
  return (
    <div>
      <HeroSection />

      <h1 className="text-3xl font-bold text-center my-5 ">All Product </h1>
      {loader && <h5>Loading......</h5>}

      <div className="grid grid-cols-4 gap-2 gap-y-5">
        {data?.map((val, index) => (
          <div key={index}>
            <Product
              productdata={val}
              setShowCart={setShowCart}
              AddItems={AddItems}
            />
          </div>
        ))}
      </div>

      {showCart && (
        <Cart
          cartData={cartData}
          setShowCart={setShowCart}
          RemoveItems={RemoveItems}
        />
      )}
    </div>
  );
};

export default Home;
