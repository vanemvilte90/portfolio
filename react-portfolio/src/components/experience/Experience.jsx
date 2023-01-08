import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Las Skills que tengo</h5>
      <h2>Mi experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
            <div className='experience__content'>
              
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>
            
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

            </div>
        </div>
        {/* ========== END OF FRONTEND ========== */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JAVA</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Spring Boot</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Microservicios</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Testing</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experiencied</small>
                </div>
              </article>

            </div>
        </div>
        </div>
    </section>
  )
}

export default Experience