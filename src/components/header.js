import React from 'react';
import {FaReact} from 'react-icons/fa';


function Header(){
    return (
        <nav className="navbar navbar-light bg-dark mb-5">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand text-white text-lg brand-text" >
                <h1>C<i className="fas fa-virus"></i>vid-19</h1>
              </div>

            </div>
     
            <ul className="navbar-nav ml-auto text-light d-inline-block ">
              <li className="nav-item d-inline-block mr-4">
                <a className="nav-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact color="purple" size="5rem"/></a>
              </li>
            </ul>
           

          </div>
        </nav>
    );
}

export default Header;

