import { Box, Typography, Stack } from "@mui/material"


const Hero = () => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                padding: 5
            }}
            id="hero"
        >
            <Box
            >
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
            </Box>

        </Box>

    )
}

export default Hero