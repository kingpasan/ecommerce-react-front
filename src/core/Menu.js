import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#f44336' }
    } else {
        return { color: '#ffffff' }
    }
};

const Menu = ({ history }) => (
    <Fragment>
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">

            <Link class="navbar-brand" to="/">
                <img src="/logo-round.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" /> <span style={{ fontFamily: 'Roboto Slab' }}>Hiro eCommerce Shop</span>
            </Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/")} to="/"><span style={{ fontFamily: 'Roboto Slab', fontWeight: '300' }}>Home</span></Link>
                    </li>

                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, "/user/dashboard")} to="/user/dashboard"><span style={{ fontFamily: 'Roboto Slab', fontWeight: '300' }}>Dashboard</span></Link>
                        </li>
                    )}

                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, "/admin/dashboard")} to="/admin/dashboard"><span style={{ fontFamily: 'Roboto Slab', fontWeight: '300' }}>Dashboard</span></Link>
                        </li>
                    )}

                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item" >
                                <Link className="nav-link" style={isActive(history, "/signin")} to="/signin"><span style={{ fontFamily: 'Roboto Slab', fontWeight: '300' }}>Signin</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, "/signup")} to="/signup"><span style={{ fontFamily: 'Roboto Slab', fontWeight: '300' }}>Signup</span></Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <span className="nav-link btn btn-dark" style={{ cursor: 'pointer', fontFamily: 'Roboto Slab', fontWeight: '300' }} onClick={() => signout(() => {
                                    history.push('/');
                                })}>Signout</span>
                            </li>
                        </Fragment>
                    )}

                </ul>
            </div>
        </nav>
    </Fragment>
);


export default withRouter(Menu);