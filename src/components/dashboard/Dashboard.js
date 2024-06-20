// components/dashboard/Dashboard.js
import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import MainContent from './MainContent';
import AccountInfo from '../user/AccountInfo';
import { Box, Toolbar } from '@mui/material';

const Dashboard = () => {
    const [view, setView] = useState('main'); // Estado para controlar a visualização

    const renderContent = () => {
        switch (view) {
            case 'account':
                return <AccountInfo />;
            case 'main':
            default:
                return <MainContent />;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar setView={setView} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {/* A Toolbar aqui garante que o conteúdo não fique escondido atrás do AppBar */}
                <Toolbar />
                {renderContent()}
            </Box>
        </Box>
    );
};

export default Dashboard;