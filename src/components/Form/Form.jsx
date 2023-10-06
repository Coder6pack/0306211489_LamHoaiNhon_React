import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="bill-deltail-item">
      <form>
        <input className="form-input d-block" type="text" placeholder="Email" />
        <input
          className="form-input d-block"
          type="text"
          placeholder="Họ tên"
        />
        <input
          className="form-input d-block"
          type="text"
          placeholder="Số điện thoại"
        />
        <input
          className="form-input d-block"
          type="text"
          placeholder="Địa chỉ"
        />
        <textarea className="form-input" placeholder="Ghi chú" />
      </form>
    </div>
  );
}
