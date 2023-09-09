import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { ListItems } from "./ListItems";
import { useEffect } from "react";

export const Sidebar = ({ withComponent = 240 }) => {

  const {displayName} = useSelector(state=>state.auth)
  const {notes} = useSelector(state=>state.journall)


  // useEffect(() => {

  // }, [notes])
  
  
  return (
    <Box
      component="nav"
      sx={{ width: { sm: withComponent }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: withComponent,
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap mx='auto'  >
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <ListItems  key={note.id} {...note}   />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
