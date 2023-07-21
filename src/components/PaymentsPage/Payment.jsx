import React ,{useContext}from "react";
import "./Payments.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate } from "react-router-dom";
import CartContext from "../../context/cart.context";

export default function Payment() {
  const { cart, setCart } = useContext(CartContext);
    const handleSubmit = (e)=> {
        e.preventDefault()
        toast("Your Order has been confirmed. Thank you for Shopping!!!");
        setTimeout(()=>{
            navigate("../home")
        },2500)        
    localStorage.clear();
    cart.length = 0;
    }
    const navigate = useNavigate();
  return (
    <>
      <div className="payment-main-container">
        <div className="payment-wrapper">
          <div className="payment-container">
            <form onSubmit={handleSubmit}>
              <h1 className="payment-h1">Shipping Details</h1>
              <div className="payment-name">
                <div>
                  <label htmlFor="f-name" >First</label>&nbsp;&nbsp;
                  <input type="text" name="f-name" required/>
                </div>
                <div>
                  <label htmlFor="l-name">Last</label>&nbsp;&nbsp;
                  <input type="text" name="l-name" required/>
                </div>
              </div>
              <div className="street">
                <label htmlFor="name">Street</label>&nbsp;&nbsp;
                <input type="text" name="address" />
              </div>
              <div className="payment-address-info">
                <div>
                  <label htmlFor="city">City</label>
                  <input type="text" name="city" />
                </div>
                <div>
                  <label htmlFor="state">State</label>
                  <input type="text" name="state" />
                </div>
                <div>
                  <label htmlFor="zip">Zip</label>
                  <input type="text" name="zip" />
                </div>
              </div>
              <h1 className="payment-h1">Payment Information</h1>
              <div className="payment-cc-num">
                <label htmlFor="card-num">Credit Card No.</label>&nbsp;
                <input type="text" name="card-num" />
              </div>
              <div className="payment-cc-info">
                <div>
                  <label htmlFor="card-num">Exp</label>&nbsp;&nbsp;
                  <input type="text" name="expire" />
                </div>
                <div>
                  <label htmlFor="card-num">CVV</label>&nbsp;&nbsp;
                  <input type="text" name="security" />
                </div>
              </div>
              <div className="payment-btns">
                <button>Purchase</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
  );
}
