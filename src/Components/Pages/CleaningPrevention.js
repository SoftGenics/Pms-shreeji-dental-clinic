import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const CleaningPrevention = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/pic.jpg) center center/cover no-repeat'}}>
    <h1>Cleaning & Prevention</h1>
    <p>Keeping a regular preventative maintenance schedule with your child’s hygienist and dentist at Care for Kids Pediatric Dentistry</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What is Cleaning & Prevention ?</h3>
          <p>Keeping a regular preventative maintenance schedule with your child’s hygienist and dentist at Care for Kids Pediatric Dentistry helps you prevent not only tooth decay and periodontal disease but also avoid costly procedures and extra time in the hygiene chair.</p>
        <p>A regular home prevention routine usually consists of brushing at least twice a day and flossing at least once per day. But did you know there are other tools to make taking care of your child’s mouth a little easier? Depending on their needs, there are special kinds of toothpaste, rinses, and even flossing aids that can help you keep their smile bright and healthy for years to come. Care for Kids Pediatric Dentistry can help you and your child find the best tools to enhance your daily hygiene routine making your child’s professional cleaning appointments shorter and less stressful.</p>
        </Col>
        <Col md={5}>
            
          <img src='images/Cleaning-Prevention.jpg' alt='Cleaning-Prevention.jpg' />
   
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={8}>
            <p>Another significant factor in your child’s oral health is their diet. Acidic foods and drinks can erode enamel just as a balanced diet can help keep their teeth and gums strong and healthy.</p>
      <img src='images/Cleaning-Prevention1.jpg' alt='sealants'/>
  <p>Regular professional exams and cleanings, a dedicated at-home hygiene routine, and a healthy, balanced diet can help prevent minor issues from becoming major procedures.</p>
          <img src='images/Cleaning-Prevention2.jpg' alt='sealants'/>
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
      <td className='normal'><Link to='/Tooth-colored-fillings-for-kids'>Tooth colored fillings for kids <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Sealants'>Sealants <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='active'><Link to='/Cleaning-And-Prevention'>Cleaning & Prevention<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default CleaningPrevention