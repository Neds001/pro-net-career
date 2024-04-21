import React from 'react';
import DashboardHeader from './DashboardHeader';
import './FindNetworks.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function FindNetworks() {
    return (
        <>
            <DashboardHeader />
            <div className="findNetworksContainer">
                <p>People you may know</p>
                <div className="row">
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Kaliyah Howell</div>
                            <div class="card-subtitle">Lead Integration Coordinator</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Bella Livingston</div>
                            <div class="card-subtitle">Dynamic Brand Planner</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Camilla Burke</div>
                            <div class="card-subtitle">Human Markets Designer</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Alexandria Cervantes</div>
                            <div class="card-subtitle">Investor Assurance Coordinator</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Marcel Wade</div>
                            <div class="card-subtitle">Dynamic Implementation Officer</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Giancarlo Cameron</div>
                            <div class="card-subtitle">Product Research Administrator</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Lana Erickson</div>
                            <div class="card-subtitle">Investor Operations Agent</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Madyson Roman</div>
                            <div class="card-subtitle">Relational Functionality Officer</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Lola Yates</div>
                            <div class="card-subtitle">Lead Infrastructure Liason</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Ernest Burton</div>
                            <div class="card-subtitle">Lead Security Consultant</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Samantha Rosales</div>
                            <div class="card-subtitle">District Markets Specialist</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Kiersten Buckley</div>
                            <div class="card-subtitle">Central Branding Engineer</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Holly Blair</div>
                            <div class="card-subtitle">District Data Liason</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                    <div class="card">
                        <div class="card-info">
                            <div class="card-avatar"></div>
                            <div class="card-title">Joey Reilly</div>
                            <div class="card-subtitle">Senior Program Director</div>
                            <button className='connectBtn'><PersonAddIcon />Connect</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default FindNetworks;