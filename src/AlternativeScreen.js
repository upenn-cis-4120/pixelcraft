import React from 'react';
import './HomeScreen.css';
import { ReactComponent as BackArrowIcon } from './icons/backArrowIcon.svg';
import { ReactComponent as MenuThreeDotsIcon } from './icons/menuThreeDots.svg';
import { ReactComponent as HomeIcon } from './icons/homeIcon.svg';
import { ReactComponent as GraphLine } from './icons/graphLine.svg';
import { ReactComponent as ProfileIcon } from './icons/profileIcon.svg';
import { ReactComponent as LogoIcon } from './icons/alternativeInvestmentsIcon.svg'; // Assuming logo icon is provided
import { Link, useLocation } from 'react-router-dom';

function AlternativeScreen() {
    const location = useLocation(); // Get current route

    return (
        <div className="home-screen">
            {/* Header Section */}
            <div className="header">
                <Link to="/" className="back-arrow-icon">
                    <BackArrowIcon />
                </Link>
                <div className="profile-text">Alternative Investments</div>
                <MenuThreeDotsIcon className="menu-three-dots-icon" />
            </div>

            {/* Equity Rectangle */}
            <div className="equity-rectangle">
                {/* Logo */}
                <div className="equity-logo">
                    <LogoIcon color="#FFFFFF"/>
                </div>
                {/* Net Value Text */}
                <div className="net-value-label">Net Value:</div>
                <div className="net-value-amount">$1,344,221</div>
                <div className="percentage-change">+2.21%</div>
            </div>

            <div className="equity-card">
                <div className="equity-tab">
                <div className="tab-selected">
                    <div className="tab-rectangle"></div>
                    <span className="tab-1d">1D</span>
                </div>
                <span className="tab-5d">5D</span>
                <span className="tab-1m">1M</span>
                <span className="tab-1y">1Y</span>
                <span className="tab-all">ALL</span>
                </div>

                <div className="equity-text">
                    <p className="text-2000">$2.000</p>
                    <p className="text-2500">$2.500</p>
                    <p className="text-3000">$3.000</p>
                    <p className="text-3500">$3.500</p>
                </div>

                <div className="time-labels">
                    <p className="time-02pm">02pm</p>
                    <p className="time-03pm">03pm</p>
                    <p className="time-04pm">04pm</p>
                    <p className="time-05pm">05pm</p>
                    <p className="time-06pm">06pm</p>
                </div>

                <div className="bar-chart">
                    <div className="bar rectangle-1"></div>
                    <div className="bar rectangle-2"></div>
                    <div className="bar rectangle-3"></div>
                    <div className="bar rectangle-4"></div>
                    <div className="bar rectangle-5"></div>
                    <div className="bar rectangle-6"></div>
                    <div className="bar rectangle-7"></div>
                    <div className="bar rectangle-8"></div>
                    <div className="bar rectangle-9"></div>
                    <div className="bar rectangle-10"></div>
                    <div className="bar rectangle-11"></div>
                    <div className="bar rectangle-12"></div>
                    <div className="bar rectangle-13"></div>
                    <div className="bar rectangle-14"></div>
                    <div className="bar rectangle-15"></div>
                    <div className="bar rectangle-16"></div>
                    <div className="bar rectangle-17"></div>
                    <div className="bar rectangle-18"></div>
                    <div className="bar rectangle-19"></div>
                    <div className="bar rectangle-20"></div>
                    <div className="bar rectangle-21"></div>
                    <div className="bar rectangle-22"></div>
                    <div className="bar rectangle-23"></div>
                    <div className="bar rectangle-24"></div>
                </div>

                <div className="chart-container">
                    <GraphLine />
                </div>

                <div >
                    {/* Horizontal Dashed Line */}
                    <div className="horizontal-dashed-line"></div>

                    {/* Vertical Dashed Line */}
                    <div className="vertical-dashed-line"></div>

                    <div className="oval"></div>

                    <div className="green-rectangle">
                        <span className="green-rectangle-text">$3,642.89</span>
                    </div>
                </div>
            </div>

            <div className="broker-integrations-section">
                {/* Broker Integrations Header */}
                <h2 className="broker-integrations-title">Broker Integrations</h2>

                {/* Plus and Minus Circles */}
                <div className="plus-circle">+</div>
                <div className="minus-circle">-</div>

                {/* Broker Integration Cards */}
                <div className="broker-card charles-schwab-card2">
                    <img src={require('./icons/charles.webp')} alt="Charles Schwab Logo" className="broker-icon" />
                    <span className="broker-name">Charles Schwab</span>
                    <span className="broker-value">$594,000</span>
                </div>
            </div>


            <div className="portfolio-section">
                <h2 className="portfolio-title">Portfolio</h2>

                {/* Plus and Minus Circles */}
                <div className="plus-circle-2">+</div>
                <div className="minus-circle-2">-</div>

                {/* Portfolio Table */}
                <table className="portfolio-table">
                    <thead>
                        <tr>
                            <th className="portfolio-header">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="portfolio-row">POWER FINANCE CORPORATION LIMITED</td>
                        </tr>
                        <tr>
                            <td className="portfolio-row">REC LIMITED</td>
                        </tr>
                        <tr>
                            <td className="portfolio-row">POWER FINANCE CORPORATION LIMITED</td>
                        </tr>
                        <tr>
                            <td className="portfolio-row">LIC HOUSING FINANCE LIMITED</td>
                        </tr>
                    </tbody>
                </table>


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
        </div>
    );
}

export default AlternativeScreen;
