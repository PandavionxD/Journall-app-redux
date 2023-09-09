import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirestoreApp } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNotes } from "./journallSlice";
import { getDataFirestore } from "../../helpers/getDataFirestore";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(FirestoreApp, `${uid}/journall/notes`));
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startGetNotes = ()=>{
  return async (dispatch, getState) => {
    const {uid} = getState().auth;
    const data = await getDataFirestore(uid)
    dispatch(setNotes(data))
  }
}

export const startSavedNote = ()=>{
  return async (dispatch, getState) => {
    dispatch(setSaving())
    const {uid} = getState().auth
    const {active:note} = getState().journall

    const NoteFirestore = {...note}
    delete NoteFirestore.id
    
    const docRef = doc(FirestoreApp,`${uid}/journall/notes/${note.id}`)
    await setDoc(docRef, NoteFirestore, {merge:true})
    dispatch(updateNotes( note))
  }
}

export const startUpLoadingFiles = (files=[])=>{
  return async (dispatch, getState) => {
    dispatch(setSaving())
    // await fileUpload(files[0])
    const filesUploadPromise = []
    for (const file of files) {
      filesUploadPromise.push(fileUpload(file))
    }
    const photourls = await Promise.all(filesUploadPromise)
    dispatch(setPhotosToActiveNote(photourls))
  }
}

export const startDeletingNote = ()=>{
  return async (dispatch, getState)=>{
    const {uid} = getState().auth
    const {active:note} = getState().journall

    const docRef = doc(FirestoreApp,`${uid}/journall/notes/${note.id}`)
    await deleteDoc(docRef)

    dispatch(deleteNoteById(note.id))

  }
}