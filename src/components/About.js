import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typed from "react-typed"
import { makeStyles } from "@material-ui/core/styles"
import avatar from "../bitmoji(3).png"

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(1),
    filter: "drop-shadow(1px 1px 5px #222)",
  },
  title: {
    color: "tomato",
    fontFamily: "Times New Roman",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
    fontFamily: "Courier New",
  },
  typedContainer: {
    padding: "50px 0px 0px 0px",
    width: "100vw",
    textAlign: "center",
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <img src={avatar} className={classes.avatar} alt="Scott Wardenaar" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Scott Wardenaar"]} typeSpeed={90} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full-Stack Developer",
            "Site Reliability Engineer",
            "DevOps Engineer",
            "Cloud Administrator",
          ]}
          typeSpeed={40}
          backSpeed={20}
          loop
        />
      </Typography>
    </Box>
  )
}

export default About
