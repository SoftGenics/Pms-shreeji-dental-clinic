import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Reconstructiveprocedures = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/Reconstructive.jpg) center center/cover no-repeat'}}>
    <h1>Reconstructive procedures</h1>
    <p>The mouth may require reconstructive surgery due to severe trauma.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is Reconstructive procedures ?</h3>
          <p> The mouth may require reconstructive surgery due to severe trauma. A person may sustain injuries on the cheek, lips, or tongue, or lose one or several teeth. The extent of the surgery depends on the overall damage to the mouth. Working with an oral surgeon is crucial to determine the best solution so you can restore the health and appearance of your mouth in the shortest time possible.
</p>

        </Col>
        <Col md={5}>
          <img src='images/Reconstructive.jpg' alt='Reconstructive.jpg' />
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
      <td className='normal'><Link to='/Surgical-Dental-implants'>Dental implants<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='active'><Link to='/Reconstructive-procedures'>Reconstructive procedures<i className="fas fa-arrow-circle-right"></i></Link></td>
      
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

export default Reconstructiveprocedures