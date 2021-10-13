import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    ...theme.typography.fontFamily,
    fontWeight: "400",
    color: "#111",
    fontSize: "3.5em",
    letterSpacing: 1.5,
  },
  aboutText: {
    ...theme.typography.fontFamily,
    wordWrap: "break-word",
    lineHeight: "1.5em",
    fontSize: "1.3em",
  },
  aboutContainer: {},
}));

const ContactSection = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        style={{
          width: "100vw",
          height: "100%",
          paddingTop: "5em",
          backgroundColor: "#F2F2F2",
          paddingBottom: "5em",
        }}
        justifyContent="center"
        id="contact"
      >
        <Grid item container justifyContent="center">
          <Typography variant="h4" className={classes.header}>
            Contact
          </Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item component="a" href="mailto:mr2243@ece.jgec.ac.in">
            mr2243@ece.jgec.ac.in
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactSection;
