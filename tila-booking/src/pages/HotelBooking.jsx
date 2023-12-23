import React,{useState} from 'react'
import { Stepper, Step, StepLabel, Button ,Rating} from '@mui/material';
import "../components/Hotel/hotelbooking.css"
import { CarRental, CheckOutlined, HelpCenter, LocalTaxi, LocalTaxiOutlined } from '@mui/icons-material';

const HotelBooking = () => {

    const steps = ['Select Room', 'Guest Information', 'Payment'];
    const [activeStep, setActiveStep] = useState(1);

    const handleNextStep = () => {
        if (activeStep === 1) {
            setActiveStep(activeStep + 1);     
      } else if (activeStep === 2) {

        window.alert('form sumbitted')
        //   handleSubmit();
        } else {
          // Display error messages or handle validation failure
        }
      }
      
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
            carRental:false,
            saveDetails:false,
            cardHolderName:'',
            cardType:'',
            cardNumber:'',
            expirationMonth:"",
            expirationYear:'',

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
      function getThreeLetterMonthNames() {
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
      
        return months;
      }
      function getFutureYears() {
        const currentYear = new Date().getFullYear();
        const futureYears = [];
      
        for (let i = 0; i <= 20; i++) {
          futureYears.push(currentYear + i);
        }
      
        return futureYears;
      }

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
            {/* end of side section */}
        
        <div className="hotel-form ">
        <form onSubmit={handleSubmit} >
            {/* second step */}
            {activeStep ===1 && (<div className='personal-details-form '>
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
                <button className='major-button align-right' onClick={handleNextStep}>Next: Final details &gt; </button>
            </div>
            </div>)}
            {/* end of step 2 */}

            {/* third step */}
            {activeStep === 2 && ( <div className='payment details '>
                <div className="form-section-container">
                <div className='section-info-gap'>
                    <div className='medium-title'>Save your details</div>
                    <div>
                        Use your contact details to create an account and speed up future bookings.
                        <br/>(We won't save your payment info.)
                    </div>
                    <div className='checkbox-container'>
                        <input type="checkbox" id="saveDetailsCheckbox" name="saveDetails" checked={formData.saveDetails} onChange={() =>handleCheckboxChange("saveDetails")}/>
                        <label className='short-label' htmlFor="saveDetailsCheckbox">
                            Save my details so I can book faster next time
                        </label>
                    </div>
                    <div className='small-detail-info'>
                            By signing in or creating an account, you agree with our{" "}
                        <a href="">Terms &amp; Conditions</a> and{" "}
                        <a href="">Privacy Statement</a>
                    </div>
                </div>
                </div>
                <div className='form-section-container'>
                <div className='section-info-gap'>
                    <div className='medium-title'>How do you want to pay?</div>
                    <div className='label-input-container'>
                        <label htmlFor="cardholderName" className='required-label'>Cardholder's name</label>
                        <input type="text" id="cardholderName" required name='cardHolderName' value={formData.cardHolderName} onChange={handleChange}/>
                    </div>
                    <div className='label-input-container'>
                        <label htmlFor="cardType" className='required-label'>Card Type</label>
                        <select id="cardType" name='cardType' value={formData.cardType} onChange={handleChange}>
                            <option>-- Select --</option>
                            <option>Visa</option>
                            <option>Mastercard</option>
                            <option>American Express</option>
                        </select>
                    </div>

                    <div className='label-input-container'>
                        <label htmlFor="cardNumber" className='required-label'>Card Number</label>
                        <input type="text" id="cardNumber" required name='cardNumber' value={formData.cardNumber} onChange={handleChange} />
                    </div>

                    <div className='label-input-container'>
                        <label htmlFor="expirationMonth" className='required-label'>Expiration date</label>
                        <div className='date-container'>
                            <select id="expirationMonth" required className='label-input-container' name='expirationMonth' value={formData.expirationMonth} onChange={handleChange}>
                                {getThreeLetterMonthNames().map(month=>(
                                    <option>{month}</option>
                                ))}
                            </select>
                            <span>/</span>
                            <select id="expirationYear" required className='label-input-container' name='expirationYear' value={formData.expirationYear} onChange={handleChange}>
                                {getFutureYears().map(year =>(
                                    <option>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="cvcCode"><b>CVC code</b></label>
                        <div className='small-detail-info'>You don't need to enter a CVC code for this booking.</div>
                    </div>
                    </div>
                </div>
                <div className='button-container'>
                    <button className='major-button align-right' onClick={handleNextStep}>Complete Booking</button>
                </div>
            </div>)}
     </form>    
        </div>
        </div>
    </div>
 </div>
  )
}

export default HotelBooking