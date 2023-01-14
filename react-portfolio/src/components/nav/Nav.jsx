import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsListUl} from 'react-icons/bs';
import {MdWorkOutline} from 'react-icons/md';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';
 
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      
      {/* ====== HOME ====== */}
      <a id="tooltip" href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/>
        {/* <span className='tooltip-box'>Home</span> */}
      </a>
        
      {/* ====== ABOUT ====== */}  
      <a id="tooltip" href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser/>
        {/* <span className='tooltip-box'>About</span> */}
      </a>
      
      {/* ====== SKILLS ====== */}
      <a id="tooltip" href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsListUl/>
        {/* <span className='tooltip-box'></span> */}
      </a>

      {/* ====== SERVICES ====== */}
      <a id="tooltip" href='#portfolio' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><MdWorkOutline/>
        {/* <span className='tooltip-box'></span> */}
      </a>
      
      {/* ====== EXPERIENCE ====== */}
      <a id="tooltip" href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail/>
        {/* <span className='tooltip-box'>Contacto</span> */}
      </a>
    </nav>
  )
}

export default Nav