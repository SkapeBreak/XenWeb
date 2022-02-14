import React from 'react'
import '../styles/therapists.css'
import massageIcon from '../media/massageIconTest.png'

export default function therapists() {
  return (
    <section className="therapist-section">
        <div className="therapist-title">
          <h1>Therapists</h1>
          {/* <p>asdjahfasdlfghasdjknbgsadjkhgsdjhga</p> */}
        </div>
        <div className="therapist-container">
          <div className="therapist-card">
            <div>
              <div className="therapist">
                <img
                  class="covid-ready"
                  src={massageIcon}
                  alt="Zen's logo"
                ></img>
              </div>
            </div>
          </div>
          <div className="therapist-card">
            <div>
              <div className="therapist">
                <img
                  class="covid-ready"
                  src={massageIcon}
                  alt="Zen's logo"
                ></img>
              </div>
            </div>
          </div>
          <div className="therapist-card">
            <div className="therapist">
              <img 
                class="covid-ready" 
                src={massageIcon} 
                alt="Zen's logo"></img>
            </div>
          </div>
        </div>
      </section>
  )
}
