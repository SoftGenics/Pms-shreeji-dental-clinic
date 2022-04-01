import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const RootCanal = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/rootcanal.jpg) center center/cover no-repeat'}}>
    <h1>ROOT CANAL</h1>
    <p>Our tooth has two main portions: the visible part or the portion of tooth we see in mouth is called crown and the invisible part or buried portion of tooth in the gums and underlying bone is called root of the tooth. Our tooth in the centre has a hollow space filled with soft pulp</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What is RCT or Root Canal Treatment? </h3>
          <p>Our tooth has two main portions: the visible part or the portion of tooth we see in mouth is called crown and the invisible part or buried portion of tooth in the gums and underlying bone is called root of the tooth. Our tooth in the centre has a hollow space filled with soft pulp tissues which carries nerve fibres also. This central soft tissue is protected by an outer hard portion of tooth called dentin and enamel. The central soft pulp tissue communicates through underlying bone and nourishes the tooth. If this pulp tissue gets infected or traumatised by various reasons, the tooth becomes sensitive and painful. With time the pulp infection spreads in the underlying bone and may lead to pain on chewing or pressure, radiating pain in the jaw, face and head on the same side. Slowly this infection damages adjacent bone and forms granuloma, cyst or abscess and may infect adjacent healthy teeth. If untreated, ultimately the patient may lose the tooth. </p>
          <p>Root canal treatment aims to treat this infected pulp tissue by removing infected pulp and filling the canals with artificial filling materials and finally restoring the damaged portion of the tooth. An artificial crown is placed to restore the function, esthetics and physiology of the tooth. </p>
          <img src="images/root2.jpg" alt="root canal treatement" className='image-top image-fluid'></img>
        </Col>
        <Col md={5}>
          <img src='images/rootcanal.jpg' alt='Root Canals' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={9}>
      <h4 className='text-muted display-6 mt-5'>What Causes a Root Canal Infection? </h4>
      <p>A root canal infection can occur for several reasons, though the basic root of the problem is always the penetration of bacteria into the pulp. Reasons for root canal infections are determined by the way the bacteria invades the tooth pulp. In this paragraph, we list the main causes of such an infection. The reasons for root canal infection include: 
</p>
<ul>
    <li>Dental decay (caries) that allows bacteria to penetrate into the pulp and infect it.</li>
    <li>A cracked or damaged tooth, which opens the way for bacteria. </li>
    <li>An avulsed tooth that allows bacteria to penetrate into the pulp. </li>
    <li>Various tooth displacements caused by extrusion, intrusion, or subluxation. </li>
    <li>Sterile necrosis caused by tooth concussion (signs include tooth discoloration or highly calcified canals, which can be identified by x-ray). </li>
    <li>Tooth anatomy abnormality that allows bacteria to infect pulp tissue. </li>
    <li>Repeated dental treatments on the same tooth.</li>
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
      <td className='normal'><Link to='/Cleanings-and-exams'>Cleanings & Exams <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Emergency-Care'>Emergency Care <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='active'><Link to='/Root_Canal'>Root Canals <i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default RootCanal