import React from 'react'
import '../styles/howTo.css'

export default function howTo() {
  return (
    <section className="howto">
        <div class="howto-text">
          <h1>How it works</h1>
          <p>We understand that making the 
            time to go for a massage can be difficult, 
            that's why booking a massage at your own convenience, 
            at home or at work, is as easy as following the next steps:</p>
        </div>
        <div className="howto-list">
          <ul className="howto-line-block">
          <h1>Create an Account</h1>
            <li>Register with us</li>
            <li>create a profile</li>
            <li>Verify you account</li>
          </ul>
          <ul className="howto-line-block">
          <h1>Book</h1>
            <li>Find your service</li>
            <li>Book your Therapist</li>
            <li>Provide payment method</li>
            <li>How to schedule</li>
          </ul>
          <ul className="howto-line-block">
            <h1>Pay</h1>
            <li>How to schedule</li>
            <li>How to schedule</li>
            <li>How to schedule</li>
            <li>How to schedule</li>
          </ul>
          <ul className="howto-line-block">
            <h1>Enjoy</h1>
            <li>Therapist arrives</li>
            <li>Service provided</li>
            <li>How to schedule</li>
            <li>How to schedule</li>
          </ul>
        </div>
      </section>
  )
}
