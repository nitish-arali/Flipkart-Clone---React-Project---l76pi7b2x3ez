import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ProductsContext from "../../context/products";
import "./home.component.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartContext from "../../context/cart.context";
import Footer from "../Footer/Footer";

export default function Home(data) {
  const navigate = useNavigate();
  const { productList } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);

  useEffect(()=>{
       
  })

  // useEffect(() => {
  //   if (localStorage.getItem("cart") && !cart.length) {
  //     const cartItems = JSON.parse(localStorage.getItem("cart"));
  //     setCart(cartItems);
  //   }
  // }, [cart]);

  return (
    <>
      <div className="topProductNavBar">
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png" />
          <p>Grocery</p>
        </div>
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png" />
          <p>Mobiles</p>
        </div>
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d34810848b2895c9.png" />
          <p>Fashion</p>
        </div>
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png" />
          <p>Electronics</p>
        </div>
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg" />
          <p>Home</p>
        </div>
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png" />
          <p>Appliances</p>
        </div>
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png" />
          <p>Travel</p>
        </div>
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png" />
          <p>Top Offers</p>
        </div>
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png" />
          <p>Beauty & Toys</p>
        </div>
        <div className="topProductNavBar-grocery">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png" />
          <p>Two Wheelers</p>
        </div>
      </div>
      <div className="carousel">
        <Slider
          autoplay
          autoplaySpeed={2500}
          arrows
          initialSlide={2}
          infinite
          dotsClass="slick-dots custom-indicator"
        >
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/2000/280/image/e1ccefe674a248d6.jpg"
              alt="1"
              className="slider-img"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/2000/280/image/6363749479abe09a.jpg"
              alt="2"
              className="slider-img"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/2000/280/image/09a4d20b8c2f5d10.jpg"
              alt="3"
              className="slider-img"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/2000/280/image/9d322aa54c6b310a.jpg"
              alt="4"
              className="slider-img"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/flap/2000/280/image/75a15c3e19c3f7de.jpg"
              alt="5"
              className="slider-img"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/2000/280/image/62d1db714bbec85e.jpg"
              alt="6"
              className="slider-img"
            />
          </div>
          <div>
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/2000/280/image/369b433f2969b79c.jpg"
              alt="7"
              className="slider-img"
            />
          </div>
        </Slider>
      </div>
      {productList &&
        productList.map((product) => {
          return (
            <div className="product-grid">
              <div className="electronics-section-products">
                <p
                  className="electronics-image-section"
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    title={product.title}
                    key={product.id}
                  />
                </p>
                <p className="electronics-text-section" key={product.id}>
                  {product.title.substring(0, 12)}...
                </p>
                <p>
                  <span
                    className="electronics-text-section-rating-number"
                    key={product.id}
                  >
                    {product.rating.rate}{" "}
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                      alt="star"
                    />
                  </span>
                  <span
                    className="electronics-text-section-rating-reviewers"
                    key={product.rating.count}
                  >
                    {" "}
                    ({product.rating.count})
                  </span>
                </p>
                <div>
                  <p>
                    <span
                      className="electronics-text-section-sp"
                      key={product.id}
                    >
                      ₹ {product.price}
                    </span>
                  </p>
                </div>
                <div className="view">
                  <button
                    className="view-btn"
                    onClick={() => {
                      navigate(`/product/${product.id}`);
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <Footer />
    </>
  );
}
