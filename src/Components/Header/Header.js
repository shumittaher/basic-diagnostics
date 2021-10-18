import React from 'react'
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from './../../hooks/useAuth';
import Icon from '@mui/material/Icon';


const Header = () => {

    const { user, logOut } = useAuth()

    const handleSignOut = () => {
        logOut()
    }

    const menuTextStyle = {
        px: 2,
        width: 100
    }

    return (
        <div>

            <AppBar sx={{
            }} position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div"
                        sx={menuTextStyle}>
                        <Link style={{ textDecoration: 'none', color: "inherit" }} to="/home">Home</Link>
                    </Typography>

                    <Typography variant="h6" component="div"
                        sx={menuTextStyle}>
                        <Link style={{ textDecoration: 'none', color: "inherit" }} to="/login">Log In</Link>
                    </Typography>


                    <Typography variant="h6" component="div"
                        sx={{
                            display: 'flex',
                            width: '80%',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>{user.email ? <small style={{ marginRight: '10px' }}>Logged in as: {user.email}</small> : <small style={{ marginRight: '10px' }}>Logged Out</small>}</Box>

                        <Icon style={{ cursor: 'pointer' }} onClick={handleSignOut} baseClassName="fas" className="fa-sign-out-alt" />
                    </Typography>


                </Toolbar>
            </AppBar>


        </div>
    )
}

export default Header
