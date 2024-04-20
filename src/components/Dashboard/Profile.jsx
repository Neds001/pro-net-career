import React from 'react'
import DashboardHeader from './DashboardHeader';
import './Profile.css'
import Cover from '../../assets/images/bg.jpg'
import Person from '../../assets/images/img.jpg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PeopleIcon from '@mui/icons-material/People';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import EditIcon from '@mui/icons-material/Edit';
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import Face3Icon from '@mui/icons-material/Face3';
import Face4Icon from '@mui/icons-material/Face4';
import Face5Icon from '@mui/icons-material/Face5';
import Face6Icon from '@mui/icons-material/Face6';

function Profile() {
    //Retrieve full name from local storage
    const fullName = localStorage.getItem('fullName');

    return (
        <>
            <DashboardHeader />
            <div className="profileContainer">
                <div className="profileSection">
                    <div className="coverArea">
                        <img src={Cover} alt="cover" />
                    </div>
                    <div className="profileArea">
                        <img src={Person} alt="profile" />
                        <h1>{fullName}<span className='span'>(He/Him)</span></h1>
                        <p>Trainee at Village 88, Inc Philippines</p>
                        <p>Baguio City, Cordillera Admin Region, Philippines </p>
                        <p>10 connections</p>
                    </div>
                    <div className="profileAreaButtons">
                        <button><PersonAddIcon />Connect</button>
                        <button>Message</button>
                        <button>More</button>
                    </div>
                    <div className="aboutContainer">
                        <div className="aboutHeader">
                            <h5>About</h5>
                        </div>
                        <div className="aboutBody">
                            <p>You'll learn from your failures.</p>
                            <p>Skills:</p>
                            <ul className='ul'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>ReactJS</li>
                                <li>JavaScript</li>
                                <li>React Bootstrap</li>
                                <li>Material UI</li>
                                <li>JavaScript</li>
                                <li>Blender 3D</li>
                            </ul>
                        </div>
                    </div>
                    <div className="analyticsContainer">
                        <div className="analyticsHeader">
                            <h5>Analytics</h5>
                            <RemoveRedEyeIcon fontSize='small' color='disabled' className='eye' />
                            <p>Private to you</p>
                        </div>
                        <div className="analyticsBody">
                            <div className="leftBody">
                                <h6><PeopleIcon /> 3 profile views</h6>
                                <p>Discover who's viewed your profile.</p>
                            </div>
                            <div className="middleBody">
                                <h6><EqualizerIcon /> 4 post impressions</h6>
                                <p>Start to post to increase engagement.</p>
                            </div>
                            <div className="rightBody">
                                <h6><SavedSearchIcon /> 4 search appearance</h6>
                                <p>See how often you eppear in search results.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="sideSection">
                    <div className="upperSection">
                        <div className="editBio">
                            <h5>Edit Bio</h5>
                            <EditIcon />
                        </div>
                        <p>Trainee at Village 88, Inc Philippines</p>
                    </div>
                    <div className="lowerSection">
                        <div className="lowerSectionHeader">
                            <h5>People you may know</h5>
                            <p>From your industry</p>
                        </div>
                        <div className="lowerSectionBody">
                            <div className="lowerSectionFlex">
                                <div className="peopleIconContainer">
                                    <FaceIcon fontSize='large' />
                                </div>
                                <div className="peopleBody">
                                    <h6>Andress Bonifacio</h6>
                                    <p>Systems Engineer</p>
                                    <button>Connect</button>
                                </div>
                            </div>
                            <div className="lowerSectionFlex">
                                <div className="peopleIconContainer">
                                    <Face2Icon fontSize='large' />
                                </div>
                                <div className="peopleBody">
                                    <h6>Javie Flores</h6>
                                    <p>Associate DevOps Engineer</p>
                                    <button>Connect</button>
                                </div>
                            </div>
                            <div className="lowerSectionFlex">
                                <div className="peopleIconContainer">
                                    <Face3Icon fontSize='large' />
                                </div>
                                <div className="peopleBody">
                                    <h6>Eloisa Joy Villanueva</h6>
                                    <p>Technology Officer</p>
                                    <button>Connect</button>
                                </div>
                            </div>
                            <div className="lowerSectionFlex">
                                <div className="peopleIconContainer">
                                    <Face4Icon fontSize='large' />
                                </div>
                                <div className="peopleBody">
                                    <h6>Antoinette Marcos</h6>
                                    <p>Data Analyst</p>
                                    <button>Connect</button>
                                </div>
                            </div>
                            <div className="lowerSectionFlex">
                                <div className="peopleIconContainer">
                                    <Face5Icon fontSize='large' />
                                </div>
                                <div className="peopleBody">
                                    <h6>Jose Manaloto</h6>
                                    <p>CEO</p>
                                    <button>Connect</button>
                                </div>
                            </div>
                            <div className="lowerSectionFlex">
                                <div className="peopleIconContainer">
                                    <Face6Icon fontSize='large' />
                                </div>
                                <div className="peopleBody">
                                    <h6>Anton Manabat</h6>
                                    <p>Front-End Developer</p>
                                    <button>Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile