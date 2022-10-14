import { LOGINSUCCESS, LOGOOUT, REGISTERSUCCESS, USERFAILED, USERLOADING, USERSUCCESS } from "../const/authConst"
import axios from "axios"
import { REGISTERFAILED, LOGINFAILED } from './../const/authConst';
export const signup =(newuser,navigate)=>async(dispatch)=>{
    dispatch({type:USERLOADING})
    try {
        const respense = await axios.post("http://localhost:5000/user/signup",newuser)
        console.log(respense.data)
        dispatch({type:REGISTERSUCCESS,payload:respense.data})
        navigate('/signin')
    } catch (error) {
        dispatch({type:REGISTERFAILED,payload:error})
        console.log(error)

    }

}
export const signin =(user,navigate)=>async(dispatch)=>{
    dispatch({type:USERLOADING})
    try {
        const respense = await axios.post("http://localhost:5000/user/signin",user)
        console.log(respense.data)
        dispatch({type:LOGINSUCCESS,payload:respense.data})
        navigate(respense.data.user.role==="admin"?"/dashboardAdmin":"/dashboardClient")
    } catch (error) {
        console.dir(error)
        if (error.response.data.msg) {
            alert(error.response.data.msg);
          }else{
        error.response.data.forEach((el) => {
            alert(el.msg);
          });}
        dispatch({type:LOGINFAILED,payload:error})
        console.log(error)
       

    }

}
export const getuser =()=>async(dispatch)=>{
    dispatch({type:USERLOADING})
    try {
        const config={headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        }}
        console.log(config)
        const respense = await axios.get("http://localhost:5000/user/currentUser",config)
        console.log(respense.data)
        dispatch({type:USERSUCCESS,payload:respense.data})

    } catch (error) {
        dispatch({type:USERFAILED,payload:error})
        console.log(error)
        

    }

}
export const logout=()=>{
    return {type:LOGOOUT}
}

