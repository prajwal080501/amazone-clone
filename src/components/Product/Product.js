import React from "react";
import "./Product.css";
const Product = ({ title, image, price, rating }) => {
  return (
    <>
      <div className="product">
        <div className="product__info">
          <p className="product__name">
            <b>{title}</b>
          </p>

          <p className="product__price">
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {" "}
            {Array(rating)
              .fill()
              .map((_, i) => (
                <>🌟</>
              ))}
          </div>
          <img
            className="product__image"
            src={image}
            alt=""
            className="product__image"
          />
          <button className="product__button">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
