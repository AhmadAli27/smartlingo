import React from 'react'
import '../css/App.css';
import { Link } from 'react-router-dom';
import laptopMockup from "../img/Laptop-03.png"
import openaiLogo from "../img/OpenAI.png"
import googleLogo from "../img/google.png"

const Landing = () => {
  return (
    <div className="content">
      <div className="navbar">
        <div className="logo">
          <a href="/" className="logo-text">SmartLingo</a>
        </div>
        <nav>
          <ul>
            <li><Link to="/translate">Use it for free!</Link></li>
          </ul>
        </nav>
      </div>

      <div className="hero">
        <div className="hero-text">
          <h2 className="hero-text-title">SmartLingo</h2>
          <h2 className="hero-text-subtitle">AI powered translator</h2>
          <Link to="/translate" className="cta-btn">
            <span>Use it for free</span>
            <i className='fa-solid fa-arrow-right'></i>
          </Link>
        </div> 

        <div className="hero-img">
          <img src={laptopMockup} alt="" />
        </div>
      </div>

      <div className="openai">
        <div className="openai-logo">
          <img src={openaiLogo} alt="" />
        </div>

        <div className="openai-text">
          <h4>SmartLingo uses <span>OpenAI</span>’s Davinci neural network model to make translations</h4>
        </div>
      </div>

      <div className="accuracy">
        <h3>The most  <span className="purple-span">accurate</span> translator</h3>
        <h4>Translation accuracy on colloquial phrases:</h4>

        <div className="google-accuracy">
          <div className="google-accuracy-logo">
            <img src={googleLogo} alt="" />
            <span className="google-accuracy-logo-text">Translate</span>
          </div>

          <div className="google-graph"></div>
          <span className="google-accuracy-percentage">72%</span>
        </div>

        <div className="smartlingo-accuracy">
          <div className="smartlingo-accuracy-logo">
            <span className="smartlingo-accuracy-logo-text">SmartLingo</span>
          </div>

          <div className="smartlingo-graph"></div>
          <span className="smartlingo-accuracy-percentage">Up to 90%</span>
        </div>
      </div>
      
      <div className="footer">
        <ul>
          <li><span>2023 SmartLingo &#169;</span></li>
          <li><a href="mailto:">Contact us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Landing
