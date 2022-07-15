import { Box, Typography, Card, CardHeader, CardContent, Toolbar } from "@mui/material"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@mui/lab"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import ExperienceCard from "./ExperienceCard"

const experience = [
    {
        title: "Full Stack Developer",
        company: "SUPESU",
        duration: "Dec 2021 to Present",
        jobDescription: [
            "Develop sizing recommender algorithm using machine learning",
            "Design and develop website and admin dashboard frontend",
            "Design MongoDB database and REST APIs",
            "Integrate app with Shopify REST and GraphQL APIs",
            "Deploy app on Heroku"
        ],
        tech: ["js", "react", "express", "mongodb", "heroku", "python"]
    }
]

const Experience = () => {
    return (

        <SectionContainer
            id="experience"
        >

            <SectionContentContainer
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: { sm: "90vw", md: "50vw" }
                }}
            >
                <Typography
                    variant="h2"
                    marginBottom={5}
                >
                    Experience
                </Typography>

                <Timeline
                    sx={{padding: 0}}
                >
                    {experience.map(exp =>
                        <ExperienceCard
                            duration={exp.duration}
                            jobTitle={exp.title}
                            company={exp.company}
                            jobDescription={exp.jobDescription}
                            key={exp.title + exp.company}
                            tech={exp.tech}
                        />
                    )}



                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{
                                flex: 0.2,
                                display: { xs: "none", sm: "none", md: "block" }
                            }}
                        />
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent />
                    </TimelineItem>
                </Timeline>

            </SectionContentContainer>


        </SectionContainer>

    )
}

export default Experience