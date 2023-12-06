import React, { useRef } from 'react';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css'

// FontAwesome Import.......................
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons'

// Components Import....................
import HeadingText from '../../components/HeadingText/HeadingText'

export default function Contact() {

  useEffect(() => emailjs.init(import.meta.env.YOUR_PUBLIC_KEY), [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.YOUR_SERVICE_ID,
      import.meta.env.YOUR_TEMPLATE_ID,
      form.current,
      import.meta.env.YOUR_PUBLIC_KEY
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <section>
      <HeadingText title={'Contact'} titlePrimary={'Me'} />
      <div className="container contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' id='name' required placeholder='Your Name' />
          <input type='email' name='user_email' id='email' required placeholder='Your Email' />
          <textarea name='message' id='message' rows='6' placeholder='Your Message'></textarea>
          <button type='submit' className='btn'>
            Send
            <span><FontAwesomeIcon icon={faPaperPlane} /></span>
          </button>
        </form>
      </div>
    </section>
    <footer>
      <ul>
        <li><a href="https://www.linkedin.com/in/gilcunha97/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="mailto:gilffcunha@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
        <li><a href="https://github.com/gilffcunha"><FontAwesomeIcon icon={faGithub} /></a></li>
      </ul>
      <p>© Gil Cunha 2023 || Powered by Omega3344</p> 
    </footer>
    </>
  )
}
