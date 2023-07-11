import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export const Sidebar = ({ withComponent = 240 }) => {
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
          <Typography variant="h6" noWrap  >
            Alex Daniel
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {[
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ].map((text) => (
            <ListItem key={text} disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot/>
                </ListItemIcon>
                <Grid container >
                <ListItemText primary={text}/>
                <ListItemText secondary={'Lorem ipsum dolor sit amet.'}/>
                
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
