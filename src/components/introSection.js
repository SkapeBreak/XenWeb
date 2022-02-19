import React from 'react'
import '../styles/intro.css'
import logo from '../media/ColorLogo-noBackground.svg'

export default function introSection() {
  return (
    <section className="intro">   
        <div className="intro-area">
          <div className="intro-text">
            <h1>Zen Wellness</h1>
            <p>Health and Wellness at your door step</p>
            <div className="intro-image">
              <img alt="logo" src={logo} />
            </div>
          <div class="button"><a href="#about-me">Learn More</a></div>
              {/* <a href="#about-me">Learn More</a>
            </div> */}
          </div>
        </div>
  </section>
  )
}
