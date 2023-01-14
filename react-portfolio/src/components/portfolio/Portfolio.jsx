import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title:'File Manager App Concept',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20365108-File-Manager-App-Concept'
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
  {
    id: 4,
    image: IMG4,
    title:'File Manager App Concept',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20365108-File-Manager-App-Concept'
  },
  {
    id: 5,
    image: IMG5,
    title:'File Manager App Concept',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20365108-File-Manager-App-Concept'
  },
  {
    id: 6,
    image: IMG6,
    title:'File Manager App Concept',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20365108-File-Manager-App-Concept'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Aquí puedes ver mi trabajo</h5>
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
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;