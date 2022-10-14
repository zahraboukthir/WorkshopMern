import {
    ADDPRODUCTFAILED,
  GETALLPRODUCTFAILED,
  GETALLPRODUCTSSUCCESS,
  PRODUCT_LOAD,
} from "../const/productConst";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LOAD:
      return { ...state, loading: true };
    case GETALLPRODUCTSSUCCESS:
      return { ...state, products: payload, loading: false };
    case GETALLPRODUCTFAILED:
      return { ...state, error: payload, loading: false };
    case ADDPRODUCTFAILED:
        return{...state,error:payload}
    default:
      return state;
  }
};
