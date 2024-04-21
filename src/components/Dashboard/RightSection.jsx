import React, { useState } from 'react';
import './RightSection.css';
import PushPinIcon from '@mui/icons-material/PushPin';
import IBM from '../../assets/images/ibm.jpg';
import WFH from '../../assets/images/wfh.jpg';
import WFHF from '../../assets/images/wfhf.jpg';
import AI from '../../assets/images/ai.jpg';
import Intern from '../../assets/images/internship.jpg';
import Marketing from '../../assets/images/marketing.jpg';
import Native from '../../assets/images/native.jpg';

function RightSection() {
    
    const [followed, setFollowed] = useState({
        ibm: false,
        wfh: false,
        wfhf: false
    });

    // handle follow function for each company
    const handleFollow = (company) => {
        setFollowed(prevState => ({
            ...prevState,
            [company]: true
        }));
    };

    return (
        <div className='rightSectionContainer'>
            <div className="feedContainer">
                <div className="feed">
                    <h6>Add to your feed</h6>
                    <PushPinIcon fontSize='small' />
                </div>
                {!followed.ibm && (
                    <div className="feed1Container">
                        <div className="feedIcon">
                            <img src={IBM} alt="ibmIcon" />
                        </div>
                        <div className="feedInfo">
                            <h6>IBM</h6>
                            <p>Company | Information Technology and Services</p>
                            <button onClick={() => handleFollow('ibm')}>+ Follow</button>
                        </div>
                    </div>
                )}
                {!followed.wfh && (
                    <div className="feed1Container">
                        <div className="feedIcon">
                            <img src={WFH} alt="wfhIcon" />
                        </div>
                        <div className="feedInfo">
                            <h6>Work From Home/ Fresher & Experience Jobs</h6>
                            <p>Company | Human Resources</p>
                            <button onClick={() => handleFollow('wfh')}>+ Follow</button>
                        </div>
                    </div>
                )}
                {!followed.wfhf && (
                    <div className="feed1Container">
                        <div className="feedIcon">
                            <img src={WFHF} alt="wfhfIcon" />
                        </div>
                        <div className="feedInfo">
                            <h6>Work From Home/ Fresher & Experience Jobs</h6>
                            <p>Company | Human Resources</p>
                            <button onClick={() => handleFollow('wfhf')}>+ Follow</button>
                        </div>
                    </div>
                )}
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
    );
}

export default RightSection;
