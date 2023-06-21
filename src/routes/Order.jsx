import React from "react";
import { Link } from "react-router-dom";
import "../css/Order.css";

function Order() {
  function removeItem(id) {
    localStorage.removeItem(id);
    document.getElementById("item" + id).remove();
  }

  function orderList() {
    const orderKeys = Object.keys(localStorage);
    return orderKeys.map((key) => {
      try {
        const { name, price, number } = JSON.parse(localStorage.getItem(key));
        return (
          <div id={"item" + key} key={key} className="orderItem">
            <p>
              {name} - Price: {price} kr - Amount: {number}
            </p>
            <button className="btnRemove" onClick={() => removeItem(key)}>
              X
            </button>
          </div>
        );
      } catch (error) {
        return null;  
      }
    });
  }
  
  return (
    <div className="orderContainer">
      <div className="foregroundStyle">
        <div className="box">
          <div className="orderText" id="order">
            {orderList()}
          </div>
          <Link className="btnOrder" to="/payment">
            <div>
              <p>Order</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Order;
