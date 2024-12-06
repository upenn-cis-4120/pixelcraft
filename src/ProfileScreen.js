// ProfileScreen.js
import React from 'react';
import './HomeScreen.css'; // Reuse the CSS for consistency in styles
import { ReactComponent as BackArrowIcon } from './icons/backArrowIcon.svg';
import { Link } from 'react-router-dom';
import DMImage from './danae.jpeg'; // Adjust path as necessary

function ProfileScreen() {

    return (
        <div className="home-screen">
            {/* Header Section */}
            <div className="header">
                <Link to="/" className="back-arrow-icon">
                    <BackArrowIcon />
                </Link>
                <div className="profile-text">Profile</div>
            </div>

            {/* Profile Image Section */}
            <div
                className="dm-image"
                style={{ backgroundImage: `url(${DMImage})` }}
            ></div>

            {/* Name Text */}
            <div className="danae-metaxa">Danae Metaxa</div>

            {/* Button Rectangles */}
            <Link to="/aboutscreen" className="about-rectangle">
                About
            </Link>
            <div className="account-settings-rectangle">Account Settings</div>
            <div className="privacy-policy-rectangle">Privacy Policy</div>

        </div>
    );
}

export default ProfileScreen;
