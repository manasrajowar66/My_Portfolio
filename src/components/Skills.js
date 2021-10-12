import React from "react";
import { Grid, Typography } from "@material-ui/core";
import data from "./skills-data";
import { makeStyles } from "@material-ui/styles";
import cLogo from "../assets/c++.svg";
import html from "../assets/html-5.svg";
import css from "../assets/css3.svg";
import react from "../assets/react.svg";
import js from "../assets/javascript.svg";
import materialUiLogo from "../assets/material-ui.svg";
import git from "../assets/git.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    ...theme.typography.fontFamily,
    fontWeight: "400",
    color: "#111",
    fontSize: "3.5em",
    letterSpacing: 1.5,
  },
  skillsetContainer: {
    backgroundColor: "#fff",
    padding: "3em 2em",
    boxShadow: theme.shadows[4],
  },
  skillsetItem: {
    padding: "1em",
    border: "1px solid #D9D9D9",
  },
  title: {
    ...theme.typography.fontFamily,
    fontWeight: 400,
  },
  sets: {
    ...theme.typography.fontFamily,
    fontWeight: 400,
    fontSize: "1.2em",
  },
  setLogos: {
    backgroundColor: "#fff",
    width: "5em",
    height: "5em",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "1em",
    boxShadow: theme.shadows[4],
    "&:hover": {
      boxShadow: theme.shadows[0],
    },
  },
  logos: {
    verticleAlign: "bottom",
  },
}));

const Skills = () => {
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
      >
        <Grid item container justifyContent="center">
          <Typography variant="h4" className={classes.header}>
            Skillset
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ marginTop: "3em", marginBottom: "2em" }}
        >
          <Grid item className={classes.setLogos}>
            <img className={classes.logos} src={cLogo} alt="" />
          </Grid>
          <Grid item className={classes.setLogos}>
            <img className={classes.logos} src={html} alt="" />
          </Grid>
          <Grid item className={classes.setLogos}>
            <img className={classes.logos} src={css} alt="" />
          </Grid>
          <Grid item className={classes.setLogos}>
            <img className={classes.logos} src={react} alt="" />
          </Grid>
          <Grid item className={classes.setLogos}>
            <img className={classes.logos} src={js} alt="" />
          </Grid>
          <Grid item className={classes.setLogos}>
            <img className={classes.logos} src={materialUiLogo} alt="" />
          </Grid>
          <Grid item className={classes.setLogos}>
            <img className={classes.logos} src={git} alt="" />
          </Grid>
        </Grid>
        <Grid item style={{ width: "80%" }}>
          <Grid
            container
            justifyContent="center"
            className={classes.skillsetContainer}
          >
            {data.map((skill, index) => {
              return (
                <Grid
                  item
                  key={index}
                  style={{
                    maxWidth: "40%",
                    minWidth: "15%",
                    marginRight: index === data.length - 1 ? 0 : "3em",
                  }}
                >
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h5" className={classes.title}>
                        {skill.title}
                      </Typography>
                    </Grid>
                    {skill.sets.map((set) => {
                      return (
                        <Grid item key={set} className={classes.skillsetItem}>
                          <Typography variant="body2" className={classes.sets}>
                            {set}
                          </Typography>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
