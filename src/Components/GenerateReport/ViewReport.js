import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap'
import './GenerateReport.css'
function ViewReport(){
  const [GetData, SetPost] = useState([]);
  const {id}  = useParams();
  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await axios.get(`https://backend.softgenics.in/api/report/${id}`);
      SetPost(res.data)
    }
    fetchPosts();
  })
  return (
    <div>
      {GetData.map((getdata) =>{
            return(
      <Container className='viewReport'>
        <Container className='report-container'>
              <Row className='row1'>
                <Col xs={6} className='first-col'>
                  <img src='/images/teeth.png' alt='teeth' ></img>
                  <h2> Dr. Gaurav Naresh</h2>
                  <p>B.D.S., M.I.D.A.</p>
                  <p>Mob. +91 7800230430</p>
                  <p style={{marginLeft:'0rem'}}><strong>Timing:</strong> Morn. 9.30 a.m. to 1.30 p.m.<br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Evn. 5:00 p.m. to /9:00 p.m</p>
                  <p style={{marginLeft:'0rem'}}><strong>TUESDAY / SATURDAY & SUNDAY ONLY BY APPOINTMENT</strong></p>
                </Col>
               
                <Col xs={6} className='sec-col'>
                  <p className='reg'>Reg. No. : 14684</p>
                  <h1>Shreeji</h1>
                  <p className='t-dic'>Multispeciality &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dental Clinic</p> 
                  <br></br>
                  <p className='t-dic2'><strong>Clinic : </strong>B-104/6, Niral Nagar, Lucknow</p>
                  <p className='t-dic2'>Email : gauravmehrotra906@gmail.com</p>
                  </Col>
              </Row>
              <Row>
                <Col xs={3} className='col-left'>
                  <h3> FACILITIES </h3>
                  <br></br>
                  <ul>
                    <li>Root Canal Treatement</li>
                    <li>Tooth Coloured Fillings</li>
                    <li>Tooth Cleanings & Polishing(Scaling)</li>
                    <li>Periodontal Treatement</li>
                    <li>orthodontal Treatement</li>
                    <li>Crown & Bridges (PFM, Noclair, Zirwnia, 3M)</li>
                    <li>Laminates, R.P.D Complete Dentaure</li>
                    <li>Bleaching (Whitening of Teeth)</li>
                    <li>Oral Cancer Diagnosis & Treatement</li>

                  </ul>
                </Col>
                <Col xs={9} className='col-right'>
                  
                  <p>Name :<span>{getdata.name}</span> Age: <span>{getdata.age}</span> Sex: <span>{getdata.sex}</span> Date: <span>{getdata.date}</span></p>
                  <h2>O/E</h2>
                  <p>{getdata.disc}</p>
                  </Col>
              </Row>
              <Container fluid className='row2'>
                <h4>NOT FOR MEDICO-LEGAL PURPOSE</h4>
              </Container>
        </Container>
        
        <Link to={`/print/${getdata.id}`}  style={{textAlign:'Right', float:'right',fontSize:'30px'}}><i className="fas fa-print"></i> print</Link>
      </Container>
         )
        }
    )
 }
 
    </div>
  )
}

export default ViewReport;