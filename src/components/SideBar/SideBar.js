// components/SideBar/SideBar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

const SideBar = ({ setView }) => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    height: '100vh', // Ensure the drawer takes up the full height
                    overflow: 'auto' // Allow scrolling if content overflows
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItem button component={RouterLink} to="/dashboard" onClick={() => setView('main')}>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={() => setView('account')}>
                        <ListItemText primary="My Account Info" />
                    </ListItem>
                    {/* Adicione mais itens de menu conforme necessário */}
                </List>
            </Box>
        </Drawer>
    );
};

SideBar.propTypes = {
    setView: PropTypes.func.isRequired,
};

export default SideBar;