import axios from "axios";
import { GETALLUSERSFAILED, GETALLUSERSSUCCESS, ADMINLOADING } from "../const/adminConst";


export const getallusers = () => async (dispatch) => {
  dispatch({ type: ADMINLOADING });
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const { data } = await axios.get("http://localhost:5000/user/", config);
 dispatch({type:GETALLUSERSSUCCESS,payload:data.allusers})
} catch (error) {
    dispatch({type:GETALLUSERSFAILED,payload:error})
}
};
