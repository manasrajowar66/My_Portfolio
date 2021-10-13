import React, { useState, useEffect } from "react";
import { AppBar, Grid, Typography, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Link as scrollLink } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  navlinkItem: {
    marginRight: "2em",
  },
  navlinks: {
    fontWeight: 500,
    fontSize: "1.2em",
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
    fontFamily: "Roboto, sans-serif",
  },
  logo: {
    width: "4em",
    height: "3.5em",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isElevate, setElevation] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const theme = useTheme();
  const changeElevation = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 500) {
      setElevation(true);
    } else {
      setElevation(false);
    }

    if (window.scrollY >= 664) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeElevation);
    return () => {
      window.removeEventListener("scroll", changeElevation);
    };
  });
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: navColor
            ? "#fff"
            : isElevate
            ? "rgba(255,255,255,0.1)"
            : "transparent",
          boxShadow: isElevate ? theme.shadows[9] : "none",
          transition: "all 0.5s",
        }}
        elevation={0}
      >
        <Grid
          container
          style={{
            backgroundColor: "transparent",
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item style={{ marginLeft: "2em" }} component={Link} to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Grid>
          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item className={classes.navlinkItem}>
                <Typography
                  variant="body2"
                  className={classes.navlinks}
                  style={{ color: navColor ? "#111" : "#fff" }}
                  component={scrollLink}
                  to="project"
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Typography>
              </Grid>
              <Grid item className={classes.navlinkItem}>
                <Typography
                  variant="body2"
                  className={classes.navlinks}
                  style={{ color: navColor ? "#111" : "#fff" }}
                  component={scrollLink}
                  to="about"
                  smooth={true}
                  duration={800}
                >
                  About
                </Typography>
              </Grid>
              <Grid item className={classes.navlinkItem}>
                <Typography
                  variant="body2"
                  className={classes.navlinks}
                  style={{ color: navColor ? "#111" : "#fff" }}
                  component={scrollLink}
                  to="contact"
                  smooth={true}
                  duration={1000}
                >
                  Contact
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
