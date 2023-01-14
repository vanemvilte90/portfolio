import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {SlGraduation} from 'react-icons/sl';
import {TbCertificate} from 'react-icons/tb';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
        <h5>Conoce</h5>
        <h2>Sobre mí</h2>
      
        <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About image" />
              </div>
          </div>

          <div className="about__content">
              
            <div className="about__cards">    
              <article className='about__card'>
                <TbCertificate className='about__icon'/>
                <h5>Certified Tech Developer</h5>
                <small>2021-2023</small>
              </article>

              <article className='about__card'>
                <SlGraduation className='about__icon'/>
                <h5>Técnica Superior en Informática</h5>
                <small>2012-2015</small>
              </article>

            </div>

            <p>
              Soy entusiasta de la tecnología, en especial de la programación y el diseño. Siempre he sido curiosa y autodidacta. Me gusta aprender y considero que para dar más valor al conocimiento lo mejor es compartirlo. Me caracterizo por mi adaptabilidad, trabajo en equipo y pensamiento creativo. Quiero seguir desarrollándome y aprendiendo constantemente para poder adquirir más experiencia.
            </p>

            <a href='#contact' className='btn btn-primary'>Contacto</a>

        </div>
      </div>
    </section>
  )
}

export default About