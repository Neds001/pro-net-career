import React from 'react';
import '../../components/Dashboard/UnderMaintenance.css';
import Image from '../../assets/images/maintenance.jpg';
import { Link } from 'react-router-dom';

function UnderMaintenance() {
    return (
        <div className='maintenanceContainer'>
            <div className="imageContainer">
                <img src={Image} alt="maintenanceImg" />
            </div>
            <div className="textContainer">
                <h1>Page Under Maintenance</h1>
                <p>Our developers are already fixing the problem. Thank you for your understanding.</p>
                <Link to='/dashboard'><button className='btn'>Back to Home</button></Link>
            </div>
        </div>
    )
}

export default UnderMaintenance;