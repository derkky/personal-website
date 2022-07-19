import { Card, CardHeader, CardContent, Box } from "@mui/material"
import TechUsed from "./TechUsed"

const ProjectCard = (props) => {
    return (
        <Card
            sx={{
                width: "48%",
                minWidth: "300px"
            }}
        >
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