import React from 'react';
import { Typography, Link, Container, Box, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white" py={3}>
      <Container maxWidth="md" align="center">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link href="https://www.facebook.com" color="inherit">
              <FacebookIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.twitter.com" color="inherit">
              <TwitterIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.instagram.com" color="inherit">
              <InstagramIcon />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.linkedin.com" color="inherit">
              <LinkedInIcon />
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" component="p" gutterBottom>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p">
          <Link href="/terms-of-service" color="inherit">Terms of Service</Link> | <Link href="/privacy-policy" color="inherit">Privacy Policy</Link> | <Link href="/contact" color="inherit">Contact Us</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;