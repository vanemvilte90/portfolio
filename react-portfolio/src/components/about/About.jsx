import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
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
                <FaAward className='about__icon'/>
                <h5>Exerience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, enim. Sapiente sit qui nihil odio possimus quod, necessitatibus eligendi esse, dignissimos illo dolores temporibus aliquam, mollitia nisi incidunt libero soluta?
            </p>

            <a href='#contact' className='btn btn-primary'>Contacto</a>

        </div>
      </div>
    </section>
  )
}

export default About