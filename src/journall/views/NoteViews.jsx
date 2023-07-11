import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../componets/ImageGallery"

export const NoteViews = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb:1}} alignItems='center' >
        <Grid item>
        <Typography fontSize={39} fontWeight='ligth' >
             28 de Agosto del 2023
        </Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding:2}} >
                <SaveOutlined sx={{fontSize:30,mr:1}} />
                    Guardar
            </Button>
        </Grid>
        <Grid container  mt={2} >
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un titulo"
                label='Título'
                sx={{border:'none',mb:1}}
            />
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió el día de hoy?"
                label='Descripción'
                minRows={3}
            />
        </Grid>
        <ImageGallery/>
    </Grid>
  )
}
