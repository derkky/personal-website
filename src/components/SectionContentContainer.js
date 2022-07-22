import { Box, Toolbar } from "@mui/material";

const SectionContentContainer = (props) => {
    return (
        <>
            <Toolbar />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    minWidth: "350px",
                    paddingY: 5
                }}
            >

                {props.children}

            </Box>
        </>

    )
}

export default SectionContentContainer