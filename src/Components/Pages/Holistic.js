import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const Holistic = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/Holistic.jpg) center center/cover no-repeat'}}>
    <h1>HOLISTIC DENTISTRY</h1>
    <p>Holistic dentistry is an alternative to traditional dental care. It’s a form of complementary and alternative medicine. 
</p>
<Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>HOLISTIC DENTISTRY</h3>
          <p>Holistic dentistry is an alternative to traditional dental care. It’s a form of complementary and alternative medicine. <br></br>
In recent years, this type of dentistry has grown in popularity. Many people are attracted to its holistic approach, along with its use of more natural remedies. <br></br>
Essentially, holistic dentists are general dentists who use holistic techniques. Some may combine these techniques with conventional methods. But overall, their approach to oral care involves alternative treatments.
</p>
<img src="images/holistic1.jpg" alt='holistic1' style={{width:'400px'}}></img>
        </Col>
        <Col md={5}>
          <img src='images/Holistic.jpg' alt='Holistic.jpg' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={9}>
      <h4 className='text-muted display-6'>What is holistic dentistry? </h4>
      <h3>Holistic dentistry is a form of dental medicine. It’s also known as: </h3>
      <ul>
        <li>alternative dentistry </li>
        <li>natural dentistry </li>
        <li>Sunconventional dentistry </li>
        <li>biocompatible dentistry  </li>
        <li>progressive dentistry </li>
        <li>integrative dentistry </li>
      </ul>
      <p >This type of dentistry approaches oral care from a holistic perspective. It considers how oral health affects the whole body, and vice versa. 
Therefore, holistic dentistry treats oral problems by focusing on all aspects of health. This includes your physical, emotional, and spiritual health. 
</p>
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
      <td className='normal'><Link to='/Cleanings-and-exams'>Cleanings & Exams <i className="fas fa-arrow-circle-right"></i></Link></td>
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
      <td className='active'><Link to='/Holistic-dentistry'>Holistic Dentistry <i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default Holistic