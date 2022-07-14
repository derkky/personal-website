import { Typography, Box } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faJs } from "@fortawesome/free-brands-svg-icons"

const icons = {
    react: faReact,
    js: faJs,
    python: faPython
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
                    gap: "2em"
                }}
            >
                {props.tech.map(tech => <FontAwesomeIcon icon={icons[tech]} size="2x" key={tech}/>)}
                
            </Box>
        </Box>
    )
}

export default TechUsed