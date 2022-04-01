import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const RootCanalTherapy = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/Rootcanaltherapy.jpeg) center center/cover no-repeat'}}>
    <h1>ROOT CANAL THERAPY</h1>
    <p>Root canal treatments are done to save natural teeth. The procedure can be completed in a single dental visit.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is Root canal therapy ?</h3>
          <p>Root canal treatments are done to save natural teeth. The procedure can be completed in a single dental visit. Your dentist may recommend it if the pulp becomes infected and damaged. Left untreated, this can result in swelling and severe pain that extends to the neck and jaw.</p>

        </Col>
        <Col md={5}>
          <img src='images/Rootcanaltherapy.jpeg' alt='Rootcanaltherapy.jpeg' />
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
      <td className='active'><Link to='/Root-Canal-Therapy'>Root canal therapy<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Wisdom-Tooth-Extraction'>Wisdom tooth extraction<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Surgical-Dental-implants'>Dental implants<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default RootCanalTherapy