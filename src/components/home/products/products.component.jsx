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
    <div>
      <h1>Product Details</h1>
      <div>
        <div className="product">
          <img
            src={currentProduct?.image}
            alt={currentProduct?.title}
            className="product-image"
          />
          <div className="btns"></div>
          <h2 className="product-title-h2">{currentProduct?.title}</h2>
          <div className="btns">
            <button className="btn1" onClick={addToCart}>
              ADD TO CART
            </button>
            <button className="btn2" onClick={addToCart}>BUY NOW</button>
          </div>
        </div>
        <h3 className="product-description-h3">Description</h3>
        <p className="product-description-p">{currentProduct?.description}</p>
        <div className="product-price">
          <h4 className="product-price-h4">Price: ₹{currentProduct?.price} </h4>
        </div>
      </div>
    </div>
  );
}
