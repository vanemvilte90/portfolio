import React, {useState} from 'react';
import './nav.css';
import LOGO from '../../assets/logo_vv.png';
import BurgerButton from './BurgerButton';

function Nav() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <nav>
        <a href="#">
           <img src={LOGO} alt="Logo" className='img__nav' />
         </a>
        <div className={`links__container ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href='#' className='link__button'>Inicio</a>
          <a onClick={handleClick} href='#about' className='link__button'>Sobre mi</a>
          <a onClick={handleClick} href='#experience' className='link__button'>Skills</a>
          <a onClick={handleClick} href='#portfolio' className='link__button'>Portfolio</a>
          <a onClick={handleClick} href='#contact' className='link__button'>Contacto</a>
        </div>
        <div className='burger__nav'>
          <BurgerButton clicked={clicked} handleClick = {handleClick}/>
        </div>
      </nav>
    </>
  )
}

export default Nav;



















// import React from 'react';
// import './nav.css';
// import { Component } from 'react'
// import LOGO from '../../assets/logo_vv.png';
// import { MenuData } from './MenuData';


// class Nav extends Component{
//   render(){
//     return(
//       <nav className='nav__items'>
//         <a href="#">
//           <img src={LOGO} alt="Logo" className='img__nav' />
//         </a>
//             <ul className='links__nav'>
//           {MenuData.map((item, index) => {
//             return(
//               <li key={index}>
//                 <a href={item.url} className={item.cName}><i className={item.icon} />
//                   {item.title}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Nav;