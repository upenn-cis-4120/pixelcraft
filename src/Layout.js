import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from './icons/homeIcon.svg';
import { ReactComponent as ProfileIcon } from './icons/profileIcon.svg';
import './Layout.css';

function Layout({ children }) {
    const location = useLocation();

    return (
        <div className="layout">
            {/* Main Content */}
            <div className="content">{children}</div>

            {/* Tab Menu */}
            <div className="tab-menu">
                <Link
                    to="/"
                    className={`home-icon ${location.pathname === '/' ? 'active' : ''}`}
                >
                    <HomeIcon />
                </Link>
                <Link
                    to="/profile"
                    className={`profile-icon ${location.pathname === '/profile' ? 'active' : ''}`}
                >
                    <ProfileIcon />
                </Link>
            </div>
        </div>
    );
}

export default Layout;
