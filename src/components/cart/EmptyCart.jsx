import React from "react";
import "./EmptyCart.css";
import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <>
      <div className="empty-cart">
        <div>
          <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png" />
        </div>
        <p className="empty-cart-p1">Your cart is empty!</p>
        <p>Add items to it now.</p>
        <button onClick={() => navigate("/home")}>Shop now</button>
      </div>
    </>
  );
}
