import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const WisdomToothExtraction = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/Wisdom-Teeth-Removal.jpeg) center center/cover no-repeat'}}>
    <h1>Wisdom tooth extraction</h1>
    <p>Wisdom tooth extraction is recommended if there’s not enough room to accommodate the tooth or teeth, which can lead to impaction and issues associated with it.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is Wisdom tooth extraction ?</h3>
          <p>Wisdom tooth extraction is recommended if there’s not enough room to accommodate the tooth or teeth, which can lead to impaction and issues associated with it. Wisdom tooth extraction is an outpatient procedure, and you can go home right after. However, resting for a few days is necessary before resuming normal activities.
</p>

        </Col>
        <Col md={5}>
          <img src='images/Wisdom-Teeth-Removal.jpeg' alt='Wisdom-Teeth-Removal.jpeg' />
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
      <td className='active'><Link to='/Wisdom-Tooth-Extraction'>Wisdom tooth extraction<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default WisdomToothExtraction