import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import projectData from "./project-data";
import doodleBackgroundSvg from "../assets/Confetti-Doodles.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: `url(${doodleBackgroundSvg})`,
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("sm")]: {
      backgroundAttachment: "inherit",
    },
  },
  header: {
    ...theme.typography.fontFamily,
    fontWeight: "400",
    color: "#111",
    fontSize: "3.5em",
    letterSpacing: 1.5,
  },
  screenShot: {
    width: "100%",
    height: "100%",
  },
  title: {
    ...theme.typography.fontFamily,
    fontWeight: 400,
  },
  describtion: {
    ...theme.typography.fontFamily,
    fontSize: "1.2em",
  },
  imageContainer: {
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: theme.shadows[1],
  },
  textContainer: {
    boxShadow: theme.shadows[9],
    background: "#fff",
    padding: "1em 2em",
    borderRadius: "10px",
    maxWidth: "40em",
    minHeight: "15em",
  },
  webbutton: {
    ...theme.typography.fontFamily,
    padding: "0.5em 2em",
    borderRadius: "50px",
    backgroundColor: "#8fd3f4",
    "&:hover": {
      backgroundColor: "#F69854",
    },
    color: "#fff",
  },
  gitbutton: {
    ...theme.typography.fontFamily,
    borderRadius: "50px",
    backgroundColor: "#F69854",
    padding: "0.5em 2em",
    "&:hover": {
      backgroundColor: "#8fd3f4",
    },
    color: "#fff",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        style={{
          // backgroundColor: "#fff",
          width: "100vw",
          height: "100%",
          paddingTop: "5em",
        }}
        className={classes.mainContainer}
      >
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginBottom: "5em" }}
        >
          <Typography variant="h4" className={classes.header}>
            My Projects
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          {projectData.map((data, index) => {
            return (
              <Grid item key={index} style={{ marginBottom: "4em" }}>
                <Grid
                  container
                  direction={(index + 1) % 2 === 1 ? "row" : "row-reverse"}
                  alignItems="center"
                >
                  <Grid
                    item
                    style={{
                      width: "30em",
                      height: "17em",
                      marginRight: (index + 1) % 2 === 1 ? "3em" : 0,
                      marginLeft: (index + 1) % 2 === 0 ? "3em" : 0,
                    }}
                    className={classes.imageContainer}
                  >
                    <img
                      className={classes.screenShot}
                      src={data.img}
                      alt="screen-shot"
                    />
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      className={classes.textContainer}
                      direction="column"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Typography variant="h4" className={classes.title}>
                          {data.title}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          className={classes.describtion}
                          paragraph
                        >
                          {data.describtion}
                        </Typography>
                      </Grid>
                      <Grid item container>
                        <Grid item style={{ marginRight: "2em" }}>
                          <Button
                            component="a"
                            href={data.github}
                            target="_blank"
                            variant="contained"
                            className={classes.gitbutton}
                          >
                            Github
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            className={classes.webbutton}
                            component="a"
                            href={data.website}
                            target="_blank"
                            variant="contained"
                          >
                            Live
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
