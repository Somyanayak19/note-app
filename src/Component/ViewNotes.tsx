import { useDispatch, useSelector } from "react-redux";
import { Note } from "../Model/notes";
import React from "react";
import { Box, Grid, Modal, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useEffect, useMemo } from "react";
import { deleteNote } from "../Store/Note";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import NoteForm from "./NoteForm";
import "./ViewNotes.css";
import SearchBox from "../UI/SearchBox/SearchBox";

const ViewNotes = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const notes = useSelector((state: any) => state.notes.notes);
  const [deleteNoteVar, setdeleteNoteVar] = useState({});
  const [editNoteVar, seteditNoteVar] = useState<Note>({});
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  // const [error, setError] = useState(false);
  const filteredNotes = useMemo(
    () =>
      notes.filter((note: Note) =>
        note.title?.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [notes, searchQuery]
  );

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 4,
    p: 4,
  };
  useEffect(() => {
    if (deleteNoteVar) {
      dispatch(deleteNote(deleteNoteVar));
    }
  }, [deleteNoteVar, dispatch]);

  const deleteNotes = (ele: Note) => {
    if (window.confirm(`Are you sure want to delete the ${ele.title}`)) {
      setdeleteNoteVar(ele);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const EditNotes = (ele: Note) => {
    setOpen(true);
    seteditNoteVar(ele);
  };

  const onInputChange = (event: any) => {
    setsearchQuery(event.target.value.toLowerCase());
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Grid item xs={8} sm={8} md={8} justifyContent="center">
          <SearchBox onChangeText={onInputChange} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ margin: "0px 20px" }}>
        {filteredNotes.length !== 0 &&
          filteredNotes.map((ele: any, index: number) => {
            return (
              <Grid
                item
                xs={8}
                sm={6}
                md={4}
                key={index}
                sx={{ marginTop: "10px" }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    overflow: "auto",
                    minWidth: "15em",
                  }}
                >
                  <div
                    style={{
                      padding: "10px",
                      fontWeight: "bold",
                      borderBottom: "1px solid #0000002e",
                    }}
                  >
                    {ele?.title}
                    <span style={{ float: "right" }}>
                      <ModeEditOutlineIcon
                        onClick={() => EditNotes(ele)}
                        sx={{ color: "#1565c0" }}
                      />
                      <DeleteOutlineIcon
                        onClick={() => deleteNotes(ele)}
                        sx={{ color: "red" }}
                      />
                    </span>
                  </div>
                  <div style={{ padding: "20px" }}>{ele?.description}</div>
                </div>
              </Grid>
            );
          })}
      </Grid>
      {filteredNotes.length === 0 && (
        <div style={{ textAlign: "center", marginTop: "10vh" }}>
          No Notes Found
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            sx={{ mb: "14px" }}
            component="h2"
          >
            Edit Note
          </Typography>
          <Typography id="modal-modal-description">
            <NoteForm
              title={editNoteVar.title}
              id={editNoteVar.id}
              description={editNoteVar.description}
              onEditNote={handleClose}
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ViewNotes;
