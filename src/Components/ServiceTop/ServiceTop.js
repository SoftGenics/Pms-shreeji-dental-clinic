import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './ServiceTop.css'
import { Link } from 'react-router-dom'
const ServiceTop = () => {
  return (
    <div>
        <Container className='servicetop'>
        <Row>
            <Col lg={3} className="servicetop-wrapper">
            <Link to="/General-dentistry"><Card >
            <i className="fas fa-tooth"></i>
                <Card.Body>
                    <Card.Title>General Dentistry</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col lg={3} className="servicetop-wrapper">
            <Link to="/Cosmetics-dentistry"><Card >
            <i className="fas fa-teeth"></i>
                <Card.Body>
                    <Card.Title>Cosmetic dentistry</Card.Title>

                </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col lg={3} className="servicetop-wrapper">
            <Link to="/Surgical"><Card >
            <i className="fas fa-teeth-open"></i>
                <Card.Body>
                 <Card.Title>Surgical dentistry</Card.Title>

                </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col lg={3} className="servicetop-wrapper">
            <Link to="/Kids-dentistry"><Card >
            <i className="fas fa-child"></i>
                <Card.Body>
                    <Card.Title>KIDS DENTISTRY</Card.Title>
                </Card.Body>
                </Card>
                </Link>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ServiceTop
