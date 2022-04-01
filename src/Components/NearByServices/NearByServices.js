import React,{useState} from 'react'
import './NearByServices.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import FAQ from '../Faq/Faq'
import '../Faq/Faq.css'
const NearByServices = () => {
    const [faqs, setfaqs] = useState([
        {
          question: 'Do cosmetic treatments improve my oral health?',
          answer: 'While it might seem like every treatment that falls under the umbrella of cosmetic dentistry would only have aesthetic benefits, many can be beneficial to your oral health. Veneers can be placed to protect the teeth of a patient whose enamel has worn thin, dental implants protect your jawbone against bone loss and prevent your teeth from shifting, and crowns help to protect the tooth beneath them from further decay. While there are certainly treatments that are purely aesthetic, no treatment will be harmful to your oral health; after all, cosmetic dentists are concerned with the health of your mouth as well as your confidence in your smile.',
          open: false
        },
        {
          question: 'Is there a fast, simple way to fix the gap in my teeth?  ',
          answer: 'If your smile is straight but you have a gap between two of your teeth, it may seem like too much effort to spend one to three years with braces or Invisalign, as well as a lifetime of wearing retainers at night, in order to close it. Thankfully, there are a couple of ways you can quickly and easily hide the gap. The first is dental bonding, which is a tooth-colored material that is applied to the teeth and buffed until it matches the shininess of your natural teeth. It’s incredibly fast, taking as little as 30 minutes, but it will likely need to be redone every four to eight years. The second method is veneers, which can be placed over your existing teeth to erase the gap. Veneers will take a few visits to complete, but they only need to be replaced every 15 years or so',
          open: false
        },
        {
          question: 'Will my dental insurance pay for cosmetic treatments?',
          answer: 'How much your dental insurance helps with costs and what they cover depends upon the company and what plan you have with them. If a treatment has a restorative purpose, such as a crown or dental bonding, most insurance companies will at least help with the cost. There are cosmetic treatments that most dental insurances will not cover, however, such as teeth whitening treatments and dental implants. This is usually because the companies consider such treatments to be elective cosmetic procedures. The fact that there are so many treatment options for such an array of dental issues is a testament to how far dentistry has come in recent decades. While navigating the complex world of cosmetic dentistry procedures can be daunting at first, most patients can find a treatment that fits their budget while also giving them the desired look or benefit, ensuring that you can walk away from our offices in love with your smile.',
          open: false
        }, 
        {
            question: 'How do I fix chipped or broken teeth?',
            answer: 'If you’ve chipped or broken a tooth, there are several ways that you can fix itsappearance and perhaps protect it from future damage. Minor chips or breaks can be repaired quickly and easily with dental bonding, but larger breaks may need veneers. If you’ve broken the tooth severely, however, it might be best to shave the tooth down and cap it with a crown; this will protect the sensitive root and keep the tooth from further damage. ',
            open: false
          },
          {
            question: 'Can my broken tooth be fixed?',
            answer: 'Yes, as a general dentist we can fix your broken tooth using a variety of dental restorations. This includes using dental veneers, dental crowns, and a bonding procedure. All of these are effective for restoring teeth that have been cracked or chipped. We can discuss the pros and cons of each option with you in detail during an exam and consultation.',
            open: false
          },
          {
            question: 'How can I get rid of sensitive teeth?',
            answer: 'Sensitive teeth can be due to an infection or erosion. If it is an infection, cavities, etc. we can treat the problem and your teeth will start to feel better. If, however, your teeth are sensitive due to erosion that is a more serious problem. Once your enamel has eroded away, it can \'t grow back. You can use a desensitizing toothpaste that will prevent irritation, but this is a temporary solution. We often recommend that you wear dental crowns in order to protect your sensitive teeth and to replace the enamel that has worn away. As a general dentist, we place crowns on a regular basis and would be happy to discuss this procedure with you in detail.',
            open: false
          }
      
      ]);
    
      const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open
          } else {
            faq.open = false;
          }
    
          return faq;
        }))
      }
  return (
    <div>
        <Container fluid className='Resources-container'>
        <Row>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Nearby Resources
                        </Card.Title>
                        <Row>
                            <Col xs={4}>
                            <i className="fas fa-coffee"></i>
                            <p>Coffee</p>
                            </Col>
                            <Col xs={4}>
                            <i className="fas fa-shopping-cart"></i>
                            <p>Shooping</p>
                            </Col>
                            <Col xs={4}>
                            <i className="fas fa-university"></i>
                            <p>Banks</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                            <i className="fas fa-hotel"></i>
                            <p>Hotel</p>
                            </Col>
                            <Col xs={4}>
                            <i className="fas fa-clinic-medical"></i>
                            <p>PHARMACY</p>
                            </Col>
                            <Col xs={4}>
                            <i className="fas fa-taxi"></i>
                            <p>Taxi</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                            <i className="fas fa-gas-pump"></i>
                            <p>Gas</p>
                            </Col>
                            <Col xs={4}>
                            <i className="fas fa-car"></i>
                            <p>AutoMotive</p>
                            </Col>
                            <Col xs={4}>
                            <i className="fas fa-cut"></i>
                            <p>BEAUTY & SPAS</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
    <h1 className='mt-3 text-center'>FAQ</h1>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default NearByServices