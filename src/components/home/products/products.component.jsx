import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductsContext from "../../../context/products";
import "./products.component.css";
import CartContext from "../../../context/cart.context";

export default function Products({ image, title, description, price }) {
  const { id } = useParams();
  const { productList } = useContext(ProductsContext);
  const [currentProduct, setCurrentProduct] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (productList && id) {
      setCurrentProduct(
        productList.find((product) => product.id === Number(id))
      );
    }
  }, [id, productList]);

  useEffect(() => {
    if (localStorage.getItem("cart") && !cart.length) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      setCart(cartItems);
    }
  }, [cart]);

  const addToCart = () => {
    if (!currentProduct) return;
    const existingItem = cart.find((item) => item.id === currentProduct.id);
    if (existingItem) {
      const updatedCart = cart.map((item) => {
        if (item.id === existingItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newItem = {
        id: currentProduct.id,
        title: currentProduct.title,
        price: currentProduct.price,
        image: currentProduct.image,
        quantity: 1,
      };

      const updatedCart = [...cart, newItem];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    navigate("/cart");
  };

  return (
    <div className="parent-container">
      <div className="main-container">
        <div className="image-container">
          <img
            src={currentProduct?.image}
            alt={currentProduct?.title}
            className="product-image"
          />
          <div className="buttons">
            <button className="btn1" onClick={addToCart}>
              ADD TO CART
            </button>
            <button className="btn2" onClick={addToCart}>
              BUY NOW
            </button>
          </div>
        </div>
        <div className="product-details-container">
          <p className="product-category">
            {currentProduct?.category.toUpperCase()}
          </p>
          <p className="product-title">{currentProduct?.title}</p>
          <p className="product-price-container">
            <span className="product-price">₹{currentProduct?.price}</span>
            <span className="product-mrp-price">
              ₹{(currentProduct?.price / 0.75).toFixed(2)}
            </span>
            <span className="product-discount">25% off</span>
          </p>
          <p className="product-ratings-img-others">
            <span className="product-rating" key={currentProduct?.id}>
              {currentProduct?.rating.rate}
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                alt="star"
              />
            </span>
            <span
              className="product-rating-reviewers"
              key={currentProduct?.rating.count}
            >
              {currentProduct?.rating.count} ratings and{" "}
              {(currentProduct?.rating.count / 10).toFixed()} reviews
            </span>
            <span>
              <img
                height={21}
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              />
            </span>
          </p>
          <h3 className="product-details-heading">Product Deatils:</h3>
          <p className="product-description">
            {currentProduct?.description.charAt(0).toUpperCase() +
              currentProduct?.description.slice(1)}
          </p>
          <h4 className="product-offers">Available Offers</h4>
          <p className="product-offer-list">
            <img
              src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"
              width={18}
              height={18}
            />
            <span className="product-offer-content">Eligible for Flipkart Pay Later</span>
          </p>
          <p className="product-offer-list">
            <img
              src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"
              width={18}
              height={18}
            />
            <span className="product-offer-content">10% off on Axis Bank Credit Card and EMI Transactions, up to ₹1500, on orders of ₹5,000 and above</span>
          </p>
          <p className="product-offer-list">
            <img
              src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"
              width={18}
              height={18}
            />
            <span className="product-offer-content">Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹15,000 to ₹39,999</span>
          </p>
          <p className="product-offer-list">
            <img
              src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"
              width={18}
              height={18}
            />
            <span className="product-offer-content">Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced between ₹40,000 to ₹49,999</span>
          </p>
          <p className="product-offer-list">
            <img
              src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png"
              width={18}
              height={18}
            />
            <span className="product-offer-content">No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2997</span>
          </p>
          <p className="product-more-offers">+13 more offers</p>
        </div>
      </div>
    </div>
  );
}
