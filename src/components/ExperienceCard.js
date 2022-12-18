import { Card, CardHeader, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material"
import TechUsed from "./TechUsed"

const ExperienceCard = (props) => {

    const handleClick = () => {
        props.setDrawerOpen(true)
        props.setDrawerTitle(props.title)
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
                    <Typography variant="subtitle2" sx={{mb: "1em"}}>
                        {props.duration}
                    </Typography>
                    <Typography sx={{fontSize: "1.5em"}} color="text.secondary"> 
                        {props.description} 
                    </Typography>
                    <TechUsed tech={props.tech} />
                </CardContent>

            </CardActionArea>

        </Card>
    )
}

export default ExperienceCard