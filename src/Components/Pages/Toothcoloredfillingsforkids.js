import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Toothcoloredfillingsforkids = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/pic.jpg) center center/cover no-repeat'}}>
    <h1>Tooth colored fillings for kids</h1>
    <p>With tooth colored fillings for kids, commonly known as composite fillings, modern dentistry has made it feasible to treat cavities discreetly.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>Tooth colored fillings for kids</h3>
          <p>With tooth colored fillings for kids, commonly known as composite fillings, modern dentistry has made it feasible to treat cavities discreetly. Pediatric dentists provide composite fillings that will allow kids to keep teeth that have been damaged by cavities in a way that is both functional and attractive.</p>
        </Col>
        <Col md={5}>
          <img src='images/Toothcoloredkid.jpg' alt='Toothcoloredkid.jpg' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={8}>
      <p >If a child has cavities, they may require pediatric fillings. Many cavities are difficult to notice and are asymptomatic, while some are visible and cause discomfort. As part of the child's normal biannual exam, the dentist will take x-rays to determine whether or not the youngster requires a filling. All children should have a professional dental exam twice a year with a pediatric dentist. Regular examinations help detect tooth decay in its early stages when it is most treatable. Regular cleanings and dental sealants can also assist in preventing the occurrence of cavities. </p>
      <img src='images/toothcoloredkid1.jpg' alt='tooth colored filled'/>
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
      <td className='active'><Link to='/Tooth-colored-fillings-for-kids'>Tooth colored fillings for kids <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Sealants'>Sealants <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Cleaning-And-Prevention'>Cleaning & Prevention<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Tooth-Extraction'>Tooth Extractions<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default Toothcoloredfillingsforkids