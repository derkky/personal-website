import { Toolbar, CardHeader, CardMedia, CardContent, Typography, Stack, Box } from "@mui/material"
import ProjectCard from "./ProjectCard.js"
import SectionContainer from "./SectionContainer.js"
import SectionContentContainer from "./SectionContentContainer.js"

import keptan from "../assets/keptan.PNG"
import commentar from "../assets/commentar.PNG"

const projects = [
    {
        title: "Keptan Classifier",
        description:
            <>
                <Typography> App which utilises NLP and Random Forest to classify math questions into one of eight categories. </Typography>
            </>,
        tech: ["python", "flask", "react", "heroku"],
        image: keptan,
        link: "http://ra-math-classif.herokuapp.com/"
    },
    {
        title: "commentaR",
        description:
            <>
                <Typography> App which automates sentiment analysis, topic modelling, and network analysis of a given Youtube video's comments. </Typography>
            </>,
        tech: ["r"],
        image: commentar,
        link: "https://rendeavors.shinyapps.io/DBA-Shiny-Application/"
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
                            image={proj.image}
                            link={proj.link}
                        />)}

                </Box>

            </SectionContentContainer>



        </SectionContainer>

    )
}

export default Projects