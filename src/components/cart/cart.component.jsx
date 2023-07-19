import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import "./cart.component.css";
import EmptyCart from "./EmptyCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/auth";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const [authState, setAuthState] = useContext(AuthContext);
  const navigate = useNavigate();
  const notify = () => {
    localStorage.clear();
    cart.length = 0;
    toast("Your Order has been confirmed. Thank you for Shopping!!!");
    setTimeout(() => {
      setCart([]);
    }, 3000);
  };
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    setIsLoading(false);
  }, [cart.length]);

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

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return !authState ? (
    navigate("/login")
  ) : cart.length ? (
    <>
      <div className="cart-main-container">
        <div className="cart-container">
          {cart.map((item) => (
            <>
              <div className="cart-items">
                <div className="cart-items-content">
                  <div  className="cart-item">
                    <img
                      src={item.image}
                      key={item.id}
                      alt={item.title}
                      className="cart-item-image"
                    />
                  </div>
                </div>
                <div className="cart-item-details">
                  <div className="cart-title-container">
                    <p className="cart-item-title">{item.title}</p>
                  </div>
                  <p className="cart-seller">
                    Seller: RetailNet
                    <span>
                      <img
                        height={18}
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                      />
                    </span>
                  </p>
                  <p className="cart-item-price">
                    <span className="cart-discount-mrp">
                      ₹{(item.price / 0.75).toFixed()}
                    </span>
                    <span className="cart-item-individual-price">
                      ₹{item.price.toFixed()}
                    </span>
                    <span className="cart-offer-applied">
                      25% Off &nbsp; 5 offers applied
                    </span>
                  </p>
                </div>

                <div>
                  <p className="delivery-update">Delivery by 11PM, Tomorrow</p>
                </div>

                <div className="cart-increment-decrement">
                  <button
                    className="cart-quantity-button"
                    onClick={() => decrementQuantity(item.id)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>

                  <span className="cart-quantity">{item.quantity}</span>
                  <button
                    className="cart-quantity-button"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <div>
                  <span
                    className="cart-remove-button"
                    onClick={() => removeItem(item.id)}
                  >
                    REMOVE
                  </span>
                </div>
              </div>
            </>
          ))}

          <div className="cart-summary">
            <div className="cart-placeorder">
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
                    localStorage.clear();
                    setCart([]);
                  }}
                >
                  Clear Cart
                </button>
                <button className="cart-checkout-button" onClick={notify}>
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-payment-container">
          <p className="cart-price-details">PRICE DETAILS</p>
          <div className="cart-price-items">
            <p>Price ({cart.length} items)</p>
            <p>₹{(totalPrice.toFixed(2) / 0.75).toFixed()}</p>
          </div>
          <div className="cart-price-items">
            <p>Discount</p>
            <p>
              <span className="cart-price-color">
                -₹
                {(totalPrice.toFixed(2) / 0.75).toFixed() -
                  totalPrice.toFixed()}
              </span>
            </p>
          </div>
          <div className="cart-price-items">
            <p>Delivery Charges</p>
            <p className="cart-price-color">Free</p>
          </div>

          <div className="cart-price-items-total">
            <p>Total Amount</p>
            <p>₹{totalPrice.toFixed()}</p>
          </div>
          <p className="cart-price-items">
            <span className="cart-price-color">
              You will save ₹
              {(totalPrice.toFixed(2) / 0.75).toFixed() - totalPrice.toFixed()}{" "}
              on this order
            </span>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  ) : (
    <EmptyCart />
  );
}
