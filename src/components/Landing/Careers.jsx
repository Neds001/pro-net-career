import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header/Header';
import Career1 from '../../assets/images/it-career.jpeg';
import Career2 from '../../assets/images/engr-career.webp';
import Career3 from '../../assets/images/nursing-career.webp';
import Career4 from '../../assets/images/archi-career.webp';
import Career5 from '../../assets/images/business-career.webp';
import '../../components/Landing/Careers.css';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Careers() {

    // Initialize AOS animation library
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Header />
            <div className='mainContainer'>
                <h1 className='careerHeading' data-aos='fade-in'>Explore Different Careers</h1>
                <section className='career1'>
                    <div className='careerContainer' data-aos='fade-right'>
                        <img src={Career1} alt="career1" className='careerImg' />
                        <Link
                            to="https://www.techopedia.com/definition/626/information-technology-it"
                            className='imgButton'
                            target='_blank'>
                            Learn More
                        </Link>
                    </div>
                    <div className='careerText' data-aos='fade-left'>
                        <h2 className='careerTitle'>IT Jobs</h2>
                        <p className='careerDescription'>Not only are your skills transferrable, but you can also learn more and work your way up the corporate ladder. IT careers start out in secondary roles, such as support or development.</p>

                    </div>
                </section>
                <section className='career2'>
                    <div className='careerText' data-aos='fade-right'>
                        <h2 className='careerTitle'>Engineering Jobs</h2>
                        <p className='careerDescription'>Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines, complex systems, structures, gadgets and materials to fulfill functional objectives and requirements while considering the limitations imposed by practicality, regulation, safety and cost.</p>
                    </div>
                    <div className='careerContainer' data-aos='fade-left'>
                        <img src={Career2} alt="career2" className='careerImg' />
                        <Link
                            to="https://www.encyclopedia.com/history/encyclopedias-almanacs-transcripts-and-maps/engineering-industry"
                            className='imgButton'
                            target='_blank'>
                            Learn More
                        </Link>
                    </div>
                </section>
                <section className='career3'>
                    <div className='careerContainer' data-aos='fade-right'>
                        <img src={Career3} alt="career3" className='careerImg' />
                        <Link
                            to="https://www.news-medical.net/health/Nursing-Healthcare-Profession.aspx#:~:text=Nursing%20is%20a%20healthcare%20profession,and%20approach%20to%20medical%20care."
                            className='imgButton'
                            target='_blank'>
                            Learn More
                        </Link>
                    </div>
                    <div className='careerText' data-aos='fade-left'>
                        <h2 className='careerTitle'>Nursing Jobs</h2>
                        <p className='careerDescription'>Assessing, observing, and speaking to patients. Recording details and symptoms of patient medical history and current health. Preparing patients for exams and treatment. Administering medications and treatments, and then monitoring patients for side effects and reactions.</p>
                    </div>
                </section>
                <section className='career4'>
                    <div className='careerText' data-aos='fade-right'>
                        <h2 className='careerTitle'>Architecture Jobs</h2>
                        <p className='careerDescription'>An Architect is a professional who transforms building designs into reality, ensuring functionality, safety, and creative vision. Collaborating with engineers, they develop concepts for structures that meet project goals and operational standards, bringing architectural projects to life.</p>
                    </div>
                    <div className='careerContainer' data-aos='fade-left'>
                        <img src={Career4} alt="career4" className='careerImg' />
                        <Link
                            to="https://www.igi-global.com/dictionary/building-information-modeling-australian-architecture/1428"
                            className='imgButton'
                            target='_blank'>
                            Learn More
                        </Link>
                    </div>
                </section>
                <section className='career5'>
                    <div className='careerContainer' data-aos='fade-right'>
                        <img src={Career5} alt="career5" className='careerImg' />
                        <Link
                            to="https://www.investopedia.com/terms/i/industry.asp"
                            className='imgButton'
                            target='_blank'>
                            Learn More
                        </Link>
                    </div>
                    <div className='careerText' data-aos='fade-left'>
                        <h2 className='careerTitle'>Business Jobs</h2>
                        <p className='careerDescription'>An industry is a group of companies that are related based on their primary business activities. In modern economies, there are dozens of industry classifications. Industry classifications are typically grouped into larger categories called sectors.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Careers;