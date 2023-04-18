import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import "./cart.component.css";
import PaymentModal from "../Payment/payment";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    alert("Your Order has been confirmed. Thank you for Shopping!!!");
    localStorage.clear();
    cart.length = 0;
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    setIsLoading(false);
  }, [setCart]);

useEffect(()=>{
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  setCart(savedCart);
},[cart.length === 0])

  const incrementQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrementQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: Math.max(item.quantity - 1, 1),
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="cart-container">
        {showModal && <PaymentModal closeModal={closeModal} />}
        <h1 className="cart-title">Your Cart</h1>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">Price: ₹{item.price}</p>
                <div className="cart-item-quantity">
                  <button
                    className="cart-quantity-button"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                  <span className="cart-quantity">{item.quantity}</span>
                  <button
                    className="cart-quantity-button"
                    onClick={() => decrementQuantity(item.id)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                </div>
                <button
                  className="cart-remove-button"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div className="cart-total">
            <p>Total Items: {totalItems}</p>
            <h2>
              Total Price: <span className="rupee-symbol">₹ </span>
              {totalPrice.toFixed(2)}
            </h2>
          </div>
          <div className="cart-buttons">
            <button
              className="cart-continue-shopping-button"
              onClick={() => navigate("/home")}
            >
              Continue Shopping
            </button>
            <button
              className="cart-checkout-button"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
