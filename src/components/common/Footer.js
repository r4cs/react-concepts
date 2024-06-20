// src/components/common/Footer.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 3, zIndex: 3000}} component="footer">
            <Container maxWidth="lg">
                <Typography variant="body2" align="center">
                    © 2024 r4cs. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
