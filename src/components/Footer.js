import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Footer = () => {
  const lightDheme = {
    backgroundColor: "#262840",
  };
  const colors = {
    color: "white",
  };
  return (
    <Container maxWidth="xl" style={lightDheme}>
      <Grid lg={12} sx={{ textAlign: "center", padding: 4 }}>
        <Typography variant="p" component="small" style={colors}>
          Copyright &copy; {new Date().getFullYear()} @Muruganatham || Allrights
          Reserved.
        </Typography>
      </Grid>
    </Container>
  );
};

export default Footer;
