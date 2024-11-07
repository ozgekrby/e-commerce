export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "tr",
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
      case SET_ADDRESS_LIST:
      return { ...state, addressList: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
