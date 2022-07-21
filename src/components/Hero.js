import { Box, Typography, Toolbar } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"

const Hero = () => {
    return (
        <SectionContainer
            centered
            id="hero"
        >
            <SectionContentContainer>
                <Box sx={{height: "60vh"}}>
                    <img src="/logo.png" height="100%" width="100%" style={{objectFit: "contain"}}/>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Typography variant="h6">
                        Data Analyst
                    </Typography>
                    <Typography variant="h6">
                        Full-Stack Developer
                    </Typography>
                </Box>
            </SectionContentContainer>

        </SectionContainer>

    )
}

export default Hero