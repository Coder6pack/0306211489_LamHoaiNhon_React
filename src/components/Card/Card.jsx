import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";
export default function Card(props) {
  return (
    <div className="container-card">
      <div className="container-img">
        <img className="img-card" src={props.src} />
      </div>
      <div className="container-content">
        <h3 className="title">{props.title}</h3>
        <h4 className="price">{props.price} USD</h4>
        <div className="container-button">
          <div>
            <button className="btn btn-primary btnchoies">
              <NavLink to="/product" className="a-btn">
                Xem
              </NavLink>
            </button>
          </div>
          <div>
            <button className="btn btn-success btnchoies">
              <NavLink to="/gio-hang" className="a-btn">
                Mua
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
