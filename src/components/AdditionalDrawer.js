import CloseIcon from '@mui/icons-material/Close';
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import { Typography, Box, IconButton, Drawer, } from "@mui/material"

const AdditionalDrawer = (props) => {
    return (
        <Drawer
            anchor="bottom"
            open={props.drawerOpen}
            onClose={() => { props.setDrawerOpen(false) }}
            PaperProps={{
                sx: {
                    height: "100vh",
                    overflowX: "hidden"
                }
            }}
        >
            <Box
                sx={{
                    padding: "1.5em",
                    display: "flex",
                    flexDirection: "row-reverse"
                }}
            >
                <IconButton
                    onClick={() => { props.setDrawerOpen(false) }}
                >
                    <CloseIcon
                        sx={{ fontSize: "2em" }}
                    />
                </IconButton>
            </Box>
            <SectionContainer>
                <SectionContentContainer>
                    <Typography
                        variant="h2"
                        marginBottom={5}
                    >
                        TEST
                    </Typography>
                    {props.drawerContent}
                </SectionContentContainer>
            </SectionContainer>
        </Drawer>
    )
}

export default AdditionalDrawer