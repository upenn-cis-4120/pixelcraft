import React from 'react';
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
import { ReactComponent as SearchIcon } from './icons/searchIcon.svg';
import { Link } from 'react-router-dom';

function HomeScreen() {
    return (
        <div className="home-screen">
            {/* Header Section */}
            <div className="header">
                <div className="menu-icon">
                    <MenuIcon />
                </div>

                <div className="home-text">Home</div>

                <div className="microphone-icon-wrapper">
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
                <CryptoIcon className="box-icon" />
                <p className="box-text">Crypto</p>
            </div>
            <div className="rectangle right-rectangle top-row-1">
                <CommoditiesIcon className="box-icon" />
                <p className="box-text">Commodities</p>
            </div>
            <div className="rectangle left-rectangle top-row-2">
                <EquityIcon className="box-icon" />
                <p className="box-text">Equity</p>
            </div>
            <div className="rectangle right-rectangle top-row-2">
                <DebtIcon className="box-icon" />
                <p className="box-text">Debt</p>
            </div>
            <div className="rectangle left-rectangle top-row-3">
                <RealEstateIcon className="box-icon" />
                <p className="box-text">Real Estate</p>
            </div>
            <div className="rectangle right-rectangle top-row-3">
                <AlternativeInvestmentsIcon className="box-icon" />
                <p className="box-text">Alternative Investments</p>
            </div>

            {/* Tab Menu */}
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

export default HomeScreen;
