import React from 'react'
import About from '../About/About'
import BookingAppointment from '../BookingAppointment/BookingAppointment'
import SmileTransformation from '../Cards/SmileTransformation'
import Doctor from '../Doctor/Doctor'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import OurServices from '../OurServices/OurServices'
import Reviews from '../Reviews/Reviews'
import ServiceTop from '../ServiceTop/ServiceTop'
import WhyChoose from '../WhyChoose/WhyChoose'
import OfficeInfo from '../OfficeInfo/OfficeInfo'
import NearByServices from '../NearByServices/NearByServices'
const Home = () => {
  return (
    <>
        <HeroSection />
        <ServiceTop />
        <About />
        <Doctor />
        <SmileTransformation />
        <BookingAppointment />
        <OurServices />
        <WhyChoose />
        <Reviews />
        <OfficeInfo />
        <NearByServices />
        <Footer />
    </>
  )
}

export default Home