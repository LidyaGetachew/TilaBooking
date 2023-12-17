import React,{useState} from 'react'
import { Stepper, Step, StepLabel, Button ,Rating} from '@mui/material';
import "../Hotel/hotelbooking.css"
import "./tourBooking.css"
import tourImage from "../../assets/images/tour-img01.jpg"

const TourBooking = () => {

    const steps = ['Select Tour', 'Your Information', 'Payment'];
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
        <div className="hotel-form ">
        <form onSubmit={handleSubmit} >
            {/* second step */}
            {activeStep ===1 && (<div className='personal-details-form '>
            <div className='hotel-booking-personal-info form-section-container'>
                <h2>Admission to the London Eye</h2>
                <h4 className='medium-title'>Enter your details</h4>
                <div>

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
                    <label htmlFor="email" className='required-label'>Email Address</label>
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
                    <div className="label-input-container">
                    <label htmlFor="email" className='required-label'>Confirm email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
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

                </div>
            <div>
                <div className="medium-title">Cancellation policy</div>
                <div>Cancel for free before December 18 at 2:00 PM for a full refund</div><hr/>
                <div className="gray-text">By clicking "Payment details" and completing a booking, you agree with the terms and conditions and the privacy policy of Musement.
                    Please see our Privacy Statement to understand how we use and protect your personal information.</div>
            </div>
            </div> 
          
            <div className='button-container'>
                <button className='major-button full-width' onClick={handleNextStep}>Next: Final details &gt; </button>
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
                    <button className='major-button full-width' onClick={handleNextStep}>Complete Booking</button>
                </div>
            </div>)}
     </form>    
        </div>
            <div className="hotel-summary">

                {/* side-sections */}
                
                <div className="form-section-container">
                 <div className="price-details section-info-gap">
                    <div className=''>
                        <img src={tourImage} alt='tour image' className='tour-small-image-card' />
                        <div>
                            <div className="small-title">Admission to the London Eye</div>
                            <div className="gray-text">Tue, Dec 19 02:00 PM</div>
                        </div>
                    </div>
                    <hr/>
                    <div className='small-title'>Your price summary</div>
                    <div>
                            <div className='medium-title'>3 x Standard Experience (PEAK)</div>

                        <div className='price-values'>
                        <div>1 x Adult (age 16+)</div>
                        <div>US$42.11</div>
                        </div>

                        <div  className='price-values'>
                        <div>1 x Child (age 2–15)</div>
                        <div>US$37.01</div>
                        </div>

                        <div  className='price-values'>
                        <div>1 x Child under 2</div>
                        <div>US$0</div>
                        </div>
                    </div>
                    <div className='price-info'>
                        <div className='medium-title'>Total</div>
                        <div>
                            <div className=''><b>US$79.12</b></div>
                            <div className='gray-text small-detail-info'>Includes taxes and fees</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* end of side section */}
        
        
        </div>
    </div>
 </div>
  )
}

export default TourBooking