import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import ProductsContext from "./../../context/products";
import "./base.component.css";
import CartContext from "../../context/cart.context";
import AuthContext from "../../context/auth";

export default function BaseComponent({}) {
  const navigate = useNavigate();
  const [productList, setProductList] = useState();
  const [cart, setCart] = useState([]);
  const [authState, setAuthState] = useContext(AuthContext);
  const isLoggedIn = false;

  useEffect(() => {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    )
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  useEffect(() => {
    if (localStorage.clear()) {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/signup' && !authState) {
      navigate('/signup');
    } else if (path === '/login' && !authState) {
      navigate('/login');
    }
  }, [authState, navigate]);

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <ProductsContext.Provider value={{ productList, setProductList }}>
          <div className="nav">
            <div
              className="logo"
              onClick={() => {
                navigate(`/home`);
                console.log(cart);
              }}
            >
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" />
            </div>
            <div className="search">
              <input
                type="text"
                placeholder="Search for products, brands and more"
              ></input>
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 18"
                class=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#2874F1" fill-rule="evenodd">
                  <path
                    class="_34RNph"
                    d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                  ></path>
                  <path
                    class="_34RNph"
                    d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                  ></path>
                </g>
              </svg>

              <div className="recent-search">
                <div className="recent-search-list">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 15 15"
                    fill="#8C8C8E"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.15 7.49998C13.15 4.66458 10.9402 1.84998 7.50002 1.84998C4.72167 1.84998 3.34849 3.9064 2.76335 5H4.5C4.77614 5 5 5.22386 5 5.5C5 5.77614 4.77614 6 4.5 6H1.5C1.22386 6 1 5.77614 1 5.5V2.5C1 2.22386 1.22386 2 1.5 2C1.77614 2 2 2.22386 2 2.5V4.31318C2.70453 3.07126 4.33406 0.849976 7.50002 0.849976C11.5628 0.849976 14.15 4.18537 14.15 7.49998C14.15 10.8146 11.5628 14.15 7.50002 14.15C5.55618 14.15 3.93778 13.3808 2.78548 12.2084C2.16852 11.5806 1.68668 10.839 1.35816 10.0407C1.25306 9.78536 1.37488 9.49315 1.63024 9.38806C1.8856 9.28296 2.17781 9.40478 2.2829 9.66014C2.56374 10.3425 2.97495 10.9745 3.4987 11.5074C4.47052 12.4963 5.83496 13.15 7.50002 13.15C10.9402 13.15 13.15 10.3354 13.15 7.49998ZM7.5 4.00001C7.77614 4.00001 8 4.22387 8 4.50001V7.29291L9.85355 9.14646C10.0488 9.34172 10.0488 9.65831 9.85355 9.85357C9.65829 10.0488 9.34171 10.0488 9.14645 9.85357L7.14645 7.85357C7.05268 7.7598 7 7.63262 7 7.50001V4.50001C7 4.22387 7.22386 4.00001 7.5 4.00001Z"
                      fill="#8C8C8E"
                    />
                  </svg>
                  <p>apple air pods</p>
                </div>
                <p className="discoverMore">Discover More</p>

                <div className="recent-search-list-discover">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 18"
                    class=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#2874F1" fill-rule="evenodd">
                      <path
                        class="_34RNph"
                        d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                      ></path>
                      <path
                        class="_34RNph"
                        d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                      ></path>
                    </g>
                  </svg>
                  <p>Mobiles</p>
                </div>
                <div className="recent-search-list-discover">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 18"
                    class=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#2874F1" fill-rule="evenodd">
                      <path
                        class="_34RNph"
                        d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                      ></path>
                      <path
                        class="_34RNph"
                        d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                      ></path>
                    </g>
                  </svg>
                  <p>Shoes</p>
                </div>
                <div className="recent-search-list-discover">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 18"
                    class=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#2874F1" fill-rule="evenodd">
                      <path
                        class="_34RNph"
                        d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                      ></path>
                      <path
                        class="_34RNph"
                        d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                      ></path>
                    </g>
                  </svg>
                  <p>Laptop</p>
                </div>
                <div className="recent-search-list-discover">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 18"
                    class=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#2874F1" fill-rule="evenodd">
                      <path
                        class="_34RNph"
                        d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                      ></path>
                      <path
                        class="_34RNph"
                        d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                      ></path>
                    </g>
                  </svg>
                  <p>Smart Watches</p>
                </div>
                <div className="recent-search-list-discover">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 18"
                    class=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#2874F1" fill-rule="evenodd">
                      <path
                        class="_34RNph"
                        d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                      ></path>
                      <path
                        class="_34RNph"
                        d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                      ></path>
                    </g>
                  </svg>
                  <p>TV</p>
                </div>
                <div className="recent-search-list-discover">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 17 18"
                    class=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#2874F1" fill-rule="evenodd">
                      <path
                        class="_34RNph"
                        d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                      ></path>
                      <path
                        class="_34RNph"
                        d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                      ></path>
                    </g>
                  </svg>
                  <p>Sarees</p>
                </div>
              </div>
            </div>
            <div>
              {authState ? (
                <button
                  className="login-btn"
                  onClick={() => {
                    setAuthState(null);
                    localStorage.removeItem("isLoggedIn")
                    navigate("/home");
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="login-btn"
                  onClick={() => {
                    navigate("/login");
                  }}  
                >
                  Login
                </button>
              )}
            </div>
            <Link className="navLink">Become a Seller</Link>
            <Link className="navLink">
              More
              <svg
                fill="#ffffff"
                height="10px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            </Link>
            <Link className="navLink" to={"./cart"}>
              <span className="cart-svg">
                <svg
                  class="V3C5bO"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="_1bS9ic"
                    d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                    fill="#fff"
                  ></path>
                </svg>
              </span>
              Cart <span className="cart-number">{cart ? cart.length : 0}</span>
            </Link>
          </div>

          <Outlet></Outlet>
        </ProductsContext.Provider>
      </CartContext.Provider>
    </>
  );
}

{
  /* <button
          onClick={() => {
            navigate("/cart");
          }}
        ></button> */
}
