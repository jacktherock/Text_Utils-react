import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

/* Validating Props: */
// Navbar.propTypes = {
//     title: PropTypes.string, // only string can send at title, if integer send then error will occur
//     aboutText: PropTypes.string, // only string can send at about, if integer send then error will occur
// }

Navbar.propTypes = {
    title: PropTypes.string.isRequired, // only string can send at title, if integer send then error will occur
    aboutText: PropTypes.string.isRequired, // only string can send at about, if integer send then error will occur
}

// Default Props: It means that I'll pass props but if I wouldn't pass the props then use this default values.
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}