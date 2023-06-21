import React from "react";
import { Link } from "react-router-dom";
import "../css/Confirmation.css";

function Confirmation() {
  return (
    <div className="confirmationContainer">
      <div className="backgroundStyle"></div>
      <div className="foregroundStyle">
        <div className="box">
          <h1 className="title">Confirmation</h1>
          <p className="confirmationText">
           Your  order is being prepared and will arrive in {" "}
            {Math.floor(Math.random() * 40)} min
          </p>
          <Link className="btnOrder" to="/">
            <div>
              <p>Home</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
