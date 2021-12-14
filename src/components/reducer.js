export const initialState = {
  basket: [],
  user: null,
};

//selector 
export const getBasketTotal = (basket) => //function that takes in the basket and returns the total of items added to the cart
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET": // case to remove items from the basket
      const index = state.basket.findIndex( //find the index of the item in the basket
        (basketItem) => basketItem.id === action.id //if the id of the item in the basket matches the id of the item to be removed
      );
      let newBasket = [...state.basket]; //create a new basket
      if (index >= 0) { //if the index is greater than or equal to 0
        newBasket.splice(index, 1); //remove the item from the basket 
      } else { //if the index is not greater than or equal to 0
        console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`); //log a warning
      }
      return { ...state, basket: newBasket }; //return the new basket
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
