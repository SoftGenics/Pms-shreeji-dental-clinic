import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './Reviews.css'
const Reviews = () => {

  return (
  <div className='testimonial-container' id="review">
      <h1>PATIENTS REVIEWS</h1>
    <Carousel variant="dark">
    <Carousel.Item interval={1000} className>
            <Card className="text-center testimonial-container-card">
            <Card.Img  src="images/av4.png" className='testimonial-container-img' />
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'#299AEF'}}>_Prashant</span> Srivastav</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
            </div>
            <i className="fas fa-quote-left"/>
            <Card.Text className='testimonial-container-description'>
            The services that I receive from <b>(Shreeji Multispeciality Dental clinic)</b> is excellent. <b>Dr. Gaurav Naresh</b> and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.
            </Card.Text>
            <i className="fas fa-quote-right" ></i>
        </Card.Body>
        </Card>
    </Carousel.Item>
    <Carousel.Item interval={1000} className>
            <Card className="text-center testimonial-container-card">
            <Card.Img  src="images/av3.jpg" className='testimonial-container-img' />
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'#299AEF'}}>_Priyanka</span> Kumari</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            </div>
            <i className="fas fa-quote-left"/>
            <Card.Text className='testimonial-container-description'>
            Wonderful experience with (Shreeji Multispeciality Dental clinic). <b>Dr. Gaurav Naresh</b> was a wonderful surgeon, and the staff was always helpful and kind.
            </Card.Text>
            <i className="fas fa-quote-right" ></i>
        </Card.Body>
        </Card>
    </Carousel.Item>
    <Carousel.Item interval={1000} className>
            <Card className="text-center testimonial-container-card">
            <Card.Img  src="images/av3.jpg" className='testimonial-container-img' />
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'#299AEF'}}>_Neelam</span> Kumari</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            </div>
            <i className="fas fa-quote-left"/>
            <Card.Text className='testimonial-container-description'>
            Great medical office, wonderful and warm experience from start to finish. Appreciate <b>Dr. Gaurav Naresh</b> taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.
            </Card.Text>
            <i className="fas fa-quote-right" ></i>
        </Card.Body>
        </Card>
    </Carousel.Item>
    <Carousel.Item interval={1000} className>
            <Card className="text-center testimonial-container-card">
            <Card.Img  src="images/av1.jpg" className='testimonial-container-img' />
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'#299AEF'}}>_Rishav</span> Kumar</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            </div>
            <i className="fas fa-quote-left"/>
            <Card.Text className='testimonial-container-description'>
            <b>Dr. Gaurav Naresh</b> is incredible. Not only has she taken great care of my health, but also she is lovely to speak with at every appointment.
            </Card.Text>
            <i className="fas fa-quote-right" ></i>
        </Card.Body>
        </Card>
    </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Reviews