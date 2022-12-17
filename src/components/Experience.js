import { Stack, Typography, Toolbar, } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import ExperienceCard from "./ExperienceCard"

const experience = [
    {
        title: "Research Assistant",
        company: "NUS Institute of Operations Research & Analytics",
        description: "Fun times",
        duration: "Apr 2022 to Present",
        jobDescription: [
            "Developed a text classification model for customer complaints in Python for ResMed using word embeddings and gradient boosting which improved accuracy by 8%",
            "Utilised natural language processing techniques and random forest in Python to develop a math word problem classifier with over 97% accuracy",
            "Conducted in-depth research on deep learning and NLP techniques to improve text classification accuracy and efficiency",
            "Designed, developed, and deployed an app with Flask backend for machine learning REST API, React for frontend with Material UI styling, and Heroku for end users to easily use the classification algorithm"
        ],
        tech: ["python", "flask", "react", "heroku"]
    },
    {
        title: "Software Engineer Consultant",
        company: "SUPESU",
        description: "Fun times",
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
        description: "Fun times",
        duration: "Dec 2021 to Aug 2022",
        jobDescription: [
            "Developed regression model in Python to predict a customer’s chest, waist, and hips given their age, height, and weight",
            "Cleaned company’s unstructured data store using R and Python to prepare it for further analysis",
            "Design and develop responsive website and admin dashboard frontend",
            "Designed and developed REST API with authorization for protected endpoints and pagination",
            "Conducted data modelling and created entity relation diagrams to design MongoDB database",
            "Integrate app with Shopify REST and GraphQL APIs",
        ],
        tech: ["js", "react", "express", "mongodb", "heroku", "python"]
    },
    {
        title: "Data Analyst",
        company: "NTUC LearningHub",
        description: "Fun times",
        duration: "May 2022 to Jul 2022",
        jobDescription: [
            "Liaised with finance and operations departments to understand their business needs to design and develop Tableau dashboards",
            "Extracted and aggregated relevant data from operational data store using SQL to build dashboards",
            "Migrated database from MS SQL to Amazon Redshift and performed data validation in SQL and Python to ensure data tallies between source database and target database",
        ],
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
                                setDrawerContent={props.setDrawerContent}
                                title={`${exp.title}, ${exp.company}`}
                                description={exp.description}
                                duration={exp.duration}
                            />)}
                    </Stack>
                </SectionContentContainer>
            </SectionContainer>
        </>


    )
}

export default Experience