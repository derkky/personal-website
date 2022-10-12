import { Box, Typography, Card, CardHeader, CardContent, Toolbar } from "@mui/material"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@mui/lab"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import ExperienceCard from "./ExperienceCard"

const experience = [
    {
        title: "Research Assistant",
        company: "NUS Institute of Operations Research & Analytics",
        duration: "Apr 2022 to Present",
        jobDescription: [
            "Develop a Math word question classifier with over 97% accuracy",
            "Deploy ML algorithm to responsive web app with React frontend, Flask backend and Heroku",
            "Research embeddings techniques such as Word2Vec, Doc2Vec, FastText",
            "Explore various deep learning techniques for NLP such as OpenAI-GPT3 and transfer learning"
        ],
        tech: ["python", "flask", "react", "heroku"]
    },
    {
        title: "Software Engineer Consultant",
        company: "SUPESU",
        duration: "Aug 2022 to Oct 2022",
        jobDescription: [
            "Work with company founders and team of vendors to develop Shopify app",
            "Collaborated with data scientist to develop ML algorithm to recommend clothing sizes"
        ],
        tech: ["js", "react", "express", "mongodb", "heroku", "python"]
    },
    {
        title: "Full Stack Developer",
        company: "SUPESU",
        duration: "Dec 2021 to Aug 2022",
        jobDescription: [
            "Develop sizing recommender algorithm using machine learning",
            "Design and develop responsive website and admin dashboard frontend",
            "Design MongoDB database and REST APIs",
            "Integrate app with Shopify REST and GraphQL APIs",
            "Deploy app on Heroku"
        ],
        tech: ["js", "react", "express", "mongodb", "heroku", "python"]
    },
    {
        title: "Data Analyst",
        company: "NTUC LearningHub",
        duration: "May 2022 to Jul 2022",
        jobDescription: [
            "Maintain Tableau dashboards and reports",
            "Conduct User Acceptance Testing",
            "Communicate with business users to redesign dashboards",
            "Assist in database migration to data warehouse",
            "Conduct data validation"
        ],
        tech: ["postgresql", "tableau", "python"]
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