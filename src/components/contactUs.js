import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hspp48c', 'template_9td3g0e',
     form.current, 'user_4YbS8C5nApkiE20R3gnts')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <div className='contact-form'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Phone Number</label>
      <input type="text" name="number" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" id='button'/>
    </form>
    </div>
  );
};

export default ContactUs;







// import React from 'react'
// import '../styles/contact.css'

// export default function contactUs() {
//   return (
    
//     <div className='contact-form'>
//     <form action="mailto:diego1995g@hotmail.com" method="post" enctype="text/plain">
//         <label>Your Name:</label>
//         <input type="text" name="yourName"/> 
//         <label>Your Email:</label>
//         <input type="text" name="yourEmail" /> 
//         <label>Your Message:</label>
//         <textarea name="yourMessage" cols="30" rows="10"></textarea> 
//         <input type="submit" name=""/>
//     </form>
//     </div>
//   )
// }
