import { Card, CardHeader, CardContent, CardActionArea, CardMedia, Typography, Box } from "@mui/material"
import TechUsed from "./TechUsed"

const ExperienceCard = (props) => {

    const handleClick = () => {
        props.setDrawerOpen(true)
        props.setDrawerTitle(props.title)
        props.setDrawerCover(props.image)
        props.setDrawerContent(props.drawerContent)
        props.setDrawerSubtitle(props.description)
        props.setDrawerTakeaways(props.drawerTakeaways)
        props.setDrawerColor(props.color)
    }

    return (

        <Card>
            <CardActionArea
                onClick={() => { handleClick() }}
            >
                <Box
                    sx={{
                        backgroundColor: props.color
                    }}
                >
                    <CardMedia
                        component="img"
                        height="300"
                        src={props.image}
                        sx={{
                            maxWidth: "80%",
                            display: "block",
                            margin: "auto",
                            objectFit: "contain",
                            padding: "1.5em"
                        }}
                    />
                </Box>

                <CardHeader
                    title={props.title}
                    sx={{ pb: 0 }}
                />
                <CardContent>
                    <Typography variant="subtitle2" sx={{ mb: "1em" }}>
                        {props.duration}
                    </Typography>
                    <Typography sx={{ fontSize: "1.5em" }} color="text.secondary">
                        {props.description}
                    </Typography>
                    <TechUsed tech={props.tech} />
                </CardContent>

            </CardActionArea>

        </Card>
    )
}

export default ExperienceCard