import React, { useState, useRef } from 'react';
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
import logoicon from './icons/Group 77 (1).png';
import { Link } from 'react-router-dom';

function HomeScreen() {
    const [isMicOverlayVisible, setMicOverlayVisible] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const inputRef = useRef(null);

    const handleMicClick = () => {
        setMicOverlayVisible(true);
        setChatMessages([]); // Clear chat history when opening
    };

    const handleCloseOverlay = () => {
        setMicOverlayVisible(false);
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && userInput.trim() !== '') {
            handleUserQuery(userInput.trim());
        }
    };

    const handleUserQuery = (query) => {
        const userMsg = query;
        setChatMessages([{ sender: 'user', text: userMsg }]); // Reset to show only the current query
        setUserInput('');
    
        let botReply = '';
    
        // Conditions for each query
        if (userMsg.toLowerCase() === 'what are my trends in investing?') {
            botReply =
                'Your net equity portfolio is up 23% whereas crypto is up 42%. Your net allocation to debt is falling and real estate is significantly up.';
        } else if (userMsg.toLowerCase() === 'what is my net allocation?') {
            botReply =
                '72% Equity, 20% Real estate, 2% Crypto, 2% Debt and 4% Alternatives';
        } else if (userMsg.toLowerCase() === 'how can i improve my allocation?') {
            botReply =
                'Based on your current portfolio, reduce your equity allocation as it can be riskier and invest more in debt assets to balance risks.';
        } else if (userMsg.toLowerCase() === 'what is my net return over the years?') {
            botReply =
                'Based on your current portfolio, your return is 12% IRR across all assets.';
        } else if (userMsg.toLowerCase() === 'are there any alarming investments?') {
            botReply =
                'Your investment in SMCI is down 42% last week. There’s a lot of news around the stock and it can prove risky.';
        }
    
        if (botReply) {
            setChatMessages([
                { sender: 'user', text: userMsg },
                { sender: 'bot', text: botReply },
            ]);
        }
    };
    

    const handleSuggestionClick = (question) => {
        setUserInput(question);
        // Simulate pressing enter
        setTimeout(() => {
            if (inputRef.current) {
                const enterEvent = new KeyboardEvent('keypress', { key: 'Enter' });
                inputRef.current.dispatchEvent(enterEvent);
            }
        }, 50);
    };

    return (
        <div className="home-screen">
            {/* Header Section */}
            <div className="homeheader">
                    <img src={logoicon} alt="Logo Icon" className="menu-icon" />

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

            <div className="card">
                <p className="net-worth-label">My Net Worth:</p>
                <h1 className="net-worth-amount">$2,800,000</h1>
                <div className="percentage-text">
                    <div className="arrow-indicator">
                        <ArrowDownIcon />
                    </div>
                    <p>-2.67%</p>
                </div>
            </div>

            <div className='investmentsTitle'>
                Investments
            </div>

            {/* Six Rectangular Boxes */}
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


            {/* Microphone Overlay for Chatbot */}
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
                        {/* Centered Mic Icon at the top */}
                        <div className="mic-circle" style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                            <MicrophoneIcon className="mic-icon" />
                        </div>
                        
                        {/* Chat History */}
                        <div className="mic-chat-history">
                            {chatMessages.map((msg, index) => (
                                <div 
                                    key={index} 
                                    className={msg.sender === 'user' ? 'user-message' : 'bot-message'}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        
{/* Display only the latest bot response */}
{chatMessages.length > 0 && chatMessages[1] && (
    <div className="chat-answer">{chatMessages[1].text}</div>
)}

{/* Input area at bottom */}
<div className="mic-chat-input-area">
    <input
        type="text"
        placeholder="Type your question..."
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        ref={inputRef}
        className="mic-input"
    />
</div>

{/* Suggestion Buttons */}
<div className="mic-suggestion-buttons">
    <button
        className="suggestion-button"
        onClick={() => handleSuggestionClick('What are my trends in investing?')}
    >
        What are my trends in investing?
    </button>
    <button
        className="suggestion-button"
        onClick={() => handleSuggestionClick('What is my net allocation?')}
    >
        What is my net allocation?
    </button>
    <button
        className="suggestion-button"
        onClick={() => handleSuggestionClick('How can I improve my allocation?')}
    >
        How can I improve my allocation?
    </button>
    <button
        className="suggestion-button"
        onClick={() => handleSuggestionClick('What is my net return over the years?')}
    >
        What is my net return over the years?
    </button>
    <button
        className="suggestion-button"
        onClick={() => handleSuggestionClick('Are there any alarming investments?')}
    >
        Are there any alarming investments?
    </button>
</div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeScreen;