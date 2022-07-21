import { Box, Typography, Toolbar } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import logo from "../assets/logo.png"

const Hero = () => {
    return (
        <SectionContainer
            centered
            id="hero"
        >
            <SectionContentContainer>
                <Box sx={{height: "30vh"}}>
                    <img src={logo} height="100%" width="100%" style={{objectFit: "contain"}}/>
                </Box>
                <Typography variant="h3" sx={{textAlign: "center", marginY: 10}}> Don Foh </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h6">
                        Data Analyst and Full-Stack Developer
                    </Typography>
                </Box>
            </SectionContentContainer>

        </SectionContainer>

    )
}

export default Hero