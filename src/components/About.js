import { Box, Typography, Toolbar, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CodeIcon from '@mui/icons-material/Code';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ScienceIcon from '@mui/icons-material/Science';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LockIcon from '@mui/icons-material/Lock';
import LandscapeIcon from '@mui/icons-material/Landscape';

const About = () => {
    const listPoints = [
        {
            icon: <AttachMoneyIcon/>,
            text: "Learned how to prepare and analyze financial statements (and balance the damned Balance Sheet!)"
        },
        {
            icon: <CodeIcon/>,
            text: "Spearheaded the development of a Shopify app for a fashion startup from scratch as a Full-Stack Developer"
        },
        {
            icon: <RecordVoiceOverIcon/>,
            text: "Extensively studied and written a countless number of essays on communications theories"
        },
        {
            icon: <ScienceIcon/>,
            text: "Developed novel methods for text vectorization for a listed medical device company"
        },
        {
            icon: <RestaurantIcon/>,
            text: "Learned how to cook beloved cai png dishes while studying in Europe"
        },
        {
            icon: <LockIcon/>,
            text: "Worked on classified projects as an A.I. intern for the government"
        },
        {
            icon: <LandscapeIcon/>,
            text: "Climbed some of the most dangerous mountains in the world (despite a crippling fear of heights)"
        }
    ]

    return (

        <SectionContainer
            id="about"
            centered
        >
            <Toolbar />
            <SectionContentContainer>
                <Typography
                    variant="h2"
                    marginBottom={5}
                >
                    About
                </Typography>

                <Typography>
                    I love learning new things and challenging myself. In the past 4 years I have:
                </Typography>
                <List>
                    {listPoints.map((point, idx) => 
                        <ListItem key={idx} sx={{
                            "&:hover": {
                                bgcolor: "#bbb"
                            }
                        }}>
                            <ListItemIcon>
                                {point.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {point.text}
                            </ListItemText>
                        </ListItem>
                    )}
                </List>
                <Typography>
                    … and much more!
                </Typography>
                <br/>
                <Typography>
                    In my free time, I enjoy reading, watching anime, and cooking.
                </Typography>
                <br/>
                <Typography>
                    I also graduated from the National University of Singapore with a double degree in Business and Communications and New Media.
                </Typography>

            </SectionContentContainer>

        </SectionContainer>


    )
}

export default About