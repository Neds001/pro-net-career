import React, { useState } from 'react';
import Header from '../Header/Header';
import '../../components/Login/Login.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/image.jpg';
import Image2 from '../../assets/images/image2.jpg';
import Image3 from '../../assets/images/image3.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve stored credentials from local storage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Check if entered credentials match stored credentials
        if (email === storedEmail && password === storedPassword) {
            // Redirect to MainDashboard component
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <Header />
            <section className='logInSection'>
                <div className='logInContainer'>
                    <h2 className='logIn'>Welcome Back!</h2>
                    <p className='login'>Login your account in just a few steps</p>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit} className='loginForm'>
                        <label htmlFor="email">Email</label>
                        <input
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="logInInput"
                            id='email'
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className="logInInput"
                            id='password'
                        />
                        <button type="submit" className='btn logInBtn'>Let's go!</button>
                    </form>
                    <Link to='/forgotPass' className='forgotPass'><p>Forgot Password?</p></Link>
                    <p className='register'>No account yet? register <Link to='/signup'>here.</Link></p>
                </div>
                <div className='imagesContainer'>
                    <Carousel>
                        <Carousel>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img src={Image1} alt="First slide" className='images' />
                                    <Carousel.Caption className='carouselCaption'>
                                        <h3 className='carouselLabel'>Conversations today could lead to opportunity tomorrow</h3>
                                        <p className='carouselDescription'>Sending messages to people you know is a great way to strengthen relationships as ou take the next step in your career.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img src={Image2} alt="First slide" className='images' />
                                    <Carousel.Caption className='carouselCaption'>
                                        <h3 className='carouselLabel'>Let the right people know you’re open to work</h3>
                                        <p className='carouselDescription'>With the Open To Work feature, you can privately tell recruiters or publicly share with the ProNetCareer community that you are looking for new job opportunities.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={Image3} alt="First slide" className='images' />
                                    <Carousel.Caption className='carouselCaption'>
                                        <h3 className='carouselLabel'>Who is ProNetCareer for?</h3>
                                        <p className='carouselDescription'>Anyone looking to navigate their professional life.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Carousel>
                    </Carousel>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Login;
