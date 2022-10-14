import { ADMINLOADING, GETALLUSERSSUCCESS } from "../const/adminConst"
import { GETALLUSERSFAILED } from './../const/adminConst';

const initialState = {loding:false,
allUsers:[],
error:null
}

export const adminReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADMINLOADING:
    return { ...state, loding:true }
    case GETALLUSERSSUCCESS:
        return { ...state, loding:false,allUsers:payload }
        case GETALLUSERSFAILED:
    return { ...state, loding:false,error:payload }
  default:
    return state
  }
}
