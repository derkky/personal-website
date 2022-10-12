import { Box } from "@mui/material"

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
                backgroundColor: props.bgColor ?? "inherit"
            }}
            style={{
                marginTop: 0
            }}
        >
            {props.children}

        </Box>
    )
}

export default SectionContainer