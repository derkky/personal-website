import { Box, Typography, Stack } from "@mui/material"


const About = () => {
    return (
        <Stack
            height="100vh"
            id="about"
            alignItems="center"
            justifyContent="center"
            padding={5}
        >
            <Box
                width="80vw"
            >
                <Typography
                    variant="h2"
                    marginBottom={5}
                >
                    About
                </Typography>
                <Typography
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ligula est, consequat in nulla quis, dictum lobortis sem. In eleifend lobortis turpis a scelerisque.
                    Sed id posuere lectus, at fermentum risus. Curabitur eu tellus tellus. Maecenas vitae scelerisque massa. Nunc convallis iaculis molestie. Aliquam at commodo sem.
                    Donec imperdiet vitae justo eu faucibus. Nullam in porttitor sem. Vestibulum quis congue nibh, at luctus nisl.
                </Typography>
            </Box>

        </Stack>

    )
}

export default About