import { IconButton } from "@mui/material";
import { JournallLayout } from "../layout/JournallLayout";
import { NoteViews } from "../views/NoteViews";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";

export const JournallPage = () => {
  return (
    <JournallLayout>
      <NothingSelectedView/>
      {/* <NoteViews/> */}

      <IconButton
        size="large"
        sx={{
          color:'white',
          backgroundColor:'error.main',
          position:'fixed',
          right:50,
          bottom:50, 
          ':hover':{
            backgroundColor:'error.main',
            opacity:0.9,
          }
        }}
      >
        <AddOutlined  sx={{fontSize:30}} />
      </IconButton>

    </JournallLayout>
  );
};
