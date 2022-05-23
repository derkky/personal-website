import { Toolbar, CardHeader, CardMedia, CardContent, Typography, Stack, Box } from "@mui/material"
import ProjectCard from "./ProjectCard.js"

const Projects = () => {
    return (

        <Stack
            minHeight="100vh"
            id="projects"
            alignItems="center"
        >
            <Typography
                variant="h2"
                marginY={15}
            >
                Projects
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4
                }}
            >
                <ProjectCard
                    title="Keptan Classifer"
                    description={
                        <>
                            <p> App which utilises NLP and Random Forest to classify math questions into one of eight categories. </p>
                            <p> Algorithm developed using Python, sklearn, and NLTK. </p>
                            <p> App built using Flask and React. </p>
                        </>
                    }
                />

                <ProjectCard
                    title="Kommentar"
                    description={
                        <>
                            <p> App which allows automates text analysis of a given Youtube video's comments. </p>
                            <p>Built using RShiny. </p>
                        </>
                    }
                />

            </Box>

        </Stack>

    )
}

export default Projects