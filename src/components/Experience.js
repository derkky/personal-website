import { Stack, Typography, Toolbar, } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import ExperienceCard from "./ExperienceCard"
import iora from "../assets/IORA_Banner.png"
import lhub from "../assets/NTUCLHUB.png"
import supesu from "../assets/SUPESU_logo.webp"

const experience = [
    {
        title: "Research Assistant (NLP)",
        company: "NUS IORA",
        image: iora,
        description: "Deep diving into bla",
        duration: "Apr 2022 to Dec 2022",
        drawerTakeaways: [
            "Conducting research",
            "Recording results"
        ],
        drawerContent: "Coming soon...",
        color: "red",
        tech: ["python", "flask", "react", "heroku"]
    },
    {
        title: "Full Stack Developer",
        company: "SUPESU",
        image: supesu,
        description: "Stepping out of my comfort zone",
        duration: "Dec 2021 to Dec 2022",
        drawerTakeaways: [
            "Full-stack development",
            "Problem solving",
            "Communication"
        ],
        drawerContent: "Coming soon...",
        color: "blue",
        tech: ["js", "react", "express", "mongodb", "heroku", "python"]
    },
    {
        title: "Data Analyst",
        company: "NTUC LearningHub",
        image: lhub,
        description: "An opportunity to work with big data stores",
        duration: "May 2022 to Jul 2022",
        drawerTakeaways: [
            "Database architecture"
        ],
        drawerContent: "Coming soon...",
        color: "yellow",
        tech: ["postgresql", "tableau", "python"]
    }
]

const Experience = (props) => {

    return (
        <>
            <SectionContainer
                id="experience"
            >
                <Toolbar />
                <SectionContentContainer>
                    <Typography
                        variant="h2"
                        marginBottom={5}
                    >
                        Experience
                    </Typography>

                    <Stack
                        spacing={3}
                    >
                        {experience.map(exp =>
                            <ExperienceCard
                                key={exp.title + exp.company}
                                setDrawerOpen={props.setDrawerOpen}
                                setDrawerTitle={props.setDrawerTitle}
                                setDrawerSubtitle={props.setDrawerSubtitle}
                                setDrawerTakeaways={props.setDrawerTakeaways}
                                setDrawerCover={props.setDrawerCover}
                                setDrawerColor={props.setDrawerColor}
                                setDrawerContent={props.setDrawerContent}
                                title={`${exp.title}, ${exp.company}`}
                                image={exp.image}
                                color={exp.color}
                                drawerContent={exp.drawerContent}
                                drawerTakeaways={exp.drawerTakeaways}
                                description={exp.description}
                                duration={exp.duration}
                                tech={exp.tech}
                            />)}
                    </Stack>
                </SectionContentContainer>
            </SectionContainer>
        </>


    )
}

export default Experience