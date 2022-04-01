import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const TeethCleaning = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/cleaning.jpg) center center/cover no-repeat'}}>
    <h1>CLEANING & EXAMS</h1>
    <p>Tooth whitening or tooth bleaching is the process of lightening the colour of human teeth.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>TEETH WHITENING</h3>
          <p><b>Tooth whitening</b> or <b>tooth bleaching</b> is the process of lightening the colour of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons, and can be achieved by changing the intrinsic or extrinsic colour of the tooth enamel.The chemical degradation of the chromogens within or on the tooth is termed as bleaching. </p>
        </Col>
        <Col md={5}>
          <img src='images/cleaning.jpg' alt='white-filling' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={9}>
      <p className='display-6'>Tooth whitening may be undertaken for a variety of reasons, but whitening may also be recommended to some individuals by dental professionals. </p>
      <ul>
        <li>Intrinsic tooth staining </li>
        <li>Aesthetics </li>
        <li>Dental fluorosis  </li>
        <li>Endodontic treatment (internal bleachin </li>
        <li>Tetracycline staining </li>
      </ul>
</Col>
<Col sm={3}>
<Table striped bordered hover size="sm" className='shadow mt-5 side-table'>
  <thead>
    <tr>
      <th>GENERAL DENTISTRY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='normal '><Link to='/White_Fillings'>White Fillings <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='active'><Link to='/Cleanings-and-exams'>Cleanings & Exams <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Emergency-Care'>Emergency Care <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Root_Canal'>Root Canals <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Porcelain-Crown'>Porcelain Crowns <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Holistic-dentistry'>Holistic Dentistry <i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default TeethCleaning
