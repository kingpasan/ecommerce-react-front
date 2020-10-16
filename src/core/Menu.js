import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from '../auth'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    } else {
        return { color: '#ffffff' }
    }
};

const Menu = ({ history }) => (
    <Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <Link class="navbar-brand" to="/">Hiro</Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/user/dashboard")} to="/user/dashboard">Dashboard</Link>
                    </li>

                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item" >
                                <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Signin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Signup</Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <span className="nav-link" style={{ cursor: 'pointer', color: '#ffffff' }} onClick={() => signout(() => {
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