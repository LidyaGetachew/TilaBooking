import React from 'react'
import {AppBar,Toolbar,IconButton,Typography, Stack, Button} from "@mui/material"
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {
  return (
    <AppBar position='static'  sx={{ backgroundColor: "#fff" ,padding:"10px 0px" }}>
        <Toolbar color="primary">
            <IconButton size='medium' edge='start'  aira-label='logo'>
                <BeachAccessOutlinedIcon  sx={{ color:'blue'}}/>
            </IconButton>
            <Typography variant='h6' component='div' color="primary" sx={{flexGrow:1}} > 
              TILLA TOUR 
            </Typography>
            <Stack direction='row' spacing={3}>
                <Button>Home</Button>
                <Button>Our Services</Button>
                <Button>Destination</Button>
                <Button>About Us</Button>
                <Button>Contact Us</Button>
                <IconButton size='small'  aria-label='user-icon' color='primary' >
                  <PersonOutlinedIcon />
                </IconButton>
            </Stack> 
        </Toolbar>
    </AppBar>
  )
}

export default Header