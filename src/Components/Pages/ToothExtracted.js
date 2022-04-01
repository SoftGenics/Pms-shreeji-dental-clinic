import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const ToothExtracted = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/pic.jpg) center center/cover no-repeat'}}>
    <h1>tooth extraction</h1>
    <p>The extraction will depend on the severity of the situation. In most cases, your child’s dentist will numb the area where the tooth will be removed using a local anaesthetic then extract the tooth using forceps.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>How is the tooth extracted?</h3>
          <p>The extraction will depend on the severity of the situation. In most cases, your child’s dentist will numb the area where the tooth will be removed using a local anaesthetic then extract the tooth using forceps. The dentist will pack a gauze pad into the tooth socket to stop bleeding and help the blood clot, and may place a few stitches to close the gum over.</p>
        <p>If your child is having more than one tooth removed or if the tooth is impacted, such as wisdom teeth, the oral surgeon may use a general anaesthetic. If the tooth is impacted, the dental surgeon will cut away gum and bone tissue covering the tooth, and may need to remove the tooth in pieces.</p>
        </Col>
        <Col md={5}>
            
          <img src='images/extraction.jpg' alt='extraction' />
   
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={8}>
            <p>If your child is having more than one tooth removed or if the tooth is impacted, such as wisdom teeth, the oral surgeon may use a general anaesthetic. If the tooth is impacted, the dental surgeon will cut away gum and bone tissue covering the tooth, and may need to remove the tooth in pieces.</p>
      <img src='images/extraction1.jpg' alt=''/>
</Col>
<Col sm={4}>
<Table striped bordered hover size="sm" className='shadow mt-5 side-table'>
  <thead>
    <tr>
      <th>KIDS DENTISTRY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='normal'><Link to='/Tooth-colored-fillings-for-kids'>Tooth colored fillings for kids <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Sealants'>Sealants <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Cleaning-And-Prevention'>Cleaning & Prevention<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='active'><Link to='/Tooth-Extraction'>Tooth Extractions<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Kids-Emergency-Dental'>Emergency Dental Care for Children<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default ToothExtracted