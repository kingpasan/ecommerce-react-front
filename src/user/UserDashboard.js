import React from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const { user: { _id, name, email, role } } = isAuthenticated();

    const userLinks = () => {
        return (
            <div className="card bg-info">
                <h4 className="card-header text-light">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">My Cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/profile/update">Update Profile</Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userInfo = () => {
        return (
            <div className="card mb-5 bg-dark">
                <h3 className="card-header text-light">User Informtion</h3>
                <ul className="list-group">
                    <li className="list-group-item"><h6>Name :</h6> {name}</li>
                    <li className="list-group-item"><h6>Email :</h6> {email}</li>
                    <li className="list-group-item"><h6>Account :</h6> {role === 1 ? "Admin" : "Customer"}</li>
                </ul>
            </div>
        );
    };

    const purchaseHistroy = () => {
        return (
            <div className="card mb-5 bg-secondary">
                <h3 className="card-header text-light">Purchase History</h3>
                <ul className="list-group">
                    <li className="list-group-item">History</li>
                </ul>
            </div>
        );
    }

    return (
        <Layout title="Dashboard" description={`Hello, ${name}!`} className="container">
            <div className="row">

                <div className="col-3">
                    {userLinks()}
                </div>

                <div className="col-9">
                    {userInfo()}
                    {purchaseHistroy()}
                </div>

            </div>
        </Layout>
    );
};

export default Dashboard;