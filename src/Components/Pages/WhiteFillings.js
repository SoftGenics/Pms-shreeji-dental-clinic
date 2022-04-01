import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const WhiteFillings = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/whitefilling.jpg) center center/cover no-repeat'}}>
    <h1>WHITE FILLING </h1>
    <p>Dental fillings are single or combinations of metals, plastics, glass or other materials used to repair or restore teeth.One of the most popular uses of fillings is to “fill” an area of tooth that your dentist has removed due to decay – “a cavity.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What are dental fillings?</h3>
          <p><b>Dental fillings</b> are single or combinations of metals, plastics, glass or other materials used to repair or restore teeth. One of the most popular uses of fillings is to “fill” an area of tooth that your dentist has removed due to decay – “a cavity.” Fillings are also used to repair cracked or broken teeth and teeth that have been worn down from misuse (such as from nail-biting or tooth grinding).</p>
        </Col>
        <Col md={5}>
          <img src='images/whitefilling.jpg' alt='white-filling' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={9}>
      <h4 className='text-muted display-6'>What materials are dental fillings made from?</h4>
      <h3>Dental filling materials include: </h3>
      <ul>
        <li>Gold</li>
        <li>Porcelain.</li>
        <li>Silver amalgam (contains mercury mixed with silver, tin, zinc, and copper). </li>
        <li>Tooth-colored, plastic and glass materials called composite resin fillings. </li>
      </ul>
      <h4 className='text-muted display-6'>What steps are involved in filling a tooth? </h4>
      <p >First, your dentist will numb the area around the tooth to be worked on with a local anaesthetic. Next, a drill, air abrasion instrument or laser will be used to remove the decayed area. The choice of instrument depends on your dentist's comfort level, training, and investment in the particular piece of equipment as well as location and extent of the decay. 
Next, your dentist will probe or test the area during the decay removal process to determine if all the decay has been removed. Once the decay has been removed, your dentist will prepare the space for the filling by cleaning the cavity of bacteria and debris. If the decay is near the root, your dentist may first put in a liner made of glass ionomer, composite resin, or other material to protect the nerve. Generally, after the filling is in, your dentist will finish and polish it. 
Several additional steps are required for tooth-colored fillings and are as follows. After your dentist has removed the decay and cleaned the area, the tooth-colored material is applied in layers. Next, a special light that “cures” or hardens each layer is applied. When the multilayering process is completed, your dentist will shape the composite material to the desired result, trim off any excess material and polish the final restoration. 
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
      <td className='active '><Link to='/White_Fillings'>White Fillings <i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default WhiteFillings