import React, { useState, useRef, useEffect } from 'react';
import {TextField, Button,IconButton,Autocomplete,Stack,Menu,MenuItem,MenuList } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocationOn } from '@mui/icons-material';
import {Row, Col ,Container,Input,InputGroup} from 'reactstrap';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const HotelSearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, 'day'));



  const handleChangeLocation = (event, newValue) => {
    setLocation(newValue);
  };

  const handleCheckInDateChange = (newDate) => {
    setCheckInDate(newDate);
  };

  const handleCheckOutDateChange = (newDate) => {
    setCheckOutDate(newDate);
  };

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleSubmitSearch = () => {
   
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Container fluid>
      <Row className="d-flex justify-content-center">
        <Col md="6">
          <Stack direction="horizontal" gap="1rem">
            <IconButton sx={{ padding: 0, border: 'none', backgroundColor: 'transparent' }}>
              <LocationOn fontSize="small" />
            </IconButton>
            <Autocomplete
              options={['New York City', 'London', 'Paris', 'Tokyo', 'Rome']}
              value={location}
              onChange={handleChangeLocation}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Destination"
                  required
                  sx={{ width: '200px' }}
                />
              )}
            />
          </Stack>
        </Col>
        <Col md="6">
          <Stack direction="horizontal" gap="1rem">
            <DatePicker
              className="col-md-6"
              label="Check-in"
              required
              value={checkInDate}
              onChange={handleCheckInDateChange}
            />
            <DatePicker
              className="col-md-6"
              label="Check-out"
              required
              value={checkOutDate}
              onChange={handleCheckOutDateChange}
            />
          </Stack>
        </Col>
        <Col >
        <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>
              <TextField label="Input 1" size="small" variant="outlined" />
            </MenuItem>
            <MenuItem>
              <TextField label="Input 2" size="small" variant="outlined" />
            </MenuItem>
          </Menu>
        </Col>
      </Row>
    </Container>
  </LocalizationProvider>
   );
  };
              {/* <Col md="4">
                <InputGroup>
                  <Button size="sm" color="primary" >
                    <AddCircle />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    max={10} // Set maximum room limit
                    aria-label="Number of Rooms"
                  />
                  <Button size="sm" color="secondary" >
                    <RemoveCircle />
                  </Button>
                </InputGroup>
              </Col>
                   <>
                  <Col md="4">
                    <InputGroup>
                      <Button size="sm" color="primary" >
                        <AddCircle />
                      </Button>
                      <Input
                        type="number"
                        min={1}
                        aria-label="Number of Adults"
                      />
                      <Button size="sm" color="secondary">
                        <RemoveCircle />
                      </Button>
                    </InputGroup>
                  </Col>
    
                  <Col md="4">
                    <InputGroup>
                      <Button size="sm" color="primary">
                        <AddCircle /> 
                      </Button>
                      <Input
                        type="number"
                        min={0}
                        aria-label="Number of Children"
                      />
                      <Button size="sm" color="secondary">
                        <RemoveCircle />
                      </Button>
                    </InputGroup>
                  </Col>
                </>
            
              <Col md="12">
                <Button variant="contained" color="primary">
                  Search
                </Button>
              </Col>*/}
    
    export default HotelSearchBar;
    