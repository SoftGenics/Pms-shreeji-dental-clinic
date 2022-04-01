import React from 'react'
import './Style.css'
import { Container, Row, Col,Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const EmegencyCare = () => {
  return (
    <>
    <div className='general-container container-fluid'  style={{background:'url(images/emergency.jpg) center center/cover no-repeat'}}>
    <h1>EMERGENCY CARE</h1>
    <p>When you’re dealing with a dental problem, your dentist should be your first call. But what if you encounter a problem on a holiday, weekend, or in the middle of the night?</p>
    <Link to='/Book-Online'><button className='btn btn-primary'>BOOK ONLINE</button></Link>
    <div className='overlay'>
        </div>  
    </div>
    <Container className='general-content'>
      <Row>
        <Col md={7}>
          <h3>What Is Considered a Dental Emergency? </h3>
          <p>When you’re dealing with a dental problem, your dentist should be your first call. But what if you encounter a problem on a holiday, weekend, or in the middle of the night? If you’re dealing with a severe dental problem outside normal office hours, you will likely need an emergency dentist or even an emergency room visit. 
</p>
        </Col>
        <Col md={5}>
          <img src='images/emergency.jpg' alt='emergency care' />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={9}>
      <h4 className='text-muted display-6'>9 Common Dental Emergencies </h4>
      <p>If you’re suffering from any of the following common dental emergencies, here’s what you need to know about caring for the problem until you can get to a dentist. </p>
      <ol>
        <li className='display-6'>Unexplainable Toothache </li>
        <p>Toothaches are not just a painful nuisance or something you should take lightly. They are a red flag and your body’s way of telling you that something is not right in your mouth. When you experience a sudden and unexplainable toothache, find a qualified emergency dentist to help diagnose and treat the issue. 
Try applying a cold compress, rinsing with salt water, or using over-the-counter pain medication to help alleviate the discomfort until you can get to your dentist. 
</p>
        <li className='display-6'>Swollen or Bleeding Gums </li>
        <p>Although occasional gum irritation is not a dental emergency, gums that won’t stop bleeding, especially if accompanied by pain and swelling, can indicate an underlying dental or health issue. It is not normal to experience bleeding gums without any obvious cause. See your dentist right away if you’re experiencing these symptoms. 
</p>
        <li className='display-6'>Swollen Jaw or Mouth </li>
        <p>It’s time for an emergency dentist visit for immediate treatment if your mouth or jaw suddenly becomes swollen for no apparent reason. You may have an infection, irritation to your lymph nodes, or some other factor that should be treated right away. 
</p>
        <li className='display-6'>Exposed Nerves </li>
        <p>Exposed nerves are an excruciating experience that will only get worse if you wait to see your dentist. To prevent infections, further nerve damage, or more extensive dental treatments down the road, seek emergency dental assistance as soon as possible. </p>
        <li className='display-6'>Knocked-Out Tooth </li>
        <p>Having a tooth suddenly knocked out of your mouth from a heavy impact can be quite a shock! However, it’s time to take action.  With quick action after a tooth has been knocked out, it’s possible your dentist will be able to reinsert and preserve your tooth. 
Carefully pick up the tooth by the top, taking care not to touch the root, and carefully rinse it without scrubbing. If possible, reinsert the tooth in the socket. If you can’t, place the tooth in a small container of milk and get to the dentist quickly to increase the chances of saving your tooth. 
</p>
        <li className='display-6'>Missing Filling </li>
        <p>Missing a filling is another potential dental emergency because your tooth can easily break or chip without that reinforcement. It may even expose the tooth’s nerves, which can lead to a number of other dental issues that require immediate treatment. </p>
        <li className='display-6'>Broken Crown </li>
        <p>When a dental crown breaks or falls off completely, it leaves your tooth exposed and vulnerable to infection and damage. By scheduling an emergency dental visit to replace the crown, you may be able to avoid needing a root canal, extraction, or other dental procedure. </p>
        <li className='display-6'>Abscessed Tooth </li>
        <p>A dental abscess is a severe and potentially life-threatening condition in which a pocket of pus in the tooth has led to an infection. A tooth abscess may cause fever, tooth sensitivity to hot and cold, a persistent toothache, tender lymph nodes in your neck, swelling in the face, and a pimple-like bump on your gums near the infected tooth. 
This condition is an emergency as the infection can spread into your jaw, surrounding tissue, and other areas of the body. Before you can see the dentist, rinse your mouth with mild salt water several times to reduce the pain and draw the pus to the surface. 
</p>
        <li className='display-6'> Food/Object Lodged Between Teeth 
</li>
        <p>When a piece of food or another object becomes lodged between your teeth and no amount of brushing or flossing will help, you should see your dentist right away. Without a professional to remove the object, it may cause your teeth to shift, gum irritation, tooth decay, or even an infection. 
</p>
      </ol>
</Col>
<Col sm={3}>
<Table striped bordered hover size="sm" className='shadow mt-5 side-table'>
  <thead>
    <tr>
      <th>GENERAL DENTISTRY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='normal '><Link to='/White_Fillings'>White Fillings <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Cleanings-and-exams'>Cleanings & Exams <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='active'><Link to='/Emergency-Care'>Emergency Care <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Root_Canal'>Root Canals <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Porcelain-Crown'>Porcelain Crowns <i className="fas fa-arrow-circle-right"></i></Link></td>
    </tr>
    <tr>
      <td className='normal'><Link to='/Holistic-dentistry'>Holistic Dentistry <i className="fas fa-arrow-circle-right"></i></Link></td>
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

export default EmegencyCare