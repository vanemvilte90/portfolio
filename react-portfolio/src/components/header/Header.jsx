import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className="header__info">
          <h4>¡Hola! Soy</h4> 
          <h1>Vanesa Vilte</h1>
          <h4 className='text-light'>Full Stack Developer</h4>
          <CTA />
          <HeaderSocials />
        </div>
        
        <div className="me">
          <div className="me__image">
            <img src={ME} alt="me"></img>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;