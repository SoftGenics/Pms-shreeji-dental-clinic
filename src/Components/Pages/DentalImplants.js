import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const DentalImplants = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/dentalimplant.jpg) center center/cover no-repeat'}}>
    <h1>DENTAL IMPLANTS</h1>
    <p>After severe tooth decay or tooth loss, dental implants are used to replace teeth.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is Dental Implants ?</h3>
          <p>After severe tooth decay or tooth loss, dental implants are used to replace teeth. The cosmetic dentist first attaches a screw to the jaw to provide support. Then, the implant is inserted into the bone socket of the missing tooth. </p>
          <p>Over time, the bone and tissue fuse to the implant, securing the replacement tooth inside the mouth. Once properly attached, the dental implant should blend into the surrounding teeth</p>

        </Col>
        <Col md={5}>
          <img src='images/dentalimplant.jpg' alt='dentalimplant.jpg' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={9}>
</Col>
<Col sm={3}>
<Table striped bordered hover size="sm" className='shadow mt-5 side-table'>
  <thead>
    <tr>
      <th>COSMETIC DENTISTRY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='normal'><Link to='/Dental-Veneers'>Dental Veneers<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Dental-Crown'>Dental Crown<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Inlays-and-Onlays'>Inlays and Onlays<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Dental-Bonding'>Dental Bonding<i className="fas fa-arrow-circle-right"></i></Link></td>
      
    </tr>
    <tr>
    <td className='active'><Link to='/Dental-Implants'>Dental Implants<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
  </tbody>
</Table>
</Col>
</Row>
    </Container>
    <Footer />
    </>
  )
}

export default DentalImplants