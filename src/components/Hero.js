import { Box, Typography, Stack } from "@mui/material"


const Hero = () => {
    return (
        <Stack
            height="100vh"
            justifyContent="center"
            id="hero"
            alignItems="center"
            padding={5}
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

        </Stack>

    )
}

export default Hero