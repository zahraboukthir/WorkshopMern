import { LOGINSUCCESS, LOGOOUT, REGISTERSUCCESS, USERFAILED, USERLOADING, USERSUCCESS } from "../const/authConst"
import { REGISTERFAILED } from './../const/authConst';

const initialState = {currentuser:{},loading:false,error:null,isAuth:false}

const authreducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case USERLOADING:
    return { ...state, loading:true }
    case REGISTERSUCCESS:
        return{...state,loading:false,currentuser:payload.newuser   }
case REGISTERFAILED:
    return{...state,loading:false,error:payload}
    case LOGINSUCCESS:
      localStorage.setItem("token",payload.token)
    return{...state,loading:false,currentuser:payload.user,isAuth:true}
    case USERSUCCESS :
      return {...state,loading:false,currentuser:payload.user,isAuth:true}
      case USERFAILED:
    return{...state,loading:false,error:payload}
    case LOGOOUT:
      localStorage.removeItem("token")
      return {...state,loading:false,currentuser:{},error:null,isAuth:false}
  default:
    return state
  }
}
export default authreducer