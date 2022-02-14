import React from 'react'
import '../styles/covidReady.css'
import covid from '../media/covidReady.jpg'

export default function covidReady() {
  return (
    <section class="covid-section" id="about-me">
      <div class="covidReady-container">
        <img class="covid-ready" src={covid} alt="covid ready photo" />

        <div class="information-text">
          <h2>Covid-19 Ready</h2>
          <p>
            Our number one priority is our customers and therapists safety,
            that's why we are making sure every day to be ready for this great
            challenge.
          </p>
        </div>
      </div>
    </section>
  );
}
