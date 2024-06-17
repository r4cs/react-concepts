// src/components/home/Home.js
import React from 'react';
import { Container } from '@mui/material';
import ImageCarousel from './ImageCarousel';

const Home = () => {
    return (
        <div>
            <Container maxWidth="lg" sx={{ my: 4 }}>
                <ImageCarousel />
            </Container>
        </div>
    );
};

export default Home;
