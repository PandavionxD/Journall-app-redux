import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {FirebaseAuth} from './config'

const googleProvider = new GoogleAuthProvider();

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