import { Box, Typography, Stack, Card, CardContent, CardHeader, CardMedia } from "@mui/material"


const About = () => {
    return (
        <Box
            id="about"
            sx={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                padding: 5
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: 4,
                    width: "50vw",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
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
                </Box>

            </Box>


        </Box>

    )
}

export default About