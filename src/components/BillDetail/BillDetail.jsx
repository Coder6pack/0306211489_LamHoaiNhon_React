import React from "react";
import "./BillDetail.css";
import Form from "../Form/Form";
import { NavLink } from "react-router-dom";

export default function BillDetail() {
  return (
    <div className="container-billdetail mt-5 mb-5">
      <Form />
      <div className="bill-deltail-item item-detail">
        <h3>Đơn Hàng</h3>
        <div>
          <div className="bill-detail-product">
            <div>
              <img
                className="bill-detail-img"
                src="https://bizweb.dktcdn.net/thumb/large/100/312/616/products/12.jpg?v=1525922725847"
              />
            </div>
            <div className="bill-detail-product-title">
              <p>Nước hoa DO</p>
            </div>
            <div>
              <p>3.5000</p>
            </div>
          </div>
          <div>
            <form>
              <input
                className="detail-input"
                type="text"
                placeholder="Nhập mã khuyến mãi"
              />
              <button className="btn btn-primary btn-detail">Áp dụng</button>
            </form>
          </div>
        </div>
        <div className="mt-5 container-price">
          <div className="d-flex justify-content-between detail-price">
            <p>Tạm tính</p>
            <p>30000</p>
          </div>
          <div className="d-flex justify-content-between detail-price">
            <p>Phí vận chuyển</p>
            <p>30000</p>
          </div>
        </div>
        <div className="mb-5">
          <div className="d-flex justify-content-between detail-price">
            <p>Tổng cộng</p>
            <p className="detail-money">60000</p>
          </div>
        </div>
        <div className="d-flex justify-content-between detail-price">
          <div>
            <NavLink className="detail-money-nav" to="/">
              {" < "}Quay về giỏ hàng
            </NavLink>
          </div>
          <div>
            <button className="detail-money-btn">
              <NavLink to="/"> Thanh toán </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
