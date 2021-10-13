import React from "react";
import {
  Button,
  Grid,
  Typography,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import heartLoading from "../assets/animations/rocket-launch.json";
import Typed from "react-typed";
import UseAnimations from "react-useanimations";
import scrollDown from "react-useanimations/lib/scrollDown";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./AboutSection";
import Contact from "./Contact";
import { Link as scrollLink } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  header: {
    ...theme.typography.fontFamily,
    fontWeight: "bold",
    color: "#fff",
    fontSize: "3.5em",
    letterSpacing: 1.5,
  },
  autoTypeText: {
    ...theme.typography.fontFamily,
    fontWeight: "400",
    color: "#fff",
    fontSize: "2em",
    letterSpacing: 1,
  },
  contactButton: {
    ...theme.typography.fontFamily,
    // backgroundImage: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
    color: "#fff",
    borderRadius: "50px",
    padding: "0.7em 1.2em",
    letterSpacing: 1.5,
    backgroundColor: "#F69854",
    "&:hover": {
      backgroundColor: "#F69854",
    },
    textTransform: "none",
  },
}));

const HeroSection = () => {
  const rocketLaunch = {
    loop: true,
    autoplay: true,
    animationData: heartLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
          overflow: "hidden",
        }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems={sm ? "center" : "flex-start"}
            justifyContent="center"
          >
            <Grid item>
              <Typography
                variant="h4"
                align={sm ? "center" : "left"}
                className={classes.header}
              >
                Hi!
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                align={sm ? "center" : "left"}
                className={classes.header}
              >
                I'm Manas Rajowar
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                className={classes.autoTypeText}
                align={sm ? "center" : "left"}
              >
                <Typed
                  strings={["Web Developer", "Proggramer", "React Enthusiast"]}
                  loop={true}
                  typeSpeed={100}
                  backSpeed={50}
                />
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "1.5em" }}>
              <Button
                variant="contained"
                className={classes.contactButton}
                component={scrollLink}
                to="contact"
                smooth={true}
                duration={1000}
              >
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <Lottie options={rocketLaunch} style={{}} />
          </Grid>
        </Hidden>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <Grid item>
            <UseAnimations
              animation={scrollDown}
              speed={1}
              strokeColor="#fff"
              size={48}
            />
          </Grid>
        </Grid>
      </Grid>
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
};

export default HeroSection;
