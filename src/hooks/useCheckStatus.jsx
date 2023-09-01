import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";

export const useCheckStatus = () => {
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    useEffect(() => {
      onAuthStateChanged(FirebaseAuth,async (user) => {
        console.log(user);
        if (!user) {
          return dispatch(logout());
        }
        const { displayName, email, photoURL, uid } = user;
        return dispatch( login({displayName, email, photoURL, uid}) );
      });
    }, []);
  
    return status
}
