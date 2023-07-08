import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import {Link as RouterLInk} from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre Completo"
              fullWidth
              type="text"
              placeholder="Alex Daniel"
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Correo Electrónico"
              fullWidth
              placeholder="alex@mail.com"
              xs={12}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Contraseña"
              fullWidth
              placeholder="**********"
              xs={12}
            ></TextField>
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              Crear Cuenta
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent='flex-end'>
        <Grid item>
        <Typography>
          ¿Ya tienes una cuenta?
            <Link component={RouterLInk} ml={1} to="/auth/login"  sx={{color:'primary.main'}}  >
            Ingresar
            </Link>
        </Typography>
        </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
