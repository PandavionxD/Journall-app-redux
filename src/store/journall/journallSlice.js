import { createSlice } from "@reduxjs/toolkit";

export const journallSlice = createSlice({
  name: "journall",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote : (state,)=>{
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true;
    },
    updateNotes: (state, action) => { //payload : note
      state.isSaving= false;
      state.notes = state.notes.map(note =>{
        if( note.id === action.payload.id){
          return action.payload
        }return note
      })
    },
    setPhotosToActiveNote:(state,action)=>{
      state.active.imageUrl = [...action.payload,...state.active.imageUrl]
      state.isSaving = false;
    },
    clearNotesLogout:(state)=>{
      state.isSaving = false,
      state.notes = [],
      state.active=null
    },
    deleteNoteById: (state, action) => {
      state.active=null
      state.notes = state.notes.filter(note =>{
        return note.id!==action.payload
      })
    },
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNotes,
  savingNewNote,
  deleteNoteById,
  setPhotosToActiveNote,
  clearNotesLogout
} = journallSlice.actions;
