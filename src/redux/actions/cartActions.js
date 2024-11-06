import { DECREASE_QUANTITY, REMOVE_FROM_CART, SET_ADDRESS, SET_CART, SET_PAYMENT } from "../reducers/cartReducer";

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart
  });
  
  export const setPayment = (payment) => ({
    type: SET_PAYMENT,
    payload: payment
  });
  
  export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address
  });

  export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId,
    };
};
export const decreaseQuantity = (productId) => {
  return {
      type: DECREASE_QUANTITY,
      payload: productId,
  };
};