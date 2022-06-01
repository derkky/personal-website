import { Box, Typography, Toolbar, } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"


const About = () => {
    return (

        <SectionContainer
            id="about"
            centered
        >
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
                    My areas of specialisation are data analytics and web development. I am highly interested in using data to solve problems and then
                    packaging them in user-friendly apps.
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