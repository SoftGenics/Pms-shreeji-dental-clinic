import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './OurServices.css'
function OurServices() {
  return (
    <div>
        <Container fluid className='Ourservices'>
            <Container style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <br></br>
            <h1 className="text-center mt-3">SPECIALITY TREATMENT FOR</h1>
            <Row>
                <Col md={6} lg={4}>
                <div className="item animated wow fadeIn">
                    <Image src='images/general.jpg' />
                    <div className="overlay top-overlay">
                    <div className="text">LAMINATES, R.P.D COMPLETE DENTURE</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div className="item animated wow fadeIn">
                    <Image src='images/cosmetic.jpg' />
                    <div className="overlay top-overlay">
                    <div className="text">TOOTH CLEANING & POLISHING(Scaling)</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div className="item animated wow fadeIn">
                    <Image src='images/surgical.jpg' />
                    <div className="overlay top-overlay">
                    <div className="text">PERIODDONTAL TREATMENT</div>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={4}>
                <div className="item animated wow fadeIn">
                    <Image src='images/pic6.jpg' />
                    <div className="overlay top-overlay">
                    <div className="text">CROWN & BRIDGE (PFM, Noclair, Zirwnia, 3M)</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div className="item animated wow fadeIn">
                    <Image src='images/ortho.jpg' />
                    <div className="overlay top-overlay">
                    <div className="text">ORTHODONTIC TREATMENT</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div className="item animated wow fadeIn">
                    <Image src='images/whitef.jpg' />
                    <div className="overlay top-overlay">
                    <div className="text">TOOTH COLOR FILLINGS</div>
                    </div>
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={4}>
                <div className="item animated wow fadeIn">
                    <Image src='images/homebg.jpg' />
                    <div className="overlay top-overlay">
                    <div className="text">ORAL CANCER DIAGONIS</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div className="item animated wow fadeIn">
                    <Image src='images/wf3.jpg' />
                    <div className="overlay top-overlay">
                    <div className="text">BLEACHING(Whitening of Teeth)</div>
                    </div>
                </div>
                </Col>
                <Col md={6} lg={4}>
                <div className="item animated wow fadeIn">
                    <Image src='images/root.png' />
                    <div className="overlay top-overlay">
                    <div className="text">ROOT CANAL TREATMENT</div>
                    </div>
                </div>
                </Col>
            </Row>
            </Container>
        </Container>
    </div>
  )
}

export default OurServices