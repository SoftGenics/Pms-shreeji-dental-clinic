import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const InlaysandOnlays = () => {
  return (
    
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/inlayonlay.jpg) center center/cover no-repeat'}}>
    <h1>INLAYS AND ONLAYS</h1>
    <p>Inlays and onlays, also known as indirect fillings, are used when a tooth is too decayed to support a typical filling. </p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is Inlays and Onlays ?</h3>
          <p><b>Inlays and onlays,</b> also known as indirect fillings, are used when a tooth is too decayed to support a typical filling. These fillings are created in a dental laboratory and bonded in place by a cosmetic dentist.</p>
          <p>An “inlay” is when the material is bonded in the center of the tooth. An “onlay” is when the filling covers one or more parts of the tooth or covers the tooth’s entire surface. </p>
         

          <p > This procedure is an alternative to the crown, preserving more of the tooth’s natural surface while still strengthening and restoring the tooth after decay or deterioration.</p>

        </Col>
        <Col md={5}>
          <img src='images/inlayonlay.jpg' alt='dentalveneers' />
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
      <td className='active'><Link to='/Inlays-and-Onlays'>Inlays and Onlays<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default InlaysandOnlays