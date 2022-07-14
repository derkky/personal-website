import { Stack } from "@mui/material/"
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from "./components/NavBar"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Experience from "./components/Experience.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({

})

theme = responsiveFontSizes(theme)


function App() {

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={2} sx={{overflow: "hidden"}}>
        <NavBar />
        <Hero />
        <About/>
        <Experience />
        <Projects />
        <Contact />
      </Stack>
    </ThemeProvider>







  );
}

export default App;
