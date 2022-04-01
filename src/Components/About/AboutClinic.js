import React from 'react'

import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const AboutClinic = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/homebg1.jpg) center center/cover no-repeat'}}>
    <h1>About Dental Clinic</h1>
    <p>SHREEJI MULTISPECIALITY DENTAL CLINIC  Lucknow, Uttar Pradesh 226020</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
     <p>Clinics have a crucial role among healthcare institutions that are organized to provide medication to the people. Shreeji Multispeciality Dental Clinic (rated 3.5 on NiceLocal.in) is properly equipped to grant care in the area of dentistry, to determine the sicknesses and to assure patient's recovery.

Heat and cold sensitivity, dark spots, cracks, yellowing, chipping — these are some of the most worrying symptoms of problems with a person's teeth that can be paired with other oral issues. If you want to fix those, it is advised to seek professional help — and Shreeji Multispeciality Dental Clinic offers it in the form of surgical, basic dentistry. Qualified dentists are able to perform vestibuloplasty, and treat various troubling conditions, such as dental caries, pulpitis and periodontitis.</p>
        </Col>
        <Col md={5}>
            
          <img src='images/homebg1.jpg' alt='shreeji multispeciality dental clinic' />
   
        </Col>
      </Row>
    </Container>
    <Container>
    </Container>
    <Footer />
    </>
  )
}

export default AboutClinic