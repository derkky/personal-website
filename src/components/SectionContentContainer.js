import { Box } from "@mui/material";

const SectionContentContainer = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                minWidth: "350px"
            }}
        >

            {props.children}

        </Box>
    )
}

export default SectionContentContainer