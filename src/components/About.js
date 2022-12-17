import { Box, Typography, Toolbar, } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"


const About = () => {
    return (

        <SectionContainer
            id="about"
            centered
        >
            <Toolbar/>
            <SectionContentContainer>
                <Typography
                    variant="h2"
                    marginBottom={5}
                >
                    About
                </Typography>

                <Typography>
                    I am a final year undergraduate at NUS pursuing a double degree in Business and Communications and New Media.
                </Typography>
                <br />
                <Typography>
                    I am highly interested in using data to solve problems and packaging them in user-friendly apps.
                </Typography>
                <br />
                <Typography>
                    I am also the Vice President of NUS Business Analytics Consulting Team, where I'm responsible for syllabus planning and overall management of the club.
                </Typography>
                <br />
                <Typography>
                    I am currently working on <strong> Tele-Sticker</strong>, an app which streamlines the sticker-making process in Telegram.
                </Typography>
                <br />
                <Typography>
                    When I'm not coding, I enjoy reading and watching movies.
                </Typography>
                <br />
            </SectionContentContainer>

        </SectionContainer>


    )
}

export default About