import { Card, CardHeader, CardContent, Typography } from "@mui/material"

const ProjectCard = (props) => {
    return (
        <Card
            sx={{
                width: "48%",
                minWidth: "320px"
            }}
        >
            <CardHeader
                title={props.title}
            />
            <CardContent>
                {props.description}
            </CardContent>
        </Card>
    )
}

export default ProjectCard