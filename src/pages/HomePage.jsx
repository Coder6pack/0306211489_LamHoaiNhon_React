import React from "react";
import Header from "../components/Header/Header";
import ProductList from "../components/Product/ProductList";
import Footer from "../components/Footer/Footer";
import Label from "../components/Footer/Label/Label";
import Banner from "../components/Header/Banner/Banner";
export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <ProductList />
      <Label />
      <Footer />
    </>
  );
}
