import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Iframe from 'react-iframe'
import './OfficeInfo.css'

function OfficeInfo() {
  return (
    <div>
        <Container fluid className="officeinfo-container">
            <Row>
                 <Col md={6}>
                     <Container >
                        <h2>CLINIC INFORMATION</h2>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-phone-alt"></i>&nbsp;Phone:&nbsp;<a href='tel: +917800230430'style={{color:'rgb(243, 40, 13)', textDecoration:'none'}} > +91 7800230430</a><br></br>
                        </div>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-clock"></i>&nbsp;&nbsp;TIMINGS:
                        </div>
                        <div className=' mt-3 mb-5 office-info-section'>
                        <p>Morning: 9:30 A.M,- 1:30 P.M&nbsp;</p>
                        <p>Evening: 5:00 P.M. - 9:00 P.PM.&nbsp;</p>
                        <p><b>TUESDAY / SATURDAY & SUNDAY ONLY BY APPOINTMENT</b>.</p>
                        </div> 
                     </Container>
                </Col>
                <Col md={6}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8777.981019701243!2d80.93807611827926!3d26.87823615993613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x811a37320be57cb5!2sShreeji%20Multispeciality%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1648535432777!5m2!1sen!2sin"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                </Col>
            </Row>

        </Container>
        
    </div>
  )
}

export default OfficeInfo
