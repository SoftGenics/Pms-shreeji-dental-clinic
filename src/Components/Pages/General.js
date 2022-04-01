import React from 'react'
import './Style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const General = () => {
  return (
      <>
    <div className='general-container container-fluid'>
    <h1>GENERAL DENTISTRY</h1>
    <p>General dentists prevent, evaluate, diagnose, and treat diseases of the oral cavity, as well as maintain the function and appearance of the teeth. Many oral diseases and abnormalities can indicate other diseases. A general dentist may refer patients to their physician or a specialist for further evaluation, or vice versa for treatment.
</p>
<Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div> 
    </div>
<Container className='general-content'>
<Row>
  <Col md={7} >
    <h2>What is a General Dentist?</h2>
    <p><strong>G</strong>eneral dentists prevent, evaluate, diagnose, and treat diseases of the oral cavity, as well as maintain the function and appearance of the teeth. Many oral diseases and abnormalities can indicate other diseases. A general dentist may refer patients to their physician or a specialist for further evaluation, or vice versa for treatment.
Our residents come from all parts of the world, bringing you a global expertise coupled with the cutting edge research and knowledge of the University of Rochester Medical Center. There is no dental concern too small or large for the professionals at Eastman Dental's General Dentistry Division.
</p>
  </Col>
  <Col md={4}>
    <img src='images/general2.jpg' alt='General dentistry'></img>
  </Col>
</Row>
<h3>Services offered by general dentist are :</h3>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/cleaning.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      CLEANING & EXAMS
      </Card.Title>
      <Card.Text>
      Tooth whitening or tooth bleaching is the process of lightening the colour of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons, and can be achieved by changing the intrinsic or extrinsic colour of the tooth enamel. 
      </Card.Text>
      <Link to='/Cleanings-and-exams'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/whitefilling.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      WHITE FILLING
      </Card.Title>
      <Card.Text>
      Dental fillings are single or combinations of metals, plastics, glass or other materials used to repair or restore teeth. One of the most popular uses of fillings is to “fill” an area of tooth that your dentist has removed due to decay – “a cavity.” Fillings are also used to repair cracked or broken..
      </Card.Text>
     <Link to='/White_Fillings'> <button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/rootcanal.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Root Canal Treatment
      </Card.Title>
      <Card.Text>
      Our tooth has two main portions: the visible part or the portion of tooth we see in mouth is called crown and the invisible part or buried portion of tooth in the gums and underlying bone is called root of the tooth. Our tooth in the centre has a hollow space filled with soft pulp
      </Card.Text>
      <Link to='/Root_Canal'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/emergency.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      EMERGENCY CARE 
      </Card.Title>
      <Card.Text>
      When you’re dealing with a dental problem, your dentist should be your first call. But what if you encounter a problem on a holiday, weekend, or in the middle of the night? If you’re dealing with a severe dental problem outside normal office hours, you will likely need an emergency dentist or even an emergency room visit. 
      </Card.Text>
      <Link to="/Emergency-Care"><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/PORCELAINCROWN.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      PORCELAIN CROWN 
      </Card.Title>
      <Card.Text>
      What Is A Porcelain Crown? Porcelain crowns, ceramic crowns, or porcelain teeth, as they are sometimes referred to, are an option for people who have damaged teeth. These are custom-made caps or crowns that are bonded to the tooth, fitting over it and restoring the tooth to its original size, strength, and function.
      </Card.Text>
      <Link to="/Porcelain-Crown"><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/Holistic.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      HOLISTIC DENTISTRY
      </Card.Title>
      <Card.Text>
      Holistic dentistry is an alternative to traditional dental care. It’s a form of complementary and alternative medicine. 
In recent years, this type of dentistry has grown in popularity. Many people are attracted to its holistic approach, along with its use of more natural remedies.Essentially, holistic dentists are general dentists..

      </Card.Text>
      <Link to="/Holistic-dentistry"><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
</Container>

<Footer />
  </>
  )
}

export default General