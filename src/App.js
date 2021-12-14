import React from "react";
import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import Item from "./Item";

function App() {
  const name = "Tuấn";

  const productList = [
    {
      name: "iPhone 12",
      price: 15000000,
      isNew: true,
    },
    {
      name: "iPhone 12 Mini",
      price: 12000000,
      isNew: false,
    },
    {
      name: "iPhone 12 Pro",
      price: 20000000,
      isNew: true,
    },
    {
      name: "iPhone 12 Pro Max",
      price: 22000000,
      isNew: false,
    },
    {
      name: "iPhone 13",
      price: 25000000,
      isNew: false,
    },
    {
      name: "iPhone 13 Mini",
      price: 20000000,
      isNew: false,
    },
    {
      name: "Galaxy S21",
      price: 15000000,
      isNew: false,
    },
    {
      name: "Galaxy Note 20",
      price: 20000000,
      isNew: false,
    },
    {
      name: "Xiaomi M11",
      price: 15000000,
      isNew: false,
    },
    {
      name: "Oppo Reno 5",
      price: 18000000,
      isNew: false,
    },
  ];

  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <Item
          key={index}
          name={item.name}
          price={item.price}
          isNew={item.isNew}
        />
      );
    });
  };

  return (
    <div className="app">
      <Header name={name} address="iViettech" />
      <div className="main">
        <h2>Danh sách sản phẩm</h2>
        <div className="list">{renderProductList()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
