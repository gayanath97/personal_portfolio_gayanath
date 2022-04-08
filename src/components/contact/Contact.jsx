import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef(); 
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tthji1i', 'template_69tr5lo', form.current, 'CDT_tuj2D5mEaG4lp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
              <div className="contact_options">

              <article className="contact_option">
                <MdOutlineEmail className='contact_option-icon'/>
                <h4>Email</h4>
                <h5>gayanathlakmevansilva@gmail.com</h5>
                <a href='mailto:gayanathlakmevansilva@gmail.com' target='_blank'>Send a message</a>
              </article>

              <article className="contact_option">
                <RiMessengerLine className='contact_option-icon'/>
                <h4>Messenger</h4>
                <h5>Gayanath Lakmevan</h5>
                <a href='https://m.me/profile.php?id=100065582674561' target='_blank'>Send a message</a>
              </article>

              <article className="contact_option">
                <BsWhatsapp className='contact_option-icon'/>
                <h4>Whatsapp</h4>
                <h5>+94770162245</h5>
                <a href='https://api.whatsapp.com/send?phone=+94770162245' target='_blank'>Send a message</a>
              </article>

              </div>
              {/* END OF CONTACT OPTIONS */}
              <form ref={form} onSubmit={sendEmail}>
                  <input type='text' name='name' placeholder='Your Full Name' required />
                  <input type='email' name='email' placeholder='Your Email' required />
                  <textarea name='message' rows='7' placeholder='Your Message' required />
                  <button type='submit' className='btn btn-primary'>Send Message</button>
              </form>
            </div>
    </section>
    
  )
}

export default Contact