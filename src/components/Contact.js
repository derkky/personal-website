import { Paper, Typography, Stack } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"

const Contact = () => {
    return (

        <SectionContainer
            id="contact"
            centered
        >
            <SectionContentContainer>
                <Typography
                    align="center"
                    variant="h2"
                >
                    Contact
                </Typography>
            </SectionContentContainer>

        </SectionContainer>

    )
}

export default Contact