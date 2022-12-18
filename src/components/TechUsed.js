import { Typography, Box, SvgIcon } from "@mui/material"
import { ReactComponent as ReactIcon } from "../assets/react.svg"
import { ReactComponent as JsIcon } from "../assets/javascript.svg"
import { ReactComponent as PythonIcon } from "../assets/python.svg"
import { ReactComponent as ExIcon } from "../assets/express.svg"
import { ReactComponent as MongoIcon } from "../assets/mongodb.svg"
import { ReactComponent as HerokuIcon } from "../assets/heroku.svg"
import { ReactComponent as FlaskIcon } from "../assets/flask.svg"
import { ReactComponent as TableauIcon } from "../assets/tableau.svg"
import { ReactComponent as PostgresIcon } from "../assets/postgresql.svg"
import { ReactComponent as RIcon } from "../assets/r.svg"


// from https://simpleicons.org/

const icons = {
    js: <JsIcon />,
    react: <ReactIcon />,
    python: <PythonIcon />,
    express: <ExIcon />,
    heroku: <HerokuIcon />,
    mongodb: <MongoIcon />,
    flask: <FlaskIcon />,
    tableau: <TableauIcon />,
    postgresql: <PostgresIcon />,
    r: <RIcon />
}

const TechUsed = (props) => {
    return (

        <Box
            sx={{
                mt: "1em",
                display: "flex",
                gap: "1em"
            }}
        >

            {props.tech.map(tech => <SvgIcon fontSize="large" key={tech}> {icons[tech]} </SvgIcon>)}

        </Box>
    )
}

export default TechUsed