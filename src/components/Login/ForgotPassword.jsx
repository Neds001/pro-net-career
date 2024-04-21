import React, { useState } from 'react';
import Header from '../Header/Header';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/image.jpg';
import Image2 from '../../assets/images/image2.jpg';
import Image3 from '../../assets/images/image3.jpg';
import { Link } from 'react-router-dom';
import '../../components/Login/ForgotPassword.css';
import Footer from '../Footer/Footer';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve stored email from local storage
        const storedEmail = localStorage.getItem('email');

        // Check if entered email matches the stored email
        if (email === storedEmail) {
            // Reset password to eight zeros
            localStorage.setItem('password', '00000000');
            setMessage('Your password has been reset to eight zeros (00000000).');
        } else {
            setMessage('No account found with this email.');
        }
    };

    return (
        <>
            <Header />
            <section className='forgotSection'>
                <div className='forgotContainer'>
                    <h2 className='forgot'>Forgot Password</h2>
                    <p className='forgotDescription'>We will send a verification code to this email if it matches an existing ProNetCareer account.</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        {message && <p className="message">{message}</p>}
                        <input
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="forgotInput"
                            id='email'
                        />
                        <button type="submit" className='btn forgotBtn'>Send</button>
                    </form>


                    <Link to='/login' className='forgotPass'><p>Back</p></Link>
                </div>
                <div className='imagesContainer'>
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
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForgotPassword;
