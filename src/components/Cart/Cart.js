import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import Header from "../../components/Header/Header";
import "./Cart.css";
const Cart = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="cart">
        <div className="cart__left">
          <h2 className="cart__title">Your Shopping cart</h2>

          {/* code to display cart is empty if no items */}
          {basket.length === 0 ? (
            <div className="cart__text">
              <h3 className="cart__email">Hey, {user.email}</h3>
              <h2>Your cart is empty</h2>
              <p className="card__textSummary">
                You have no items in your cart. To buy one or more items, click
                <b>"Add to cart"</b> next to the item.
              </p>{" "}
            </div>
          ) : (
            <div>
              {/* code to display cart if items are present */}
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>

        <div className="cart__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Cart;
