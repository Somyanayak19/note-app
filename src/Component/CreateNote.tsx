import BoxComonent from "../UI/Box/Box";
import React from 'react';
import NoteForm from "./NoteForm";
import { Button, CardActions, Grid, TextField, TextareaAutosize, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createNote } from "../Store/Note";

const CreateNote = () => {

    return  <Grid item xs={8} sx={{justifyContent:'normal',alignItems:'normal'}}><BoxComonent>
            <CardContent sx={{width: '100%', height:'89%'}}>

            <Typography variant="h5" sx={{fontWeight: 'bold',textAlign:'center'}} component="div" gutterBottom>
            Create New Note
          </Typography>
            
            <NoteForm />
            </CardContent>
            </BoxComonent>
            </Grid>
}

export default CreateNote;