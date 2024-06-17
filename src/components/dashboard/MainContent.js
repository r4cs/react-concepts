// MainContent.js
import React from 'react';
import { Typography, Paper } from '@mui/material';
import styled from 'styled-components';
import {Outlet} from "react-router-dom";

const ContentContainer = styled.div`
    padding: 20px;
`;

const MainContent = () => {
    return (
        <ContentContainer>
            <Typography variant="h5" gutterBottom>
                Dashboard Overview
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                {/* Aqui irão os gráficos, tabelas e estatísticas */}
                Placeholder para conteúdo do Dashboard.
            </Paper>
            <Outlet />
        </ContentContainer>
    );
};

export default MainContent;