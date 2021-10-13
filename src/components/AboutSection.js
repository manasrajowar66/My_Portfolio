import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import linkedin from "react-useanimations/lib/linkedin";

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

const AboutSection = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        style={{
          width: "100vw",
          height: "100%",
          paddingTop: "5em",
          backgroundColor: "#fff",
          paddingBottom: "5em",
        }}
        justifyContent="center"
        id="about"
      >
        <Grid item container justifyContent="center">
          <Typography variant="h4" className={classes.header}>
            About
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          className={classes.aboutContainer}
        >
          <Typography
            variant="body1"
            align="center"
            className={classes.aboutText}
            style={{
              padding: "1em 1em",
              backgroundColor: "#D1FAE5",
              width: "45em",
            }}
          >
            I am a self-taught web developer and programmer and a guy slighty
            obsessed with code quality.
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          className={classes.aboutContainer}
        >
          <Grid
            item
            container
            style={{
              padding: "1em 1em",
              //   backgroundColor: "#BFF6FF",
              width: "45em",
            }}
            justifyContent="center"
          >
            <Grid
              item
              component="a"
              href="https://www.linkedin.com/in/manas-rajowar-3b0b981a3/"
              target="_blank"
            >
              <UseAnimations
                animation={linkedin}
                speed={1}
                strokeColor="blue"
                size={48}
              />
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid
              item
              component="a"
              href="https://github.com/manasrajowar66"
              target="_blank"
            >
              <UseAnimations
                animation={github}
                speed={1}
                strokeColor="#111"
                size={48}
              />
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item>
              <UseAnimations
                animation={facebook}
                speed={1}
                strokeColor="blue"
                size={48}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          className={classes.aboutContainer}
        >
          <Typography
            variant="body1"
            align="center"
            className={classes.aboutText}
            style={{
              padding: "1em 1em",
              backgroundColor: "#D1FAE5",
              width: "45em",
            }}
          >
            I build new projects and love to get more project ideas from others.
            I am a fast learner and a good problem solver. While I am still a
            college student, I still like to learn more about programming and
            love to build new projects.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutSection;
