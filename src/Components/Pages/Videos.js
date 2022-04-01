import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import Iframe from 'react-iframe'
function Videos() {
  return (
    <div>
      <Container>
      <Iframe src="videos/1.mp4"
      width="100%"
      height="450px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
    <Row>
      <Col md={3} style={{padding:'10px'}}>
      <Iframe src="videos/2.mp4"
      width="100%"
      height="450px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
      </Col>
      <Col md={3} style={{padding:'10px'}}>
      <Iframe src="videos/3.mp4"
      width="100%"
      height="450px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
      </Col>
      <Col md={3} style={{padding:'10px'}}>
      <Iframe src="videos/4.mp4"
      width="100%"
      height="450px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"/>
      </Col>
      <Col md={3} style={{padding:'10px'}}>
      <Iframe src="videos/5.mp4"
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

export default Videos