import {Typography, Box} from "@mui/material"

const TechUsed = (props) => {
    return (
        <Box>
            <Typography
                marginTop={2}
                variant="h6"
            >
                Technology Used
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: "2em"
                }}
            >
                <p>1</p>
                <p>2</p>
                <p>2</p>

            </Box>
        </Box>
    )
}

export default TechUsed