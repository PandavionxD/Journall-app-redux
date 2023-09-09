import { IconButton } from "@mui/material";
import { JournallLayout } from "../layout/JournallLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journall/thunks";
import { NoteViews } from "../views/NoteViews";

export const JournallPage = () => {
  const dispatch = useDispatch();

  const { isSaving, active } = useSelector((state) => state.journall);

  const onAddNote = () => {
    dispatch(startNewNote());
  };  

  return (
    <JournallLayout>
      {active ? <NoteViews /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
        onClick={onAddNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          position: "fixed",
          right: 50,
          bottom: 50,
          ":hover": {
            backgroundColor: "error.main",
            opacity: 0.9,
          },
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournallLayout>
  );
};
