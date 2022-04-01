import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';

function WorkProgress() {
  return (
    <div>
        <Container style={{marginTop:'15rem'}}>
        <h1 style={{marginTop:'5rem', textAlign:'center', color:'#299AEF'}}><i className="fas fa-bell-slash"/>&nbsp;&nbsp;NO NOTIFICATION YET<br></br></h1>
        <h1 style={{marginTop:'2rem',marginBottom:'2rem', textAlign:'center', color:'#299AEF'}}>We will inform you<br></br>
        <Link to="/" className='btn btn-primary'> Go to Home</Link></h1>
        </Container>
        <Footer />
    </div>
  )
}

export default WorkProgress