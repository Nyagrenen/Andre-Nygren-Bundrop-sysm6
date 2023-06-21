import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Menu from "./routes/Menu";
import Order from "./routes/Order";
import Payment from "./routes/Payment";
import Confirmation from "./routes/Confirmation";
import Header from "./components/Header";
import "../src/css/MenuItem.css";
import "../src/css/Confirmation.css";
import "../src/css/Home.css";
import "../src/css/Menu.css";
import "../src/css/Order.css";
import "../src/css/Payment.css"; 


function App() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}

export default App;
