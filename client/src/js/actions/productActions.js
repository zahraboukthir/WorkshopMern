import axios from "axios";
import {
  ADDPRODUCTFAILED,
  ADDPRODUCTSSUCCESS,
  GETALLPRODUCTFAILED,
  GETALLPRODUCTSSUCCESS,
  PRODUCT_LOAD,
} from "../const/productConst";

export const getallproduct = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LOAD });
  try {
    const { data } = await axios.get("http://localhost:5000/product");
    dispatch({ type: GETALLPRODUCTSSUCCESS, payload: data.allProducts });
  } catch (error) {
    dispatch({ type: GETALLPRODUCTFAILED, payload: error });
  }
};
//add nwe product : private route for admin user
export const addProduct = (newProduct, navigate) => async (dispatch) => {
  try {
    const opts = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const response = await axios.post(
      "http://localhost:5000/product/addProduct",
      newProduct,
      opts
    );
    console.log(response);
    dispatch({ type: ADDPRODUCTSSUCCESS });
    dispatch(getallproduct());
    navigate("/product");
  } catch (error) {
    console.dir(error);
    dispatch({ type: ADDPRODUCTFAILED, payload: error });
  }
};
