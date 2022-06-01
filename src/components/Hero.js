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
                <Typography
                    variant="h2"
                >
                    Hi! I'm <b>Don</b>,
                </Typography>
                <Typography
                    variant="h2"
                >
                    a full-stack developer and data analyst.
                </Typography>
            </SectionContentContainer>

        </SectionContainer>

    )
}

export default Hero