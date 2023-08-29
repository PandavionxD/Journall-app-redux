import { singInWithEmailAndPassword, singInWithGoogle } from "../../firebase/provider"
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

export const startAuthEmailAndPassword = (email,password,name)=>{
  return async(dispatch)=>{
    dispatch(chekinCredentials())
    const res = await singInWithEmailAndPassword(email,password,name)
    const {displayName,errorMessage,photoURL,uid,ok} = res
    if(!ok){
      return dispatch(logout({
        ok:false,
        errorMessage
      }))
    }
    dispatch(login({
      uid,
      photoURL,
      displayName,
      email,
      ok:true
    }))
  }
}