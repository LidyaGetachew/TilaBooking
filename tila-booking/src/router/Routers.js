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


const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/services' element={<Services/>} />
         <Route path='/services/tours' element={<Tours/>} />
         <Route path='/services/hotels' element={<Hotels/>} />
         <Route path='/services/hotels/hotel' element={<Hotel/>} />
         <Route path='/destinations' element={<Destinations />} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         <Route path='/hotel/list' element={<HotelList/>} />

      </Routes>
   )
}

export default Routers