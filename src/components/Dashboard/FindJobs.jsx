import React from 'react';
import DashboardHeader from './DashboardHeader';
import './FindJobs.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DescriptionIcon from '@mui/icons-material/Description';
import TvIcon from '@mui/icons-material/Tv';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Shopify from '../../assets/images/shopify.jpg';
import Japan from '../../assets/images/japan.jpg';
import FE from '../../assets/images/fe.jpg';
function FindJobs() {
    return (
        <>
            <DashboardHeader />
            <div className="findJobContainer">
                <div className="leftJobSection">
                    <h6>
                        <a href="https://www.linkedin.com/my-items/saved-jobs/" target='_blank'><BookmarkIcon /> My Jobs</a>
                    </h6>
                    <h6>
                        <a href="https://www.linkedin.com/jobs/preferences/?viewType=SEEKING_PREFERENCES" target='_blank'><FormatListBulletedIcon /> Preferences</a>
                    </h6>
                    <h6>
                        <a href="https://www.linkedin.com/interview-prep/assessments/urn:li:fsd_assessment:(1,a)/question/urn:li:fsd_assessmentQuestion:(10011,aq11)/" target='_blank'><DescriptionIcon /> Interview prep</a>
                    </h6>
                    <h6>
                        <a href="https://www.linkedin.com/learning/subscription/career-guidance-hub" target='_blank'><TvIcon /> Job seeker guidance</a>
                    </h6>
                </div>
                <div className="rightJobSection">
                    <div className="righJobSectionContainer">
                        <div className="rightJobSectionHeader">
                            <h5>Top job picks for you</h5>
                            <p>Based on your profile and search history</p>
                        </div>
                        <div className="rightJobSectionBody">
                            <div className="jobIcon">
                                <img src={Shopify} alt="shopify" />
                            </div>
                            <div className="jobBody">
                                <a href="https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3901938627&eBP=CwEAAAGO__sDguD4qJgL-xbQI0rG0EyNC6oWwxNN1Y5rGSBpM862fhPoCaBu4Eovx7_DZ0ggyxrdRK4pScTjNf1OqNqRrbjH_z_tyNrcCWyOOGTWFuZBVd_LpiYr68AEerFE4_L7tPOXdbg0pfjJ6lAR54ENHeDIUJdpdtrk9f-QM70XgPEHoHZ0D1WLrv5Lw1LLE4t8mpNCcJ4tWenopZr2pq9D_mqaxaOZUeh6BZEjGVTbhaYpoECK2pvmMGnyxZyMc_9uDkcgv0XLL4bm_xUrOyZ9jUscXaXhwhM40hV7no_iN0BzXQDOoKSX0lfOC1jhKA7q62svJSlBYOHb3JOqlGPufROyAET0XEOHJv96rbEC4FIyUnSJ-5D2bgcpUA&refId=URmVB3RGctQoyBfj4qOqFg%3D%3D&trackingId=pQuI5OgGvtuAXfxXDjviww%3D%3D" target="_blank">
                                    <h6>Shopify Web Developer & Data Analyst</h6>
                                </a>
                                <p>AbraodWorks Inc.</p>
                                <p className='promoted'>Promoted * <span className='green'> 8 applicants </span></p>
                            </div>
                        </div>
                        <div className="rightJobSectionBody">
                            <div className="jobIcon">
                                <img src={Japan} alt="japan" />
                            </div>
                            <div className="jobBody">
                                <a href="https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3879814684&eBP=CwEAAAGO__sDgq15FiYMF0iupyEoztrDEJgHtCS7DWqW1xe-j8mp3GN6laORUpgSjKqK9Rg8WmIoXMD-0LmNnJ_t-W0bN5TisHA4RTMuX81hFM_mwUCLRapT0LAUWhhs4QvqUXSEXVvXICYc70fVCjD2uUkacdTT3YoHTSZISHT8p6Giwacx2Er6oFmm9p7LihetoMK4K1nZjh8_c8rBON6JnP1gxhl-yVb0ZTBDxNxuv6d_pGC4pzHJ_AiLgmd047hLTStsEkqjSM7uXw-3OkmUII0z6NX4xxWmAHCGFvhJ5eHe9y5g_Z6s9tpLe_HeJxfkaoPGuKtMbv8YAEUbwpm27g8UO8JAjCTJ38bvT4lRQg8OaBRy2ApcPGtor7CgRg&refId=URmVB3RGctQoyBfj4qOqFg%3D%3D&trackingId=yNhnLy6guF0HZUTQnrI7Vg%3D%3D" target='_blank'>
                                    <h6>Japanese Bilingual Technical Support</h6>
                                </a>
                                <p>Quezon City, National Capital Region, Philippines (On-site)</p>
                                <p className='promoted'>Promoted * <span className='green'> 14 applicants </span></p>
                            </div>
                        </div>
                        <div className="rightJobSectionBody">
                            <div className="jobIcon">
                                <img src={FE} alt="fe" />
                            </div>
                            <div className="jobBody">
                                <a href="">
                                    <h6>Frontend Developer and UI/UX Designer</h6>
                                </a>
                                <p>OFFSURE</p>
                                <p className='promoted'>1 week ago * <span className='green'> 10 applicants </span></p>
                            </div>
                        </div>
                        <div className="showall">
                            <a href="https://www.linkedin.com/jobs/" target='_blank'>
                                <p className='showAll'>Show all <ArrowForwardIcon /></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FindJobs;