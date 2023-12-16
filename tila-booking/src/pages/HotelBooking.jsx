import React,{useState} from 'react'
import { Stepper, Step, StepLabel, Button ,Rating} from '@mui/material';
import "../components/Hotel/hotelbooking.css"
import { CarRental, CheckOutlined, HelpCenter, LocalTaxi, LocalTaxiOutlined } from '@mui/icons-material';

const HotelBooking = () => {

    const steps = ['Select Room', 'Guest Information', 'Payment'];
    const [activeStep, setActiveStep] = useState(1);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
      
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
      const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            zipCode: '',
            country: '',
            telephone: '',
            bookingFor: 'myself',
            isWorkTravel: false,
            specialRequests: '',
            arrivalTime: '',
            guestFullName:'',
            guestEmail:'',
            taxiShuttle:false,
            carRental:false
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const handleCheckboxChange = (checkboxName) => {
        setFormData(prevCheckboxes => ({
          ...prevCheckboxes,
          [checkboxName]: !prevCheckboxes[checkboxName]
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
      };
      function generateTimeOptions() {
        const options = [];
        const startHour = 0; // Starting hour (in 24-hour format)
        const endHour = 23; // Ending hour (in 24-hour format)
        const hourRange = 1; // Hour range for each option
      
        for (let hour = startHour; hour <= endHour; hour += hourRange) {
          const startTime = formatTime12Hour(hour);
          const endTime = formatTime12Hour(hour + hourRange);
          const optionText = `${startTime} - ${endTime}`;
          options.push(
            <option
              key={optionText}
              value={optionText}
            >
              {optionText}
            </option>
          );
        }
      
        return options;
      }
      
      function formatTime12Hour(hour) {
        const meridiem = hour < 12 ? 'AM' : 'PM';
        const formattedHour = (hour % 12) || 12;
        return `${formattedHour}:00 ${meridiem}`;
      }
      const customStyles = {
        activeStepLabel: {
          color: 'var(--secondary-color)', // Set your desired color
        },
      };

  return (
    <div className='hotel-booking'>
      <div className='hotel-booking-wrapper'>
        <div className="stepper-wrapper">
            <Stepper activeStep={activeStep} className="custom-stepper">
                {steps.map((label) => (
                    <Step key={label} >
                    <StepLabel  sx={{
                  color:  '#FF0000' }} >{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
        <div className='hotel-booking-form'>
            <div className="hotel-summary">
                {/* side-sections */}
                <div className='form-section-container'>
                    <div className="hotel-details section-info-gap">
                        <div>
                            <span>Hotel &nbsp;</span>
                            <Rating name="hotel-rating" value={5} max={5} precision={0.1} readOnly   sx={{ fontSize: '1rem' }}/>
                            <div className='small-title'>Skylight In-Terminal Hotel</div>
                        </div>
                        <div className='small-detail-info'>
                            <div>Bole, Bole, 1755 Addis Ababa, Ethiopia</div>
                            <div>Excellent Location — 9.1</div>
                            <div className="review-summary">
                                <span className='rating-value'>7.4</span>
                                <span>Good ·</span>
                                <span className='gray-text'>364 reviews</span>
                            </div>
                            <div>
                                <p className='amenity'>Pet friendly</p>
                                <p className='amenity'>Free WiFi</p>
                                <p className='amenity'>Restaurant</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='form-section-container'>
                    <div className="booking-details section-info-gap">
                        <div className='small-title'>Your Booking Details</div>
                        <div className='date-container small-detail-info'>
                            <div className='date-div'>
                                <div> Check-in:</div>
                                <div><b>Sat, Dec 23, 2023,</b></div>
                                <div className='gray-text'>From 12:00 AM</div>
                            </div>
                            <div class="vertical-ruler"></div>
                            <div className='date-div'>
                                <div>  Check-out:</div>
                                <div><b>Wed, Dec 27, 2023,</b></div>
                                <div className='gray-text'> Until 12:00 AM</div>
                            </div>
                        </div>
                        <div>
                            Total length of stay: <b>4 nights</b>
                        </div>
                          You selected
                            <div className='small-detail-info'>
                                <b>1 room for 2 adults</b>
                            </div>
                        </div>
                </div>
                <div className="form-section-container">
                 <div className="price-details section-info-gap">
                    <div className='small-title'>Your price summary</div>
                    <div className='price-info'>
                        <div className='medium-title'>Total</div>
                        <div>
                            <div className=''><b>US $648</b></div>
                            <div className='gray-text small-detail-info'>Includes taxes and fees</div>
                        </div>
                    </div>
                    <div>
                       <div className='small-title'>Price information</div>
                    </div>
                         <p className='small-detail-info'>Includes US$129.60 in taxes and fees</p>

                    </div>
                </div>
                <div className="form-section-container">
                    <div className="payment-schedule section-info-gap">
                        <div className="small-title">Your payment schedule</div>
                        <div className="small-detail-info">You'll be charged a prepayment of the total price at any time.</div>
                    </div>
                </div>
                <div className="form-section-container">
                    <div className="section-info-gap">
                        <div className="small-title">How much will it cost to cancel?</div>
                        <div className='payment-cancel'>
                            <div className="small-detail-info">If you cancel, you'll pay</div>
                            <div className='small-detail-info'>US$648</div>

                        </div>
                    </div>
                </div>
            </div>
        <form onSubmit={handleSubmit}>
        <div className="hotel-form">
        <div>
        <div className='hotel-booking-personal-info form-section-container'>
            <h4 className='medium-title'>Enter your details</h4>
            <p className='boxed-darker-component'>Almost done! Just fill in the * required info</p>
            <div className='inputs'>

            <div className="label-input-container">
                <label htmlFor="firstName" className='required-label'>First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input-field"
                    />
                </div>

                <div className="label-input-container">
                <label htmlFor="lastName" className='required-label'>Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                </div>

                <div className="label-input-container">
                <label htmlFor="email" className='required-label'>Email Address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                </div>

                <div className="label-input-container flex-on-new-line">
                <hr />
                <div className='medium-title '>Your Address</div>
                <label htmlFor="address" className='required-label'>Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                </div>

                <div className="label-input-container">
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="input-field"
                    />
                </div>

                <div className="label-input-container">
                <label htmlFor="zipCode">Zip Code:</label>
                <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="input-field"
                    />
                </div>

                <div className="label-input-container">
                <label htmlFor="country" className='required-label'>Country/Region:</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="input-field"
                    />
                </div>

                <div className="label-input-container">
                <label htmlFor="telephone">Telephone (mobile number preferred):</label>
                <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                </div>

                <div className="label-input-container flex-on-new-line">
                <hr/>
                <label htmlFor="bookingFor">Who are you booking for?</label>
                <select
                    id="bookingFor"
                    name="bookingFor"
                    value={formData.bookingFor}
                    onChange={handleChange}
                    className="input-field"
                    >
                    <option value="myself">I'm the main guest</option>
                    <option value="someoneElse">I'm booking for someone else</option>
                </select>
                </div>

                <div className="label-input-container">
                <label htmlFor="isWorkTravel">Are you traveling for work?</label>
                <select
                    id="isWorkTravel"
                    name="isWorkTravel"
                    value={formData.isWorkTravel}
                    onChange={handleChange}
                    className="input-field"
                    >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                </div>
             </div>
        </div>
        <div className='form-section-container'>

        <div className='medium-title'>Standard Single Room</div>
        <div className='small-detail-info'>
            <div className='small-title'>Non-refundable</div>
            <div><span className='small-title'>Guests:</span> 2 adults</div>
            <div>Exceptionally clean rooms – 8.4</div>
            <div>No smoking</div>
            <div >
                <div className='amenity'>24 m²</div>
                <div className='amenity'>Bathtub</div>
                <div className='amenity'>Air conditioning</div>
                <div className='amenity'>Private Bathroom</div>
            </div>
        </div>
        
        <div className='inputs'>

        <div className="label-input-container">
            <label htmlFor="fullGuestName">Full Guest Name:</label>
            <input
                type="text"
                id="fullGuestName"
                name="guestFullName"
                className="input-field"
                value={formData.guestFullName}
                onChange={handleChange}
                />
               </div>

            <div className="label-input-container">
            <label htmlFor="guestEmail">Guest Email Address:</label>
            <input
                type="email"
                id="guestEmail"
                name="guestEmail"
                value={formData.guestEmail}
                onChange={handleChange}
                className="input-field"
                />
            </div>
         </div>
        </div>
        <div className='form-section-container inputs small-detail-info'>
        <div className='checkbox-container'>
            <input
            type="checkbox"
            id="carRentalCheckbox"
            checked={formData.carRental}
            onChange={() => handleCheckboxChange('carRental')}
            />
            <label htmlFor="carRentalCheckbox"><strong>I'm interested in renting a car.</strong><br/>Make the most of your trip – check out car rental options in your booking confirmation.</label>
            <div className='last-child-icon icon'>
            <CarRental />
            </div>
        </div>

        <div className='checkbox-container'>
            <input
            type="checkbox"
            id="taxiShuttleCheckbox"
            checked={formData.taxiShuttle}
            onChange={() => handleCheckboxChange('taxiShuttle')}
            />
            <label htmlFor="taxiShuttleCheckbox"><strong>Want to book a taxi or shuttle ride in advance?</strong> <br/>Avoid surprises – get from the airport to your accommodations without any hassle. We'll add taxi options to your booking confirmation.</label>
           <div className='last-child-icon icon'>
            <LocalTaxiOutlined />    
           </div> 
           
        </div>
    </div>
       <div className='form-section-container'>
        <label htmlFor="specialRequests" className='medium-title'>Special requests</label>
        <div className='small-detail-info'>Special requests can't be guaranteed, but the property will do its best to meet your needs. You can always make a special request after your booking is complete.</div>
        <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            
            />
            </div>

        <div className='form-section-container'>
            <div className='medium-title'>Your arrival time</div>
            <div className='small-detail-info'>
                <p><span className='icon'><CheckOutlined /> </span>Your room will be ready for check-in between 12:00 AM and 12:00 AM</p>
                <p><span className='icon'><HelpCenter /></span>24-hour front desk – help whenever you need it!</p>
                <p className='small-title'>Add your estimated arrival time (optional)</p>
    
                <div   className='label-input-container'>
                <select
                    id="arrivalTime"
                    name="arrivalTime"
                    value={formData.arrivalTime}
                    className='label-input-container'
                    onChange={handleChange}
                    >
                  <option value="">-- Select Time --</option>
                  <option value="don't know">I don't know</option>
                        {generateTimeOptions()}
                </select>
            </div>
            <p className=''>Time is for Addis Ababa time zone</p>
            </div>
</div>
        <div className='button-container'>

        <button className='major-button align-right'>Next: Final details &gt; </button>
        </div>
     </div>
            </div>
        </form>
        </div>
    </div>
 </div>
  )
}

export default HotelBooking