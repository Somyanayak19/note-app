import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import React, { useCallback } from "react";
import {
  CardActions,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { createNote, updateNote } from "../Store/Note";
import { useNavigate } from "react-router";
import { Note } from "../Model/notes";

const NoteForm = ({ id, title, description, onEditNote }: Note) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: title,
      description: description,
      id: id,
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SubmitNote = useCallback((data: Note) => {
    if (title && description) {
      dispatch(updateNote(data));
      onEditNote && onEditNote();
    } else {
      const id = Math.floor(Math.random() * 100);
      data.id = id;
      dispatch(createNote(data));
      navigate("/notes");
    }
  },[title, description, dispatch, navigate, onEditNote]);
  return (
    <form onSubmit={handleSubmit(SubmitNote)}>
      <Typography sx={{ fontWeight: "bold" }} component="div" gutterBottom>
        Title:
      </Typography>

      <TextField
        placeholder="Title"
        {...register("title", { required: "Title is required" })}
        sx={{ width: "100%" }}
      />
      {errors.title && (
        <Typography variant="body2" color="error">
          {errors.title.message?.toString()}
        </Typography>
      )}
      <Typography
        sx={{ mt: "30px", fontWeight: "bold" }}
        component="div"
        gutterBottom
      >
        Note:
      </Typography>
      <TextField
        placeholder="Note"
        {...register("description", { required: "Description is required" })}
        sx={{ width: "100%" }}
        multiline
        rows={4}
      />
      {errors.description && (
        <Typography variant="body2" color="error">
          {errors.description.message?.toString()}
        </Typography>
      )}
      <CardActions sx={{ padding: "0px" }}>
        <Button
          type="submit"
          disabled={!isValid}
          sx={{ width: "100%", mt: "42px", fontWeight: "bold" }}
          variant="contained"
        >
          {title && description ? "Update" : "Create"}
        </Button>
      </CardActions>
    </form>
  );
};

export default NoteForm;
