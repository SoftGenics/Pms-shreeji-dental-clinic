import React from 'react'
import './Style.css'
import { Container, Row, Col,Table, Accordion} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const PORCELAIN = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/PORCELAINCROWN.jpg) center center/cover no-repeat'}}>
    <h1>PORCELAIN CROWN</h1>
    <p>Dental fillings are single or combinations of metals, plastics, glass or other materials used to repair or restore teeth.One of the most popular uses of fillings is to “fill” an area of tooth that your dentist has removed due to decay – “a cavity.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is A Porcelain Crown?</h3>
          <p><b>Porcelain crowns</b>, ceramic crowns, or porcelain teeth, as they are sometimes referred to, are <strong>an option for people who have damaged teeth</strong>. These are custom-made caps or crowns that are bonded to the tooth, fitting over it and restoring the tooth to its original size, strength, and function. 
Are Dental Crowns or Porcelain Crowns Painful? 
</p>
<p>Not with an experienced dentist who has successfully placed many porcelain and dental crowns! 
You will be under local anaesthesia and medicated while your tooth or teeth are prepped for the crown and when the crowns are applied. 
</p>

        </Col>
        <Col md={5}>
          <img src='images/PORCELAINCROWN.jpg' alt='PORCELAINCROWN.jpg' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={9}>
        <p>Once the first appointment is over and the temporary crowns are placed, you may feel some sensitivity in your gums and around the non-permanent crown. 
Upon the placement of the permanent crown you may feel some discomfort (that’s usually described as a small pinch) but the procedure will be performed under local anaesthetics and topical numbing agents will be applied as well. 
After the placement of the permanent crown, you may have some soreness and you will need to stick to soft foods for a while after the crowns are installed, but there should not be any significant or lingering pain.
</p>
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Is a porcelain crown good?</Accordion.Header>
    <Accordion.Body>
    Porcelain or ceramic crowns provide the best and most natural look. They match your surrounding teeth in shape, size, and color. The best option for front teeth restorations. They are biocompatible: that means no metal is used, so they are toxic-free.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How long do porcelain crowns last?</Accordion.Header>
    <Accordion.Body>
    Some can last 25 to 30 years if patients take great care of them. Porcelain crowns specifically last anywhere from 5 to 15 years. The longevity of a crown will depend on many factors, including the wear and tear placed on the crown, a patient's dental habits, and maintenance of the crown with regular dental check-ups
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What is porcelain tooth crown?</Accordion.Header>
    <Accordion.Body>
    What Is A Porcelain Crown? Porcelain crowns, ceramic crowns, or porcelain teeth, as they are sometimes referred to, are an option for people who have damaged teeth. These are custom-made caps or crowns that are bonded to the tooth, fitting over it and restoring the tooth to its original size, strength, and function.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Why are porcelain crowns so expensive?</Accordion.Header>
    <Accordion.Body>
    A. Preparing teeth for the crown requires a lot of knowledge and experience. The entire process is very delicate and requires a lot of attention to details on the part of dentist and a team. It also involves very significant expense for the laboratory fees and supplies.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Why do crowns fail?</Accordion.Header>
    <Accordion.Body>
    Poor Cement Quality – If the cement used by your previous dentist wasn't sufficient or you used over-the-counter cement as a permanent solution, your crown can easily fall off. Unforeseen Stresses – If you clench or grind your teeth often, it can cause the crown to become worn down and change shape over time
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
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
      <td className='normal'><Link to='/White_Fillings'>White Fillings <i className="fas fa-arrow-circle-right"></i></Link></td>
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
      <td className='active '><Link to='/Porcelain-Crown'>Porcelain Crowns <i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default PORCELAIN