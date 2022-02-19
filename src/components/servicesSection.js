import React from 'react'
import massageIcon from '../media/massageIconTest.png'
import '../styles/services.css'

export default function servicesSection() {
  return (
    <section className="services" id='services'>
        <div className='box'>
        <div class="services-description">
          <h1>Services</h1>
          <p>We provide a variety of services</p>
        </div>
        <div className="cards">
          <div className="service-card">
            <img className="service-icon" src={massageIcon} alt="" />
            <h1>Swedish</h1>
            <p>hello</p>
          </div>
          <div className="service-card">
            <img className="service-icon" src={massageIcon} alt="" />
            <h1>Deep Tissue</h1>
            <p>hello</p>
          </div>
          <div className="service-card">
            <img className="service-icon" src={massageIcon} alt="" />
            <h1>Sports</h1>
            <p>hello</p>
          </div>
          <div className="service-card">
            <img className="service-icon" src={massageIcon} alt="" />
            <h1>Parental</h1>
            <p>hello</p>
          </div>
        </div>
        </div>
      </section>
  )
}
