import React, { Component } from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Lognav () {
      return ( 
       <>        
      <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/sign-in'}>
                        PLMS
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            {/* <li className="nav-item"> */}
                                <Link className="nav-link" to={'/'}>
                                    Admin Login
                                </Link>
                            {/* </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to={'/user-login'}>
                                    User Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
    );
};

