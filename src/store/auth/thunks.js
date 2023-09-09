import {
  logoutFirebase,
  singInWithEmailAndPassword,
  singInWithGoogle,
  startLoginWithEmailAndPassword,
} from "../../firebase/provider";
import { clearNotesLogout } from "../journall/journallSlice";
import { chekinCredentials, login, logout } from "./authSlice";

export const starAuthGoogle = () => {
  return async (dispatch) => {
    dispatch(chekinCredentials());
    const res = await singInWithGoogle();
    if (!res.ok) {
      return dispatch(logout({ errorMessage: res.errorMessage }));
    }
    dispatch(login(res));
  };
};

export const startAuthEmailAndPassword = (email, password, name) => {
  return async (dispatch) => {
    dispatch(chekinCredentials());
    const res = await singInWithEmailAndPassword(email, password, name);
    const { displayName, errorMessage, photoURL, uid, ok } = res;
    if (!ok) {
      return dispatch(
        logout({
          ok: false,
          errorMessage,
        })
      );
    }
    dispatch(
      login({
        uid,
        photoURL,
        displayName,
        email,
        ok: true,
      })
    );
  };
};

export const LoginPasswordEmail = (email, password) => {
  return async (dispatch) => {
    dispatch(chekinCredentials());
    const res = await startLoginWithEmailAndPassword(email, password);
    const { displayName, errorMessage, photoURL, uid, ok } = res;
    console.log(res);
    if (!ok) {
      return dispatch(
        logout({
          ok: false,
          errorMessage,
        })
      );
    }
    dispatch(
      login({
        uid,
        photoURL,
        email,
        displayName,
        ok: true,
      })
    );
  };
};

export const LogoutUser = () => {
  return async (dispatch) => {
    try {
      await logoutFirebase();
      dispatch(logout());
      dispatch(clearNotesLogout())
    } catch (error) {
      console.log(error);
    }
  };
};
