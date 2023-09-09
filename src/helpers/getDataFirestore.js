import { collection, getDocs } from "firebase/firestore/lite"
import { FirestoreApp } from "../firebase/config"

export const getDataFirestore =  async (uid='') => {
    if (!uid) throw  ('El UID del usuario no existe')
    
    const collectionRef = collection(FirestoreApp,`${uid}/journall/notes`)
    const docs = await getDocs(collectionRef)
    const data = []
    docs.forEach(doc=>{
        const dataFire ={
            id:doc.id, ...doc.data()
        }
        data.push(dataFire)
    })
    return data
}
