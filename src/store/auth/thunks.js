import { singInWithGoogle } from "../../firebase/provider"
import { chekinCredentials, login, logout } from "./authSlice"

export const chekingAutentication = (email,password)=>{
    return async(dispatch)=>{
        dispatch(chekinCredentials())
    }
} 

export const starAuthGoogle = ()=>{
   return async(dispatch)=>{
    dispatch(chekinCredentials())
    const res = await singInWithGoogle()
    if(!res.ok){
      return dispatch(logout(res.errorMessage))
    }
    dispatch(login(res))
   }
}