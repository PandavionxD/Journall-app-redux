import {GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import {FirebaseAuth} from './config'

const googleProvider = new GoogleAuthProvider();

// Retorna una promesa
export const singInWithGoogle = async() =>{
    try {
        const result =await signInWithPopup(FirebaseAuth,googleProvider)
        // Credenciales de google -token de google
        // const credentials = GoogleAuthProvider.credentialsFromResult(result)
        const {displayName,email,photoURL,uid} = result.user
        return {
            ok:true,
            // user info
            displayName,
            email,
            photoURL,
            uid
        }

    } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        return{
            ok:false,
            errorMessage
        }
    }
}

// Funcion para crear un usuario con email y password
export const singInWithEmailAndPassword = async(email,password,name)=>{
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password)
        console.log(resp)
        const {uid,photoURL} = resp.user
        await updateProfile(FirebaseAuth.currentUser,{displayName:name})
        return {ok:true,uid,photoURL,displayName:name}

    } catch (error) {
        console.log(error)
        return{
            ok:false,
            errorMessage:error.message
        }
    }
}

// Funcion para accerder al Login en Firebase
export const startLoginWithEmailAndPassword =async (email,password)=>{
    try {
        const res = await signInWithEmailAndPassword(FirebaseAuth,email,password)
        const {uid,photoURL,displayName} = res.user
        return{
            ok:true,
            uid,
            photoURL,
            displayName,
            email
        }
    } catch (error) {
        console.log(error)
        const errorMessage = error.message
        return{
            ok:false,
            errorMessage
        }
    }
    
}

export const logoutFirebase =async ()=>{
    return await FirebaseAuth.signOut()
}