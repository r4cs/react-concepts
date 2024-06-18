// components/dashboard/Dashboard.js
import React, { useState } from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';
import AccountInfo from '../user/AccountInfo';
import { Grid } from '@mui/material';

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
        <Grid container>
            <Grid item xs={12} md={3}>
                <SideBar setView={setView} />
            </Grid>
            <Grid item xs={12} md={9}>
                {renderContent()}
            </Grid>
        </Grid>
    );
};

export default Dashboard;


// // Dashboard.js
// import React from 'react';
// import SideBar from './SideBar';
// import MainContent from './MainContent';
// import { Grid } from '@mui/material';
// import {Outlet, Route, Routes} from "react-router-dom";
// import AccountInfo from "../user/AccountInfo";
//
// const Dashboard = () => {
//     return (
//         <Grid container>
//             <Grid item xs={12} md={3}>
//                 <SideBar />
//             </Grid>
//             <Grid item xs={12} md={9}>
//                 <Routes>
//                     <Route path="/" element={<MainContent />} />
//                     <Route path="account" element={<AccountInfo />} />
//                 </Routes>
//                 <Outlet />
//             </Grid>
//         </Grid>
//     );
// };
//
// export default Dashboard;