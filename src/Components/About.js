import React from 'react';
import fb from './images/fb.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';

const About = () => {
  return (
    <div className='container'>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion"  id="accordionExample">
  <div className="accordion-item" style={{ border: "1px solid #ADD8E6", borderBottom:"1px solid white" }}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={{backgroundColor: "#ADD8E6", color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About the Developer
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Sourav Kumar Gupta,</strong> A learner, Web developer.  Highly motivated, problem solver and strongly believe in making progress over striving for perfection.. Currently in the Second Year of his course, Sourav is passionate about coding and has the working knowledge of different programming languages such as C, C++, Java, HTML, CSS, JavaScript, ReactJS etc.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{ border: "1px solid #ADD8E6", borderBottom:"1px solid white" }}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor: "#ADD8E6", color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Contact Us
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Contact us on:</strong>
        <ul style={{listStyleType: "none", display: "flex"}}>
          <li className='mx-3 my-3'> <img src={fb} alt="fb" /> <a className='mx-1' href="https://www.facebook.com/sourav.kumarguptacse/" target="_blank" rel="noopener noreferrer">Facebook</a> </li>
          <li className='mx-3 my-3'> <img src={instagram} alt="instagram" /> <a className='mx-1' href="https://www.instagram.com/sourav_._g/" target="_blank" rel="noopener noreferrer">Instagram</a> </li>
          <li className='mx-3 my-3'> <img src={linkedin} alt="linkedin" /> <a className='mx-1' href="https://www.linkedin.com/in/sourav-kumar-gupta-18b638200/" target="_blank" rel="noopener noreferrer">LinkedIn</a> </li>
          <li className='mx-3 my-3'> <img src={twitter} alt="twitter" /> <a className='mx-1' href="https://twitter.com/080Cse" target="_blank" rel="noopener noreferrer">Twitter</a> </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{ border: "1px solid #ADD8E6" }}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={{backgroundColor: "#ADD8E6", color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Queries
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Please submit your queries at : </strong>
        <a className='mx-1' href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">souravkumargupta77@gmail.com</a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About