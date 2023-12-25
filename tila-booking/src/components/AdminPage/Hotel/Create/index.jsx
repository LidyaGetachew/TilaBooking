import React,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage,FieldArray } from 'formik';
import * as Yup from 'yup';
import "../../adminStyle.css"
import { useDropzone } from 'react-dropzone';
import Dropzone from 'react-dropzone'; // Add this line


// Define the initial form values
const initialFieldValues = {
  title: '',
  address: '',
  distance:'',
  minPrice:'',
  highlight:'',
  description:'',
  popular_facilities:'',
  photos: [],
  facilities: {
    bathroom: [],
    outdoors: [],
    pets: [],
    living_area:[],
    media_technology:[],
    food_and_drink:[],
    internet:[],
    parking:[],
    services:[],
    front_desk_services:[],
    safety_security:[],
    general:[],
  },
  hotelAreaInfo:[],
  propertyQA:[],
  restaurantAndCafe:[],
  topAttractions:[],
  closestAirports:[],
  houseRules: {
    checkIn: '',
    checkOut: '',
    cancellationPrepayment: '',
    childrenAndBeds: {
      childPolicies: '',
      cribAndExtraBedPolicies: '',
    },
    ageRestriction: '',
    pets: '',
  },
  faqs:[],
  map:{
    image:'',
    code:''
  }
};



// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
      title: Yup.string().required('Hotel name is required'),
      address: Yup.string().required('Hotel address is required'),
      distance: Yup.number().required('Distance is required').min(1, 'Distance must be at least 1'),
      minPrice: Yup.number().required('Minimum price is required').min(1, 'Minimum price must be at least 1'),
      highlight: Yup.string().required('Highlight is required'),
      description: Yup.string().required('Description is required'),
      popular_facilities: Yup.string().required('Popular facilities are required'),
      photos: Yup.array()
        .required('Hotel photos are required')
        .min(1, 'Please select at least one photo'),

        // facilities: Yup.object().shape({
        //   bathroom: Yup.array().required('Bathroom facilities are required'),
        //   outdoors: Yup.array().required('Outdoor facilities are required'),
        //   pets: Yup.array().required('Pet facilities are required'),
        //   living_area: Yup.array().required('Living area facilities are required'),
        //   media_technology: Yup.array().required('Media and technology facilities are required'),
        //   food_and_drink: Yup.array().required('Food and drink facilities are required'),
        //   internet: Yup.array().required('Internet facilities are required'),
        //   parking: Yup.array().required('Parking facilities are required'),
        //   services: Yup.array().required('Services are required'),
        //   front_desk_services: Yup.array().required('Front desk services are required'),
        //   safety_security: Yup.array().required('Safety and security facilities are required'),
        //   general: Yup.array().required('General facilities are required'),
        // }),

        // hotelAreaInfo: Yup.array().required('Hotel area information is required'),
        // propertyQA: Yup.array().required('Property QA is required'),
        // restaurantAndCafe: Yup.array().required('Restaurant and cafe information is required'),
        // topAttractions: Yup.array().required('Top attractions information is required'),
        // closestAirports: Yup.array().required('Closest airports information is required'),

        houseRules: Yup.object().shape({
          checkIn: Yup.string().required('Check-in time is required'),
          checkOut: Yup.string().required('Check-out time is required'),
          cancellationPrepayment: Yup.string().required('Cancellation and prepayment policies are required'),
          childrenAndBeds: Yup.object().shape({
            childPolicies: Yup.string().required('Child policies are required'),
            cribAndExtraBedPolicies: Yup.string().required('Crib and extra bed policies are required'),
          }),
          ageRestriction: Yup.string().required('Age restriction information is required'),
          pets: Yup.string().required('Pet policies are required'),
        }),

        // faqs: Yup.array().required('FAQs are required'),

        map: Yup.object().shape({
          image: Yup.mixed().required('Map image is required'),
          code: Yup.string().required('Map code is required'),
        }),
      });

