import { createSlice } from "@reduxjs/toolkit";
import { NotesList} from '../Model/notes'


const initialState: NotesList = {
   notes : [],
}
const NoteSlice = createSlice({
 name: 'notes',
 initialState,
 reducers: {
    createNote: (state,action)=>{
     state.notes.push(action.payload);
    },
    deleteNote: (state,action)=>{
      state.notes = state.notes.filter((ele)=>
      ele.title !== action.payload.title
      )
     },
     updateNote: (state,action)=>{
      const updateNote = state.notes.map((ele)=>
      (ele.id === action.payload.id) ? action.payload : ele
      )
      state.notes = updateNote;
     }
 }
})
export const {createNote,deleteNote, updateNote} = NoteSlice.actions;
export default NoteSlice;