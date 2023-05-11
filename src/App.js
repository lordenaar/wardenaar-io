import { BrowserRouter as Router, Route } from "react-router-dom"
import {
  createTheme,
  MuiThemeProvider as ThemeProvider,
} from "@material-ui/core/styles"
import About from "./components/About"
import Blog from "./components/Blog"
import BlogPost from "./components/BlogPost"
import "./App.css"
import Navbar from "./components/Navbar"
import CV from "./components/Cv"
import Particles from "./components/Particles"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#edafb8",
        main: "#A1BD77",
        dark: "#1b2f33",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  })

  const routing = (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Particles />
        <div
          style={{
            margin: "64px 0 16px 0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: "1",
          }}
        >
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route exact path="/blog/:slug" component={BlogPost} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/cv" component={CV} />
        </div>
      </ThemeProvider>
    </Router>
  )
  return (
    <div className="App">
      <header className="App-header">{routing}</header>
    </div>
  )
}

export default App
