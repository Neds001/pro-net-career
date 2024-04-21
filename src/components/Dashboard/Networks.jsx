import React from 'react';
import DashboardHeader from './DashboardHeader';
import '../Dashboard/Networks.css';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Icon1 from '../../assets/images/img.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Networks() {
    return (
        <>
            <DashboardHeader />
            <div className="networksContainer">
                <div className="network">
                    <div className="networksHeader">
                        <h1>My Networks</h1>
                        <div className="inputContainer">
                            <PersonSearchIcon />
                            <input type="text" placeholder='Search by name...' />
                        </div>
                    </div>
                    <div className="networksBody">
                        <div className="networksInner">
                            <div className="networksIcon">
                                <img src={Icon1} alt="icon" />
                            </div>
                            <div className="networksDescription">
                                <p className='title'> John Doe</p>
                                <p className='members'>Student at University of the Cordilleras</p>
                                <p className="members">Connected 2 months ago</p>
                            </div>
                            <div className="networksButton">
                                <button>Message</button>
                            </div>
                            <div className="networksOption">
                                <MoreHorizIcon />
                            </div>
                        </div>
                        <div className="networksInner">
                            <div className="networksIcon">
                                <img src={Icon1} alt="icon" />
                            </div>
                            <div className="networksDescription">
                                <p className='title'> Jose Rizal</p>
                                <p className='members'>I work with Executive Coaches and Leaders | Strategic Thinker & Analyst | Administrative Expert: Streamlining Operations for Efficiency & Excellence | Resource Speaker | Educator & Consultant | MBA/Phd in Mgmt</p>
                                <p className="members">Connected 2 days ago</p>
                            </div>
                            <div className="networksButton">
                                <button>Message</button>
                            </div>
                            <div className="networksOption">
                                <MoreHorizIcon />
                            </div>
                        </div>
                        <div className="networksInner">
                            <div className="networksIcon">
                                <img src={Icon1} alt="icon" />
                            </div>
                            <div className="networksDescription">
                                <p className='title'> Antonio Luna</p>
                                <p className='members'>Student at University of the Cordilleras</p>
                                <p className="members">Connected 8 months ago</p>
                            </div>
                            <div className="networksButton">
                                <button>Message</button>
                            </div>
                            <div className="networksOption">
                                <MoreHorizIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Networks;