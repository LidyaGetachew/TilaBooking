import React,{useState} from 'react'
import "./paymentform.css"
import "../../components/Hotel/hotelbooking.css"
import { CardGiftcard } from '@mui/icons-material';
import paypalImage from "../../assets/images/paypal.png"
import creditImage from "../../assets/images/credit-card.png"

const PaymentForm = () => {

    const [formData, setFormData] = useState({
        cardHolderName:'',
        cardType:'',
        cardNumber:'',
        expirationMonth:"",
        expirationYear:'',
        cvcCode:'',
        paymentMethod:'newCard',

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
    <div className='payment details '>
        <div className='form-section-container'>
        <div className='section-info-gap'>
        <div className='medium-title'>How do you want to pay?</div>
         <div className='payment-type-container'>
            <label htmlFor="newCard" className={`radioLabel ${formData.paymentMethod === 'newCard' ? 'selected' : ''}`}>
                <input
                type="radio"
                id="newCard"
                name="paymentMethod"
                value="newCard"
                checked={formData.paymentMethod === 'newCard'}
                onChange={handleChange}
                />
                <img src={creditImage} alt='credit-image' />
            </label>
            <label htmlFor="paypal" className={`radioLabel ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}>
                <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleChange}
                />
                <img src={paypalImage} alt='credit-image' />
            </label>
            </div>
                {formData.paymentMethod ==="newCard" ?(
                    <>
                    <div className='medium-title'>New Card</div>
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
            <div className='label-input-container'>
                <label htmlFor="cvcCode" className='required-label'>CVC code</label>
                <input type="text" id="cvcCode" required name='cvcCode' value={formData.cvcCode} onChange={handleChange}/>
            </div>
        </>
             ):(

         <div className='paypal'>
            <div>
                <div className='medium-title'>  PayPal </div>
                <div className='small-title'>  What happens next </div>
                <ul className='small-detail-info'>
                    <li>You'll be redirected to PayPal</li>
                    <li>Make sure you complete all the steps with PayPal</li>
                    <li>You'll receive confirmation after you pay</li>
                </ul>
             </div>
            </div>
            )}
            </div>
        </div> 
    </div>
  )
}

export default PaymentForm