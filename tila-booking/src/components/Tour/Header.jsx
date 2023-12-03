import {useState} from 'react'
import {AppBar,Toolbar,IconButton,Typography, Stack, Button,
      Drawer,List,ListItem,ListItemText,Hidden  } from "@mui/material"
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MenuIcon from '@mui/icons-material/Menu'
const Header = () => {
    const [isDrawerOpen,setIsDrawerOpen] = useState(false) // to toggle drawer
    const handleDrawerOpen = () => {
      setIsDrawerOpen(true)
    }
    const handleDrawerClose = () =>{
      setIsDrawerOpen(false)
    }

  return (
    <AppBar position='static'  sx={{ backgroundColor: "#fff" ,padding:"10px 0px" }}>
        <Toolbar color="primary">
            <IconButton size='medium' edge='start'  aira-label='logo'>
                <BeachAccessOutlinedIcon  sx={{ color:'blue'}}/>
            </IconButton>
            <Typography variant='h6' component='div' color="primary" sx={{flexGrow:1}} > 
              TILLA TOUR 
            </Typography>
            <Hidden mdDown> // show only when screen is above md
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
            </Hidden>
            <Hidden mdUp>
              <Button
               startIcon={<MenuIcon/>}
               size='medium'
               edge='end'
               onClick={handleDrawerOpen}
               >Menu</Button>
            </Hidden>
        </Toolbar>
        <Hidden mdUp>
          <Drawer anchor='right' open={isDrawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Our Services" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Destination" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>
    </AppBar>
  )
}

export default Header