import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: "url('/assets/images/hero2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment:'fixed',
        minHeight: 600,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            '@media (max-width: 600px)': {
              textAlign: 'left',
            },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            color="common.white"
            sx={{
              fontSize: { xs: '40px', sm: '50px' },
            }}
          >
            Elevate Your Journey with Unmatched Services
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            color="common.white"
            sx={{
              fontSize: { xs: '30px', sm: '36px' },
            }}
          >
           Luxurious Hotels, Seamless Transportation, and Unforgettable Tours Await
          </Typography>
          <Button  variant='contained'>Discover Our Services</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;