// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ width: '240px' }}>
            <Drawer variant="permanent">
                <List>

                    <ListItem button component={RouterLink} to="/dashboard">
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    {/* Mantenha o link para My Account Info sem um destino específico */}
                    {/*<ListItem button component={RouterLink} to="/dashboard/account">*/}
                    {/*    <ListItemText primary="My Account Info" />*/}
                    {/*</ListItem>*/}

                    <ListItem button onClick={() => setView('account')}>
                        <ListItemText primary="My Account Info" />
                    </ListItem>

                </List>
            </Drawer>
        </div>
    );
};

export default Sidebar;
