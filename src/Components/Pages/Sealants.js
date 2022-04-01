import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Sealants = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/pic.jpg) center center/cover no-repeat'}}>
    <h1>sealants</h1>
    <p>Dental sealants   are thin, plastic coatings painted on the chewing surfaces of the teeth. While they are not substitutes for daily brushing and flossing, dental sealants can prevent cavities from forming. </p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>WHAT ARE DENTAL SEALANTS?</h3>
          <p>Dental sealants   are thin, plastic coatings painted on the chewing surfaces of the teeth. While they are not substitutes for daily brushing and flossing, dental sealants can prevent cavities from forming. </p>
          <h3>HOW DO THEY WORK?</h3>
          <p>Dental sealants work as their name implies — they seal and help protect the teeth. Dentists place them over the grooved and pitted areas that exist in premolars and molars. Sometimes, the grooves in these teeth are narrower than a single toothbrush bristle, making them quite challenging to clean, especially for children. In addition, without regular, thorough brushing, plaque forms on the surface of the teeth, and over time, it creates a small hole known as a cavity. Once applied, dental sealants add an extra layer of protection over these hard-to-brush areas by creating a smooth surface to keep food out and your child’s teeth cavity-free.  </p>
          <p>The  dental sealants can also be placed over cavities in their early stages to help stop the tooth decay process. Since they are clear, your dentist can still view what is going on inside the tooth even after the dental sealants are applied. </p>
        </Col>
        <Col md={5}>
            
          <img src='images/sealants.jpg' alt='Toothcoloredkid.jpg' />
   
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={8}>
        <h3>Types of Dental Sealants</h3>
            <p>Sealants can consist of glass ionomer or composite resin. Glass ionomers undergo an acid-base reaction as they set on teeth. This coating material also releases fluoride, which helps strengthen tooth enamel for many years. While fluoride will help increase enamel’s health and strength, it has a lower retention rate than composite resin and will require more upkee</p>
            <p>Sealants can consist of glass ionomer or composite resin. Glass ionomers undergo an acid-base reaction as they set on teeth. This coating material also releases fluoride, which helps strengthen tooth enamel for many years. While fluoride will help increase enamel’s health and strength, it has a lower retention rate than composite resin and will require more upkee</p>
      <img src='images/sealants1.jpg' alt='sealants'/>
      <h3>The Placement Process</h3>
          <p>The process of applying dental sealants is relatively fast and painless. Before we can apply the sealant, we must clean the patient’s tooth with a polishing brush and gritty toothpaste. The tooth is then dried and isolated from the tongue and cheeks to shield them from any saliva.</p>
          <p>An etching solution disinfects the tooth and prepares it for better sealant adherence. After the tooth is rinsed and dried again, we will paint a thin bonding layer, followed by the sealant. A special curing light hardens and bonds the sealant to the tooth. Sealing each tooth only takes about one minute.</p>
          <img src='images/sealants2.jpg' alt='sealants'/>
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
      <td className='active'><Link to='/Sealants'>Sealants <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Cleaning-And-Prevention'>Cleaning & Prevention<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default Sealants