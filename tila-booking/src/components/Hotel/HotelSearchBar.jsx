import React, { useState, useRef, useEffect } from 'react';
import {TextField, Button,IconButton,Autocomplete,Stack,Menu,MenuItem,MenuList } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocationOn } from '@mui/icons-material';
import {Row, Col ,Container,Input,InputGroup} from 'reactstrap';
import { AddCircle, RemoveCircle } from '@mui/icons-material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faBed, faCalendarDays,faPerson
} from "@fortawesome/free-solid-svg-icons"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import './SearchBar.css'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
const HotelSearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, 'day'));
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1,

  });

  const [date, setDate] =useState ([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  const handleOption= (name,operation)=>{
    setOptions(prev=>{return{
      ...prev, [name] :operation ==="i"? options[name] +1 :options[name] - 1,
    }})
  }
  
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
  //   <LocalizationProvider dateAdapter={AdapterDayjs}>
  //   <Container fluid>
  //     <Row className="d-flex justify-content-center">
  //       <Col md="6">
  //         <Stack direction="horizontal" gap="1rem">
  //           <IconButton sx={{ padding: 0, border: 'none', backgroundColor: 'transparent' }}>
  //             <LocationOn fontSize="small" />
  //           </IconButton>
  //           <Autocomplete
  //             options={['New York City', 'London', 'Paris', 'Tokyo', 'Rome']}
  //             value={location}
  //             onChange={handleChangeLocation}
  //             renderInput={(params) => (
  //               <TextField
  //                 {...params}
  //                 label="Destination"
  //                 required
  //                 sx={{ width: '200px' }}
  //               />
  //             )}
  //           />
  //         </Stack>
  //       </Col>
  //       <Col md="6">
  //         <Stack direction="horizontal" gap="1rem">
  //           <DatePicker
  //             className="col-md-6"
  //             label="Check-in"
  //             required
  //             value={checkInDate}
  //             onChange={handleCheckInDateChange}
  //           />
  //           <DatePicker
  //             className="col-md-6"
  //             label="Check-out"
  //             required
  //             value={checkOutDate}
  //             onChange={handleCheckOutDateChange}
  //           />
  //         </Stack>
  //       </Col>
  //       <Col >
  //       <Menu
  //           anchorEl={menuAnchorEl}
  //           open={Boolean(menuAnchorEl)}
  //           onClose={handleMenuClose}
  //         >
  //           <MenuItem>
  //             <TextField label="Input 1" size="small" variant="outlined" />
  //           </MenuItem>
  //           <MenuItem>
  //             <TextField label="Input 2" size="small" variant="outlined" />
  //           </MenuItem>
  //         </Menu>
  //       </Col>
  //     </Row>
  //   </Container>
  // </LocalizationProvider>

  <div className='headerSearch'>
 
<div className='headerSearchItem'>
  <FontAwesomeIcon icon={faBed} className="headerIcon"/>
  <input
      type='text'
      placeholder='Where are you going?'
      className='headerSearchInput'
  />
</div>
<div className='headerSearchItem'>
  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
  <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy"
  )} to  ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
 
 { openDate &&<DateRange
  editableDateInputs={true}
  onChange={item=>setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className='date'
  />}
</div>
<div className='headerSearchItem'>
  <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
  <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room `}</span>
     {openOptions &&
      <div className="options">
      <div className="optionItem">
        <span className="optionText">Adult</span>
        <div className="optionCounter">
        <button 
        disabled={options.adult<=1}
        className="optionCounterButton" 
        onClick={()=>handleOption("adult","d")}>
          -
        </button>
        <span className="optionCounterNumber">{options.adult}</span>
        <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
        </div>
      </div>
      <div className="optionItem">
        <span className="optionText">Children</span>
        <div className="optionCounter">
        <button 
        disabled={options.children<=0}
        className="optionCounterButton"
        onClick={()=>handleOption("children","d")}>
          -
          </button>
        <span className="optionCounterNumber">{options.children}</span>
        <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
        </div>
      </div>
      <div className="optionItem">
        <span className="optionText">Room</span>
        <div className="optionCounter">
        <button
         disabled={options.room<=1}
         className="optionCounterButton" 
         onClick={()=>handleOption("room","d")}>
          -
          </button>
        <span className="optionCounterNumber">{options.room}</span>
        <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
        </div>
      </div>
     </div>
     }
</div>
<div className='headerSearchItem'>
 <button className="headerBtn">Search</button>
</div>
  </div>

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
    