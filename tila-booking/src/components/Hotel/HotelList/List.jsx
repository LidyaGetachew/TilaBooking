import  React,{ useState } from "react";
import { useLocation } from "react-router-dom";
import SearchItem from "../SearchItem/SearchItem";
import {DateRange} from 'react-date-range'
import {format} from "date-fns"
import './list.css'

const HotelList = () => {
   const mockState =   {
      destination: "Addis Abeba",
      date: [
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ],
      options: {
        adult: 1,
        children: 0,
        room: 1,
      }
    }
  const location = useLocation();
  const [destination ,setDestination]= useState((location.state && location.state.destination) || mockState.destination)
  const [date ,setDate]= useState((location.state && location.state.date) || mockState.date )
  const [openDate ,setOpenDate]= useState(false)
  
  const [options ,setOptions]= useState((location.state && location.state.options) || mockState.options)
  return (
<div className="listContainer">
    <div className="listWrapper">
  <div className="listSearch">
         <h1 className="lsTitle">Search</h1>
         <div className="lsItem">
            <label >Destination</label>   
            <input type="text" placeholder={destination}/>
         </div>
         <div className="lsItem">
            <label>Check-in Date</label>   
            <span onClick={()=>setOpenDate(!openDate)}> {`${format(date[0].startDate,"MM/dd/yyyy"
  )} to  ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
{openDate&&(
<DateRange
onChange={item=>setDate([item.selection])}
minDate={new Date()}
ranges={date}
/>)}
         </div>
         <div className="listItem">
 <label> Options</label>
 <div className="lsOptions">
  
<div className="lsOptionItem">
   <span className="lsOptionText">
      Min price<small>per night</small>
   </span>
   <input type="number" className="lsOptionInput"/>
</div>
<div className="lsOptionItem">
   <span className="lsOptionText">
   Max price<small>per night</small>
   </span>
   <input type="number" className="lsOptionInput"/>
</div>
<div className="lsOptionItem">
   <span className="lsOptionText">
   Adult
   </span>
   <input type="number"  min={1} className="lsOptionInput" placeholder={options.adult}/>
</div>
<div className="lsOptionItem">
   <span className="lsOptionText">
   Children
   </span>
   <input type="number" min={0}  className="lsOptionInput" placeholder={options.children}/>
</div>
<div className="lsOptionItem">
   <span className="lsOptionText">
   Room
   </span>
   <input type="number" 
    min={1}  
    className="lsOptionInput"
 placeholder={options.room}
 />
</div>
</div>
         </div>
<button>Search</button>
</div>
    <div className="listResult">
      <SearchItem/>
      <SearchItem/>
      <SearchItem/>
      <SearchItem/>
      <SearchItem/>


    </div>
    </div>
</div>


   );
  };
            
    
    export default HotelList;
    