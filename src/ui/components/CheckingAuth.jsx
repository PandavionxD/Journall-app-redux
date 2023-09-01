import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        minHeight: "100vh",
        placeContent: "center",
      }}
    >
      <CircularProgress
        color="warning"
      />
    </Grid>
  );
};
