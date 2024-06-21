import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../../contexts/ThemeContext';
import {useNavigate, Link as RouterLink} from "react-router-dom";
import styled from "styled-components";
import {useAuth} from "../../contexts/AuthContext";
import {Box, Container, Link, Tooltip, Button} from "@mui/material";
// import Button from "./Button";

const Logo = styled('img')({
    width: '50px',
    cursor: 'pointer',
});

const NavBar = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const { mode, toggleTheme } = useContext(ThemeContext);

    console.log('NavBar render, currentUser:', currentUser);

    const handleLogout = async () => {
        try {
            await logout();
            console.log('Logout bem-sucedido!');
            navigate("/");
        } catch (error) {
            console.error('Erro ao fazer logout:', error.message);
        }
    };

    return (
        <AppBar position="static" sx={{ px: 2, zIndex:3000 }}>
            <Container>
                <Toolbar disableGutters>
                    <Link component={RouterLink} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    {/*<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>*/}
                        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                            <Logo src="/images/logo.jpeg" alt="Logo" />
                        </Box>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Switch theme">
                        <IconButton color="inherit" onClick={toggleTheme} >
                            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Tooltip>
                    <Box sx={{ ml: 3 }}>
                        {currentUser ? (
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        ) : (
                            <Button color="inherit" component={RouterLink} to="/login">
                                Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;