import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './BookingAppointment.css'
function BookingAppointment() {
return (
    <div>
     <section className="appointment" data-stellar-background-ratio="3">
          <div className="container -box">
               <Row>

                    <Col md={6} sm={6} className="side-text">
                    <h1 >Book</h1>
                    <h1>your</h1>
                    <h1>Appointment</h1>
                    <h1>Today</h1>
                    <img src="images/book.webp" alt="booking calendar png"></img>
                    </Col>

                    <Col md={6} sm={6} style={{ boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}} className="form-bg-col">
                         <Form className='form-box'>
                                <div className='text-center d-inline mb-b'>
                                   <h1 className='mb-5 mt-3'>Make an Appointment</h1>
                                </div>
                                   <Row>
                                   <Col md={6} sm={6}>
                                        <Form.Control type="text" className="form-control" name="name" placeholder="Full Name" />
                                   </Col>

                                   <Col md={6} sm={6}>
                                        <Form.Control type="email" className="form-control" name="email"  placeholder="Your Email" />
                                   </Col>
                                    </Row>
                                    <Row>
                                     <Col md={6} sm={6}>
                                     <Form.Label htmlFor="gender">Select Gender</Form.Label>
                                     {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                             inline
                                             label="Male"
                                             name="gender"
                                             type={type}
                                             id={`inline-${type}-1`}
                                             />
                                             <Form.Check
                                             inline
                                             label="Female"
                                             name="gender"
                                             type={type}
                                             id={`inline-${type}-2`}
                                             />
                                             <Form.Check
                                             inline
                                             label="Others"
                                             name="gender"
                                             type={type}
                                             value="others"
                                             id={`inline-${type}-3`}
                                             />
                                        </div>
                                        ))}
                                     </Col>
                                     <Col md={6} sm={6}>
                                        <Form.Select className="form-control" name="department">
                                        <option>Select Your Age</option>
                                             <option>0-18</option>
                                             <option>18-30</option>
                                             <option>30-60</option>
                                             <option>60-80</option>
                                        </Form.Select>
                                     </Col>
                                    </Row>
                                    <Row>
                                   <Col md={6} sm={6}>
                                        <Form.Control type="date" name="date" className="form-control" />
                                   </Col>

                                   <Col md={6} sm={6}>
                                        <Form.Select className="form-control" name="department">
                                             <option>Select Your Teeth Issue</option>
                                             <option>Tooth Cleaning</option>
                                             <option>White Filling</option>
                                             <option>Root Canal Treatment</option>
                                        </Form.Select>
                                   </Col>
                                    </Row>
                                   <Col md={12} sm={12}>
                                        <Form.Control type="tel" className="form-control" name="p_number" placeholder="Phone"/>
                                        <Form.Control as="textarea" className="form-control mb-3" rows="5" name="message" placeholder="You can describe your problem here..."></Form.Control>
                                   </Col>
                              <Row>
                              <Col md={12} sm={12}>
                              <section>
                      <label className="upload-btn btn-md">
                           Any prescription ? &nbsp;&nbsp;
                          <input
                              type="file"
                              hidden
                              className="form-control-file"
                              name="myfile"                         
                              />
                          <svg
                              width="1.5em"
                              height="1.5em"
                              viewBox="0 0 16 16"
                              className="bi bi-folder2-open"
                              fillRule="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              >
                              <path
                                fillRule="evenodd"
                                d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"
                                />
                          </svg>
                        </label>
                      </section>
                                 <button type="submit" className="form-control" id="cf-submit" >Submit Button</button>
                                 </Col>
                              </Row>

                        </Form>
                    </Col>

               </Row>
          </div>
     </section>

    </div>
  )
}

export default BookingAppointment