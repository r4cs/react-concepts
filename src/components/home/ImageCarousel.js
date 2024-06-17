import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@mui/material';

const ImageCarousel = () => {
    const images = [
        { src: '/images/wallhaven-75226.jpeg', alt: 'Image 1' },
        { src: '/images/Eco Transport Isometric Infographics.jpeg', alt: 'Image 2' },
        { src: '/images/KampDevelopers - Smart Transport System in a Smart City.jpeg', alt: 'Image 3' },
        { src: '/images/Premium Vector _ Eco green transport technology icons set.jpeg', alt: 'Image 4' },
        { src: '/images/5b02e167-b6b1-48f2-a6b3-b7c43b8ae1e8.jpeg', alt: 'Image 1' },
    ];

    return (
        <Box sx={{ mt: 4, mx: 'auto', maxWidth: '80%' }}>
            <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} emulateTouch>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} style={{ borderRadius: '10px', height: '400px', objectFit: 'cover' }} />
                    </div>
                ))}
            </Carousel>
        </Box>
    );
};

export default ImageCarousel;
