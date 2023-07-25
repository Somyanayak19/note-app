import NoteForm from "../../Component/NoteForm";
import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { Note } from "../../Model/notes";

const ModalComponent = ({
  title,
  description,
  id,
  openModal = false,
}: Note) => {

  const [open, setOpen] = useState(openModal);
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

  const handleClose = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
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
            title={title}
            id={id}
            description={description}
            onEditNote={handleClose}
          />
        </Typography>
      </Box>
    </Modal>
  );
};
export default ModalComponent;
