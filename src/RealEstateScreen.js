import React, { useState, useEffect } from 'react';
import './HomeScreen.css';
import { ReactComponent as BackArrowIcon } from './icons/backArrowIcon.svg';
import { ReactComponent as GraphLine } from './icons/graphLine.svg';
import { ReactComponent as LogoIcon } from './icons/realEstateIcon.svg'; // Assuming logo icon is provided
import { Link, useNavigate } from 'react-router-dom';

function RealEstateScreen() {
    const navigate = useNavigate(); // For programmatic navigation

    const screenKey = 'realEstateBrokerIntegrations';

    const handleNavigate = (path) => {
        if (path) {
            navigate(path); // Navigate to the specified path
        } else {
            console.error("Path is not defined for this broker.");
        }
    };

    const [brokerIntegrations, setBrokerIntegrations] = useState(() => {
        const savedBrokers = localStorage.getItem(screenKey);
        return savedBrokers ? JSON.parse(savedBrokers) : [];
    });

    const [showPopup, setShowPopup] = useState(false); // Manage popup visibility
    const allBrokers = [
        { name: 'Robinhood', value: '$750,000', icon: './icons/robinhood.png', path: '/robinhoodscreen' },
        { name: 'Charles Schwab', value: '$594,000', icon: './icons/charles.webp', path: '/charlesscreen' },
        { name: 'Fidelity', value: '$221', icon: './icons/fidelity.webp', path: '/fidelityscreen' },
    ];

    // Dynamically filter available brokers based on already added brokers
    const availableBrokers = allBrokers.filter(
        (broker) => !brokerIntegrations.some((b) => b.name === broker.name)
    );

    useEffect(() => {
        localStorage.setItem(screenKey, JSON.stringify(brokerIntegrations));
    }, [brokerIntegrations, screenKey]);

    const handleRemoveBroker = () => {
        if (brokerIntegrations.length > 0) {
            const updatedBrokers = [...brokerIntegrations];
            updatedBrokers.pop(); // Remove the last broker
            setBrokerIntegrations(updatedBrokers);
        }
    };

    const handleAddBroker = (broker) => {
        setBrokerIntegrations((prev) => [...prev, broker]); // Add selected broker
        setShowPopup(false); // Close popup
    };


    return (
        <div className="home-screen">
            {/* Header Section */}
            <div className="header">
                <Link to="/" className="back-arrow-icon">
                    <BackArrowIcon />
                </Link>
                <div className="profile-text">Real Estate</div>
            </div>

            {/* Equity Rectangle */}
            <div className="equity-rectangle">
                {/* Logo */}
                <div className="equity-logo">
                    <LogoIcon color="#FFFFFF" />
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

            {/* Broker Integrations Header */}
            <p className="broker-integrations-title">Broker Integrations</p>

            {/* Plus and Minus Circles */}
            <div className="plus-circle" onClick={() => setShowPopup(true)}>+</div>
            <div className="minus-circle" onClick={handleRemoveBroker}>-</div>


            <div className="broker-integrations-section">
                {console.log('Broker Integrations State:', brokerIntegrations)}
                {brokerIntegrations.map((broker, index) => (
                    <div
                        className="broker-card"
                        key={index}
                        onClick={() => handleNavigate(broker.path)}
                    >
                        <img src={require(`${broker.icon}`)} alt={`${broker.name} Logo`} className="broker-icon" />
                        <span className="broker-name">{broker.name}</span>
                        <span className="broker-value">{broker.value}</span>
                    </div>
                ))}

                {/* Popup for Adding Broker */}
                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup">
                            <h2 className="popup-title">Add Broker Integration</h2>
                            <div className="popup-options">
                                {availableBrokers.map((broker, index) => (
                                    <div
                                        key={index}
                                        className="popup-option"
                                        onClick={() => handleAddBroker(broker)}
                                    >
                                        <img
                                            src={require(`${broker.icon}`)}
                                            alt={`${broker.name} Logo`}
                                            className="popup-icon"
                                        />
                                        <span className="popup-broker-name">{broker.name}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="popup-close-button"
                                onClick={() => setShowPopup(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>


            <div className="portfolio-section" style={{
                marginTop: `${brokerIntegrations.length * 70}px`, // Dynamically adjust margin
            }}>
                <h2 className="portfolio-title">Portfolio</h2>

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

        </div>

    );
}

export default RealEstateScreen;
