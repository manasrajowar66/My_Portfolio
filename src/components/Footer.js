import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <>
      <Grid
        component="footer"
        container
        style={{ backgroundColor: "#1F2937", padding: "1em 0" }}
        justifyContent="center"
      >
        <Typography variant="h6" style={{ color: "#fff" }}>
          {" "}
          {`Made with <3 by Manas`}{" "}
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
