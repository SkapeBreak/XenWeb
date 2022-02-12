import React from "react";
import "./landingPage.css";
import test from './logo.svg'
import massageIcon from './massageIconTest.png'

export default function home() {
  return (
    <div class="landing">
      <section class="intro">
        <nav>
          <img class="logo" src={test} alt="Zen's logo" />
          <ul id="nav-list">
            <li>
              <a href="#about-me">About us</a>
            </li>
            <li>
              <a href="#projects">Services</a>
            </li>
            <li>
              <a href="#contact-me">Contact</a>
            </li>
          </ul>
        </nav>
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
      <section class="covid-section" id="about-me">
        <div class="information-text">
          <h2>Covid-19 Ready</h2>
          <p>
            Our number one priority is our customers and therapists safety,
            that's why we are making sure every day to be ready for this great
            challenge.
          </p>
        </div>
        <div class="headshot-container">
          <img
            class="headshot"
            src="src/images/headshot.jpeg"
            alt="covid ready photo"
          />
        </div>
      </section>
      <section className="app-promo">
        <div class="apppromo-text">
          <h1>Download our App</h1>
          <p>asdjahfasdlfghasdjknbgsadjkhgsdjhga</p>
        </div>
      </section>
      <section className="therapist">
        <div class="therapist-text">
          <h1>Therapists</h1>
          <p>asdjahfasdlfghasdjknbgsadjkhgsdjhga</p>
        </div>
      </section>
      <section className="pricing">
        <div class="pricing-text">
          <h1>Pricing</h1>
          <p>asdjahfasdlfghasdjknbgsadjkhgsdjhga</p>
        </div>
        <div className="cards">
          <div className="pricing-card">
            <img className="pricing-icon" src={massageIcon} alt="" />
            <h1>First</h1>
            <p>sdfhasfhasdfgjklhasdgkljasdhg</p>
          </div>
        </div>
      </section>
      <section className="services">
        <div class="services-description">
          <h1>Services</h1>
          <p>asdjahfasdlfghasdjknbgsadjkhgsdjhga</p>
        </div>
        <div className="cards">
          <div className="service-card">
            <img className="service-icon" src={massageIcon} alt="" />
            <h1>Swedish</h1>
            <p>sdfhasfhasdfgjklhasdgkljasdhg</p>
          </div>
          <div className="service-card">
            <img className="service-icon" src={massageIcon} alt="" />
            <h1>Deep Tissue</h1>
            <p>sdfhasfhasdfgjklhasdgkljasdhg</p>
          </div>
          <div className="service-card">
            <img className="service-icon" src={massageIcon} alt="" />
            <h1>Sports</h1>
            <p>sdfhasfhasdfgjklhasdgkljasdhg</p>
          </div>
          <div className="service-card">
            <img className="service-icon" src={massageIcon} alt="" />
            <h1>Parental</h1>
            <p>sdfhasfhasdfgjklhasdgkljasdhg</p>
          </div>
        </div>
      </section>
      <section className="howto">
        <div class="howto-text">
          <h1>How to</h1>
          <p>asdjahfasdlfghasdjknbgsadjkhgsdjhga</p>
        </div>
      </section>
      <footer id="contact-me">
        <h2>Contact me</h2>
        <p>Ivonne@zentechnologies.info</p>
        <p>825-994-4786</p>
      </footer>
    </div>
  );
}
