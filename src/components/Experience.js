import { Stack, Typography, Toolbar, } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import ExperienceCard from "./ExperienceCard"
import iora from "../assets/IORA_Banner.png"
import lhub from "../assets/NTUCLHUB.png"
import htx from "../assets/htx.png"
import supesu from "../assets/SUPESU_logo.webp"

const experience = [
    {
        title: "Data Science Intern",
        company: "HTX",
        image: htx,
        description: "Leveraging machine learning and full-stack development to create tools to fight crime",
        duration: "Jan 2023 to May 2023",
        drawerTakeaways: [
            "Greatly improved my ability to self-learn new concepts",
            "Stretched my limits to deliver requirements while juggling a 29MC course load",
        ],
        drawerContent: "More information coming soon...",
        color: "#5c068c",
        tech: ["python", "fastapi", "react", "pytorch"]
    },
    {
        title: "Research Assistant (NLP)",
        company: "NUS IORA",
        image: iora,
        description: "Deep diving into the latest developments in NLP to develop new solutions for a unique use case",
        duration: "Apr 2022 to Dec 2022",
        drawerTakeaways: [
            "Improved my ability to deal with changing requirements",
            "Learned how to compromise with various stakeholders to balance between product performance and usability",
            "Learned how to look for and read through scholarly articles to gain ideas for my own unique problems"
        ],
        drawerContent: "More information coming soon...",
        color: "white",
        tech: ["python", "flask", "react", "heroku"]
    },
    {
        title: "Full Stack Developer",
        company: "SUPESU",
        image: supesu,
        description: "Stepping out of my comfort zone by exploring the unfamiliar world of software engineering",
        duration: "Dec 2021 to Dec 2022",
        drawerTakeaways: [
            "Drastically improved my problem solving and time management skills",
            "Learnt how to pickup new technologies quickly",
            "Improved my ability to communicate concisely in standup meetings",
        ],
        drawerContent: "More information coming soon...",
        color: "white",
        tech: ["js", "react", "express", "mongodb", "heroku", "python"]
    },
    {
        title: "Data Analyst",
        company: "NTUC LearningHub",
        image: lhub,
        description: "First time working with big data stores and building dashboards in a professional environment",
        duration: "May 2022 to Jul 2022",
        drawerTakeaways: [
            "Familiarized myself with standard practices for database architecture",
            "Gained experience in communicating with end-users when building dashboards",
            "Learned how to conduct data validation when migrating databases"
        ],
        drawerContent: "More information coming soon...",
        color: "white",
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