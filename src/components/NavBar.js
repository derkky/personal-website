import { AppBar, Toolbar, Box, IconButton, ButtonGroup, Button, Typography, Menu, MenuItem, Link } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"

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
                        paddingX: { xs: 2, sm: 5, md: 20 },
                        paddingY: 2
                    }}
                >
                    <Link
                        color="inherit"
                        sx={{ display: "flex", flex: 1 }}
                        variant="h4"
                        onClick={(e) => {
                            e.preventDefault()
                            scroll("#hero")
                        }}
                        underline="none"
                        href="#"
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
                                onClick={() => scroll(page.link)}
                            >
                                {page.title}
                            </Button>
                        )}

                    </Box>

                    <IconButton
                        sx={{ display: { xs: "flex", md: "none" } }}
                        size="large"
                        color="inherit"
                        onClick={(e) => { setAnchorEl(e.currentTarget) }}
                    >
                        <MenuIcon />
                    </IconButton>
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
            </Menu>


        </>

    )

}

export default NavBar