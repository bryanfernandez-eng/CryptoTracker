import { useContext } from "react";
import "./Navbar.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1 className="logo">Crypto Tracker</h1>
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="navbar-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">eur</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
