import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/vanemvilte/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/vanemvilte90" target="_blank"><FaGithub/></a>
        <a href="mailto:vanemvilte90@gmail.com" target="_blank"><FiMail/></a>
    </div>
  );
}

export default HeaderSocials;