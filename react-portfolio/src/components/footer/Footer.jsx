import React from 'react';
import './footer.css';
import LOGO from '../../assets/logo_vv.png';

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='footer__container'>
        <a href="#" className='footer__logo'>
          <img src={LOGO} />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2023 | Powered by Vane Vilte</small>
      </div>

    </footer>
  );
}

export default Footer;