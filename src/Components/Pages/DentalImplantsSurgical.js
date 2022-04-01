import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const DentalImplantsSurgical = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/Rootcanaltherapy.jpeg) center center/cover no-repeat'}}>
    <h1>surgical dental implant</h1>
    <p>A dental implant offers a permanent solution to one or several missing teeth.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is Surgical Dental implants ?</h3>
          <p> A dental implant offers a permanent solution to one or several missing teeth. It uses a titanium screw to replace the roots, which then provides support for the replacement tooth. The metal is fused to the jawbone before placing tooth restorations and completing the process. Overall, this surgical procedure can take around six months to finish.
</p>

        </Col>
        <Col md={5}>
          <img src='images/surgical1.jpg' alt='surgical1.jpg' />
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
      <th>SURGICAL DENTISTRY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='normal'><Link to='/Root-Canal-Therapy'>Root canal therapy<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Wisdom-Tooth-Extraction'>Wisdom tooth extraction<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='active'><Link to='/Surgical-Dental-implants'>Dental implants<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Reconstructive-procedures'>Reconstructive procedures<i className="fas fa-arrow-circle-right"></i></Link></td>
      
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

export default DentalImplantsSurgical