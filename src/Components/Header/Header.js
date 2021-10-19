import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useAuth from './../../hooks/useAuth';
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [menuStyle, setMenuStyle] = React.useState("none")
    const handleToggle = () => menuStyle === "none" ? setMenuStyle("flex") : setMenuStyle("none")

    const { user, logOut } = useAuth()

    const handleSignOut = () => {
        logOut()
    }

    const menuTextStyle = {
        px: 2,
        width: 100,
        textAlign: 'left',
        display: {
            xs: 'none',
            sm: 'inline'
        }
    }

    return (
        <div>

            <Box sx={{}}>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#1a237e',
                    flexWrap: 'wrap'
                }} >

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row'
                        },
                        ml: 3,
                        // py: 2
                    }}>

                        <img style={{ marginRight: '40px' }} src="/images/logo/logo.png" alt="" />


                        <Typography variant="h6" component="div"
                            sx={menuTextStyle}>
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/home">Home</Link>
                        </Typography>

                        <Typography variant="h6" component="div"
                            sx={menuTextStyle}>
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/services">Services</Link>
                        </Typography>


                        <Typography variant="h6" component="div"
                            sx={menuTextStyle}>
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/docs">Doctors</Link>
                        </Typography>

                        <Typography variant="h6" component="div"
                            sx={menuTextStyle}>
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/about">About </Link>
                        </Typography>

                    </Box>

                    <Box

                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            mr: 3,
                            py: 2,
                            flexDirection: {
                                xs: 'column',
                                sm: 'row'
                            },
                        }}>
                        <MenuIcon onClick={handleToggle} sx={{
                            color: 'white',
                            display: {
                                xs: '',
                                sm: 'none'
                            }
                        }} fontSize="large" />

                        <Typography variant="h6" component="div"
                            sx={menuTextStyle}>
                            <Link style={{ textDecoration: 'none', color: "white" }} to="/login">Log In</Link>
                        </Typography>


                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, color: "white" }}>{user.email ? <small style={{ marginRight: '10px' }}>Logged in as: {user.email}</small> : <small style={{ marginRight: '10px' }}>Logged Out</small>}</Box>

                        <Icon sx={{ display: { xs: 'none', sm: 'flex' }, cursor: 'pointer', color: "white" }} onClick={handleSignOut} baseClassName="fas" className="fa-sign-out-alt" />

                    </Box>



                </Box>

            </Box>

            <Box style={{ display: `${menuStyle}`, backgroundColor: '#33c9dc', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>

                <Link style={{ textDecoration: 'none', color: "white", padding: '5px 20px', margin: '2px 5px' }} to="/home">Home</Link>
                <Link style={{ textDecoration: 'none', color: "white", padding: '5px 20px', margin: '2px 5px' }} to="/services">Services</Link>
                <Link style={{ textDecoration: 'none', color: "white", padding: '5px 20px', margin: '2px 5px' }} to="/docs">Doctors</Link>
                <Link style={{ textDecoration: 'none', color: "white", padding: '5px 20px', margin: '2px 5px' }} to="/about">About </Link>
                <Link style={{ textDecoration: 'none', color: "white", padding: '5px 20px', margin: '2px 5px' }} to="/login">Log In </Link>
                <Icon sx={{ cursor: 'pointer', color: "white" , padding: '5px 20px', margin: '2px 5px'}} onClick={handleSignOut} baseClassName="fas" className="fa-sign-out-alt" />


            </Box>

        </div >
    )
}

export default Header
