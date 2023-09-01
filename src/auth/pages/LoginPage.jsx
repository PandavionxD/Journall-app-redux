import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { LoginPasswordEmail, starAuthGoogle } from "../../store/auth";
import { Formik } from "formik";
import * as yup from "yup";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const onStartGoogleSign = () => {
    dispatch(starAuthGoogle());
  };

  const onsubmit = (
    { email, password },
    { setSubmitting, setErrors, resetForm }
  ) => {
    dispatch(LoginPasswordEmail(email, password));

    if (status === "not authenticated") {
      if (errorMessage === "Firebase: Error (auth/user-not-found).") {
        return setErrors({ email: "Usuario no encontrado" });
      } else if (errorMessage === "Firebase: Error (auth/wrong-password).") {
        return setErrors({ password: "Contraseña Incorrecta" });
      }
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("Email requerido").email("Email no valido"),
    password: yup
      .string()
      .trim()
      .required("Contraseña Requerida")
      .min(6, "Minimo 6 caracteres"),
  });

  return (
    <>
      <AuthLayout title="Ingresar">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={onsubmit}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn animate__faster" >
              <Grid container>
                <Grid item xs={12} mb={2}>
                  <TextField
                    autoComplete="off"
                    label="Correo Electrónico"
                    type="email"
                    placeholder="nombre@mail.com"
                    fullWidth
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Contraseña"
                    type="password"
                    placeholder="**********"
                    fullWidth
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                </Grid>
              </Grid>
              <Grid container mt={1} spacing={2}>
                <Grid item xs={12} md={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={status === "checking"}
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    type="button"
                    onClick={onStartGoogleSign}
                    fullWidth
                    disabled={status === "checking"}
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
          )}
        </Formik>
      </AuthLayout>
    </>
  );
};
