import { Box } from "@mui/material"
import SectionContainer from "./SectionContainer"
import hero from "../assets/hero.mp4"
import { useRef, useEffect } from 'react'

const Player = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const { current: videoElement } = videoRef
    videoElement.setAttribute('muted', '')
  }, [])

  return (
    <video
      src={hero}
      ref={videoRef}
      autoPlay
      playsInline
      muted
      loop
      height="100%" 
      width="100%" 
      style={{objectFit: "cover"}}
    />
  )
}


const Hero = () => {

    return (
        <SectionContainer
            centered
            id="hero"
        >
            <Box sx={{ height: "100vh", width: "100vw" }}>
                <Player />
            </Box>



        </SectionContainer>

    )
}

export default Hero