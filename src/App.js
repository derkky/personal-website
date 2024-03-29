import { Stack } from "@mui/material/"
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from "./components/NavBar"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Experience from "./components/Experience.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import AdditionalDrawer from "./components/AdditionalDrawer.js"
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { useState } from "react"

let theme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    }
  }
})

theme = responsiveFontSizes(theme)


function App() {

  const [drawerTitle, setDrawerTitle] = useState("")
  const [drawerColor, setDrawerColor] = useState("white")
  const [drawerSubtitle, setDrawerSubtitle] = useState("")
  const [drawerTakeaways, setDrawerTakeaways] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerCover, setDrawerCover] = useState(null)
  const [drawerContent, setDrawerContent] = useState(null)

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={2} sx={{ overflow: "hidden" }}>
        <NavBar />
        <AdditionalDrawer
          drawerTitle={drawerTitle}
          drawerSubtitle={drawerSubtitle}
          drawerTakeaways={drawerTakeaways}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          drawerColor={drawerColor}
          drawerCover={drawerCover}
          drawerContent={drawerContent}
        />
        <Hero />
        <About />
        <Experience
          setDrawerOpen={setDrawerOpen}
          setDrawerTitle={setDrawerTitle}
          setDrawerTakeaways={setDrawerTakeaways}
          setDrawerSubtitle={setDrawerSubtitle}
          setDrawerColor={setDrawerColor}
          setDrawerCover={setDrawerCover}
          setDrawerContent={setDrawerContent}
        />
        <Projects
          setDrawerOpen={setDrawerOpen}
          setDrawerTitle={setDrawerTitle}
          setDrawerTakeaways={setDrawerTakeaways}
          setDrawerSubtitle={setDrawerSubtitle}
          setDrawerColor={setDrawerColor}
          setDrawerCover={setDrawerCover}
          setDrawerContent={setDrawerContent}
        />
        <Contact />
      </Stack>
    </ThemeProvider>

  );
}

export default App;
