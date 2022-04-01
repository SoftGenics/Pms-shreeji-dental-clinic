import React from 'react'
import ImageSlider from "react-image-comparison-slider";
import './SmileTransformation.css'
const SmileTransformation = () => {
  return (
      <div className='ImageComapre'>
    <h1>OUR SMILE TRANSFORMATION</h1>
    <div className="ImageComapreBg">
    
        <div className="ImageComapreBg-card-grid">
        <div className="ImageComapreBg-card">
        <div style={{ width: 400, height: 250 }}>
        <ImageSlider
        image1="images/1.jpg"
        image2="images/b1.JFIF"
        onSlide={() => {
        console.log("sliding");
        }}
    />
</div>
        </div>
        <div className="ImageComapreBg-card">
        <div style={{ width: 400, height: 250 }}>
        <ImageSlider
        image1="images/af1.jpg"
        image2="images/bf1.jpg"
        onSlide={() => {
          console.log("sliding");
        }}
    />
</div>
        </div>
        <div className="ImageComapreBg-card">
        <div style={{ width: 400, height: 250 }}>
        <ImageSlider
        image1="images/af2.jpg"
        image2="images/bf2.jpg"
        onSlide={() => {
        console.log("sliding");
        }}
    />
</div>
        </div>
        <div className="ImageComapreBg-card">
        <div style={{ width: 400, height: 250 }}>
        <ImageSlider
        image1="images/af3.jpg"
        image2="images/bf3.jpg"
        onSlide={() => {
          console.log("sliding");
        }}
    />
</div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default SmileTransformation