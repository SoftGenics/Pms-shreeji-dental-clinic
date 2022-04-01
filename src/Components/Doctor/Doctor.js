import React from 'react'
import './Doctor.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
const Doctor = () => {
  return (
    <div className='doctor' id="doctor">
        <h1>About Doctor</h1>
        <Container className='doctor-conatiner'>
            <Card>
                <Row>
                    <Col md={5} className="doctor-wrapper">
                    <Card.Img variant="top" src="images/doc.jpg" />
                    </Col>
                    <Col md={7} className="doctor-wrapper">
                    <Card.Title>Dr. Gaurav Naresh</Card.Title>
                    <Card.Text><b>B.D.S, M.I.D.A</b></Card.Text>
                    <Card.Text>----------------------------------</Card.Text>
                    <p>Mob: +91 7800230430</p>
                    <p>E-mail: gauravmehrotra906@gmail.com</p>
                    <p><b>Clinic: B-104/6, Nirala Nagar, Lucknow</b></p>
                    <Card.Text>---------------------------------</Card.Text>
                    </Col>
                </Row>
            </Card>
        </Container>
    </div>
  )
}

export default Doctor