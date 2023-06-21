import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  return (
    <div className="main-container" style={{ height: "100%", fontFamily: "Poppins" }}>
      <div className="text-container">
      <h1>
            The first flying burger delivery
          </h1>
      </div>
      <div className="foregroundStyle">
      <img src="/Images/vburge.png" alt="Burger" className="burger-image" />
        <Link className="btnMenu" to="/menu">
          <div>
            <p>Menu</p>
          </div>
        </Link>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Home;
