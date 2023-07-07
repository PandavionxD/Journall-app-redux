import { Grid, TextField, Typography } from "@mui/material";

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        xs={3}
        sx={{
          boxShadow: "0px 5px 5px rgba(0,0,0,.2)",
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 2, color: "primary.main" }}
          textAlign={"center"}
        >
          Login
        </Typography>
        <form>
          <Grid container>
            <Grid item xs={12} mb={2}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@mail.com"
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
        </form>
      </Grid>
    </Grid>
  );
};
