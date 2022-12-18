import { Toolbar, CardHeader, CardMedia, CardContent, Typography, Stack, Box } from "@mui/material"
import ProjectCard from "./ProjectCard.js"
import SectionContainer from "./SectionContainer.js"
import SectionContentContainer from "./SectionContentContainer.js"

import keptan from "../assets/keptan.PNG"
import commentar from "../assets/commentar.PNG"
import spotify from "../assets/spotify.png"
import SpotifyProject from "./drawerContent/SpotifyProject"

const projects = [
    {
        title: "Keptan Classifier",
        description: "App which utilises NLP and Random Forest to classify math questions into one of eight categories.",
        tech: ["python", "flask", "react", "heroku"],
        image: keptan,
        link: "http://ra-math-classif.herokuapp.com/"
    },
    {
        title: "commentaR",
        description: "App which automates sentiment analysis, topic modelling, and network analysis of a given Youtube video's comments.",
        tech: ["r"],
        image: commentar,
        link: "https://rendeavors.shinyapps.io/DBA-Shiny-Application/"
    },
    {
        title: "Topic Modelling of Spotify Top 50 Lyrics",
        description: "Topic modelling with LDA of Spotify Global Top 50 song lyrics to analyze common topics among popular songs and their cultural influences.",
        tech: ["r"],
        image: spotify,
        drawerTakeaways: ["test"],
        color: "rgb(30, 215, 96)",
        drawerContent: <SpotifyProject/>
    }
]

const Projects = (props) => {
    return (

        <SectionContainer
            id="projects"
        >
            <Toolbar />
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
                            setDrawerOpen={props.setDrawerOpen}
                            setDrawerTitle={props.setDrawerTitle}
                            setDrawerSubtitle={props.setDrawerSubtitle}
                            setDrawerTakeaways={props.setDrawerTakeaways}
                            setDrawerCover={props.setDrawerCover}
                            setDrawerColor={props.setDrawerColor}
                            setDrawerContent={props.setDrawerContent}
                            color={proj.color}
                            title={proj.title}
                            description={proj.description}
                            tech={proj.tech}
                            key={proj.title}
                            image={proj.image}
                            link={proj.link}
                            drawerTakeaways={proj.drawerTakeaways}
                            drawerContent={proj.drawerContent}
                        />)}

                </Box>

            </SectionContentContainer>



        </SectionContainer>

    )
}

export default Projects