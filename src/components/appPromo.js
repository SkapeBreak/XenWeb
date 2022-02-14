import React from 'react'
import '../styles/appPromo.css'
import apple from '../media/applestore.svg'
import google from '../media/google-play-badge.png'

export default function appPromo() {
  return (
    <section className="app-promo">
        <div class="apppromo-text">
          <h1>Download our App</h1>
          </div>
         <div className='download-container'> 
          <div className='apple'>
            <img
            className='download-img'
            src={apple}
            alt=''
            />
          </div>
          <div className='google'>
            <img
              className='download-img'
              src={google}
              alt=''
            />
          </div>
          
        </div>
      </section>
  )
}
