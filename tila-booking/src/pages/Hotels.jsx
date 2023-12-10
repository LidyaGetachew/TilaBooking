import React, { useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
import hotelData from '../assets/data/hotels'
import '../styles/tour.css'
import '../components/Hotel/hotels.css'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import HotelSearchBar from '../components/Hotel/HotelSearchBar'
import HotelCard from '../shared/HotelCard'
import PopularHotelsCard from '../shared/PopularHotelsCard'
import FeaturedHotels from '../components/Hotel/featured-hotels/FeaturedHotels'
import PropertyList from '../components/Hotel/PropertyList/PropertyList'
import FeaturedProperties from '../components/Hotel/featured-properties/FeaturedProperties'
import NewsLetter from './../shared/Newsletter'


const Hotels = () => {
   const [pageCount, setPageCount] = useState(0)
   const [page, setPage] = useState(0)

   // const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`)
   // const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)
   const [hotels,hotelsCount] = [hotelData,hotelData.length]
   let [loading, error] = [false, false];

   useEffect(() => {
      const pages = Math.ceil(hotelsCount / 8)
      setPageCount(pages)
      window.scrollTo(0,0)
   }, [page, hotelsCount, hotels])

   return (
      <>
         <CommonSection title={"All Hotels"} />
         <section>
            <Container>
               <Row>
                  <HotelSearchBar />
                  <div className='homecontainer'>
                     <FeaturedHotels />
                     <h1 className="homeTitle">Browse by Propeerty type</h1>
                     <PropertyList />
                     <h1 className="homeTitle">Homes guests love</h1>
                     <FeaturedProperties />
                     <NewsLetter />

                   </div>
               </Row>
            </Container>
         </section>

      </>
   )
}

export default Hotels

         {/* <section className='pt-0'>
            <Container>
               {loading && <h4 className='text-center pt-5'>LOADING..........</h4>}
               {error && <h4 className='text-center pt-5'>{error}</h4>}
               {
                  !loading && !error &&
                  <Row>
                     <PopularHotelsCard hotels={hotels} name={"Ethiopia"} />
                     <PopularHotelsCard hotels={hotels} name={"USA"} />
                     <h4>All Hotels</h4>
                     {
                        hotels?.map(hotel => (<Col lg='3' md='6' sm='6' className='mb-4' key={hotel._id}> <HotelCard hotel={hotel} /> </Col>))
                     }
                     

                     <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                           {[...Array(pageCount).keys()].map(number => (
                              <span key={number} onClick={() => setPage(number)}
                                 className={page === number ? 'active__page' : ''}
                              >
                                 {number + 1}
                              </span>
                           ))}
                        </div>
                     </Col>
                  </Row>
               }
            </Container>
         </section>
         <Newsletter /> */}