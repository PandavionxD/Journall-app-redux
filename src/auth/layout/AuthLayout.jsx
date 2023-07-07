import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <>
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
            variant="h5"
            sx={{ mb: 2 ,color:'primary.main'}}
            textAlign={"center"}
          >
            {title}
          </Typography>
            {children}
        </Grid>
      </Grid>
    </>
  );
};
