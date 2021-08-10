import React from "react"
import { useHistory } from "react-router-dom"
import Appbar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"
import { GitHub, LinkedIn } from "@material-ui/icons"
import { Button as MuiButton } from "@material-ui/core"

const Navbar = (props) => {
  const HideOnScroll = (props) => {
    const { children } = props
    const trigger = useScrollTrigger()

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
  }

  const Button = ({ to, children }) => {
    const history = useHistory()
    return (
      <MuiButton
        onClick={() => history.push(to)}
        style={{ height: "64px", padding: "0 20px", color: "#664747" }}
      >
        <h2>{children}</h2>
      </MuiButton>
    )
  }

  return (
    <HideOnScroll {...props}>
      <Appbar>
        <Toolbar style={{ justifyContent: "end" }}>
          <Button to="/cv">CV</Button>
          <Button to="/about">About</Button>
          <Button to="/blog">Blog</Button>
          <Button>
            <a
              href="https://github.com/lordenaar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#664747", display: "flex" }}
            >
              <GitHub fontSize="medium" />
            </a>
          </Button>
          <Button>
            <a
              href="https://www.linkedin.com/in/swardenaar/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#664747", display: "flex" }}
            >
              <LinkedIn fontSize="large" />
            </a>
          </Button>
        </Toolbar>
      </Appbar>
    </HideOnScroll>
  )
}

export default Navbar
