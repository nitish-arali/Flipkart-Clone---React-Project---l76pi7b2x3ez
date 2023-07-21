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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    )
      .then((res) => res.json())
      .then((data) => setProductList(data));
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/" && authState) {
      navigate("/home");
    } else if (path === "/" && !authState) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/signup" && !authState) {
      navigate("/signup");
    } else if (path === "/login" && !authState) {
      navigate("/login");
    }
  }, [authState, navigate]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
                onChange={handleChange}
                value={searchTerm}
              ></input>
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 18"
                className=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#2874F1" fillRule="evenodd">
                  <path
                    className="_34RNph"
                    d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                  ></path>
                  <path
                    className="_34RNph"
                    d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                  ></path>
                </g>
              </svg>

              <div
                className="recent-search"
                style={searchTerm ? { display: "block" } : { display: "none" }}
              >
                <div className="search-inner">
                  {searchTerm &&
                    productList &&
                    productList
                      .filter((item) => {
                        const term = searchTerm.toLowerCase();
                        const title = item.title.toLowerCase();
                        return title.includes(term) && title !== term;
                      })
                      .map((item) => (
                        <div
                          className="base-search-items"
                          onClick={() => {
                            setSearchTerm("");
                            navigate(`/product/${item.id}`);
                          }}
                          key={item.id}
                        >
                          {item.title}
                        </div>
                      ))}
                </div>
              </div>
            </div>
            <div>
              {authState ? (
                <button
                  className="login-btn"
                  onClick={() => {
                    setAuthState(null);
                    localStorage.removeItem("isLoggedIn");
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
            <Link className="navLink">
              <p>Become a Seller</p></Link>
            <Link className="navLink" id="base-more-dropdown">
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
              <div className="base-dropdown-container">
                <p>Notification Preference</p><hr className="base-more-line"/>
                <p>24x7 Customer Care</p><hr className="base-more-line"/>
                <p>Advertise</p><hr className="base-more-line"/>
                <p>Download App</p>
              </div>
            </Link>
            <Link className="navLink" to={"./cart"}>
              <span className="cart-svg">
                <svg
                  className="V3C5bO"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="_1bS9ic"
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
