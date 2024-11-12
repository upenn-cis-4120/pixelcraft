// ProfileScreen.js
import React from 'react';
import './HomeScreen.css'; // Reuse the CSS for consistency in styles
import { ReactComponent as BackArrowIcon } from './icons/backArrowIcon.svg';
import { ReactComponent as MenuThreeDotsIcon } from './icons/menuThreeDots.svg';
import { ReactComponent as HomeIcon } from './icons/homeIcon.svg';
import { ReactComponent as SearchIcon } from './icons/searchIcon.svg';
import { ReactComponent as ProfileIcon } from './icons/profileIcon.svg';
import { Link } from 'react-router-dom';
import DMImage from './danae.jpeg'; // Adjust path as necessary

function ProfileScreen() {
    return (
        <div className="home-screen">
            {/* Header Section */}
            <div className="header">
                <BackArrowIcon className="back-arrow-icon" />
                <div className="profile-text">Profile</div>
                <MenuThreeDotsIcon className="menu-three-dots-icon" />
            </div>

            {/* Profile Image Section */}
            <div
                className="dm-image"
                style={{ backgroundImage: `url(${DMImage})` }}
            ></div>

            {/* Name Text */}
            <div className="danae-metaxa">Danae Metaxa</div>

            {/* Button Rectangles */}
            <div className="about-rectangle">About</div>
            <div className="account-settings-rectangle">Account Settings</div>
            <div className="privacy-policy-rectangle">Privacy Policy</div>


            {/* Tab Menu */}
            {/* Tab Menu with Links */}
            <div className="tab-menu">
                <Link to="/" className="home-icon">
                    <HomeIcon />
                </Link>
                <Link to="/search" className="search-icon">
                    <SearchIcon />
                </Link>
                <Link to="/profile" className="profile-icon">
                    <ProfileIcon />
                </Link>
            </div>
        </div>
    );
}

export default ProfileScreen;
