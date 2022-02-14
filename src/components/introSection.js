import React from 'react'
import '../styles/intro.css'
import test from '../logo.svg'

export default function introSection() {
  return (
    <section class="intro">   
        <div class="intro-area">
          <div class="intro-text">
            <h1>Zen Wellness</h1>
            <p>Health and Wellness at your door step</p>
            <div class="button">
              <a href="#about-me">Learn More</a>
            </div>
            <div className="intro-image">
              <img alt="test" src={test} />
            </div>
          </div>
        </div>
  </section>
  )
}
