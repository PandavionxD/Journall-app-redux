import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({withComponent}) => {
    // console.log(withComponent)
  return (
    <AppBar
    position="fixed"
    className="navbar"
    component='div'
    sx={{ 
        width:{
        sm:`calc( 100% - ${withComponent}px )`},
        ml:{
            sm:`${withComponent}px`
        }
    } }
    >
        <Toolbar>
            <IconButton
             color="inherit" 
             sx={{mr:2,
             display:{
                sm:'none'
             }
             }} >
                <MenuOutlined/>
            </IconButton>

             <Grid container direction='row' justifyContent='space-between' alignItems='center' >
                <Typography noWrap  variant="h6" >JournalApp</Typography>
                <IconButton color="error" >
                    <LogoutOutlined/>
                </IconButton>
             </Grid>

        </Toolbar>
    </AppBar>
    )
}
