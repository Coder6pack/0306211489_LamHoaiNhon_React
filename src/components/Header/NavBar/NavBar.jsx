import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="row">
          <div className="col-10 col-menu">
            <div className="header-nav">
              <ul className="item_big">
                <li className="nav-item ">
                  <NavLink className="a-img a-active" to="/">
                    HomePage
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/intro" className="a-img">
                    Intro
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/product" className="a-img" href="#">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="a-img" href="#">
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink to="/gio-hang" className="a-img">
                    Shopping
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 col-search-cart"></div>
        </div>
      </div>
    </div>
  );
}
