import React from 'react';
import './Groups.css';
import DashboardHeader from './DashboardHeader';
import WebIcon from '../../assets/images/web.jpg';
import DataSci from '../../assets/images/data.jpg';
import AI from '../../assets/images/ai.jpg';
import Intern from '../../assets/images/internship.jpg';
import Marketing from '../../assets/images/marketing.jpg';
import Native from '../../assets/images/native.jpg';

function Groups() {
    return (
        <>
            <DashboardHeader />
            <div className="groupsContainer">
                <div className="leftSection">
                    <div className="header">
                        <div className="leftHeader">
                            <h6>Your groups</h6>
                            <h6>Requested</h6>
                        </div>
                        <div className="rightHeader">
                            <button className='createBtn'>Create group</button>
                        </div>
                    </div>
                    <div className="groupContent">
                        <div className="groupFlex">
                            <div className="groupContentIcon">
                                <img src={WebIcon} alt="webIcon" />
                            </div>
                            <div className="groupContentDescription">
                                <p className='title'> Web Development Learning Group - ProNetCareer</p>
                                <p className='members'>52,750 members</p>
                            </div>
                        </div>
                        <div className="groupFlex">
                            <div className="groupContentIcon">
                                <img src={DataSci} alt="datasciIcon" />
                            </div>
                            <div className="groupContentDescription">
                                <p className='title'> Data Science Community - ProNetCareer</p>
                                <p className='members'>643, 312 members</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSection">
                    <h6>Groups you might be interested in</h6>
                    <div className="groupContainer">
                        <div className="joinFlex">
                            <div className="groupContentIcon">
                                <img src={AI} alt="AIimg" />
                            </div>
                            <div className="groupContentDescription">
                                <p className="title">Artificial Intelligence, Machine Learning, Data Science & Robotics</p>
                                <p className="members">2,998,305 members</p>
                                <button>Join</button>
                            </div>
                        </div>
                        <div className="joinFlex">
                            <div className="groupContentIcon">
                                <img src={Intern} alt="internimg" />
                            </div>
                            <div className="groupContentDescription">
                                <p className="title">Internship Group</p>
                                <p className="members">615,663 members</p>
                                <button>Join</button>
                            </div>
                        </div>
                        <div className="joinFlex">
                            <div className="groupContentIcon">
                                <img src={Marketing} alt="marketingimg" />
                            </div>
                            <div className="groupContentDescription">
                                <p className="title">Digital Marketing</p>
                                <p className="members">2,383,108 members</p>
                                <button>Join</button>
                            </div>
                        </div>
                        <div className="joinFlex">
                            <div className="groupContentIcon">
                                <img src={Native} alt="nativeimg" />
                            </div>
                            <div className="groupContentDescription">
                                <p className="title">React Native</p>
                                <p className="members">316,760 members</p>
                                <button>Join</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Groups;