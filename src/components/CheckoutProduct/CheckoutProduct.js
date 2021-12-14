import React from 'react'
import { useStateValue } from '../StateProvider';
import "./CheckoutProduct.css";
const CheckoutProduct = ({ id, title, price, image, rating }) => {
    const [{basket, user}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
        
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="product" />
            <div className="checkoutProduct__info">
               
                <p className="checkoutProduct__title">{title}</p>
                <br />
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <>🌟</>
              ))}
            </div>
            <button onClick={removeFromBasket} className="checkoutProduct__button">Remove from cart</button>
        </div>
    )
}

export default CheckoutProduct
