import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {   

  return (
    <Grid
    container
    spacing={0}
    direction='column'
    minHeight='calc(100vh - 115px)'
    justifyContent='center'
    alignItems='center'
    // sx = {{backgroundColor:'primary.main'}}
    bgcolor='primary.main'
    borderRadius={3}
    >
      <Grid
      item
      xs = {12}
      >
        <StarOutline  sx={{fontSize:100,color:'white'}} />
      </Grid>
      <Grid
      item
      xs = {12}
      >
        <Typography sx={{color:'white',}} variant="h5" >
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
    )
}
