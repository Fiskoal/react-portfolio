import React from "react";
import './style.css';


function Navbar() {
    return (

        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarItems"
                aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarItems">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#work">Work<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact Me<span className="sr-only">(current)</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="./assets/Lauren-Wenzel.pdf" target="_blank" download="newfilename">
                        Resume</a>
                    </li>
                </ul>
            </div>

        </nav>

    );
}

export default Navbar;