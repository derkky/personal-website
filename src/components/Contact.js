import { IconButton, SvgIcon, Typography, Box, Toolbar } from "@mui/material"
import SectionContainer from "./SectionContainer"
import SectionContentContainer from "./SectionContentContainer"

import { ReactComponent as GhIcon } from "../assets/github.svg"
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg"
import { ReactComponent as KaggleIcon } from "../assets/kaggle.svg"
import EmailIcon from '@mui/icons-material/Email';

const contact = [
    {
        icon: <GhIcon />,
        link: "https://github.com/derkky"
    },
    {
        icon: <LinkedinIcon />,
        link: "https://linkedin.com/in/don-foh"
    },
    {
        icon: <KaggleIcon />,
        link: "https://kaggle.com/donfoh"
    },
    {
        icon: <EmailIcon />,
        link: "mailto:don.foh@u.nus.edu?Subject=Hello!"
    }
]


const Contact = () => {
    return (

        <SectionContainer
            id="contact"
            centered
        >
            <Toolbar/>
            <SectionContentContainer>
                <Typography
                    align="center"
                    variant="h2"
                >
                    Contact
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "3em" }}>
                    {contact.map(ctk => {
                        return (
                            <IconButton onClick={() => window.open(ctk.link)} key={ctk.link}>
                                <SvgIcon sx={{ fontSize: "50px" }}>
                                    {ctk.icon}
                                </SvgIcon>
                            </IconButton>
                        )

                    })}

                </Box>
            </SectionContentContainer>

        </SectionContainer>

    )
}

export default Contact