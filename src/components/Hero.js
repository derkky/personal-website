import { Toolbar, Typography } from "@mui/material"
import SectionContainer from "./SectionContainer"
import React from "react"
import SectionContentContainer from "./SectionContentContainer"


const Hero = () => {

  return (
    <SectionContainer
      centered
      id="hero"
      bgColor="#443742"
    >
      <Toolbar />
      <SectionContentContainer>
        <Typography
          variant="h2"
          color="primary"
        >
          Hi, I'm <strong>Don</strong>.
        </Typography>
        <Typography
          variant="h4"
          color="primary"
        >
          I'm <strong>passionate</strong> about using <strong>data</strong> to <strong>solve problems</strong>.
        </Typography>
      </SectionContentContainer>



    </SectionContainer>

  )
}

export default React.memo(Hero)