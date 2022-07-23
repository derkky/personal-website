import { Box } from "@mui/material"
import SectionContainer from "./SectionContainer"
import hero from "../assets/hero.gif"
import { useRef, useEffect,  } from "react"


const Hero = () => {

    return (
        <SectionContainer
            centered
            id="hero"
        >
            <Box sx={{ height: "100vh", width: "100vw" }}>
                <img src={hero} height="100%" width="100%" style={{objectFit: "cover"}} />
            </Box>



        </SectionContainer>

    )
}

export default Hero