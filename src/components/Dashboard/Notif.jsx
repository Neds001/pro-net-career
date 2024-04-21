import React from 'react';
import './Notifications.css';
import DashboardHeader from './DashboardHeader';

function Notif() {
    return (
        <>
            <DashboardHeader />
            <div className="notificationsContainer">
                <div className="notificationsHeader">
                    <button>All</button>
                    <button>My posts</button>
                    <button>Mentions</button>
                </div>
                <div className="notificationsBody">
                    <h4>No notifications yet.</h4>
                </div>
            </div>
        </>
    )
}

export default Notif;