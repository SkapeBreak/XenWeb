import React from 'react'
import '../styles/pricingSection.css'


export default function pricingSection() {
  return (
    <section className="pricing" id='prices'>
      <div class="pricing-title">
        <h1>Pricing</h1>
      </div>
      <div className="pricing-container">
        <div className="pricing-card">
          <div className="price">
            60
            </div>
            <div className='minutes'>
              Minutes</div>
            <div className="price-description">
              $$$$</div>
          
        </div>
        <div className="pricing-card">
          <div className="price">
            75
            </div>
            <div className='minutes'>
              Minutes</div>
            <div className="price-description">
              $$$$</div>
          
        </div>
        <div className="pricing-card">
          <div className="price">
            90
            </div>
            <div className='minutes'>
              Minutes</div>
            <div className="price-description">
              $$$$</div>
          
        </div>
      </div>
    </section>
  );
}
