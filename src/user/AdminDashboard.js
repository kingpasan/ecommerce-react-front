import React from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    const { user: { _id, name, email, role } } = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="card bg-info">
                <h4 className="card-header text-light">Admin Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">Create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">Create Product</Link>
                    </li>
                </ul>
            </div>
        );
    };

    const adminInfo = () => {
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

    return (
        <Layout title="Admin Dashboard" description={`Hello, ${name}!`} className="container">
            <div className="row">

                <div className="col-md-3 mb-5">
                    {adminLinks()}
                </div>

                <div className="col-md-9 mb-5">
                    {adminInfo()} 
                </div>

            </div>
        </Layout>
    );
};

export default AdminDashboard;