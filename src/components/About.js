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
                    width: "80vw",
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
                        My areas of specialisation are data analytics and web development.
                    </Typography>
                    <br />
                </Box>

            </Box>


        </Box>

    )
}

export default About