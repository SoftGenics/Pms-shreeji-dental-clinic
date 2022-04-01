import React from 'react'
import './Style.css'
import { Container, Row, Col, Card,Accordion, Image } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
const Surgical = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/surgical.jpg) center center/cover no-repeat'}}>
    <h1>SURGICAL DENTISTRY</h1>
    <p>Surgical dentistry involves diagnosing and treating various oral health issues. Most procedures can be done on an outpatient basis and don’t require long downtime.
</p>
<Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div> 
    </div>
<Container className='general-content'>
<Row>
  <Col md={7} >
    <h2>What is surgical dentistry?</h2>
    <p>Surgical dentistry involves diagnosing and treating various oral health issues. Most procedures can be done on an outpatient basis and don’t require long downtime.<br></br>
One common example of dental surgery is tooth extraction. If you’re a potential candidate for dental surgery, your General Dentist may refer you to an oral surgeon.<br></br>
Your dentist evaluates your condition and prepares an individualised treatment plan. Sometimes surgery is required not because of oral health diseases, but due to an accident or severe dental trauma.<br></br>
Before proceeding with any surgery, your dentist walks you through the process and potential risks. Here at Happy Sapiens Dental, we talk about how we can make your experience more comfortable so you can receive the care you need with ease.

</p>
  </Col>
  <Col md={4}>
    <img src='images/general2.jpg' alt='General dentistry'></img>
  </Col>
</Row>
<h3>Different types of dental surgeries</h3>
<p className='display-6'>Here are some of the most common types of dental surgeries.</p>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/Rootcanaltherapy.jpeg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Root canal therapy
      </Card.Title>
      <Card.Text>
      Root canal treatments are done to save natural teeth. The procedure can be completed in a single dental visit.
      </Card.Text>
      <Link to='/Root-Canal-Therapy'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/Wisdom-Teeth-Removal.jpeg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Wisdom tooth extraction
      </Card.Title>
      <Card.Text>
      Wisdom tooth extraction is recommended if there’s not enough room to accommodate the tooth or teeth..
      </Card.Text>
     <Link to='/Wisdom-Tooth-Extraction'> <button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/the-Difference-Between-Dental-Implants-and-Dental-Bridges.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental implants
      </Card.Title>
      <Card.Text>
      A dental implant offers a permanent solution to one or several missing teeth. It uses a titanium screw to replace the roots..
      </Card.Text>
      <Link to='/Surgical-Dental-implants'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/Reconstructive.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Reconstructive procedures
      </Card.Title>
      <Card.Text>
      A dental implant offers a permanent solution to one or several missing teeth. It uses a titanium screw to replace the roots..
      </Card.Text>
      <Link to='/Reconstructive-procedures'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={8}>
  <Accordion className='mt-3 shadow'>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Do I need dental surgery?</Accordion.Header>
    <Accordion.Body>
    If you see irregularities in or around your mouth, book an appointment with your dentist to see if immediate attention or any treatment is required. If your dentist suspects you may need dental surgery, they may refer you to an oral surgeon.<br></br>
Both General Dentists and Oral Surgeons work on the teeth and their roles may overlap at times. But usually, dentists perform common dental procedures while oral surgeons take care of highly specialised, complex, or rare cases.
<Image src="images/surgical1.jpg"/>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  </Col>
</Row>
</Container>

<Footer />
  </>
  )
}

export default Surgical