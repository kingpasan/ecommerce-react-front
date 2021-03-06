import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth'

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }



    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false });
                } else {
                    setValues({ ...values, name: '', email: '', password: '', error: '', success: true });
                }
            })
    }

    const signUpForm = () => (

        <div className="card">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label className="text-muted">Name: </label>
                        <input onChange={handleChange('name')} type="text" className="form-control" value={name} required />
                    </div>

                    <div className="form-group">
                        <label className="text-muted">Email: </label>
                        <input onChange={handleChange('email')} type="email" className="form-control" value={email} required />
                    </div>

                    <div className="form-group">
                        <label className="text-muted">Password: </label>
                        <input onChange={handleChange('password')} type="password" className="form-control" value={password} required />
                    </div>

                    <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Account created successfully, Please <Link to="/signin">Signin</Link> to proceed!
        </div>
    );

    return (
        <Layout title="Signup" description="Signup to ecommerce application" className="container col-md-8 offset-md-2 ">
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    );
};

export default Signup;