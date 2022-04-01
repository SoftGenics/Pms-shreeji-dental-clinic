import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
<div className="mt-5 pt-5 pb-5 footer" id="contactus">
<div className="container">
  <div className="row">
    <div className="col-lg-3 col-xs-12 about-company">
      <h2>About Us</h2>
      <p className="pr-5 text-dark">Shreeji Multispeciality Dental Clinic is properly equipped to grant care in the area of dentistry, to determine the sicknesses and to assure patient's recovery.</p>
      <p><a href="https://facebook.com"><i className="fab fa-facebook-square mr-1"></i></a><a href="https://linkendin"><i className="fab fa-linkedin ms-2"></i></a><a href="https://linkendin"><i className="fab fa-instagram-square ms-2"></i></a></p>
        <img src='images/main-logo.png' alt='clinic logo' style={{width:'210px', height:'70px'}}></img>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h3 className="mt-lg-0 mt-sm-3">Our Services</h3>
        <ul className="m-0 p-0">
          <li>- <Link to="/General-denstistry">General Denstistry</Link></li>
          <li>- <Link to="/Cosmetics-dentistry">Cosmetics Denstistry</Link></li>
          <li>- <Link to="/Surgical">Surgica Denstistry</Link></li>
          <li>- <Link to="/Kids-dentistry">Kids Denstistry</Link></li>
          <li>- <Link to="/Book-Online">Book Online</Link></li>
        </ul>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h3 className="mt-lg-0 mt-sm-3">Gallery</h3>
        <ul className="m-0 p-0">
          <li>- <Link to="/PhotoGallery">Photo Gallery</Link></li>
          <li>- <Link to="/Video-Gallery">Video Gallery</Link></li>
          <li>- <Link to="/Faq">FAQ</Link></li>
        </ul>
    </div>
    <div className="col-lg-3 col-xs-12 location">
      <h3 className="mt-lg-0 mt-sm-4">Contact Us</h3>
      <a href="tel:7800230430" style={{textDecoration:'none', color:'rgb(51, 50, 50)'}}><i className="fas fa-phone"/>&nbsp;+91 7800230430</a><br></br>
      <a href='mailto:gauravmehrotra906@gmail.com' style={{textDecoration:'none', color:'rgb(51, 50, 50)'}}><i className="fas fa-envelope" />&nbsp;<small>gauravmehrotra906@gmail.com</small></a>
      <p><i className="fas fa-map mr-3"></i> B-104/6, Bans Mandi, Nirala Nagar, Lucknow, Uttar Pradesh 226020</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-100">Designed and Seo By© <a href='https://softgenics.in' target='_blank' rel="noopener noreferrer">SoftGenics</a></small></p>
    </div>
  </div>
</div>
</div>
  )
}

export default Footer