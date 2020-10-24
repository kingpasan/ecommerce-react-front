import React, { useState } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { createCategory } from './apiAdmin'
import { Link } from 'react-router-dom';

const AddCategory = () => {

    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { user, token } = isAuthenticated();

    const handleChange = (e) => {
        setError('');
        setName(e.target.value);
    };

    const clickSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        createCategory(user._id, token, { name })
            .then(data => {
                if (data.error) {
                    setError(true);
                } else {
                    setError("");
                    setSuccess(true);
                }
            })
    }

    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success"> {name} is created</h3>
        }
    }


    const showError = () => {
        if (error) {
            return <h3 className="text-danger"> Category is already exists</h3>
        }
    }

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="btn btn-dark">Back</Link>
        </div>
    );


    const newCategoryForm = () => (
        <div className="card">
            <div className="card-body">
                <form onSubmit={clickSubmit}>
                    <div className="form-group">
                        <label className="text-muted">New Category Name :</label>
                        <input type="text" className="form-control" onChange={handleChange} value={name} autoFocus required />
                    </div>
                    <button className="btn btn-outline-dark">Create Category</button>
                </form>
            </div>
        </div>

    );


    return (
        <Layout title="Add a new category" description="Add new category into System" className="container">
            <div className="row">
                <div className="col-md-9 offset-md-2 mb-5">
                    {showError()}
                    {showSuccess()}
                    {newCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );
};

export default AddCategory;