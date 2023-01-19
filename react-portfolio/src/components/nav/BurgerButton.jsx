import React from 'react';
import './burger.css';

function BurgerButton(props){
    return(
        <div onClick={props.handleClick} 
             className={`icon nav__icon ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default BurgerButton;