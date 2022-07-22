import { Box, Typography, Toolbar } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import hero from "../assets/hero.mp4"

const Hero = () => {
    return (
        <SectionContainer
            centered
            id="hero"
        >
            <Box sx={{height: "100vh", width: "100vw"}}>
                <video width="100%" height="100%" autoPlay loop muted style={{objectFit: "cover"}}>
                    <source src={hero} type="video/mp4" />
                </video>
            </Box>



        </SectionContainer>

    )
}

export default Hero