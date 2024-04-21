import React from 'react';
import './MainDashboard.css';
import DashboardHeader from './DashboardHeader';
import SideBar from './SideBar';
import ContentSection from './ContentSection';
import RightSection from './RightSection';

function MainDashboard() {
    return (
        <>
            <DashboardHeader />
            <div className="dashboardContainer">
                <SideBar />
                <ContentSection />
                <RightSection />
            </div>
        </>
    )
}

export default MainDashboard;