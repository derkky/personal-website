import { Card, CardHeader, CardContent, CardMedia } from "@mui/material"
import TechUsed from "./TechUsed"

const ProjectCard = (props) => {
    return (
        <Card
            sx={{
                width: "48%",
                minWidth: "300px"
            }}
        >
            <CardMedia
                component="img"
                image={props.image}
                height="150"
                onClick={() => window.open(props.link)}
                sx={{cursor: "pointer"}}
            />
            <CardHeader
                title={props.title}
            />
            <CardContent >
                {props.description}
                <TechUsed tech={props.tech} />
            </CardContent>
        </Card>
    )
}

export default ProjectCard