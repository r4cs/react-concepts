// components/dashboard/MainContent.js
import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import styled from 'styled-components';

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    padding: 20px;
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 600px;
`;

const MainContent = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
                Dashboard Overview
            </Typography>
            <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
                TODO.
            </Paper>
        </Box>
    );
};

export default MainContent;