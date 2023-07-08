import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Ingresar">
        <form>
          <Grid container>
            <Grid item xs={12} mb={2}>
              <TextField
                label="Correo Electrónico"
                type="email"
                placeholder="nombre@mail.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container mt={1} spacing={2}>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography ml={1}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end" mt={1}>
            <Link
              component={LinkRouter}
              to="/auth/register"
              sx={{ cursor: "pointer" }}
              color="inherit"
            >
              Crear una cuenta
            </Link>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
