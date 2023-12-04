import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import { Grid,Stack,Typography} from '@mui/material'

import TourIcon from '@mui/icons-material/Tour';
import HotelIcon from '@mui/icons-material/Hotel';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
     <HeroSection />
     <Grid container spacing={8} sx={{padding:"50px"}}>
      <Grid item xs={12} sm={6} md={4}>
        <Stack spacing={1} alignItems="center">
          <TourIcon  color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h5">Personalized Activities</Typography>
          <Typography variant="body1" align='center'>Enjoy a wide range of personalized activities tailored just for you, from adventurous hikes to relaxing spa treatments.</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Stack spacing={1} alignItems="center">
          <HotelIcon  color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h5">Hotels</Typography>
          <Typography variant="body1" align='center'>Discover our collection of luxurious hotels with breathtaking views and exceptional service for an unforgettable stay.</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Stack spacing={1} alignItems="center">
          <EmojiTransportationIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h5">Transportation</Typography>
          <Typography variant="body1" align='center'>Experience effortless and comfortable transportation services, ensuring a smooth journey to your desired destinations.</Typography>
        </Stack>
      </Grid>
    </Grid>
   </>
  )
}

export default HomePage