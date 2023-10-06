import React from "react";
import "./ProductList.css";
import { Product } from "../../Data/Product";
import Card from "../Card/Card";
export default function ProductList() {
  console.log(Product);
  return (
    <div className="conainer-list">
      <div className="list-item">
        {Product.map((val) => {
          return (
            <Card
              className="list-card"
              src={val.src}
              title={val.title}
              price={val.price}
            />
          );
        })}
      </div>
    </div>
  );
}
