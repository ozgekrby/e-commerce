  export const SET_CART = 'SET_CART';
  export const SET_PAYMENT = 'SET_PAYMENT';
  export const SET_ADDRESS = 'SET_ADDRESS';
  export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
  
  export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
  const initialState = {
    cart: [],
    payment: {},
    address: {}
  };

  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CART:
        return { ...state, cart: action.payload };
      case SET_PAYMENT:
        return { ...state, payment: action.payload };
      case SET_ADDRESS:
        return { ...state, address: action.payload };
        case REMOVE_FROM_CART:
          return {
              ...state,
              cart: state.cart.filter(item => item.product.id !== action.payload),
          };
          case DECREASE_QUANTITY:
            const productIndex = state.cart.findIndex(item => item.product.id === action.payload);
            if (productIndex >= 0) {
                const updatedCart = [...state.cart];
                if (updatedCart[productIndex].count > 1) {
                    updatedCart[productIndex].count -= 1; 
                } else {
                    updatedCart.splice(productIndex, 1); 
                }
                return { ...state, cart: updatedCart };
            }
            return state;
      default:
        return state;
    }
  };
  
  export default cartReducer;