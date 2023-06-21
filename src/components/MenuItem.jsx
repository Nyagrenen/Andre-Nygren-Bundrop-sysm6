import React, { useState } from "react";
import "../css/MenuItem.css";

function MenuItem({ name, image, price, id }) {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
    localStorage.setItem(
      id,
      JSON.stringify({ name, price, id, number: newNumber })
    );
  };

  return (
    <div className="menuContainer">
      <div className="menuItem" onClick={handleClick}>
        <img className="menuImage" src={image} alt="image" />
        <div className="menuItemInfo">
          <p className="menuItemName">{name}</p>
          <p className="menuItemPrice">Price: {price} Kr</p>
        </div>
        <p id={id} className="menuItemNumber">
          Amount: {number}
        </p>
      </div>
    </div>
  );
}

export default MenuItem;
