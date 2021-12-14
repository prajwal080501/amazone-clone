import React, {useStateValue} from "../../components/StateProvider";
import "./Product.css";
const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch item to data layer reducer
    dispatch({ //this acts as a gun and shhots the data into the data layer
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
};
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
          <button onClick= {addToBasket} className="product__button">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
