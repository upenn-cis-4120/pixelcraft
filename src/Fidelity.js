import React, { useState, useEffect } from 'react';
import './HomeScreen.css';
import { ReactComponent as BackArrowIcon } from './icons/backArrowIcon.svg';
import { ReactComponent as GraphLine } from './icons/graphLine.svg';
import { ReactComponent as LogoIcon } from './icons/debtIcon.svg'; // Assuming logo icon is provided
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import fidelityicon from './icons/fidelity.webp';

function Fidelity() {

    const navigate = useNavigate();

 
    return (
        <div className="home-screen">

                {/* Header Section */}
                <div className="header">
                <button onClick={() => navigate(-1)} className="back-arrow-icon-button">
                    <BackArrowIcon />
                </button>
                    <div className="profile-text">Fidelity</div>
                </div>

            {/* Equity Rectangle */}
{/* Equity Rectangle */}
<div className="equity-rectangle">
    <img src={fidelityicon} alt="Robinhood Icon" className="broker-icon-new" />
    <p className='broker-text'>Fidelity</p>
    <p className='broker-number'>$892,000</p>
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

               
                <div className="portfolio-section-2">
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

            </div>

    );
}

export default Fidelity;
