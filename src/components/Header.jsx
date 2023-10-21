import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav>
      <h2>My Cart</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cart.cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
