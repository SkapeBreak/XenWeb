import React from "react";
import "../styles/landingPage.css";
import AppPromo from '../components/appPromo'
import Covid from '../components/covidReady'
import Therapists from '../components/therapists'
import ListIcon from '@mui/icons-material/List';
import Intro from '../components/introSection'
import Services from '../components/servicesSection'
import PricingSection from '../components/pricingSection'
import HowTo from '../components/howTo'

export default function home() {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div>
      
     {/* Nav-Bar */}

      <div class="topnav" id="myTopnav">
          <a href="#home" class="active"></a>
          <a href="#prices">Prices</a>
          <a href="#services">Services</a>
          <a href="#about">Book</a>
          <a href="javascript:void(0);" class="icon" onclick={myFunction}>
            <ListIcon />
          </a>
      </div>

      {/* Intro section */}
      
      <Intro />      

      {/* Therapists Section */}

      <Therapists />

      {/* Services Section */}

      < Services />

      {/* Pricing Section */}

      <PricingSection />

      {/* Covid Section */}

      {/* <Covid /> */}      

      {/* How-to Section */}

      <HowTo />


      {/* App Promo Section */}

      {/* <AppPromo /> */}

      {/* Footer */}

      <footer id="contact-me">
        <h2>Contact Us</h2>
        <p>Ivonne@zentechnologies.info</p>
        <p>825-994-4786</p>
      </footer>
    </div>
  );
}
