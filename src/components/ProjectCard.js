import { Card, CardHeader, CardContent, Typography } from "@mui/material"

const ProjectCard = (props) => {
    return (
        <Card
            sx={{ width: "500px" }}
        >
            <CardHeader
                title={props.title}
            />
            <CardContent>
                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProjectCard