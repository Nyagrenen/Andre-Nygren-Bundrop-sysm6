import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Payment() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [housenumber, setHousenumber] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [swishNumber, setSwishNumber] = useState("");

  const date = (date) => {
    setStartDate(date);
  };

  const validateInfo = () => {
    if (
      !firstname ||
      !lastname ||
      !email ||
      !city ||
      !address ||
      !housenumber
    ) {
      toast.error("You need to enter full information");
    } else if (phonenumber.length === 9 || swishNumber.length > 0) {
      navigate("/confirmation");
    } else if (creditCardNumber.length === 15 && cvc.length === 3) {
      navigate("/confirmation");
    } else {
      if (phonenumber.length !== 9) {
        toast.error("You need to enter a correct phone number");
      }
      if (
        creditCardNumber.length !== 15 ||
        cvc.length !== 3 ||
        phonenumber.length !== 9
      ) {
        toast.error("You need to enter correct payment information");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="checkout-title">
        <h1>Payment</h1>
      </div>
      <div className="info-container">
        <input
          className="firstname"
          placeholder="FirstName"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
        />
        <input
          className="lastname"
          placeholder="LastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
        />
        <input
          className="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="city"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <input
          className="address"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <input
          className="housenumber"
          placeholder="Housenumber"
          onChange={(e) => setHousenumber(e.target.value)}
          value={housenumber}
        />
      </div>
      <div className="payment-container">
        <div className="input-swish">
          <label>
            <input
              className="input-phonenumber"
              type="text"
              placeholder="Swish Number"
              onChange={(e) => setSwishNumber(e.target.value)}
              value={swishNumber}
            />
          </label>
        </div>
        <div className="input-credit">
          <label>
            <input
              className="input-credit-card"
              type="text"
              placeholder="Credit Card Number"
              onChange={(e) => setCreditCardNumber(e.target.value)}
              value={creditCardNumber}
            />
          </label>
          <label>
            <input
              className="input-credit-card"
              type="text"
              placeholder="CVC"
              onChange={(e) => setCvc(e.target.value)}
              value={cvc}
            />
          </label>
          <label>
            <DatePicker
              className="input-credit-card"
              selected={startDate}
              onChange={date}
              dateFormat="dd/MM/yyyy"
              placeholderText="Expiration date"
            />
          </label>
        </div>
      </div>
      <div className="pay">
        <button onClick={validateInfo} className="btn-pay-style">
          Pay
        </button>
      </div>
    </div>
  );
}

export default Payment;
