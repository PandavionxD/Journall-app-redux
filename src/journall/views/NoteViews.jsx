import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../componets/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo } from "react";
import { setActiveNote } from "../../store/journall/journallSlice";
import { startDeletingNote, startSavedNote, startUpLoadingFiles } from "../../store/journall/thunks";
import { enqueueSnackbar } from "notistack";
import { useRef } from "react";

export const NoteViews = () => {
  const { active: note, isSaving } = useSelector((state) => state.journall);
  const { date } = note;
  const dispatch = useDispatch();
  const { onInputChange, title, body, formState } = useForm(note);

  const newdate = useMemo(() => {
    const newDate = new Date(date).toUTCString();
    return newDate;
  });

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSavedNote = () => {
    dispatch(startSavedNote());
    enqueueSnackbar(`${note.title}, ah sido actualizada`, {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };

  const onUploadImage = useRef();

  const onUpload = ({target}) => {
    if (target.files === 0) return;
    onUploadImage
    dispatch(startUpLoadingFiles(target.files))
  };

  const ondelete = ()=>{
    dispatch(startDeletingNote())
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
      alignItems="center"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="ligth">
          {newdate}
        </Typography>
      </Grid>
      <Grid item>
        <input style={{display:'none'}}  type="file" ref={onUploadImage} multiple onChange={onUpload} />
        <IconButton color="primary" disabled={isSaving} onClick={()=>onUploadImage.current.click()}  >
          <UploadOutlined />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSavedNote}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container mt={2}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Título"
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió el día de hoy?"
          label="Descripción"
          minRows={3}
          name="body"
          onChange={onInputChange}
          value={body}
        />
      </Grid>
      <Grid container justifyContent='end' >
      <Button 
      onClick={ondelete}
      sx={{mt:2}}
      color="error"
      >
        <DeleteOutline  sx={{mr:1}} />
          Eliminar
      </Button>
      </Grid>
      <ImageGallery imageUrl = {note.imageUrl}  />
    </Grid>
  );
};
