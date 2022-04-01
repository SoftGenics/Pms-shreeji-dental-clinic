import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const DentalCrown = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/dentalcrown.jpg) center center/cover no-repeat'}}>
    <h1>DENTAL CROWN</h1>
    <p>A dental crown, also known as a dental cap, fits over a decayed or damaged tooth.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is A Dental Crown?</h3>
          <p><strong>A dental crown,</strong> also known as a dental cap, fits over a decayed or damaged tooth. These crowns can keep a weakened tooth from breaking or be used cosmetically to cover misshapen or severely discoloured teeth. </p>

          <p className='mt-3'>They can also be used to cover other procedures, like root canals, enamel fillings, dental bridges, or dental implants.  
</p>
        </Col>
        <Col md={5}>
          <img src='images/dentalcrown.jpg' alt='dentalcrown.jpg' />
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
      <td className='active'><Link to='/Dental-Crown'>Dental Crown<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default DentalCrown