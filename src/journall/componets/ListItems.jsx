import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journall/journallSlice";

export const ListItems = ({ id,title,body,date, imageUrl=[]}) => {

  const dispatch = useDispatch()

  const handleNoteActive = ()=>{
    dispatch(setActiveNote({id,title,body,date,imageUrl}))
  }

  const newtitle = useMemo(() => {
    return title.length > 15 ? title.substring(0, 15) + "..." : title;
  }, [title]);

  const newbody = useMemo(() => {
    return body.length > 30 ? body.substring(0, 30) + "..." : body;
  }, [body]);

  return (
    <ListItem key={id} disablePadding onClick={handleNoteActive} >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText sx={{ textAlign: "center" }} primary={newtitle} />
          <ListItemText secondary={newbody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
