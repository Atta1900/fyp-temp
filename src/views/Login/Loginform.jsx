import React, { Component ,  } from 'react'
import Lognav from './Lognav'
import { BrowserRouter as Router, Routes, Route, Link , useNavigate } from 'react-router-dom'
import 'src/scss/index.scss'
// import Dashboard from '../dashboard/Dashboard'
export default function Loginform  () {
  const navigate = useNavigate();
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
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>
                                    Admin Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/user-login'}>
                                    User Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="auth-wrapper">
         <div className="auth-inner">
            <form>
        <h3>Admin Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={() => navigate('/admin-dashboard')}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
      </div>
        </div>
      </>
    )
  }
