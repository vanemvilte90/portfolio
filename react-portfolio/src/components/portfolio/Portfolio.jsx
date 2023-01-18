import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title:'Juego del Ahorcado',
    github: 'https://github.com/vanemvilte90/challenge1-one',
    demo: 'https://vanemvilte90.github.io/challenge1-one/'
  },
  {
    id: 2,
    image: IMG2,
    title:'File Manager App Concept',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20365108-File-Manager-App-Concept'
  },
  {
    id: 3,
    image: IMG3,
    title:'File Manager App Concept',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20365108-File-Manager-App-Concept'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Trabajos que hice</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} target="_blank" className='btn'>Github</a>
                    <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
                  </div>
              </article> 
            );
          })
        }
      </div>
    </section>
  );
}

export default Portfolio;