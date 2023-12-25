import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { YouTube,LinkedIn } from '@mui/icons-material';
import React from 'react';

const SocialsSection = () => {
  return (
    <div>
        <div className="medium-title">Social</div>
    <Stack direction="row" spacing={2}>
      <IconButton
        aria-label="Facebook"
        style={{ color: 'var(--secondary-color)' }} // Apply custom color here

        onClick={() => window.open('https://www.facebook.com')}
        >
        <FacebookIcon />
      </IconButton>
      <IconButton
        aria-label="Twitter"
        style={{ color: 'var(--secondary-color)' }} // Apply custom color here
        onClick={() => window.open('https://www.twitter.com')}
        >
        <TwitterIcon />
      </IconButton>
      <IconButton
        aria-label="Instagram"
        style={{ color: 'var(--secondary-color)' }} // Apply custom color here
        onClick={() => window.open('https://www.instagram.com')}
        >
        <InstagramIcon />
      </IconButton>
      <IconButton
        aria-label="Youtube"
        style={{ color: 'var(--secondary-color)' }} // Apply custom color here
        onClick={() => window.open('https://www.youtube.com')}
        >
        <YouTube />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        style={{ color: 'var(--secondary-color)' }} // Apply custom color here
        onClick={() => window.open('https://www.linkedin.com')}
        >
        <LinkedIn />
      </IconButton>
      
    </Stack>
          </div>
  );
};

export default SocialsSection;