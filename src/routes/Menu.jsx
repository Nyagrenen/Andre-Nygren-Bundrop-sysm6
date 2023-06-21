import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import "../css/Menu.css";

function useMenuItems() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/menuItems")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);

  return menuItems;
}

function Menu() {
  const menuItems = useMenuItems();
  return (
    <div className="menuContainer">
      <div className="foregroundStyle">
        {menuItems.map((m) => (
          <MenuItem
            key={m.id}
            name={m.name}
            image={m.image}
            price={m.price}
            id={m.id}
          />
        ))}
      </div>
      <Link className="btnOrder" to="/order">
        <div>
          <p className="orderText">Order</p>
        </div>
      </Link>
    </div>
  );
}

export default Menu;