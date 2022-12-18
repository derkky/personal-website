import { Stack, Typography, Toolbar, } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import ExperienceCard from "./ExperienceCard"

const experience = [
    {
        title: "Research Assistant (NLP)",
        company: "NUS IORA",
        image: "img",
        description: "Fun times",
        duration: "Apr 2022 to Dec 2022",
        drawerContent: "Test",
        tech: ["python", "flask", "react", "heroku"]
    },
    {
        title: "Full Stack Developer",
        company: "SUPESU",
        description: "Fun times",
        duration: "Dec 2021 to Dec 2022",
        tech: ["js", "react", "express", "mongodb", "heroku", "python"]
    },
    {
        title: "Data Analyst",
        company: "NTUC LearningHub",
        description: "Fun times",
        duration: "May 2022 to Jul 2022",
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
                                setDrawerContent={props.setDrawerContent}
                                title={`${exp.title}, ${exp.company}`}
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