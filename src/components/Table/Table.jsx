import React from "react";
import { Shopping } from "../../Data/Shopping";
import "./Table.css";
import { NavLink } from "react-router-dom";

export default function Table() {
  return (
    <div className="container-table">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">So Luong</th>
            <th scope="col">Price</th>
            <th scope="col">Tool</th>
          </tr>
        </thead>
        <tbody>
          {Shopping.map((val) => {
            return (
              <tr>
                <th scope="row">{val.id}</th>
                <td>{val.name}</td>
                <td>
                  <img className="table-img" src={val.src} />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>{val.price}</td>
                <td>
                  <a className="btn btn-danger">Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="container-tools">
        <div>
          <NavLink className="btn-tool btn btn-primary" to="/">
            Tiếp tục mua hàng
          </NavLink>
        </div>
        <div className="tool-item">
          <h3>Tổng tiền : 99999</h3>
          <NavLink className="btn-tool btn btn-success" to="/thanh-toan-bill">
            Thanh toán
          </NavLink>
        </div>
      </div>
    </div>
  );
}
