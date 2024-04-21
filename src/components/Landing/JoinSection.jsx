import React, { useState } from 'react';
import '../../components/Landing/JoinSection.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function JoinSection() {
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'fullName') {
            setFullName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        // Full Name validation
        if (!fullName.trim()) {
            errors.fullName = 'Full Name is required';
        } else if (!/^[a-zA-Z ]+$/.test(fullName)) {
            errors.fullName = 'Full Name should not contain numbers or special characters';
        }

        // Email validation
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }

        // Password validation
        if (!password.trim()) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password should be at least 8 characters long';
        }

        if (Object.keys(errors).length === 0) {
            // Submit the form if there are no errors
            console.log('Form submitted successfully');

            // Store credentials in local storage
            localStorage.setItem('fullName', fullName);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            // Display success message
            alert('Registered successfully!');

            // Reset form fields
            setFullName('');
            setEmail('');
            setPassword('');
        } else {
            setErrors(errors);
        }
    };


    return (
        <>
            <Header />
            <section className='joinSection'>
                <div className='joinContainer'>
                    <h2 className='join'>Join ProNetCareer Today</h2>
                    <p className='create'>Create your account in just a few steps</p>
                    <form onSubmit={handleSubmit} className='joinForm'>
                        <label htmlFor="fullName">Full Name </label>
                        <input
                            placeholder="Enter your full name"
                            type="text"
                            name="fullName"
                            value={fullName}
                            onChange={handleChange}
                            className="input"
                            id='fullName'
                        />
                        {errors.fullName && <p className="error">{errors.fullName}</p>}
                        <label htmlFor="email">Email</label>
                        <input
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="input"
                            id='email'
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="Create a password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className="input"
                            id='password'
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                        <button type="submit" className='btn joinBtn'>Join Now</button>
                    </form>
                    <p className='create'>Already have an account? Login <Link to='/login'>here.</Link></p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default JoinSection;
