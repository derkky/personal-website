import { Card, CardHeader, CardContent, Typography } from "@mui/material"

const ProjectCard = (props) => {
    return (
        <Card
            sx={{
                width: { xs: "80vw", sm: "80vw", md: "38vw" }
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