const CreateHotel =  () => {

  const [step,setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  }
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  }
  function convertTextToArray(text) {
    if (typeof text !== 'string') {
      // Return an empty array if the input is not a string
       return text
    }
    // Split the text using the comma delimiter, trim whitespace from each element,
    // and filter out empty strings
    const array = text.split(',').map(item => item.trim()).filter(item => item !== '');
  
    return array;
  }
  // Handle form submission
  const handleSubmit = (values) => {

    values.popular_facilities = convertTextToArray(values.popular_facilities);//change text to array

    for (const key in values.facilities) {
      if (Object.hasOwnProperty.call(values.facilities, key)) {
        values.facilities[key] = convertTextToArray(values.facilities[key]);
      }
    }
    // use formdata
    const formData = new FormData();
    formData.append('data', JSON.stringify(values));
    formData.append('map.image',values.map.image)
    values.photos.forEach((photo, index) => {
      formData.append(`photos[${index}]`, photo);
    });
    console.log(Object.fromEntries(formData));
  };
 
  const handlePhotosDrop = (acceptedFiles, setFieldValue) => {
    setFieldValue('photos', acceptedFiles);
  };
   const handleMapImageDrop = (acceptedFile, setFieldValue) => {
    setFieldValue('map.image', acceptedFile[0]);
  };
  

  return (
    <div className="create-hotel-container">
      <h2 className='crud-title'>Create Hotel</h2>
      <Formik
        initialValues={initialFieldValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleSubmit, setFieldValue }) => (

        
        <Form className="hotel-form">
        {step === 1 &&
          (<>
              <div className='admin-form-section-container'>
              <div className="medium-title form-title">Basic Information</div>

                <div className="label-input-container">
                  <label htmlFor="title" className="required-label">Hotel Name:</label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    className="input-field"
                    />
                  <ErrorMessage name="title" component="div" className="error-message" />
                </div>
                <div className="label-input-container">
                  <label htmlFor="address" className="required-label">Hotel Address:</label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    className="input-field"
                    />
                  <ErrorMessage name="address" component="div" className="error-message" />
                </div>
                <div className="label-input-container">
                  <label htmlFor="distance" className="">Distance from center<small>(in km)</small>:</label>
                  <Field
                    type="number"
                    id="distance"
                    name="distance"
                    min='1'
                    className="input-field"
                    />
                  <ErrorMessage name="distance" component="div" className="error-message" />
                </div>
                <div className="label-input-container">
                  <label htmlFor="minPrice" className="">Minimum price:</label>
                  <Field
                    type="number"
                    id="minPrice"
                    name="minPrice"
                    min='1'
                    className="input-field"
                    />
                  <ErrorMessage name="minPrice" component="div" className="error-message" />
                </div>
                <div className="label-input-container">
                  <label htmlFor="highlight" className="required-label">Highlight</label>
                  <Field
                    as="textarea"
                    id="highlight"
                    name="highlight"
                    className="input-field"
                    />
                  <ErrorMessage name="highlight" component="div" className="error-message" />
                </div>
                <div className="label-input-container">
                  <label htmlFor="description" className="required-label">Hotel Descrition:</label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    className="input-field"
                    />
                  <ErrorMessage name="description" component="div" className="error-message" />
                </div>
                <div className="label-input-container">
                  <label htmlFor="popular_facilities" className="required-label">Popular facilities<small>(comma separated):</small></label>
                  <Field
                    as="textarea"
                    id="popular_facilities"
                    name="popular_facilities"
                    className="input-field"
                    />
                  <ErrorMessage name="popular_facilities" component="div" className="error-message" />
                </div>
                <div className="label-input-container">
                  <label htmlFor="photo" className="required-label">Hotel Photos:</label>
                  <Dropzone onDrop={(acceptedFiles) => handlePhotosDrop(acceptedFiles, setFieldValue)}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input className='input-field' {...getInputProps()} multiple accept="image/jpeg,image/png,image/gif" />
                      <p className='file-upload-box'> click to select files</p>
                    </div>
                  )}
                </Dropzone>
                <div>
                  {values.photos.map((file, index) => (
                    <div key={index}>{file.name}</div>
                  ))}
                </div>
                  <ErrorMessage name="photos" component="div" className="error-message" />
                </div>
            </div>
            <div className="admin-form-section-container">
              <div className="medium-title form-title">Hotel Facilities</div>
              <div className='form-title small-detail-info gray-text'>N.b give comma separated text</div>
              {Object.keys(initialFieldValues.facilities).map((category) => (
                <div key={category} className="label-input-container">
                  <label htmlFor={`facilities.${category}`} className="">
                    {category}:
                  </label>
                  <Field
                    type="text"
                    id={`facilities.${category}`}
                    name={`facilities.${category}`}
                    className="input-field"
                  />
                  <ErrorMessage
                    name={`facilities.${category}`}
                    component="div"
                    className="error-message"
                  />
                </div>
              ))}

            </div>
           </>
         )}
         {step===2 &&
        (<>
          <div className="admin-form-section-container">
            <div className="medium-title form-title">Property Question and Answers</div>
          <FieldArray name="propertyQA">
              {({ push, remove, form }) => (
                <div className='admin-form-section-container'>
                  {form.values.propertyQA.map((property, index) => (
                    <div key={index} className="property-container">
                      <div className="label-input-container">
                        <label htmlFor={`propertyQA.${index}.question`}>Question:</label>
                        <Field
                          type="text"
                          id={`propertyQA.${index}.question`}
                          name={`propertyQA.${index}.question`}
                          className="input-field"
                        />
                        <ErrorMessage
                          name={`propertyQA.${index}.question`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="label-input-container">
                        <label htmlFor={`propertyQA.${index}.answer`}>Answer:</label>
                        <Field
                          type="text"
                          id={`propertyQA.${index}.answer`}
                          name={`propertyQA.${index}.answer`}
                          className="input-field"
                        />
                        <ErrorMessage
                          name={`propertyQA.${index}.answer`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <button className="major-button"type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}

                  <button className="major-button" type="button" onClick={() => push({ question: '', answer: '' })}>
                    Add new QA
                  </button>
                </div>
              )}
            </FieldArray>
          </div>
          <div className="admin-form-section-container">
            <div className="medium-title form-title">Hote Area Information</div>
          <FieldArray name="hotelAreaInfo">
              {({ push, remove, form }) => (
                <div className='admin-form-section-container'>
                  {form.values.hotelAreaInfo.map((area, index) => (
                    <div key={index} className="property-container">
                      <div className="label-input-container">
                        <label htmlFor={`hotelAreaInfo.${index}.name`}>name:</label>
                        <Field
                          type="text"
                          id={`hotelAreaInfo.${index}.name`}
                          name={`hotelAreaInfo.${index}.name`}
                          className="input-field"
                        />
                        <ErrorMessage
                          name={`hotelAreaInfo.${index}.name`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="label-input-container">
                        <label htmlFor={`hotelAreaInfo.${index}.distance`}>distance(<small>km</small>):</label>
                        <Field
                          type="number"
                          id={`hotelAreaInfo.${index}.distance`}
                          name={`hotelAreaInfo.${index}.distance`}
                          className="input-field"
                          min="0"
                        />
                        <ErrorMessage
                          name={`hotelAreaInfo.${index}.distance`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <button className="major-button"type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}

                  <button className="major-button" type="button" onClick={() => push({ name: '', distance: '' })}>
                    Add new Area
                  </button>
                </div>
              )}
            </FieldArray>
          </div>
          <div className="admin-form-section-container">
            <div className="medium-title form-title">NearBy restaurants and cafe</div>
          <FieldArray name="restaurantAndCafe">
              {({ push, remove, form }) => (
                <div className='admin-form-section-container'>
                  {form.values.restaurantAndCafe.map((cafe, index) => (
                    <div key={index} className="property-container">
                      <div className="label-input-container">
                        <label htmlFor={`restaurantAndCafe.${index}.name`}>name:</label>
                        <Field
                          type="text"
                          id={`restaurantAndCafe.${index}.name`}
                          name={`restaurantAndCafe.${index}.name`}
                          className="input-field"
                        />
                        <ErrorMessage
                          name={`restaurantAndCafe.${index}.name`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="label-input-container">
                        <label htmlFor={`restaurantAndCafe.${index}.distance`}>distance(<small>m</small>):</label>
                        <Field
                          type="number"
                          id={`restaurantAndCafe.${index}.distance`}
                          name={`restaurantAndCafe.${index}.distance`}
                          className="input-field"
                          min="0"
                        />
                        <ErrorMessage
                          name={`restaurantAndCafe.${index}.distance`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <button className="major-button"type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}

                  <button className="major-button" type="button" onClick={() => push({ name: '', distance: '' })}>
                    Add new Property
                  </button>
                </div>
              )}
            </FieldArray>
          </div>
          <div className="admin-form-section-container">
            <div className="medium-title form-title">NearBy top Attractions</div>
          <FieldArray name="topAttractions">
              {({ push, remove, form }) => (
                <div className='admin-form-section-container'>
                  {form.values.topAttractions.map((attraction, index) => (
                    <div key={index} className="property-container">
                      <div className="label-input-container">
                        <label htmlFor={`topAttractions.${index}.name`}>name:</label>
                        <Field
                          type="text"
                          id={`topAttractions.${index}.name`}
                          name={`topAttractions.${index}.name`}
                          className="input-field"
                        />
                        <ErrorMessage
                          name={`topAttractions.${index}.name`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="label-input-container">
                        <label htmlFor={`topAttractions.${index}.distance`}>distance(<small>km</small>):</label>
                        <Field
                          type="number"
                          id={`topAttractions.${index}.distance`}
                          name={`topAttractions.${index}.distance`}
                          className="input-field"
                          min="0"
                        />
                        <ErrorMessage
                          name={`topAttractions.${index}.distance`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <button className="major-button"type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}

                  <button className="major-button" type="button" onClick={() => push({ name: '', distance: '' })}>
                    Add new Attraction
                  </button>
                </div>
              )}
            </FieldArray>
          </div>
          <div className="admin-form-section-container">
            <div className="medium-title form-title">Closest Airports</div>
          <FieldArray name="closestAirports">
              {({ push, remove, form }) => (
                <div className='admin-form-section-container'>
                  {form.values.closestAirports.map((area, index) => (
                    <div key={index} className="property-container">
                      <div className="label-input-container">
                        <label htmlFor={`closestAirports.${index}.name`}>name:</label>
                        <Field
                          type="text"
                          id={`closestAirports.${index}.name`}
                          name={`closestAirports.${index}.name`}
                          className="input-field"
                        />
                        <ErrorMessage
                          name={`closestAirports.${index}.name`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <div className="label-input-container">
                        <label htmlFor={`closestAirports.${index}.distance`}>distance(<small>km</small>):</label>
                        <Field
                          type="number"
                          id={`closestAirports.${index}.distance`}
                          name={`closestAirports.${index}.distance`}
                          className="input-field"
                          min="0"
                        />
                        <ErrorMessage
                          name={`closestAirports.${index}.distance`}
                          component="div"
                          className="error-message"
                        />
                      </div>

                      <button className="major-button"type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}

                  <button className="major-button" type="button" onClick={() => push({ name: '', distance: '' })}>
                    Add new Airport
                  </button>
                </div>
              )}
            </FieldArray>
          </div>
         </>
         )}
         {step === 3 &&
        ( <>
            <div className='admin-form-section-container'>
              <div className="medium-title form-title">House Rules</div>
              <div className="label-input-container">
                <label htmlFor="houseRules.checkIn">Check-in:</label>
                <Field
                  type="text"
                  id="houseRules.checkIn"
                  name="houseRules.checkIn"
                  className="input-field"
                />
                <ErrorMessage
                  name="houseRules.checkIn"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="label-input-container">
                <label htmlFor="houseRules.checkOut">Check-out:</label>
                <Field
                  type="text"
                  id="houseRules.checkOut"
                  name="houseRules.checkOut"
                  className="input-field"
                />
                <ErrorMessage
                  name="houseRules.checkOut"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="label-input-container">
                <label htmlFor="houseRules.cancellationPrepayment">Cancellation/prepayment:</label>
                <Field
                  type="text"
                  id="houseRules.cancellationPrepayment"
                  name="houseRules.cancellationPrepayment"
                  className="input-field"
                />
                <ErrorMessage
                  name="houseRules.cancellationPrepayment"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="label-input-container">
                <label htmlFor="houseRules.childrenAndBeds.childPolicies">Child policies:</label>
                <Field
                  type="text"
                  id="houseRules.childrenAndBeds.childPolicies"
                  name="houseRules.childrenAndBeds.childPolicies"
                  className="input-field"
                />
                <ErrorMessage
                  name="houseRules.childrenAndBeds.childPolicies"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="label-input-container">
                <label htmlFor="houseRules.childrenAndBeds.cribAndExtraBedPolicies">Crib and extra bed policies:</label>
                <Field
                  type="text"
                  id="houseRules.childrenAndBeds.cribAndExtraBedPolicies"
                  name="houseRules.childrenAndBeds.cribAndExtraBedPolicies"
                  className="input-field"
                />
                <ErrorMessage
                  name="houseRules.childrenAndBeds.cribAndExtraBedPolicies"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="label-input-container">
                <label htmlFor="houseRules.ageRestriction">Age restriction:</label>
                <Field
                  type="text"
                  id="houseRules.ageRestriction"
                  name="houseRules.ageRestriction"
                  className="input-field"
                />
                <ErrorMessage
                  name="houseRules.ageRestriction"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="label-input-container">
                <label htmlFor="houseRules.pets">Pets:</label>
                <Field
                  type="text"
                  id="houseRules.pets"
                  name="houseRules.pets"
                  className="input-field"
                />
                <ErrorMessage
                  name="houseRules.pets"
                  component="div"
                  className="error-message"
                />
              </div>

            </div>
            <div className="admin-form-section-container">
              <div className="medium-title form-title">FaQs</div>
            <FieldArray name="faqs">
                {({ push, remove, form }) => (
                  <div className='admin-form-section-container'>
                    {form.values.faqs.map((faq, index) => (
                      <div key={index} className="property-container">
                        <div className="label-input-container">
                          <label htmlFor={`faqs.${index}.question`}>Question:</label>
                          <Field
                            type="text"
                            id={`faqs.${index}.question`}
                            name={`faqs.${index}.question`}
                            className="input-field"
                          />
                          <ErrorMessage
                            name={`faqs.${index}.question`}
                            component="div"
                            className="error-message"
                          />
                        </div>

                        <div className="label-input-container">
                          <label htmlFor={`faqs.${index}.answer`}>Answer:</label>
                          <Field
                            type="text"
                            id={`faqs.${index}.answer`}
                            name={`faqs.${index}.answer`}
                            className="input-field"
                          />
                          <ErrorMessage
                            name={`faqs.${index}.answer`}
                            component="div"
                            className="error-message"
                          />
                        </div>

                        <button className="major-button"type="button" onClick={() => remove(index)}>
                          Remove
                        </button>
                      </div>
                    ))}

                    <button className="major-button" type="button" onClick={() => push({ question: '', answer: '' })}>
                      Add new QA
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
            <div className='admin-form-section-container'>
              <div className="medium-title form-title">Hotel Map</div>
              <div className="label-input-container">
                <label htmlFor="map.image">Image:</label>
                <Dropzone onDrop={(acceptedFile) => handleMapImageDrop(acceptedFile, setFieldValue)}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input className='input-field' {...getInputProps()} accept="image/jpeg,image/png,image/gif" />
                      <p className='file-upload-box'> click to select file</p>
                    </div>
                  )}
                </Dropzone>
                {values.map && values.map.image && values.map.image.name && (
                  <div>{values.map.image.name}</div>
                  )}
                <ErrorMessage
                  name="map.image"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="label-input-container">
                <label htmlFor="map.code">Embed Code:</label>
                <Field
                    as="textarea"
                    id="map.code"
                    name="map.code"
                    className="input-field"
                    />
                <ErrorMessage
                  name="map.code"
                  component="div"
                  className="error-message"
                />
              </div>
              
              </div>
          </>
          )}
           <div className='navigation-buttons-container'>
              {step > 1 && (
                <button className="major-button" onClick={handlePrev}>Previous</button>
              )}
              {step < 3 && (
                <button className="major-button" onClick={handleNext}>Next</button>
              )}
              {
                step ===3 &&(

                  <button className="major-button"type="submit">Submit</button>
                )
              }
          </div>

        </Form>)}
      </Formik>
    </div>
  );
};

export default CreateHotel;
