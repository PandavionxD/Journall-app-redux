import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { chekingAutentication, starAuthGoogle } from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {
  const { email, password, onInputChange, formState } = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { status } = useSelector(state => state.auth);

  const isAuth = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(chekingAutentication());
    console.log({ formState });
  };

  const onStartGoogleSign = () => {
    dispatch(starAuthGoogle());
  };

  return (
    <>
      <AuthLayout title="Ingresar">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} mb={2}>
              <TextField
                label="Correo Electrónico"
                type="email"
                placeholder="nombre@mail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="**********"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>
          </Grid>
          <Grid container mt={1} spacing={2}>
            <Grid item xs={12} md={6}>
              <Button
                disabled={isAuth}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                disabled={isAuth}
                variant="contained"
                type="button"
                onClick={onStartGoogleSign}
                fullWidth
              >
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
