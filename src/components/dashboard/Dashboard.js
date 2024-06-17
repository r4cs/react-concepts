// Dashboard.js
import React from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';
import { Grid } from '@mui/material';

const Dashboard = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={3}>
                <SideBar />
            </Grid>
            <Grid item xs={12} md={9}>
                <MainContent />
            </Grid>
        </Grid>
    );
};

export default Dashboard;