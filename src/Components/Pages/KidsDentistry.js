import React from 'react'
import './Style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
const KidsDentistry = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/pic.jpg) center center/cover no-repeat'}}>
    <h1>KIDS DENTISTRY</h1>
<p><b>Dentistry for babies </b>is a branch of Pediatric dentistry related to the dental treatment provided to children from birth to around 36 months of age</p>
<Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div> 
    </div>
<Container className='general-content'>
<Row>
  <Col md={7} >
    <h2>What is a Kids Dentistry or Pediatric dentistry</h2>
    <p>Pediatric dentists are dedicated to the oral health of children from infancy through the teen years. They have the experience and qualifications to care for a child’s teeth, gums, and mouth throughout the various stages of childhood.<br></br>
Children begin to get their baby-teeth during the first 6 months of life. By age 6 or 7 years, they start to lose their first set of teeth, which eventually are replaced by secondary, permanent teeth. <br></br>
Without proper dental care, children face possible oral decay ​and disease that can cause a lifetime of pain and complications. <br></br>
Pediatric dentists — the best care for children<br></br>
Children are not just small adults. They are not always able to be patient and cooperative during a dental exam. Pediatric dentists know how to examine and treat children in ways that make them comfortable. In addition, pediatric dentists use specially designed equipment in offices that are arranged and decorated with children in mind.<br></br>
A pediatric dentist offers a wide range of treatment options, as well as expertise and training to care for your child’s teeth, gums and mouth. When your pediatrician suggests that your child receive a dental exam, you can be assured that a pediatric dentist will provide the best possible care.
</p>
  </Col>
  <Col md={4}>
    <img src='images/pic.jpg' alt='General dentistry' style={{height:'70vh'}}></img>
  </Col>
</Row>
<h3>Services offered by Kids dentistry are</h3>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/Toothcoloredkid.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Tooth colored fillings for kids
      </Card.Title>
      <Card.Text>
      With tooth colored fillings for kids, commonly known as composite fillings, modern dentistry has made it feasible to treat cavities discreetly. Pediatric dentists provide composite fillings that will allow kids to keep teeth that have been damaged by cavities in a way that is both functional and attractive.
      </Card.Text>
      <Link to='/Tooth-colored-fillings-for-kids'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/Sealants.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Sealants
      </Card.Title>
      <Card.Text>
      Dental sealants   are thin, plastic coatings painted on the chewing surfaces of the teeth. While they are not substitutes for daily brushing and flossing, dental sealants can prevent cavities from forming..
      </Card.Text>
     <Link to='/Sealants'> <button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/Cleaning-Prevention.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Cleaning & Prevention
      </Card.Title>
      <Card.Text>
      Keeping a regular preventative maintenance schedule with your child’s hygienist and dentist at Care for Kids Pediatric Dentistry helps you prevent not only tooth decay and periodontal disease but also avoid costly procedures and extra time in the hygiene chair.
      </Card.Text>
      <Link to='/Cleaning-And-Prevention'><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
<Row>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/ToothExtractions.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Tooth Extractions
      </Card.Title>
      <Card.Text>
      A baby tooth extraction, or pediatric tooth extraction, is the surgical removal of a primary tooth. A child's tooth may require extraction if it is severely damaged from an injury or decay. These procedures are very common among children.
      </Card.Text>
      <Link to="/Tooth-Extraction"><button className='btn btn-primary'>Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
  <Col md={4}>
    <Card>
      <Card.Img variant="top" src='images/emergency.jpg'></Card.Img>
    <Card.Body>
      <Card.Title>
      Emergency Dental Care for Children
      </Card.Title>
      <Card.Text>
      Although dental injuries and dental emergencies are often distressing for both children and parents, they are also extremely common.  Approximately one third of children have experienced some type of dental trauma, and more have experienced a dental emergency.
      </Card.Text>
      <Link to="/Kids-Emergency-Dental"><button className='btn btn-primary'> Read More</button></Link>
    </Card.Body>
    </Card>
  </Col>
</Row>
</Container>

<Footer />
  </>
  )
}

export default KidsDentistry
