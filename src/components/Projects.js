import { Toolbar, CardHeader, CardMedia, CardContent, Typography, Stack, Box } from "@mui/material"
import ProjectCard from "./ProjectCard.js"

const Projects = () => {
    return (

        <Box
            id="projects"
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                padding: 5
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50vw"
                }}
            >
                <Typography
                    variant="h2"
                    marginTop={15}
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
                    <ProjectCard
                        title="Keptan Classifer"
                        description={
                            <>
                                <Typography> App which utilises NLP and Random Forest to classify math questions into one of eight categories. </Typography>
                                <br />
                                <Typography> Algorithm developed using Python, sklearn, and NLTK. </Typography>
                                <Typography> App built using Flask and React. </Typography>
                            </>
                        }
                    />

                    <ProjectCard
                        title="Kommentar"
                        description={
                            <>
                                <Typography> App which allows automates text analysis of a given Youtube video's comments. </Typography>
                                <br />
                                <Typography>Built using RShiny. </Typography>
                            </>
                        }
                    />

                </Box>

            </Box>



        </Box>

    )
}

export default Projects