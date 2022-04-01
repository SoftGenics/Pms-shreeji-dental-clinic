import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const DentalVeneers = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/dentalveneers.jpg) center center/cover no-repeat'}}>
    <h1>DENTAL VENEERS</h1>
    <p>Dental veneers are thin, white shells made from medical-grade porcelain, resin, or ceramic. They’re custom made for each patient to resemble their natural teeth.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is A Dental veneers?</h3>
          <p><strong>Dental veneers</strong> are thin, white shells made from medical-grade porcelain, resin, or ceramic. They’re custom made for each patient to resemble their natural teeth.
Before attaching the veneers, the dentist removes some enamel from the tooth’s surface to allow the shells to be bonded realistically to the front of the teeth. Dental veneers can fix a number of cosmetic issues, including crooked teeth, damaged enamel, and gaps between teeth. </p>


        </Col>
        <Col md={5}>
          <img src='images/dentalveneers.jpg' alt='dentalveneers' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={9}>
        <p className='mt-3'>Not with an experienced dentist who has successfully placed many porcelain and dental crowns! 
You will be under local anaesthesia and medicated while your tooth or teeth are prepped for the crown and when the crowns are applied. 
</p>
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
      <td className='active'><Link to='/Dental-Veneers'>Dental Veneers<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default DentalVeneers