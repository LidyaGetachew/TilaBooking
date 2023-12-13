import React,{useEffect, useState} from 'react';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, FormControl, Select, MenuItem, Button } from '@mui/material';
import { Container,Table} from 'reactstrap';
import "./reservation-table.css"
import PersonIcon from '@mui/icons-material/Person';

const roomData = [
    {
      roomId:1,
      roomType: 'Standard Single',
      info: {
        bedConfiguration:["1 king bed"],
        size: '24 m²',
        amenities: ['Bathtub', 'Air conditioning', 'Private Bathroom', 'Free WiFi'],
        overview: 'Providing free toiletries, this double room includes a private bathroom with a bath, a shower, and a hairdryer. The room features air conditioning, a safe deposit box, and a TV. The unit offers 1 bed.'
      },
      variants: [
        {
          variantName: 'Variant 1',
          guests: 2,
          price: 100,
          choices: ['Breakfast US$10 (optional)', 'Non-refundable', ]
        },
        {
          variantName: 'Variant 2',
          guests: 2,
          price: 120,
          choices: ['Breakfast included in the price', 'Free cancellation before December 22, 2023',]
        }
      ]
    },
    {roomId:2,
      roomType: 'Standard Double',
      info: {
        bedConfiguration:["2 king bed"],

        size: '21 m²',
        amenities: ['Bathtub', 'Air conditioning', 'Private Bathroom', 'Free WiFi'],
        overview: 'Providing free toiletries, this double room includes a private bathroom with a bath, a shower, and a hairdryer. The room features air conditioning, a safe deposit box, and a TV. The unit offers 1 bed.'
      },
      variants: [
        {
          variantName: 'Variant 1',
          guests: 2,
          price: 150,
          choices: ['Breakfast US$10 (optional)', 'Non-refundable', ]
        },
        {
          variantName: 'Variant 2',
          guests: 2,
          price: 180,
          choices: ['Breakfast included in the price', 'Free cancellation before December 22, 2023',]
        }
      ]
    },
    {
      roomId:3,
      roomType: 'Deluxe Suite',
      info: {
        bedConfiguration:["2 queen bed"],
        size: '27 m²',
        amenities: ['Bathtub', 'Air conditioning', 'Private Bathroom', 'Free WiFi'],
        overview: 'Providing free toiletries, this double room includes a private bathroom with a bath, a shower, and a hairdryer. The room features air conditioning, a safe deposit box, and a TV. The unit offers 1 bed.'
      },
      variants: [
        {
          variantName: 'Variant 1',
          guests: 4,
          price: 300,
          choices: ['Breakfast US$10 (optional)', 'Non-refundable', ]
        },
        {
          variantName: 'Variant 2',
          guests: 4,
          price: 350,
          choices: ['Breakfast included in the price', 'Free cancellation before December 22, 2023',]
        }
      ]
    }
  ];

const ReservationTable = () => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [reserveColumnRendered, setReserveColumnRendered] = useState(false);
    const calculateTotalVariants = () => {
        return roomData.reduce((total, room) => total + room.variants.length, 0);
      };
    const handleRoomSelect = (roomId, variantIndex, quantity, price) => {
      const existingIndex = selectedRooms.findIndex(
        (selectedRoom) =>
          selectedRoom.roomId === roomId && selectedRoom.variantIndex === variantIndex
      );
  
      if (existingIndex !== -1) {
        // Room already exists, update the existing selection
        const updatedSelectedRooms = [...selectedRooms];
        updatedSelectedRooms[existingIndex] = {
          roomId,
          variantIndex,
          quantity,
          price,
        };
        setSelectedRooms(updatedSelectedRooms);
      } else {
        // Room does not exist, add it to the selectedRooms array
        const newSelectedRoom = {
          roomId,
          variantIndex,
          quantity,
          price,
        };
        const updatedSelectedRooms = [...selectedRooms, newSelectedRoom];
        setSelectedRooms(updatedSelectedRooms);
      }
    };
    
    const calculateTotalCost = () => {
      let totalCost = 0;
      selectedRooms.forEach((room) => {
        const roomPrice = roomData[room.roomId - 1].variants[room.variantIndex].price;
        totalCost += roomPrice * room.quantity;
      });
      return totalCost;
    };
  
    const calculateTotalSelectedRooms = () => {
      let totalSelectedRooms = 0;
      selectedRooms.forEach((room) => {
        totalSelectedRooms += room.quantity;
      });
      return totalSelectedRooms;
    };
  
    return (
      <Container className="table-container">
        <table className="reservation-table">
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Room Type</th>
              <th  >Number of Guests</th>
              <th  >Price per Night</th>
              <th>Choices</th>
              <th >Select Rooms</th>
            </tr>
          </thead>
          <tbody>
            
            {roomData.map((room, index) => (
              <React.Fragment key={index}>
                {room.variants.map((variant, variantIndex) => (
                  <tr key={`${index}-${variantIndex}`}>
                    {variantIndex === 0 ? (
                      <React.Fragment>
                        <td rowSpan={room.variants.length}>
                          <div>
                            <strong>{room.roomType}</strong>
                          </div>
                          <div>{room.info.bedConfiguration.join('<br/>')}</div>
                          <div>{room.info.size}</div>
                          <div className="overview">{room.info.overview}</div>
                          <div>
                            {room.info.amenities.map((amenity) => (
                              <div className="amenity" key={amenity}>
                                {amenity}
                              </div>
                            ))}
                          </div>
                        </td>
                      </React.Fragment>
                    ) : null}
                    <td>
                      {Array.from({ length: variant.guests }, (_, index) => (
                        <PersonIcon key={index} />
                      ))}
                    </td>
                    <td>
                      <b>US${variant.price}</b>
                      <div>
                        <small>Includes taxes and fees</small>
                      </div>
                    </td>
                    <td>
                      {variant.choices.map((choice, choiceIndex) => (
                        <div key={choiceIndex}>- {choice}</div>
                      ))}
                    </td>
                    <td>
                      <FormControl variant="filled">
                        <Select
                          defaultValue={0}
                          onChange={(e) =>
                            handleRoomSelect(
                              room.roomId,
                              variantIndex,
                              e.target.value,
                              variant.price
                            )
                          }
                        >
                         {[...Array(11).keys()].map((num) => (
                            <MenuItem key={num} value={num}>
                                {num === 0 ? 0 : `${num} (US$${variant.price * num})`}
                            </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
            <tr rowSpan={4}></tr>
          </tbody>
        </table>
        <aside className='reserve'>
            <div>                       
                 <div>
                    {calculateTotalSelectedRooms()} rooms for <br />
                       <b>${calculateTotalCost()}</b> 
                            </div>
                            <Button variant="contained" color="primary">
                            I'll Reserve
                            </Button>
                     </div>
      </aside>
      </Container>
    );
  };


export default ReservationTable;