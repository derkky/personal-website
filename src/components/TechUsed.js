import { Typography, Box, SvgIcon } from "@mui/material"
import { ReactComponent as ReactIcon } from "../assets/react.svg"
import { ReactComponent as JsIcon } from "../assets/javascript.svg"
import { ReactComponent as PythonIcon } from "../assets/python.svg"
import { ReactComponent as ExIcon } from "../assets/express.svg"
import { ReactComponent as MongoIcon } from "../assets/mongodb.svg"
import { ReactComponent as HerokuIcon } from "../assets/heroku.svg"


// from https://simpleicons.org/

const icons = {
    js: <JsIcon />,
    react: <ReactIcon />,
    python: <PythonIcon />,
    express: <ExIcon />,
    heroku: <HerokuIcon />,
    mongodb: <MongoIcon />
}

const TechUsed = (props) => {
    return (
        <Box>
            <Typography
                marginTop={2}
                variant="h6"
            >
                Technology Used
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: "1em"
                }}
            >

                {props.tech.map(tech => <SvgIcon fontSize="large" key={tech}> {icons[tech]} </SvgIcon>)}

            </Box>
        </Box>
    )
}

export default TechUsed