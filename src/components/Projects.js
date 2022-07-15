import { Toolbar, CardHeader, CardMedia, CardContent, Typography, Stack, Box } from "@mui/material"
import ProjectCard from "./ProjectCard.js"
import SectionContainer from "./SectionContainer.js"
import SectionContentContainer from "./SectionContentContainer.js"

const projects = [
    {
        title: "Keptan Classifier",
        description:
            <>
                <Typography> App which utilises NLP and Random Forest to classify math questions into one of eight categories. </Typography>
            </>,
        tech: ["python", "flask", "react", "heroku"]
    },
    {
        title: "commentaR",
        description:
            <>
                <Typography> App which allows automates text analysis of a given Youtube video's comments. </Typography>
            </>,
        tech: ["r"]
    }
]

const Projects = () => {
    return (

        <SectionContainer
            id="projects"
        >
            <SectionContentContainer>
                <Typography
                    variant="h2"
                    marginBottom={5}
                >
                    Projects
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                        gap: 2
                    }}
                >
                    {projects.map(proj =>
                        <ProjectCard
                            title={proj.title}
                            description={proj.description}
                            tech={proj.tech}
                            key={proj.title}
                        />)}

                </Box>

            </SectionContentContainer>



        </SectionContainer>

    )
}

export default Projects