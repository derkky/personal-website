import { Card, CardHeader, CardContent, CardMedia, CardActionArea } from "@mui/material"
import TechUsed from "./TechUsed"

const ProjectCard = (props) => {
    return (
        <Card
            sx={{
                width: "48%",
                minWidth: "300px"
            }}
        >
            <CardActionArea
                onClick={() => window.open(props.link)}
            >
                <CardMedia
                    component="img"
                    image={props.image}
                    height="150"
                    sx={{ cursor: "pointer" }}
                />
                <CardHeader
                    title={props.title}
                />
                <CardContent >
                    {props.description}
                    <TechUsed tech={props.tech} />
                </CardContent>
            </CardActionArea>

        </Card>
    )
}

export default ProjectCard