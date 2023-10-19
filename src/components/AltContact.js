import React from 'react'

const AltContact = () => {

  // basic contact page


  return (
    <div className="contact">
      <br/>
      <h1>Get in touch</h1>
      <br/>
      <h3>for coaching or restringing services</h3>
      <br/>
      <br/>
      <ul className="list-unstyled">
      <li className="contact-method">
          <img src="https://img.icons8.com/nolan/64/email.png" alt="email"/>
          <a href="mailto:coach.victorliew@gmail.com" rel="noopener noreferrer" target="_blank" className="text-decoration-none">coach.victorliew@gmail.com</a>
        </li>
        <li className="contact-method">
          <img src="https://img.icons8.com/nolan/64/instagram-new.png" alt="instagram"/>
          <a href="https://www.instagram.com/victorliew11/" rel="noopener noreferrer" target="_blank" className="text-decoration-none">Instagram</a>
        </li>
        
        </ul>
    </div>
  )

}

export default AltContact