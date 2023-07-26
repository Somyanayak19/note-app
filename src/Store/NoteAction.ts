import { Note } from "../Model/notes";
import { createNote } from "./Note";

 export const createNewNoteAction = (newNote: Note) : any => 
    async(dispatch:any)=>{
        dispatch(createNote);
    }
