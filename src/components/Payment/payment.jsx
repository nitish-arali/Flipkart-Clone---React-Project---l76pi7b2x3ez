import { useContext, useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import CartContext from "../../context/cart.context";
import './payment.css'

// import "./checkout.modal.css";

// Modal.setAppElement("#root");

export default function PaymentModal({ closeModal }) {
  useEffect(()=>{
    window.scrollTo(0,0);
    document.body.style.overflowY= "hidden";
    return()=>{
      document.body.style.overflowY = "scroll";
    }
  },[])
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle payment logic here
    setCart([]);
    localStorage.removeItem("cart");
    closeModal();
    // navigate("/thankyou");
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // const handleNameChange = (e) => setName(e.target.value);
  // const handleEmailChange = (e) => setEmail(e.target.value);
  // const handleAddressChange = (e) => setAddress(e.target.value);
  // const handlePhoneChange = (e) => setPhone(e.target.value);

  const alertmsg = ()=> alert("Hello your order has been confirmed, Thank you for shopping!!!");
  return (
    <>
    <div className="modal-wrapper" onClick={closeModal}></div>
    <div className="modal-container">
      <h2>Checkout</h2>
      <p>Please fill in the details to pay and confirm the order.</p>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlhtmlFor="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                  className="input-type-text"
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Nitish Arali"
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                  className="input-type-text"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="nitisharali@yahoo.in"
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                  className="input-type-text"
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="007, W. Bengaluru"
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                  className="input-type-text"
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Bengaluru"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input
                      className="input-type-text"
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Karnataka"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input
                      className="input-type-text"
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="560073"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{color:'navy'}}></i>
                    <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
                    <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
                    <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                  className="input-type-text"
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Nitish Basavaraj Arali"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                  className="input-type-text"
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                  className="input-type-text"
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                      className="input-type-text"
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2023"
                      />
                    </div>
                    <div className="col-50 input-type-text">
                      <label htmlFor="cvv">CVV</label>
                      <input
                      className="input-type-text"
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" />{" "}
                Shipping address same as billing
              </label>
              <input
                type="submit"
                value="Continue to checkout"
                className="btn"
                onClick={closeModal}
              />
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
