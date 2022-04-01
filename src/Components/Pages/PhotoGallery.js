import React from 'react'
import Gallery from 'react-grid-gallery';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
function PhotoGallery() {
    const IMAGES =
[{
        src: "images/homebg.jpg",
        thumbnail: "images/homebg.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
},
{
        src: "images/pic.jpg",
        thumbnail: "images/pic.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Multispecialty", title: "Clinic"}, {value: "Multispecialty", title: "Shreeji"}],
        
},

{
        src: "images/homebg1.jpg",
        thumbnail: "images/homebg1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Multispecialty", title: "Clinic"}, {value: "Multispecialty", title: "Shreeji"}],
},
{
    src: "images/homebg3.jpg",
    thumbnail: "images/homebg3.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Multispecialty", title: "Clinic"}, {value: "Multispecialty", title: "Shreeji"}],
},
{
    src: "images/pic2.jpg",
    thumbnail: "images/pic2.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Shreeji", title: "Clinic"}, {value: "Multispecialty", title: "Shreeji"}],
    
},
{
    src: "images/pic6.jpg",
    thumbnail: "images/pic6.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Shreeji", title: "Clinic"}, {value: "Multispecialty", title: "Shreeji"}],
    
},
{
    src: "images/pic7.jpg",
    thumbnail: "images/pic7.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Shreeji", title: "Clinic"}, {value: "Multispecialty", title: "Shreeji"}],
    
},
{
    src: "images/pic8.jpg",
    thumbnail: "images/pic8.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Shreeji", title: "Clinic"}, {value: "Multispecialty", title: "Shreeji"}],
    
},
{
    src: "images/pic9.jpg",
    thumbnail: "images/pic9.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Shreeji", title: "Clinic"}, {value: "Multispecialty", title: "Shreeji"}],
    
}
]
  return (
      <>
      <div className='container-fluid' style={{marginTop:'15rem'}}>
      <h1 className='mt-3 mb-3 text-center'>OUR PHOTO GALLERY</h1>
       <Gallery images={IMAGES} />,
    <div>
        </div>
    <Container style={{marginTop:'15rem'}}>
    
   
    </Container>
    </div>
    <Footer />
    </>
  )
}

export default PhotoGallery