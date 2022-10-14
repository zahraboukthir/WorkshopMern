import { combineReducers } from "redux";
import authreducer from "./authReducer";
import { adminReducer } from "./adminReducer";
import { productReducer } from "./productReducer";

export const rootreducer = combineReducers({
  authreducer,
  adminReducer,
  productReducer,
});
