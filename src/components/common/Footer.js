import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    const appBarBackgroundColor = theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.primary.main;

    return (
        <Box
            sx={{
                py: 3,
                zIndex: 3000,
                backgroundColor: appBarBackgroundColor,
            }}
            component="footer"
        >
            <Container maxWidth="lg">
                <Typography variant="body2" align="center" color="textSecondary">
                    © 2024 r4cs. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
