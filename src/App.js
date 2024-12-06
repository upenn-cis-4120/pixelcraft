import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import EquityScreen from './EquityScreen';
import DebtScreen from './DebtScreen';
import CryptoScreen from './CryptoScreen';
import AlternativeScreen from './AlternativeScreen';
import CommoditiesScreen from './CommoditiesScreen';
import RealEstateScreen from './RealEstateScreen';
import AboutScreen from './AboutPage';
import Layout from './Layout';
import Robinhood from './Robinhood';
import Fidelity from './Fidelity';
import Charles from './Charles';


function App() {
    return (
        <Router>
            <Layout>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/equity" element={<EquityScreen />} />
                <Route path="/debt" element={<DebtScreen />} />
                <Route path="/crypto" element={<CryptoScreen />} />
                <Route path="/alternative" element={<AlternativeScreen />} />
                <Route path="/commodities" element={<CommoditiesScreen />} />
                <Route path="/realestate" element={<RealEstateScreen />} />
                <Route path="/aboutscreen" element={<AboutScreen />} />
                <Route path="/robinhoodscreen" element={<Robinhood />} />
                <Route path="/fidelityscreen" element={<Fidelity />} />
                <Route path="/charlesscreen" element={<Charles />} />
            </Routes>
            </Layout>

        </Router>
    );
}

export default App;
