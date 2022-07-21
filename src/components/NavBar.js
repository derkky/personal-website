import { AppBar, Toolbar, Box, IconButton, ButtonGroup, Button, Typography, Menu, MenuItem, Link } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
import logo from "../assets/logo.png"

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const NavBar = () => {

    const pages = [
        {
            title: "About",
            link: "#about"
        },
        {
            title: "Experience",
            link: "#experience"
        },
        {
            title: "Projects",
            link: "#projects"
        },
        {
            title: "Contact",
            link: "#contact"
        }
    ]

    const [anchorEl, setAnchorEl] = useState(null);

    const scroll = (link) => {
        const section = document.querySelector(link);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


    return (
        <>
            <AppBar
                sx={{ height: "80px" }}
            >
                <Toolbar
                    disableGutters={true}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingY: 2,
                        height: "80px"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            width: "90%",
                            maxWidth: "1500px",
                            justifyContent: "space-between"
                        }}
                    >

                        <Link
                            color="inherit"
                            variant="h4"
                            onClick={(e) => {
                                e.preventDefault()
                                scroll("#hero")
                            }}
                            underline="none"
                            href="#"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2
                            }}
                        >
                            <Box
                                sx={{
                                    height: "60px"
                                }}
                            >
                                <img src={logo} height="100%" width="100%" style={{ objectFit: "contain" }} />
                            </Box>
                            <Typography sx={{ display: { xs: "none", md: "flex" } }} variant="h4">
                                Don Foh
                            </Typography>
                        </Link>


                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 3
                            }}
                            variant="text"
                            color="inherit"
                        >
                            {pages.map(page =>
                                <Button
                                    color="inherit"
                                    key={page.link}
                                    onClick={() => {
                                        scroll(page.link)
                                    }}
                                >
                                    {page.title}
                                </Button>
                            )}

                            <Button
                                variant="outlined"
                                startIcon={<InsertDriveFileIcon />}
                                color="inherit"
                                onClick={() => {
                                    window.open("don-foh-resume.pdf")
                                }}
                            >
                                Resume
                            </Button>

                        </Box>

                        <IconButton
                            sx={{ display: { xs: "flex", md: "none" } }}
                            color="inherit"
                            onClick={(e) => { setAnchorEl(e.currentTarget) }}
                        >
                            <MenuIcon sx={{fontSize: "40px"}}/>
                        </IconButton>

                    </Box>

                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => { setAnchorEl(null) }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {pages.map(page => {
                    return (
                        <MenuItem
                            key={page.link}
                            onClick={() => {
                                scroll(page.link)
                            }}
                        >
                            {page.title}
                        </MenuItem>
                    )
                })}

                <MenuItem>

                    <Button
                        variant="outlined"
                        startIcon={<InsertDriveFileIcon />}
                        color="inherit"
                        onClick={() => {
                            window.open("don-foh-resume.pdf")
                        }}
                    >
                        Resume
                    </Button>
                </MenuItem>

            </Menu>


        </>

    )

}

export default NavBar