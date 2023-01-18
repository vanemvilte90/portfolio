import React from 'react';
import './nav.css';
import { Component } from 'react'
import LOGO from '../../assets/logo_vv.png';
import { MenuData } from './MenuData';


class Nav extends Component{
  render(){
    return(
      <nav className='nav__items'>
        <a href="#">
          <img src={LOGO} alt="Logo" className='img__nav' />
        </a>
            <ul className='links__nav'>
          {MenuData.map((item, index) => {
            return(
              <li key={index}>
                <a href={item.url} className={item.cName}><i className={item.icon} />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;