import { AppBar, Toolbar, Box, IconButton, ButtonGroup, Button, Typography, Menu, MenuItem, Link } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"

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
            <AppBar>
                <Toolbar
                    disableGutters={true}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingY: 2
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
                            }}
                        >
                            Don Foh
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
                            >
                                Resume
                            </Button>

                        </Box>

                        <IconButton
                            sx={{ display: { xs: "flex", md: "none" } }}
                            size="large"
                            color="inherit"
                            onClick={(e) => { setAnchorEl(e.currentTarget) }}
                        >
                            <MenuIcon />
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
                    >
                        Resume
                    </Button>
                </MenuItem>

            </Menu>


        </>

    )

}

export default NavBar