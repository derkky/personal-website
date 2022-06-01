import { Box, Typography, Card, CardHeader, CardContent } from "@mui/material"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@mui/lab"
import TechUsed from "./TechUsed"

const Experience = () => {
    return (

        <Box
            id="experience"
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
                    Experience
                </Typography>

                <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent
                            style={{flex: 0.2}}
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
                                    title="Job Title"
                                    subheader="Company"
                                    subheaderTypographyProps={{
                                        variant: "h6"
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
                            style={{flex: 0.2}}
                        />
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent/>
                    </TimelineItem>
                </Timeline>

            </Box>


        </Box>

    )
}

export default Experience