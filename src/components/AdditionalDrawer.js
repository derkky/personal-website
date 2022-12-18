import CloseIcon from '@mui/icons-material/Close';
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import { Typography, Box, IconButton, Drawer, List, ListItem } from "@mui/material"

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
            <SectionContainer>
                <Box
                    sx={{
                        width: "100%",
                        padding: "1.5em",
                        display: "flex",
                        flexDirection: "row-reverse",
                        backgroundColor: props.drawerColor
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
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: props.drawerColor,
                        display: "flex",
                        justifyContent: "center",
                        pb: "2em"
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            maxWidth: "80%",
                            maxHeight: "30vh"
                        }}
                        src={props.drawerCover}
                    />
                </Box>
                <SectionContentContainer>
                    <Typography
                        variant="h2"
                        marginBottom={5}
                    >
                        {props.drawerTitle}
                    </Typography>
                    <Typography
                        sx={{ fontSize: "1.5em" }} color="text.secondary"
                        marginBottom={5}
                    >
                        {props.drawerSubtitle}
                    </Typography>
                    <Typography
                        variant="h6"
                    >
                        Main takeaways:
                    </Typography>
                    <List
                        sx={{ listStyleType: "disc", pl: 4 }}
                    >
                        {props.drawerTakeaways.map(takeaway => (
                            <ListItem sx={{ fontSize: "1.2em", display: 'list-item' }} key={takeaway}>
                                {takeaway}
                            </ListItem>
                        ))}

                    </List>
                    {/* props.drawerContent */}
                </SectionContentContainer>
            </SectionContainer>
        </Drawer>
    )
}

export default AdditionalDrawer