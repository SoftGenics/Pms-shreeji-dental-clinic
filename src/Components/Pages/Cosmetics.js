import React from 'react'
import './Style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
const Cosmetics = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/cosmetic.jpg) center center/cover no-repeat'}}>
    <h1>COSMETIC DENTISTRY</h1>
    <p>Cosmetic dentistry is generally used to refer to any dental work that improves the appearance (though not necessarily the functionality) of teeth, gums and/or bite.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div> 
    </div>
<Container className='general-content'>
<Row>
  <Col md={7} >
    <h2>What is Cosmetic Dentistry ?</h2>
    <p><strong>Cosmetic dentistry </strong>is generally used to refer to any dental work that improves the appearance (though not necessarily the functionality) of teeth, gums and/or bite. It primarily focuses on improvement in dental aesthetics in colour, position, shape, size, alignment and overall smile appearance. Many dentists refer to themselves as "cosmetic dentists" regardless of their specific education, specialty, training, and experience in this field. </p>
    <h4 className='text-muted'>What Does a Cosmetic Dentist Do?</h4>
    <p>A cosmetic dentist is responsible for a variety of procedures — from minor fixes to major surgeries. Here are a few of the cosmetic procedures they offer. </p>
<p className='display-6'>Teeth Whitening</p>
<p>
Teeth whitening is one of the most basic cosmetic dentistry procedures—as well as one of the least expensive. Over time, teeth can become stained from food, drinks, medications, or other habits like <a href='https://en.wikipedia.org/wiki/Smoking'><b>smoking</b></a>. Many people turn to teeth whitening to make their smile brighter.
After teeth have been cleaned of <a href='https://en.wikipedia.org/wiki/Dental_plaque'><b>plaque</b></a>, tartar, and other debris, teeth whitening can bleach the surface of teeth to create a brighter, whiter appearance. While over-the-counter products like toothpaste, rinses, and whitestrips can offer some results, professional tooth whitening can provide a shade up to 5 to 8 times lighter. </p>
  </Col>
  <Col md={4}>
    <img src='images/cosmetic.jpg' alt='General dentistry'></img>
  </Col>
</Row>
<h3>Services offered by Cosmetic Dentistry are</h3>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/cosmetic1.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental Veneers 
      </Card.Title>
      <Card.Text>
      Dental veneers are thin, white shells made from medical-grade porcelain, resin, or ceramic. They’re custom made for each patient to resemble their natural teeth.
      </Card.Text>
      <Link to='/Dental-Veneers'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/dentalcrown.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental Crown
      </Card.Title>
      <Card.Text>
      A dental crown, also known as a dental cap, fits over a decayed or damaged tooth. These crowns can keep a weakened tooth from breaking or be used cosmetically to cover misshapen or severely discoloured teeth. 
      </Card.Text>
     <Link to='/Dental-Crown'> <button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/inlayonlay.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Inlays and Onlays
      </Card.Title>
      <Card.Text>
      Inlays and onlays, also known as indirect fillings, are used when a tooth is too decayed to support a typical filling. These fillings are created in a dental laboratory and bonded in place by a cosmetic dentist.
      </Card.Text>
      <Link to='/Inlays-and-Onlays'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/dentalbonding.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental Bonding
      </Card.Title>
      <Card.Text>
      For dental bonding, the cosmetic dentist applies a moldable resin to the tooth and hardens it with ultraviolet light. Then, they trim, shape, and polish the material to blend into the surface of the tooth. 
      </Card.Text>
      <Link to='/Dental-Bonding'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/dentalimplant.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Dental Implants
      </Card.Title>
      <Card.Text>
      After severe tooth decay or tooth loss, dental implants are used to replace teeth. The cosmetic dentist first attaches a screw to the jaw to provide support.
      </Card.Text>
      <Link to="/Dental-Implants"><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
</Container>

<Footer />
  </>
  )
}

export default Cosmetics