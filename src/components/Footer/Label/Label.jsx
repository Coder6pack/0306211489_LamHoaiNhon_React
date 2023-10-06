import React from "react";
import "./Label.css";
import { Brands } from "../../../Data/Brand";

export default function Label() {
  return (
    <div className="container-label">
      {Brands.map((val) => {
        return (
          <a className="a-label">
            <img src={val.src} />
          </a>
        );
      })}
    </div>
  );
}
