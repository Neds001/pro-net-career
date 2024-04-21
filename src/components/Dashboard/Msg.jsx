import React from 'react';
import './Messages.css';
import DashboardHeader from './DashboardHeader';

function Msg() {
    return (
        <>
            <DashboardHeader />
            <div className="messagesContainer">
                <h4>No messages yet.</h4>
            </div>
        </>
    )
}

export default Msg;