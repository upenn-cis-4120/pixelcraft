import React from 'react';
import './HomeScreen.css';

function HomeScreen() {
    return (
        <div className="home-screen">
            <div className="background"></div>

            {/* Header Section */}
            <div className="header">
                <div className="icon"></div>
                <div className="home-text">Home</div>
                <div className="image"></div>
            </div>

            {/* Welcome Text */}
            <div className="welcome-text">
                <h2>Welcome Back!</h2>
                <p>Hello, Niles</p>
            </div>

            {/* Card Section */}
            <div className="card">
                <div className="logo"></div>
                <p className="balance-text">My Balance</p>
                <h1>$2,500.00</h1>
                <p className="date-text">10/25</p>
            </div>

            {/* Additional Cards */}
            <div className="card-small"></div>
            <div className="card-small"></div>

            {/* Tab Menu */}
            <div className="tab-menu"></div>
        </div>
    );
}

export default HomeScreen;
