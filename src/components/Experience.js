import { Box, Typography, Card, CardHeader, CardContent, Toolbar } from "@mui/material"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@mui/lab"
import TechUsed from "./TechUsed"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"

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

                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{
                                flex: 0.2,
                                display: { xs: "none", sm: "none", md: "block" }
                            }}
                        >
                            May 2022 to Present
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card>
                                <CardHeader
                                    title="Job Title | Company"
                                    subheader="May 2022 to Present"
                                    subheaderTypographyProps={{
                                        sx: {
                                                display: { xs: "block", sm: "block", md: "none" }
                                        }
                                    }}
                                />

                                <CardContent>
                                    <ul>
                                        <li> Job description 1</li>
                                        <li> Job description 2</li>
                                    </ul>

                                    <TechUsed />
                                </CardContent>

                            </Card>
                        </TimelineContent>
                    </TimelineItem>


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