import { Stack, Toolbar } from "@mui/material/"
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from "./components/NavBar"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Experience from "./components/Experience.js"
import Projects from "./components/Projects.js"
import Contact from "./components/Contact.js"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({

})


function App() {

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack spacing={2}>
        <NavBar />
        <Toolbar />
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
