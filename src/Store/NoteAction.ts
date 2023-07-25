import { Note } from "../Model/notes";
import { createNote } from "./Note";
import  React from 'react';

 export const createNewNoteAction = (newNote: Note) : any => 
    async(dispatch:any)=>{
        dispatch(createNote);
    }
