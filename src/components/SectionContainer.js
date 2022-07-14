import { Box, Toolbar } from "@mui/material"

const SectionContainer = (props) => {
    return (
        <Box
            id={props.id}
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100vw",
                alignItems: "center",
                justifyContent: props.centered ? "center" : "normal",
                padding: 5
            }}
        >

            <Toolbar />

            {props.children}

        </Box>
    )
}

export default SectionContainer