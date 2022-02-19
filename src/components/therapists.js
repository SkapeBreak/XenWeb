import React from 'react'
import '../styles/therapists.css'
import massageIcon from '../media/massageIconTest.png'

export default function therapists() {
  return (
    <section className="therapist-section">
        <div className='therapist-box'>
        <div className="therapist-title">
          <h1>Therapists</h1>
          <p>Meet our amazing Daughter - Mother team of Registered Massage Therapists.
            with a combined 10 years experience,
            this duo is sure to leave an impression with each treatment.
          </p>
        </div>
        <div className="therapist-container">
            <div className="therapist-card" id='tcard'>
              
                <h2>Ivonne</h2>
                <img
                  class="covid-ready"
                  src={massageIcon}
                  alt="Zen's logo"
                ></img>
                <div class="bio">
                  Bio
                </div>
                <p>
                  Something about 
                  me
                </p>
              
            
            </div>
            <div className="therapist-card">
  
              
                <h2>Patricia</h2>
                <img
                  class="covid-ready"
                  src={massageIcon}
                  alt="Zen's logo"
                ></img>
                <div class="bio">
                  Bio
                </div>
                <p>
                  Something about 
                  me
                </p>
            
            </div>
        </div>
        </div>
      </section>
  )
}
