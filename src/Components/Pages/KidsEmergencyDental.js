import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const KidsEmergencyDental = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/pic.jpg) center center/cover no-repeat'}}>
    <h1>Kids Emergency Dental</h1>
    <p>Dental injuries and dental emergencies are often distressing for both children and parents, they are also extremely common.</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What are Emergency Dental Care for Children ?</h3>
          <p>Although dental injuries and dental emergencies are often distressing for both children and parents, they are also extremely common.  Approximately one third of children have experienced some type of dental trauma, and more have experienced a dental emergency.</p>
        <p>There are two peak risk periods for dental trauma - the first being toddlerhood (18-40 months) when environmental exploration begins, and the second being the preadolescent/adolescent period, when sporting injuries become commonplace.</p>
        <p>Detailed below are some of the most common childhood dental emergencies, in addition to helpful advice on how to deal with them.</p>
        </Col>
        <Col md={5}>
          <img src='images/emergency.jpg' alt='emergency.jpg'/>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={8}>
            <h3>Toothache</h3>
            <p>Toothache is common in children of all ages and rarely occurs without cause.  Impacted food can cause discomfort in young children, and can be dislodged using a toothbrush, a clean finger, or dental floss.  If pain persists, contact the pediatric dentist.  Some common causes of toothache include: tooth fractures, tooth decay, tooth trauma, and wisdom teeth eruption (adolescence).</p>
      <img src='images/toothache.jpg' alt='toothache'/>
      <h3>How you can help:</h3>
      <ol>
          <li>Cleanse the area using warm water.  Do not medicate or warm the affected tooth or adjacent gum area.</li>
          <li>Check for impacted food and remove it as necessary.</li>
          <li>Apply a cold compress to the affected area to reduce swelling.</li>
          <li>Contact the pediatric dentist to seek advice.</li>
      </ol>
      <h3>Dental intrusion (tooth pushed into jawbone)</h3>
      <p>Sometimes, dental trauma forces a tooth (or several teeth) upwards into the jawbone.  The prognosis is better for teeth that have been pushed up to a lesser extent (less than 3mm), but every situation is unique.  Oftentimes, the force of the trauma is great enough to injure the tooth’s ligament and fracture its socket.</p>
      <p>If dental intrusion of either the primary or permanent teeth is suspected, it is important to contact the pediatric dentist immediately.  Depending on the nature and depth of the intrusion, the pediatric dentist will either wait for the tooth to descend naturally, or perform root canal therapy to preserve the structure of the tooth.
</p>
<h3>How you can help:</h3>
<ol>
    <li>Place a cold, moist compress on the affected area.</li>
    <li>Offer pain relief (for example, Children’s Tylenol)</li>
    <li>Contact the pediatric dentist immediately.</li>
</ol>
<h3>Crown fracture</h3>
<p>The crown is the largest, most visible part of the tooth.  In most cases, the crown is the part of the tooth that sustains trauma.  There are several classifications of crown fracture, ranging from minor enamel cracks (not an emergency) to pulp exposure (requiring immediate treatment).</p>
<img src='images/crownfracture.jpg' alt='crownfracture'/>
<h3>Root fracture</h3>
<p>A root fracture is caused by direct trauma, and isn’t noticeable to the naked eye.  If a root fracture is suspected, dental x-rays need to be taken.  Depending on the exact positioning of the fracture and the child’s level of discomfort, the tooth can be monitored, treated, or extracted as a worse case scenario.</p>
<img src='images/rootfracture.jpg' alt='rootfracture' style={{height:'80vh'}}/>
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
      <td className='normal'><Link to='/Cleaning-And-Prevention'>Cleaning & Prevention<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Tooth-Extraction'>Tooth Extractions<i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='active'><Link to='/Kids-Emergency-Dental'>Emergency Dental Care for Children<i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default KidsEmergencyDental