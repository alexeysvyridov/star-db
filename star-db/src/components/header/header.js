import React from 'react';
import './header.css'
 const  Header = ({onServiceChange}) => {
    return (
        <nav className="d-flex">
            <a href="#">
            <h3>  
              Star DB
            </h3>
        </a>
            <ul className="d-flex">
            <li>
                <a href="#">People</a>
            </li>
            <li>
                <a href="#">Planets</a>
            </li>
            <li>
                <a href="#">Starships</a>
            </li>
        </ul>
            <button className="btn btn-primary btn-sm"
            onClick={onServiceChange}>
                Change Service
            </button>
        </nav>
    )
 }

 export default Header