import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';
import { ReactComponent as BackArrowIcon } from './icons/backArrowIcon.svg';
import { ReactComponent as MenuThreeDotsIcon } from './icons/menuThreeDots.svg';
import { ReactComponent as HomeIcon } from './icons/homeIcon.svg';
import { ReactComponent as ProfileIcon } from './icons/profileIcon.svg';

function EquityScreen() {
    return (
        <div className="equity-screen">
            {/* Header Section */}
            <div className="header">
                <Link to="/" className="back-arrow-icon">
                    <BackArrowIcon />
                </Link>
                <div className="equity-text">Equity</div>
                <MenuThreeDotsIcon className="menu-three-dots-icon" />
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Add CSS for the rest of the elements here */}
            </div>

            {/* Tab Menu */}
            <div className="tab-menu">
                <Link to="/" className="home-icon">
                    <HomeIcon />
                </Link>
                <Link to="/profile" className="profile-icon">
                    <ProfileIcon />
                </Link>
            </div>
        </div>
    );
}

export default EquityScreen;
