import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const DentalBonding = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/dentalbonding.jpg) center center/cover no-repeat'}}>
    <h1>DENTAL BONDING</h1>
    <p>For dental bonding, the cosmetic dentist applies a moldable resin to the tooth and hardens it with ultraviolet light.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is A Dental Bonding ?</h3>
          <p>For <b>Dental bonding,</b> the cosmetic dentist applies a moldable resin to the tooth and hardens it with ultraviolet light. Then, they trim, shape, and polish the material to blend into the surface of the tooth.</p>
<p>Bonding can repair chips, cracks, misshapen teeth, and tooth decay. For minor cosmetic issues, bonding is a more affordable alternative to fillings or crowns. 
</p>

        </Col>
        <Col md={5}>
          <img src='images/dentalbonding.jpg' alt='dentalbonding' />
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
      <td className='active'><Link to='/Dental-Bonding'>Dental Bonding<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Dental-Implants'>Dental Implants<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default DentalBonding