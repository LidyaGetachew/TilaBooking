import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import Services from '../pages/Services'
import Hotels from '../pages/Hotels'
import Hotel from "../pages/Hotel"
import HotelList from "../components/Hotel/HotelList/List"
import Destinations from '../pages/Destinations'
import HotelBooking from '../pages/HotelBooking'
import TourBooking from '../components/Tour/TourBooking'
import AboutUs from '../pages/AboutUs'
import CreateHotel from '../components/AdminPage/Hotel/Create'
import ContactPage from '../pages/ContactUs'


const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/services' element={<Services/>} />
         <Route path='/services/tours' element={<Tours/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/tours/booking' element={<TourBooking/>} />
         <Route path='/services/hotels' element={<Hotels/>} />
         <Route path='/services/hotels/hotel' element={<Hotel/>} />
         <Route path='/services/hotels/hotel/booking' element={<HotelBooking/>} />
         <Route path='/destinations' element={<Destinations />} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         <Route path='/hotel/list' element={<HotelList/>} />
         <Route path='/about' element={<AboutUs/>} />
         <Route path='/contact' element={<ContactPage/>} />
         <Route path='/create' element={<CreateHotel/>} />



      </Routes>
   )
}

export default Routers