import { Card, CardHeader, CardContent } from "@mui/material"
import TechUsed from "./TechUsed"
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from "@mui/lab"

const ExperienceCard = (props) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{
                    flex: 0.2,
                    display: { xs: "none", sm: "none", md: "block" }
                }}
            >
                {props.duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Card>
                    <CardHeader
                        title={props.jobTitle + " | " + props.company}
                        subheader={props.duration}
                        subheaderTypographyProps={{
                            sx: {
                                display: { xs: "block", sm: "block", md: "none" }
                            }
                        }}
                    />

                    <CardContent>
                        <ul style={{paddingLeft: "1em"}}>
                            {props.jobDescription.map(desc => <li key={desc}> {desc} </li>)}
                        </ul>

                        <TechUsed tech={props.tech}/>
                    </CardContent>

                </Card>
            </TimelineContent>
        </TimelineItem>
    )
}

export default ExperienceCard