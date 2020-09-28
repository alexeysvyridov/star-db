import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
 const  Header = ({onServiceChange}) => {
    return (
        <nav className="d-flex">
            <Link to="/">
                <h3>  
                    Star DB
                </h3>
             </Link>
            <ul className="d-flex">
            <li>
                <Link to="/secret/">Secret</Link>
            </li>
            <li>
                <Link to="/login/">Login</Link>
            </li>
            <li>
                <Link to="/people/">People</Link>
            </li>
            <li>
            <Link to="/planets/">Planets</Link>
            </li>
            <li>
            <Link to="/starships/">Starships</Link>
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