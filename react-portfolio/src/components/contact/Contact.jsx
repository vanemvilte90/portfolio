import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gg4x6t4', 'template_nz438wf', form.current, '0kUSZQltbGIPgQe9r')
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>¿Quieres hablar conmigo?</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vanemvilte90@gmail.com</h5>
            <a href="mailto:vanemvilte90@gmail.com" target="_blank">Enviar mensaje</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+54 388 5088028</h5>
            <a href="https://api.whatsapp.com/send?phone=5493885088028" target="_blank">Enviar mensaje</a>
          </article>
        </div>
        {/* Fin opciones de contacto */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Nombre y apellido' required />
          <input type="email" name="email" placeholder='Correo electrónico' required />
          <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar mensaje</button>
        </form>

      </div>
    </section>
  )
}

export default Contact;