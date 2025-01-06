import React from "react";
import "../CSS/aboutus.css";

const AboutUs = () => {
    return (
      <section className="about-us">
        <div className="about-us-container">
          
          <div className="about-us-content">
            <h2>About Us</h2>
            <p>
              At <span>Our resturent</span>, we bring people together with flavors 
              that inspire. Our journey is built on passion, quality, and an 
              unforgettable dining experience.
            </p>
          </div>
  
          
          <div className="about-us-images">
            <img
              src="https://i.pinimg.com/736x/cd/5e/34/cd5e34efdfe3d099ead5f38a641fa6ef.jpg"
              alt="Signature Dish"
            />
            <img
              src="https://i.pinimg.com/736x/79/a8/3b/79a83b65d43d8a34804a30e486bfdb52.jpg"
              alt="Modern Ambiance"
            />
            
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;