import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className='about-us-text'>About Us</h3>
          </div>
        </div>
        <div className="about-us-details mt-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <h4 className="about-us-title">Who we are?</h4>
              <p className="about-us-details">Hi! My name is Musfiq Rahman. I am a Web Developer, and I'm very passionate and dedicated to my work. With 05 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
            </div>
            <div className="col-lg-6">
            <h4 className="about-us-title">What we do?</h4>
            <p className="about-us-details">Web designer & developer, with extensive knowledge an years of experience, working in web technologies and delivering quality work. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit provident quaerat blanditiis optio esse a sint cupiditate tempore est accusamus repellat quibusdam aut voluptates, rem neque numquam quam explicabo!</p>
            </div>
            <div className="col-lg-6">
            <h4 className="about-us-title">Privacy policy?</h4>
            <p className="about-us-details">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className="col-lg-6">
            <h4 className="about-us-title">Terms of service?</h4>
            <p className="about-us-details">These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full and without reservation. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.You must be at least 18 [eighteen] years of age to use this website. By using this website and by agreeing to these terms and conditions, you warrant and represent that you are at least 18 years of age.</p>
            <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;