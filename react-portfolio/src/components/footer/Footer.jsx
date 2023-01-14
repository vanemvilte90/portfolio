import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {BsTwitter} from 'react-icons/bs';
import LOGO from '../../assets/logoVV.png';

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='footer__container'>
        <a href="#" className='footer__logo'>
          <img src={LOGO} />
        </a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div className='footer__socials'>
          <a href="htts://linkedin.com"><FaFacebookF/></a>
          <a href="https://instagram.com"><FiInstagram/></a>
          <a href="https://twitter.com"><BsTwitter/></a>
        </div>
      </div>

      <div className="footer__copyright">
        <small>&copy;2023 | Powered by Vane Vilte</small>
      </div>

    </footer>
  )
}

export default Footer