import { Card, CardHeader, CardContent, CardMedia, CardActionArea, Typography, Box } from "@mui/material"
import TechUsed from "./TechUsed"

const ProjectCard = (props) => {

    const openDrawer = () => {
        props.setDrawerOpen(true)
        props.setDrawerTitle(props.title)
        props.setDrawerCover(props.image)
        props.setDrawerContent(props.drawerContent)
        props.setDrawerSubtitle(props.description)
        props.setDrawerTakeaways(props.drawerTakeaways)
        props.setDrawerColor(props.color)
    }

    const openLink = () => {
        window.open(props.link)
    }

    return (
        <Card
            sx={{
                width: "48%",
                minWidth: "300px"
            }}
        >
            <CardActionArea
                onClick={props.link ? openLink : openDrawer}
            >
                <Box
                    sx={{ backgroundColor: props.color }}
                >
                    <CardMedia
                        component="img"
                        image={props.image}
                        height="150"
                    />
                </Box>

                <CardHeader
                    title={props.title}
                />
                <CardContent >
                    <Typography> {props.description} </Typography>
                    <TechUsed tech={props.tech} />
                </CardContent>
            </CardActionArea>

        </Card>
    )
}

export default ProjectCard