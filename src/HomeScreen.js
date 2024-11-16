import React, { useState } from 'react';
import './HomeScreen.css';
import { ReactComponent as MenuIcon } from './icons/MenuIcon.svg';
import { ReactComponent as MicrophoneIcon } from './icons/MicrophoneIcon.svg';
import { ReactComponent as ArrowDownIcon } from './icons/ArrowDownIcon.svg';
import { ReactComponent as CryptoIcon } from './icons/cryptoicon.svg';
import { ReactComponent as CommoditiesIcon } from './icons/commoditiesIcon.svg';
import { ReactComponent as EquityIcon } from './icons/equityIcon.svg';
import { ReactComponent as DebtIcon } from './icons/debtIcon.svg';
import { ReactComponent as RealEstateIcon } from './icons/realEstateIcon.svg';
import { ReactComponent as AlternativeInvestmentsIcon } from './icons/alternativeInvestmentsIcon.svg';
import { ReactComponent as HomeIcon } from './icons/homeIcon.svg';
import { ReactComponent as ProfileIcon } from './icons/profileIcon.svg';
import { Link, useLocation } from 'react-router-dom';

function HomeScreen() {
    const [isMicOverlayVisible, setMicOverlayVisible] = useState(false);
    const [userInput, setUserInput] = useState(''); // State for input text
    const location = useLocation(); // Get current route

    const handleMicClick = () => {
        setMicOverlayVisible(true);
    };

    const handleCloseOverlay = () => {
        setMicOverlayVisible(false);
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('User Input:', userInput); // Optional: Log or process the input
            setUserInput(''); // Clear the input field
        }
    };

    return (
        <div className="home-screen">
            {/* Header Section */}
            <div className="homeheader">
                <div className="menu-icon">
                    <MenuIcon />
                </div>

                <div className="home-text">Home</div>

                <div
                    className="microphone-icon-wrapper"
                    onClick={handleMicClick}
                >
                    <MicrophoneIcon className="microphone-icon" />
                </div>
            </div>

            {/* Welcome Section */}
            <div className="welcome-section">
                <h2 className="welcome-back">Welcome Back!</h2>
                <p className="hello-user">Hello, Danae</p>
            </div>

            {/* Card Section */}
            <div className="card">
                <div className="card-number">**** **** **** 0987</div>

                <div className="card-bottom-rectangle">
                    <p className="net-worth-label">My Net Worth:</p>
                    <h1 className="net-worth-amount">$2,500.00</h1>
                    <p className="date-text">10/25</p>

                    <div className="arrow-indicator">
                        <ArrowDownIcon />
                    </div>

                    <p className="percentage-text">2.67%</p>
                </div>
            </div>

            {/* Six Rectangular Boxes Below the Card with Icons and Text */}
            <div className="rectangle left-rectangle top-row-1">
                <Link to="/crypto" className="equity-link">
                <CryptoIcon color="#C2C2C2" className="box-icon" />
                <p className="box-text">Crypto</p>
                </Link>
            </div>
            <div className="rectangle right-rectangle top-row-1">
            <Link to="/commodities" className="equity-link">
                <CommoditiesIcon color="#C2C2C2" className="box-icon" />
                <p className="box-text">Commodities</p>
                </Link>
            </div>
            <div className="rectangle left-rectangle top-row-2">
                <Link to="/equity" className="equity-link">
                <EquityIcon color="#C2C2C2" className="box-icon" />
                <p className="box-text">Equity</p>
                </Link>
            </div>
            <div className="rectangle right-rectangle top-row-2">
                <Link to="/debt" className="equity-link">
                <DebtIcon color="#C2C2C2" className="box-icon" />
                <p className="box-text">Debt</p>
                </Link>
            </div>
            <div className="rectangle left-rectangle top-row-3">
            <Link to="/realestate" className="equity-link">
                <RealEstateIcon color="#C2C2C2" className="box-icon" />
                <p className="box-text">Real Estate</p>
                </Link>
            </div>
            <div className="rectangle right-rectangle top-row-3">
            <Link to="/alternative" className="equity-link">
                <AlternativeInvestmentsIcon color="#C2C2C2" className="box-icon" />
                <p className="box-text">Alternative Investments</p>
                </Link>
            </div>

            {/* Tab Menu */}
            <div className="tab-menu">
                <Link to="/" className="home-icon">
                    <HomeIcon
                        style={{
                            color: location.pathname === '/' ? '#6CB8D6' : '#A5A4A9',
                        }}
                    />
                </Link>
                <Link to="/profile" className="profile-icon">
                    <ProfileIcon
                        style={{
                            color: location.pathname === '/profile' ? '#6CB8D6' : '#A5A4A9',
                        }}
                    />
                </Link>
            </div>


            {/* Microphone Overlay */}
            {isMicOverlayVisible && (
                <div className="mic-overlay">
                    <div className="mic-overlay-header">
                        <button
                            className="mic-overlay-close"
                            onClick={handleCloseOverlay}
                        >
                            ×
                        </button>
                    </div>
                    <div className="mic-content">
                        <div className="mic-circle">
                            <MicrophoneIcon className="mic-icon" />
                        </div>
                        <h2 className="mic-header">AI Powered Chat</h2>
                        <p className="mic-subheader">Ask Me Anything...</p>
                        <input
                            type="text"
                            placeholder="Type Here..."
                            value={userInput}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            className="mic-input"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeScreen;
