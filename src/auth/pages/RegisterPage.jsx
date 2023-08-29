import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLInk } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { startAuthEmailAndPassword } from "../../store/auth/thunks";

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const {status,errorMessage} = useSelector(state => state.auth)

  const onsubmit = (values,{setSubmitting, setErrors, resetForm })=>{
    console.log('Enviando datos del formulario Formik')
    const {name, password, email} = values
    dispatch(startAuthEmailAndPassword(email, password, name))

    if(status ==='not authenticated'){
      if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
        return setErrors({ email: "Email en uso" });
      }
    }
  }

  const ValidationScheme =Yup.object().shape({
    email:Yup.string().email('Email no valido').required('email requerido'),
    password:Yup.string().trim().required('Contraseña requerida').min(6,'Mínimo 6 caracteres'),
    name:Yup.string().trim().required('Nombre requerido'),
  })

  return (
    <AuthLayout title="Registro">
      <Formik
        initialValues={{
          email:'',
          password:'',
          name:''
        }}
        onSubmit={onsubmit}
        validationSchema={ValidationScheme}
      >
        {(
          {
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            touched,
            errors,
            isSubmitting
          }
        ) => (
          <form  onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nombre Completo"
                  fullWidth
                  type="text"
                  placeholder="Alex Daniel"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name && errors.name }
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Correo Electrónico"
                  fullWidth
                  placeholder="alex@mail.com"
                  xs={12}
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email }
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Contraseña"
                  fullWidth
                  placeholder="**********"
                  xs={12}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={errors.password && touched.password && errors.password }
                ></TextField>
              </Grid>
            </Grid>
            <Grid container sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button variant="contained" disabled={status ==='checking'} type="submit" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography>
                  ¿Ya tienes una cuenta?
                  <Link
                    component={RouterLInk}
                    ml={1}
                    to="/auth/login"
                    sx={{ color: "primary.main" }}
                  >
                    Ingresar
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};
