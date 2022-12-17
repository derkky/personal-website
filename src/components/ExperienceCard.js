import { Card, CardHeader, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material"
import TechUsed from "./TechUsed"

const ExperienceCard = (props) => {

    const handleClick = () => {
        props.setDrawerOpen(true)
        props.setDrawerContent("test")
    }

    return (

        <Card>
            <CardActionArea
                onClick={() => { handleClick() }}
            >
                <CardMedia
                    component="img"
                    height="300"

                />
                <CardHeader
                    title={props.title}
                    sx={{ pb: 0 }}
                />
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.duration}
                    </Typography>
                    {props.description}
                </CardContent>

            </CardActionArea>

        </Card>
    )
}

export default ExperienceCard